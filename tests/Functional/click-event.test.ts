import Popover from '@src/Popover';
import {State} from '@src/State';
import $ from 'jquery';
import {TriggerType} from "@src/TriggerType";

test('popover is shown on click on trigger', () => {
    $('body').append(`
        <div class="mrpopover" id="id"></div>
        <div data-mrpopover-target="id"></div>
    `);

    Popover.init({$el: $('.mrpopover'), triggerType: TriggerType.Click});
    const instance = Popover.getInstance().getAll()[0];
    $('.mrpopover__trigger').trigger('click');
    expect(instance.getState()).toEqual(State.Opened);
});

test('popover is hidden on two click on trigger', () => {
    $('body').append(`
        <div class="mrpopover" id="id"></div>
        <div data-mrpopover-target="id"></div>
    `);

    Popover.init({$el: $('.mrpopover'), triggerType: TriggerType.Click});
    const instance = Popover.getInstance().getAll()[0];
    $('.mrpopover__trigger')
        .trigger('click')
        .trigger('click');
    expect(instance.getState()).toEqual(State.Closed);
});

test('popoper is closed on click outside of popover element', () => {
    $('body').append(`
        <div class="mrpopover" data-mrpopover-auto="false" id="id"></div>
        <div data-mrpopover-target="id"></div>
        <div class="sideElement">Text</div>
    `);

    Popover.boot();
    Popover.init({$el: $('.mrpopover'), triggerType: TriggerType.Click});
    const instance = Popover.getInstance().getAll()[0];
    $('.mrpopover__trigger').trigger('click');
    $('.sideElement').trigger('click');
    expect(instance.getState()).toEqual(State.Closed);
});