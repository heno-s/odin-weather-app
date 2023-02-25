function set(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function get(key) {
    return JSON.parse(localStorage.getItem(key));
}

function init() {
    set("units", "metric");
}

export default {
    set,
    get,
    init,
};
