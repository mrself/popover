import {TriggerType} from "./TriggerType";

export interface Options {
    $el?: JQuery,
    name?: string,
    triggerType?: TriggerType,
    hoverDelay?: number,

    /**
     * The container element should have {name}Container class,
     * where name is the option `name`
     */
    container?: string | JQuery
}