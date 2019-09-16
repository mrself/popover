import Popover from "../src/js/Popover";

declare let global: any;
global.beforeEach(() => {
    Popover.resetRegister();
    Popover.register();
});