export const translateMap = {
  CONST: humpRotationConstant,
  HUMP: constantTurnHump,
}

function humpRotationConstant(str: string): string {
  return str.replace(/\B(?=[A-Z])/g, '_').toLocaleUpperCase()
}

function constantTurnHump(str: string): string {
  return str
    .toLocaleLowerCase()
    .replace(/(?<=_)([a-z])/g, v => v.toLocaleUpperCase())
    .replace(/_/g, '')
}
