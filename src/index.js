// SCSS
import './assets/scss/styles'
import Slider from './assets/modules/slider'

/********* new Slider($1, $2, $3)
$1 - slider element
$2 - active slide
$3 - switch's speed
.init() - to active slider
*********/
new Slider('#main-slider', 2, 2000).init()
new Slider('#text-slider', 3, 1000).init()