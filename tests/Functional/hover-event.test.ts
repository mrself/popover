import Popover from '@src/Popover';
import {State} from '@src/State';
import $ from 'jquery';
import {TriggerType} from "@src/TriggerType";

test('popover is shown on mouseover on trigger', () => {
    $('body').append(`
        <div class="mrpopover__trigger">
            <div class="mrpopover" id="id"></div>
        </div>
    `);

    Popover.init({$el: $('.mrpopover'), triggerType: TriggerType.Hover});

    $('.mrpopover__trigger').trigger('mouseover');
    const instance = Popover.getInstance().getAll()[0];
    expect(instance.getState()).toEqual(State.Opened);
});

test('popover is hidden on mouseleave on trigger', () => {
    $('body').append(`
        <div class="mrpopover__trigger">
            <div class="mrpopover" id="id"></div>
        </div>
    `);

    Popover.init({$el: $('.mrpopover'), triggerType: TriggerType.Hover});

    $('.mrpopover__trigger')
        .trigger('mouseover')
        .trigger('mouseleave');
    const instance = Popover.getInstance().getAll()[0];
    setTimeout(() => expect(instance.getState()).toEqual(State.Closed), 400);
});