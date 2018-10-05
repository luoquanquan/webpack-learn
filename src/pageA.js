import SubPageA from './subPageA'
import SubPageB from './subPageB'

// import * as _ from 'lodash'

// 这一句只是加载 lodash
require.ensure(['lodash'],function() {
    // 使用这一个 require 才会执行加载的代码
    var _ = require('lodash')
    console.log(_)
}, 'vender')

export default 'PageA'