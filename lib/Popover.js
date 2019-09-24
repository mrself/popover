import { TriggerType } from "./TriggerType";
import { State } from "./State";
import Instance from "./Instance";
export default class Popover {
    constructor() {
        this.state = State.Closed;
    }
    static register() {
        this.instance = new Instance();
    }
    static setup() {
        this.register();
        this.boot();
    }
    static resetRegister() {
        this.instance = null;
    }
    static getInstance() {
        return this.instance;
    }
    static init(options) {
        const inst = new Popover();
        Popover.instance.add(inst);
        inst.setOptions(options);
        inst.run();
        return inst;
    }
    static boot() {
        $(document).on('click', (e) => this.onDocumentClick(e));
        const name = Popover.getInitialOptions().name;
        const selector = '.' + name + ':not([data-' + name + '-auto=false])';
        $(selector).each((i, el) => {
            this.init({ $el: $(el) });
        });
    }
    static onDocumentClick(e) {
        const target = e.target;
        Popover.instance.getAll().forEach(function (inst) {
            if (inst.$el.find(target).length || inst.$el.is(target)) {
                return;
            }
            if (inst.$trigger.find(target).length || inst.$trigger.is(target)) {
                return;
            }
            if (inst.state === State.Opened)
                inst.close();
        });
    }
    static getInitialOptions() {
        return {
            name: 'mrpopover',
            hoverDelay: 200,
            triggerType: TriggerType.Click
        };
    }
    static close(skip) {
        this.instance.getAll().forEach((inst) => {
            if (skip.id !== inst.id && inst.state === State.Opened) {
                inst.close();
            }
        });
    }
    getId() {
        return this.id;
    }
    setOptions(options) {
        this.options = Object.assign(Object.assign({}, Popover.getInitialOptions()), options);
    }
    run() {
        this.$el = this.options.$el;
        if (this.options.container) {
            this.runFromContainer();
        }
        this.setOptionsFromDataAttr();
        this.id = this.$el.attr('id');
        this.defineTrigger();
        this.initEventByTrigger();
    }
    setOptionsFromDataAttr() {
        const dataOptions = this.$el.data(this.options.name);
        this.options = Object.assign(Object.assign({}, this.options), dataOptions);
    }
    runFromContainer() {
        let container = this.options.container;
        if (typeof container === 'string') {
            container = $(container);
        }
        this.$el = container.find('.mrpopover');
        // this.$trigger = container.find('.mrpopoverContainer__trigger');
    }
    runFromElement() {
    }
    initEventByTrigger() {
        if (this.options.triggerType === TriggerType.Click) {
            this.initClickEvent();
        }
        else {
            this.initHoverEvent();
        }
    }
    initClickEvent() {
        this.$trigger.on('click', (e) => {
            e.preventDefault();
            this.toggle();
        });
    }
    initHoverEvent() {
        if (!this.$trigger.find(this.$el).length)
            this.$trigger = this.$trigger.add(this.$el);
        this.$trigger.on('mouseenter', () => this.onMouseEnter())
            .on('mouseleave', () => this.onMouseLeave());
    }
    toggle(state) {
        state = typeof state === 'undefined' ? this.getOppositeState() : state;
        Popover.close(this);
        if (state)
            this.open();
        else
            this.close();
    }
    getOppositeState() {
        return this.state === State.Opened ? State.Closed : State.Opened;
    }
    open() {
        this.state = State.Opened;
        this.$trigger.addClass(this.makeTriggerName() + '--active');
        this.$el.addClass(this.options.name + '--open');
        this.$el.trigger('mrpopover/open', {
            instance: this
        });
    }
    close() {
        clearTimeout(this.timeoutId);
        this.state = State.Closed;
        this.$trigger.removeClass(this.makeTriggerName() + '--active');
        this.$el.removeClass(this.options.name + '--open');
        this.$el.trigger('mrpopover/close', {
            instance: this
        });
    }
    onMouseEnter() {
        clearTimeout(this.timeoutId);
        this.toggle(State.Opened);
    }
    onMouseLeave() {
        this.timeoutId = setTimeout($.proxy(this, 'close'), this.options.hoverDelay);
    }
    defineTrigger() {
        const triggerName = this.makeTriggerName();
        this.$trigger = this.findTriggerById();
        if (!this.$trigger.length) {
            if (this.options.triggerType === TriggerType.Click)
                throw new Error('Trigger type cannot be "click" when trigger contains a popup');
            this.$trigger = this.$el.closest('.' + triggerName);
        }
        this.$trigger.addClass(triggerName);
    }
    getTrigger() {
        return this.$trigger;
    }
    getState() {
        return this.state;
    }
    findTriggerById() {
        return $('[data-' + this.options.name + '-target=' + this.id + ']');
    }
    makeTriggerName() {
        return this.options.name + '__trigger';
    }
}
