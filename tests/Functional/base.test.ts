import Popover from '@src/Popover';
import $ from 'jquery';
import {TriggerType} from "@src/TriggerType";

test('it adds new instance to static instance', () => {
    $('body').append(`
        <div class="mrpopover" id="id"></div>
        <div data-mrpopup-target="id"></div>
    `);

    Popover.init({$el: $('.mrpopover'), triggerType: TriggerType.Hover});
    const instance = Popover.getInstance().getAll()[0];
    expect(instance.getId()).toEqual('id');
});

test('it can be initialized with $el option', () => {
    $('body').append(`
        <div class="mrpopover1" id="id"></div>
        <div data-mrpopover-target="id"></div>
    `);

    Popover.init({$el: $('.mrpopover1')});
    const instance = Popover.getInstance().getAll()[0];
    expect(instance.getId()).toEqual('id');
});

test('it find trigger as closest element to main element if trigger was not found by data-target attribute', () => {
    $('body').append(`
        <div class="mrpopover__trigger">
            <div class="mrpopover" id="id"></div>
        </div>
    `);

    Popover.boot();
    const instance = Popover.getInstance().getAll()[0];
    expect(instance.getTrigger().hasClass('mrpopover__trigger')).toBeTruthy();
});