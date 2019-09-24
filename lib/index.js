import Popover from './Popover';
window.Mrpopover = Popover;
$.fn.extend({
    mrpopover: function () {
        return this.each((i, el) => {
            Popover.init({ $el: $(el) });
        });
    }
});
export default Popover;
