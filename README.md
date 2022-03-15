# Archived!!!

# Popover plugin with hover and click trigger type

## Installation

### Npm

`npm i -S github:mrself/popover`

### Direct script

Download the repository and insert `dist/bundle.js` and `dist/main.css`.

## Usage

To start using proper html markup is required:
 - a popover should have class `popover`
 - to specify options for the popover via markup you can use `data-popover` attribute. For example, `data-mrpopover='{"triggerType": "CLICK"}'`
 - a popover should have `id`
 - trigger should have such data attribute: `data-mrpopover-target="{id}"` where `{id}` is the popover id
 
After that there are several way to initialize the plugin. First is to call `Popover.setup()`. This go through all `.popover` elements and initialize plugin for them. `.setup()` is a shorthand for `.register()` and `.boot()`.

If you want to initialize a popover via script you need to run `Popover.init({$el: $('.yourElement')})`.
