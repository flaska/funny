export default class LocalStorage{
    static saveData(key, item) {
        return window.localStorage.setItem(key, JSON.stringify(item));
    }

    static getData(key) {
        try {
            return JSON.parse(window.localStorage.getItem(key));
        } catch(e) {
            console.error(e);
        }
    }
}