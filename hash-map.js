class HashMap {
    constructor (length = Infinity) {
        this.data = {};
        this.maxSize = length;
        this.size = 0;
    }
    hasKey(key) {
        return key;
    }
    add(key, value) {
        let indexKey = this.hasKey(key);
        this.data[indexKey] = value;
        this.size ++;
    }
}