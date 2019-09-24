/// <reference types="jquery" />
import { Options } from "./Options";
import { TriggerType } from "./TriggerType";
import { State } from "./State";
import Instance from "./Instance";
export default class Popover {
    $el: JQuery;
    protected options: Options;
    protected id: string;
    protected $trigger: JQuery;
    protected timeoutId: number;
    protected state: State;
    protected static instance: Instance;
    static register(): void;
    static setup(): void;
    static resetRegister(): void;
    static getInstance(): Instance;
    static init(options: Options): Popover;
    static boot(): void;
    static onDocumentClick(e: JQuery.ClickEvent): void;
    protected static getInitialOptions(): {
        name: string;
        hoverDelay: number;
        triggerType: TriggerType;
    };
    protected static close(skip: Popover): void;
    getId(): string;
    setOptions(options: Options): void;
    run(): void;
    protected setOptionsFromDataAttr(): void;
    protected runFromContainer(): void;
    protected runFromElement(): void;
    protected initEventByTrigger(): void;
    protected initClickEvent(): void;
    protected initHoverEvent(): void;
    toggle(state?: State): void;
    protected getOppositeState(): State;
    open(): void;
    close(): void;
    protected onMouseEnter(): void;
    protected onMouseLeave(): void;
    protected defineTrigger(): void;
    getTrigger(): JQuery;
    getState(): State;
    protected findTriggerById(): JQuery;
    protected makeTriggerName(): string;
}
