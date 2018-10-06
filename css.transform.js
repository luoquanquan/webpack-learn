module.exports = css => {
    console.log(css)
    css = css.replace('blue', 'green')
    return css
}