let k = 0;
$('.ico_search').click(function(){
    $('.visual').toggleClass('on');
    
    if(k == 0){
        $('.search_box').fadeIn(100, function(){
            $('.search_box').animate({top:'50%'}, 700);
        })
        k = 1;
    }
    else {
        $('.search_box').fadeOut(300, function(){
            $('.search_box').css({top:''})
        })
        k = 0

    }
    console.log("k =", k);
})

// let k = 0
// $('.ico_search').click(function(){
//     $('.visual').toggleClass('on');
    
//     k^=1;
    
//     if(k == 1){
//         $('.search_box').fadeIn(300, function(){
//             $('.search_box').animate({top:'50%'}, 700);
//         })
//     } else {
//         $('.search_box').fadeOut(300, function(){
//             $('.search_box').css({top:''})
//         })

//     }

// })


$('.btn_close').click(function(){
    $('.visual').removeClass('on');
    $('.search_box').fadeOut(300, function(){
        $('.search_box').css({top:''})
    })
    k = 0;
    return false
})


$('.icons').html()

$('.mo_nav').html($('.pc_nav').html())
$('.mo_icons').html($('.icons').html())

// mo nav
$('.hamburger').click(function(){
    $('.mo_wrap').show()
})