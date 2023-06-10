import chatGptLogo from '../assets/icon-chatgpt.svg'

export const CHAT_BOTS: Record<'chatGpt', { name: string; avatar: any }> = {
  chatGpt: {
    name: 'ChatGPT',
    avatar: chatGptLogo,
  }
}

export const CHAT_GPT_HOME_URL = 'https://chat.openai.com/chat'

export const CHAT_GPT_API_MODELS = ['gpt-3.5-turbo','gpt-4', 'gpt-4-32k']

export enum StartupPage {
  All = 'all',
  ChatGPT = 'chatGpt',
  Bing = 'bing',
  Bard = 'bard',
}

export enum BingConversationStyle {
  Creative = 'creative',
  Balanced = 'balanced',
  Precise = 'precise',
}

export enum ChatGPTMode {
  API = 'api',
  Webapp = 'webapp',
}

export const USER_CONFIG_WITH_DEFAULT_VALUE = {
  openAiApiKey: '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',
  openAiApiHost: 'https://api.openai.com',
  chatGptApiModel: CHAT_GPT_API_MODELS[0],
  chatGptApiTemperature: 1,
  chatGptMode: ChatGPTMode.Webapp,
  chatGptWebappModelName: 'default',
  startupPage: StartupPage.All,
  bingConversationStyle: BingConversationStyle.Balanced,
}
