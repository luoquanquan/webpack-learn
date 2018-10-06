import base from './css/base.css'
import common from './css/common.css'

var flag = false
common.use()
setInterval(() => {
    flag = !flag
    if(flag) {
        base.use()
    } else {
        base.unuse()
    }
}, 5e2)