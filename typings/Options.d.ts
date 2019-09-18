/// <reference types="jquery" />
import { TriggerType } from "./TriggerType";
export interface Options {
    $el: JQuery;
    name?: string;
    triggerType?: TriggerType;
    hoverDelay?: number;
}
