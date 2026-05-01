import { setTempStorage, getTempStorage } from './temp-storage.js';

export default async function ({ addon, console }) {
    setTempStorage(addon.tempStorage)

    //variables["gaiamod_musicEditor_data"] = defaultEditor

    function setDefaultEditor(value) {
        const defaultEditor = value
        getTempStorage().set("gaiamod_musicEditor_data", defaultEditor)// legacy message: node.js.yml doesn't like variables and im new at addons, so this will be used.
        localStorage.setItem("gaiamod_musicEditor_data", defaultEditor)// ill keep this so it saves
    }

    addon.settings.addEventListener("change", () => {setDefaultEditor(addon.settings.get("defaulteditor"))});
    addon.self.addEventListener("disabled", () => {setDefaultEditor("beepbox")});
    addon.self.addEventListener("reenabled", () => {setDefaultEditor(addon.settings.get("defaulteditor"))});
    setDefaultEditor(addon.settings.get("defaulteditor"));
}