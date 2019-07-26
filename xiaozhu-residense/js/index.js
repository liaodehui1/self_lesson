(function () {
    //轮播图
    var length = $('.banner__li').length
    var lunbo = setInterval(autoPlay, 6000)
    var current = 0
    function autoPlay(next = current < length - 1 ? current + 1 : 0) {
        $('.banner__li').eq(next).fadeIn(3000)
        $('.banner__li').eq(next).attr('style', 'display:list-item')
        $('.banner__li').eq(current).fadeOut(3000)
        current = next
    }
    $('#pre').click(function () {
        cur = (current === 0 || current === 1) ? length - 2 + current : current - 2
        let next = cur < length - 1 ? cur + 1 : 0
        clearInterval(lunbo)//清除计时器
        autoPlay(next)
        setTimeout(function () {
            lunbo = setInterval(autoPlay, 6000)//重启
        }, 3000)
    })
    $('#next').click(function () {
        clearInterval(lunbo)
        autoPlay()
        setTimeout(function () {
            lunbo = setInterval(autoPlay, 6000)
        }, 3000)
    })

    //评论、日志轮播
    setMouserOver('#comment-list','#comment-ul')
    setMouserOver('#dairy-list','#dairy-ul')
    function setMouserOver(cd_id, ul_id) {
        $(`${ul_id} li`).mouseover(function () {
            let pre_li_index=$(`${ul_id} .cmt-current`).index()
            $(`${cd_id} li`).eq(pre_li_index).attr('style', 'display:none')
            $(`${ul_id} li`).eq(pre_li_index).removeClass('cmt-current')
            let current_li = $(this).index()
            $(`${cd_id} li`).eq(current_li).attr('style', '')
            $(this).addClass('cmt-current')
        })
    }
})()