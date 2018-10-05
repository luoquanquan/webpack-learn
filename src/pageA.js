require.include('./moduleA.js')
const  page = 'a'
if(page === 'a') {
    // 当在外层的 require.ensure 依赖中写了依赖的模块时, 浏览器会直接加载这个模块但是不会执行
    // 当内部的 require 执行是, 加载的模块才会执行
    // 当只有内部的 require 执行时, 会先加载需求的模块再执行
    require.ensure([], function() {
        var subPageA = require('./subPageA.js')
        // console.log(subPageA)
    }, 'subPageA')
} else {
    require.ensure(['./subPageB.js'], function() {
        var subPageB = require('./subPageB.js')
        console.log(subPageB)
    }, 'subPageB')
}

// import * as _ from 'lodash'

// 这一句只是加载 lodash
require.ensure([],function() {
    // 使用这一个 require 才会执行加载的代码
    var _ = require('lodash')
    _.join([1,2,3], 4)
}, 'vender')

export default 'PageA'