function saveToStorage(key, val) {
    localStorage.setItem(key, JSON.stringify(val))
}

function loadFromStorage(key) {
    const val = localStorage.getItem(key)
    return JSON.parse(val)
}



function makeId(length = 10) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}



function getRandomInt(min = 10, max = 300) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}


function getCurrencyCode() {
    const res = Math.random();
    if (res < 0.33) return 'ILS'
    if (res > 0.66) return 'USD'
    return 'EUR'
}








export const utilService = {
    saveToStorage,
    loadFromStorage,
    makeId,
    getRandomInt,
    getCurrencyCode,
}