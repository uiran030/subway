function autoclock(){
    var now = new Date()
    var hour = now.getHours()
    var minute = now.getMinutes()
    var second = now.getSeconds()
    document.getElementById('timebox').textContent= `${hour}:${minute}:${second}`
}
autoclock()
setInterval(autoclock,1000)