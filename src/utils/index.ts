import { translateMap } from './translater'

export function converter(type: keyof typeof translateMap, str: string) {
  return translateMap[type](str)
}
