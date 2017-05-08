const vscode = require('vscode');

function activate(context) {
    const previewUri = vscode.Uri.parse('file:/Users/SCali/dev/OCA.VSCodeEx/oca-vscode-ex-react/index.html');

    const disposable = vscode.commands.registerCommand('extension.openPreview', () => {
        return vscode.commands.executeCommand('vscode.previewHtml', previewUri, vscode.ViewColumn.Two)
        .then((success) => {}, 
        (reason) => {
            vscode.window.showErrorMessage(reason);
        });

    });
    
    context.subscriptions.push(disposable);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() {
}