/* eslint-disable @typescript-eslint/no-explicit-any */
import { USER_CONFIG_WITH_DEFAULT_VALUE } from '../../../constant'
import { ChatError, ErrorCode } from '../../../utils/errors'
import { parseSSEResponse } from '../../../utils/sse'
import { ChatMessage } from './consts'

interface ConversationContext {
  messages: ChatMessage[]
}

const CONTEXT_SIZE = 10

export class ChatGPTApiBot {
  private conversationContext?: ConversationContext

  buildMessages(): ChatMessage[] {
    return [...(this.conversationContext as any).messages.slice(-(CONTEXT_SIZE + 1))]
  }

  async doSendMessage(message: string) {
    const { openAiApiKey, openAiApiHost, chatGptApiModel, chatGptApiTemperature } = USER_CONFIG_WITH_DEFAULT_VALUE
    if (!openAiApiKey) {
      throw new ChatError('OpenAI API key not set', ErrorCode.API_KEY_NOT_SET)
    }

    if (!this.conversationContext) {
      this.conversationContext = { messages: [] }
    }

    this.conversationContext.messages.push({ role: 'user', content: message })

    const resp = await fetch(`${openAiApiHost}/v1/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${openAiApiKey}`,
      },
      body: JSON.stringify({
        model: chatGptApiModel,
        messages: this.buildMessages(),
        temperature: chatGptApiTemperature,
        stream: true,
      }),
    })

    const result: ChatMessage = { role: 'assistant', content: '' }

    await parseSSEResponse(resp, (message : string) => {
      console.debug('chatGpt sse message', message)
      if (message === '[DONE]') {
        const messages = this.conversationContext!.messages
        messages.push(result)
        return
      }
      let data
      try {
        data = JSON.parse(message)
      } catch (err) {
        console.error(err)
        return
      }
      if (data?.choices?.length) {
        const delta = data.choices[0].delta
        if (delta?.content) {
          result.content += delta.content
          
          return result.content;
        }
      }
    })
  }

  resetConversation() {
    this.conversationContext = undefined
  }
}
