// chromeStorage.js
export const getFromChromeStorage = (key) => {
    return new Promise((resolve) => {
        chrome.storage.local.get([key], (result) => {
            resolve(result[key]);
        });
    });
};

export const saveToChromeStorage = (data) => {
    return new Promise((resolve) => {
        chrome.storage.local.set(data, () => {
            resolve(true);
        });
    });
};
