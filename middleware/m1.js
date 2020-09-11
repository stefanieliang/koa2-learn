function m1() {
    global.console.log("m1 ###")
}

module.exports = function () {
    return async function (ctx, next) {
        global.console.log("m1 start")
        m1()
        await next()
        global.console.log("m1 end")
    }
}