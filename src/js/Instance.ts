import Popover from "./Popover";

export default class Instance {
    private data: Popover[] = [];

    public getAll(): Popover[] {
        return this.data;
    }

    public add(instance: Popover) {
        this.data.push(instance);
    }
}