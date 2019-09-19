import Popover from '@src/Popover';
import $ from "jquery";

test('test "container" option can be a selector', () => {
    $('body').append(`
        <div class="mrpopoverContainer">
            <div class="mrpopover" id="id"></div>
            <div data-mrpopover-target="id"></div>
        </div>
    `);

    Popover.init({container: '.mrpopoverContainer'});
    const instance = Popover.getInstance().getAll()[0];
    expect(instance.getId()).toEqual('id');
});

test('test "container" option can be a jquery element', () => {
    $('body').append(`
        <div class="mrpopoverContainer">
            <div class="mrpopover" id="id"></div>
            <div data-mrpopover-target="id"></div>
        </div>
    `);

    Popover.init({container: $('.mrpopoverContainer')});
    const instance = Popover.getInstance().getAll()[0];
    expect(instance.getId()).toEqual('id');
});