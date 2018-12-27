export function saveData(key, item) {
    return window.localStorage.setItem(key, JSON.stringify(item));
}

export function getData(key) {
    try {
        return JSON.parse(window.localStorage.getItem(key));
    } catch(e) {
        console.error(e);
    }
}