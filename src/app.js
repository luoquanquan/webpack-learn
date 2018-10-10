import { a } from './common/util'
import base from './css/base.less'
import { chunk } from 'lodash'
console.log(chunk([1,2,3], 4))
a()

var app = document.getElementById('app')
app.innerHTML = '<div class="'+ base.bigBox +'"></div>'
var div = document.createElement('div')
div.className = 'box'
app.appendChild(div)
