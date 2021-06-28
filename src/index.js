// SCSS
import './assets/scss/styles'
import Slider from './assets/modules/slider'
import Tabs from './assets/modules/tabs'

/********* new Slider($1, $2, $3)
$1 - slider block
$2 - active slide
$3 - switch's speed
obj.init() - to active slider
*********/
new Slider('#main-slider', 2, 2000).init()
new Slider('#text-slider', 3, 1000).init()

/********* new Tabs($1, $2)
$1 - tab block
$2 - active tab
obj.init() - to active tab switcher
*********/
new Tabs('#tabs', 2).init()