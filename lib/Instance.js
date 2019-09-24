export default class Instance {
    constructor() {
        this.data = [];
    }
    getAll() {
        return this.data;
    }
    add(instance) {
        this.data.push(instance);
    }
}
