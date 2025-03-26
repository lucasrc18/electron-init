const { app, BrowserWindow, ipcMain } = require("electron");

let window;
async function createWindow(){
    window = new BrowserWindow({
        width: 1366,
        height: 768,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    window.loadFile("view/index.html");
}

app.whenReady().then(createWindow)

ipcMain.on("redirect", (_, args) => {
    window.loadFile(`views/${args}.html`);
});