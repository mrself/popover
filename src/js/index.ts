import Popover from './Popover';

declare var window: any;

window.Mrpopover = Popover;

$.fn.extend({
    mrpopover: function() {
        return this.each((i: number, el: HTMLElement) => {
            Popover.init({$el: $(el)});
        });
    }
});

export default Popover;