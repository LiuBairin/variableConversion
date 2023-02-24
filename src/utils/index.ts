import { translateMap } from './translater'

import { TranslateType } from '../types'

export function converter(type: TranslateType, str: string) {
  return translateMap[type](str)
}
