import {tabs} from "webextension-polyfill";

export async function getCurrentTab() {
    const List = await tabs.query({active: true, currentWindow: true})

    return List[0]
}
