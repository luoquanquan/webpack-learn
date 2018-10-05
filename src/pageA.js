require.include('./moduleA.js')

if(page === 'a') {
    require.ensure(['./subPageA.js'], function() {
        var subPageA = require('./subPageA.js')
        console.log(subPageA)
    }, 'subPageA')
} else {
    require.ensure(['./subPageB.js'], function() {
        var subPageB = require('./subPageB.js')
        console.log(subPageB)
    }, 'subPageB')
}

// import * as _ from 'lodash'

// 这一句只是加载 lodash
require.ensure(['lodash'],function() {
    // 使用这一个 require 才会执行加载的代码
    var _ = require('lodash')
    console.log(_)
}, 'vender')

export default 'PageA'