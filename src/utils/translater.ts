import * as vscode from 'vscode'

export const translateMap = {
  CONST: humpRotationConstant,
  HUMP: constantTurnHump,
}

// 驼峰转常量
function humpRotationConstant(str: string): string {
  if (!str.match(/^([a-zA-Z])*$/g)) {
    vscode.window.showErrorMessage('变量类型已经是常量,转换失败')
    return str
  }

  return str.replace(/\B(?=[A-Z])/g, '_').toLocaleUpperCase()
}

// 常量转驼峰
function constantTurnHump(str: string): string {
  if (!str.match(/^([A-Z]|_)*$/g)) {
    vscode.window.showErrorMessage('变量类型已经是驼峰,转换失败')
    return str
  }

  return str
    .toLocaleLowerCase()
    .replace(/(?<=_)([a-z])/g, v => v.toLocaleUpperCase())
    .replace(/_/g, '')
}
