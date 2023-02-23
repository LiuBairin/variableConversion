import * as vscode from 'vscode'
import { converter } from './utils'

function getSelection() {
  const activeTextEditor = vscode.window.activeTextEditor

  if (!activeTextEditor) return

  const selection = activeTextEditor?.selection

  const selectText = activeTextEditor?.document.getText(selection)

  return { activeTextEditor, selection, selectText }
}

const humpRotationConstant = vscode.commands.registerCommand(
  'variableConversion.humpRotationConstant',
  () => {
    const params = getSelection()
    if (params) {
      const { activeTextEditor, selection, selectText } = params

      activeTextEditor.edit(editBuilder =>
        editBuilder.replace(selection, converter('CONST', selectText))
      )
    }
  }
)

const constantTurnHump = vscode.commands.registerCommand(
  'variableConversion.constantTurnHump',
  () => {
    const params = getSelection()
    if (params) {
      const { activeTextEditor, selection, selectText } = params

      activeTextEditor.edit(editBuilder =>
        editBuilder.replace(selection, converter('HUMP', selectText))
      )
    }
  }
)

export default [humpRotationConstant, constantTurnHump]
