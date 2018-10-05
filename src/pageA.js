var page = 'subPageA'
if (page === 'subPageA') {
    import(
        /* webpackChunkName: 'subpageA' */
        './subPageA'
    )
        .then(subPageA => {
            console.log(subPageA)
        })
} else {
    import(
        /* webpackChunkName: 'subpageA' */
        './subPageB'
    )
        .then(subPageB => {
            console.log(subPageB)
        })
}

// import * as _ from 'lodash'

// 这一句只是加载 lodash
require.ensure([],function() {
    // 使用这一个 require 才会执行加载的代码
    var _ = require('lodash')
    _.join([1,2,3], 4)
}, 'vender')

export default 'PageA'