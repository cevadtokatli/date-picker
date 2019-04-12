# Window Date Picker
Window Date Picker is a JavaScript library for setting and choosing date and hour.

## NPM
```
npm install --save-dev window-date-picker
```

## Yarn
```
yarn add window-date-picker --dev 
```

## Installation
```
import WindowDatePicker from 'window-date-picker';

const picker = new WindowDatePicker({
    el: '#picker',
    toggleEl: '#toggle',
    inputEl: '#input'
});
```

Add the css file.
```
<link rel="stylesheet" href="/node_modules/window-date-picker/dist/css/window-date-picker.min.css" />
```

## Settings
Option | Type | Default | Description
------ | ---- | ------- | -----------
value | String\|Number\|Date | null | The picker's initial value.
el | String\|HTMLElement* | null | 	Main element which, picker is created below.
inputEl | String\|HTMLElement* | null | Input element.
toggleEl | String\|HTMLElement* | null | Toggle element.
type | String | "DATE" | Sets picker type. _(DATE, HOUR, DATEHOUR)_
dateType | String | "DD/MM/YYYY" | 	Sets date type. _(DD/MM/YYYY, MM/DD/YYYY)_
hourType | String | "12" | Sets hour type. _(12, 24)_
allowEmpty | Boolean | true | A boolean value that indicates whether null and empty value are allowed or not.
showButtons | Boolean | false | A boolean value that indicates whether the buttons are visible or not.
inputToggle | Boolean | true | If sets true, opens the picker when the input is clicked.
lang | String | "en" | Changes language of the picker. You have to create a language except _“en (English)”_ before use it.
orientation | Boolean | false | If it is set true, up arrow increases value, down arrow decreases. If it is set false, vice versa.
showArrowButtons | Boolean | false | Displays increase and decrase buttons instead of arrows.

<span style="font-size:.9rem;">*: You can give an HTML element or a CSS selector (like `#carousel`, `.container > div:first-child`)</span>

## Methods
Method | Params | Return | Description
------ | ------ | ------ | -----------
get | | { value: String, day: Number, month: Number, year: Number, hour: Number, minute: Number, am: Boolean } | Returns the value.
set | value: String\|Number\|Date | void | Sets the value.
open | | void | Opens the picker.
close | | void | Closes the picker.
toggle | | void | Toggles the picker.
save | | void | Saves the selection.
cancel | | void | Cancels the selection.
destroy | | void | 	Destroys the picker.

## Events
Event | Description
----- | -----------
wdp.change | Fires when the value changes.
wdp.open | 	Fires when the picker opens.
wdp.close | Fires when the picker closes.
wdp.save | Fires when the selection is saved.
wdp.cancel | Fires when the picker is closed without being saved.
wdp.destroy | Fires when the picker is destroyed.

```
import WindowDatePicker from 'window-date-picker';

const picker = new WindowDatePicker({
  el: '#picker'
});

picker.el.addEventListener('wdp.open', () => {
  console.log('open');
});

picker.el.addEventListener('wdp.close', () => {
  console.log('close');
});
```

## Set Position
When window is scrolled or resized and triggers scroll or resize event, Window Date Picker repositions the picker. If you use third party scroll or resize library that don't trigger window resize or scroll event, you can manually call method `setPosition` to reposition the picker.

```
var picker = new WindowDatePicker({
  el: '#picker'
});

...
...
...
...
picker.setPosition();
```

## Language
You can create a language to use with `lang` attribute.
```
import WindowDatePicker from 'window-date-picker';

WindowDatePicker.createLanguage('tr', {
    DAYS_ABBR: ['', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'],
    MONTHS: ['', 'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
    MONTHS_ABBR: ['', 'Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'],
    AM_PM: ['ÖÖ', 'ÖS'],
    BUTTONS: ['İPTAL', 'TAMAM'],
    INVALID_DATE: 'Geçersiz Tarih'
});

new WindowDatePicker({
  el: '#picker',
  lang: 'tr'
});
```

## Theme
You can change colors of the picker by adding a css class to main element.

```
<div id="picker"></div>
<div id="blue-picker" class="wdp-blue"></div>
<div id="cyan-picker" class="wdp-cyan"></div>
<div id="dark-picker" class="wdp-dark"></div>
<div id="gray-picker" class="wdp-gray"></div>
<div id="green-picker" class="wdp-green"></div>
<div id="light-picker" class="wdp-light"></div>
<div id="purple-picker" class="wdp-purple"></div>
<div id="red-picker" class="wdp-red"></div>
<div id="yellow-picker" class="wdp-yellow"></div>
```

You can also create your own theme for your picker.

Create a new file under theme folder.
```
// theme/_my_theme.scss

$color: #EEA55B;
$color-dark: #000;
$header-background: $color;
$header-text-color: $color-dark;
$header-icon-color: darken($color, 10%);
$list-el-text-active: $color-dark;
$list-el-background-active: $color;
$hour-input-text: $color-dark;
$button-text: $color-dark;

.wdp.wdp-my-theme {
    @include insert-theme();
}
```

Import your theme to `_theme.scss` file`.
```
// _theme.scss
...
@import 'theme/purple';
@import 'theme/red';
@import 'theme/yellow';
@import 'theme/my_theme';
```

Bundle css code.
```
$ gulp css
$ gulp minify-css
```

You are ready to use your theme.
```
<div id="picker" class="wdp-my-theme"></div>
```

## IE Support
IE 10 is not supported and patches to fix problems will not be accepted.

## License
Window Date Picker is provided under the [MIT License](https://opensource.org/licenses/MIT).

## Related Projects
* [Window Date Picker React](https://github.com/cevadtokatli/window-date-picker-react)