export function importFromLocalStorageKey(key) {
    return JSON.parse(JSON.stringify(localStorage.getItem(key)));
}

export function exportToLocalStorageKey(key, value) {
    return localStorage.setItem(key, value);
}
