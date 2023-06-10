import cx from 'classnames'
import {  memo, useCallback, useRef, useState } from 'react'
import TextInput from './TextInput'
import { ChatGPTApiBot } from '../app/bots/chatgpt-api'
// import { ChatGPTWebBot } from '../app/bots/chatgpt-webapp'

export type BotId = 'ChatGPTApiBot'

const botClasses: Record<BotId, typeof ChatGPTApiBot> = {
  ChatGPTApiBot: ChatGPTApiBot,
}

function createBotInstance(botId: BotId) {
  return new botClasses[botId]()
}

const ChatMessageInput = () => {
  const props = createBotInstance('ChatGPTApiBot')
  const [value, setValue] = useState('')
  const formRef = useRef<HTMLFormElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  const onFormSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      if (value.trim()) {
        props.doSendMessage(value)
      }
      setValue('')
    },
    [props, value],
  )

  return (
    <form 
      className={cx('flex flex-row items-center gap-3')} 
      onSubmit={onFormSubmit} 
      ref={formRef}
    >
      <TextInput
        className='border'
        ref={inputRef}
        formref={formRef}
        name="input"
        placeholder='hello'
        value={value}
        onValueChange={setValue} 
        minRows={0} 
        disabled={false}     
      />
    </form>
  )
}

export default memo(ChatMessageInput)
