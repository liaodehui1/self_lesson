(function () {
    //轮播图
    var length = $('.banner__li').length
    setInterval(autoPlay,6000)
    var current=0
    function autoPlay(){
        let next=current<length-1?current+1:0
        $('.banner__li').eq(next).fadeIn(3000)
        $('.banner__li').eq(next).attr('style','display:list-item')
        $('.banner__li').eq(current).fadeOut(3000)
        current=next
    }
})()