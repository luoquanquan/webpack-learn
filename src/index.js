const a = 1
const func = () => {}
let c = '5'

const wrapper = () => new Promise((resove, reject) => {
    setTimeout(() => {
        resovle(1)
    }, 1e3);
})

wrapper().then(data => {
    console.log(data)
})