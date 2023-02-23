import * as vscode from 'vscode'
import commands from './commands'
export function activate(context: vscode.ExtensionContext) {
  if (commands) {
    for (const c of commands) {
      context.subscriptions.push(c)
    }
  }
}

export function deactivate() {}
