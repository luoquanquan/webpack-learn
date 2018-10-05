import * as _ from 'lodash'

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
        /* webpackChunkName: 'subpageB' */
        './subPageB'
    )
        .then(subPageB => {
            console.log(subPageB)
        })
}

export default 'PageA'