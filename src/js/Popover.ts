import {Options} from "./Options";
import {TriggerType} from "./TriggerType";
import {State} from "./State";
import Instance from "./Instance";

export default class Popover {
    public $el: JQuery;

    protected options: Options;

    protected id: string;

    protected $trigger: JQuery;

    protected timeoutId: number;

    protected state: State = State.Closed;

    protected static instance: Instance;

    public static register() {
        this.instance = new Instance();
    }

    public static resetRegister() {
        this.instance = null;
    }

    public static getInstance(): Instance {
        return this.instance;
    }

    public static init(options: Options) {
        const inst = new Popover();
        Popover.instance.add(inst);
        inst.setOptions(options);
        inst.run();
        return inst;
    }

    public static boot() {
        $(document).on('click', (e: JQuery.ClickEvent) => this.onDocumentClick(e));
        const name = Popover.getInitialOptions().name;
        const selector = '.' + name + ':not([data-' + name + '-auto=false])'
        $(selector).each((i, el) => {
            this.init({$el: $(el)});
        });
    }

    public static onDocumentClick(e: JQuery.ClickEvent) {
        const target: Element = e.target;
        Popover.instance.getAll().forEach(function(inst: Popover) {
            if (inst.$el.find(target).length || inst.$el.is(target)) {
                return;
            }
            if (inst.$trigger.find(target).length || inst.$trigger.is(target)) {
                return;
            }
            if (inst.state === State.Opened) inst.close();
        });
    }

    protected static getInitialOptions() {
        return {
            name: 'mrpopover',
            hoverDelay: 200,
            triggerType: TriggerType.Click
        };
    }

    protected static close(skip: Popover) {
        this.instance.getAll().forEach((inst: Popover) => {
            if (skip.id !== inst.id && inst.state === State.Opened) {
                inst.close();
            }
        });
    }

    public getId(): string {
        return this.id;
    }

    public setOptions(options: Options) {
        this.options = {...Popover.getInitialOptions(), ...options};
        const dataOptions = this.options.$el.data(this.options.name);
        this.options = {...this.options, ...dataOptions};
    }

    public run() {
        this.$el = this.options.$el;
        this.id = this.$el.attr('id');
        this.defineTrigger();
        this.initEventByTrigger();
    }

    protected initEventByTrigger() {
        if (this.options.triggerType === TriggerType.Click) {
            this.initClickEvent();
        } else {
            this.initHoverEvent();
        }
    }

    protected initClickEvent() {
        this.$trigger.on('click', (e) => {
            e.preventDefault();
            this.toggle();
        });
    }

    protected initHoverEvent() {
        if (!this.$trigger.find(this.$el).length)
            this.$trigger = this.$trigger.add(this.$el);
        this.$trigger.on('mouseenter', () => this.onMouseEnter())
            .on('mouseleave', () => this.onMouseLeave());
    }

     public toggle(state?: State) {
        state = typeof state === 'undefined' ? this.getOppositeState() : state;
        Popover.close(this);
        if (state) this.open();
        else this.close();
    }

    protected getOppositeState(): State {
        return this.state === State.Opened ? State.Closed : State.Opened;
    }

     public open() {
        this.state = State.Opened;
        this.$trigger.addClass(this.makeTriggerName() + '--active');
        this.$el.addClass(this.options.name + '--open');
        this.$el.trigger('mrpopover/open', {
            instance: this
        });
     }

     public close() {
        clearTimeout(this.timeoutId);
        this.state = State.Closed;

        this.$trigger.removeClass(this.makeTriggerName() + '--active');
        this.$el.removeClass(this.options.name + '--open');
        this.$el.trigger('mrpopover/close', {
            instance: this
        });
    }

    protected onMouseEnter() {
        clearTimeout(this.timeoutId);
        this.toggle(State.Opened);
    }

    protected onMouseLeave() {
        this.timeoutId = setTimeout($.proxy(this, 'close'), this.options.hoverDelay);
    }

    protected defineTrigger() {
        const triggerName = this.makeTriggerName();

        this.$trigger = this.findTriggerById();
        if (!this.$trigger.length) {
            if (this.options.triggerType === TriggerType.Click)
                throw new Error('Trigger type cannot be "click" when trigger contains a popup');
            this.$trigger = this.$el.closest('.' + triggerName);
        }
        this.$trigger.addClass(triggerName);
    }

    public getTrigger(): JQuery {
        return this.$trigger;
    }

    public getState(): State {
        return this.state;
    }

    protected findTriggerById(): JQuery {
        return $('[data-' + this.options.name + '-target=' + this.id + ']')
    }

    protected makeTriggerName(): string {
        return this.options.name + '__trigger';
    }
}