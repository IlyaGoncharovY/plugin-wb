import React, {useEffect, useState} from 'react';
import {getCurrentTab} from "../../helpers/tabs";
import {storage} from "webextension-polyfill";

export const Counter = () => {

    const [value, setValue] = useState<number>(0)

    useEffect(() => {
        const readBackgroundMessage = async () => {
            const tab = await getCurrentTab()
            const tabId = tab.id

            if (tabId) {
                const data = await storage.local.get(tabId.toString())
                const currentValue = data?.[tabId] ?? 0
                setValue(currentValue)
            }
        }
        readBackgroundMessage()
    }, [])

    return (
        <div style={{
            height: "100vh",
            fontSize: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            Click: {value}
        </div>
    );
};
