$(function(){
    let icon =$(`.icon2`)
    let input =$(`.inputbox`)
    icon.click(function(){
        input.toggleClass(`show`)
        if(input.hasClass(`show`)){
           icon.html(`<i class="fa-solid fa-x"></i>`)
        }
        else{
            icon.html(`<i class="fa-solid fa-magnifying-glass">`)
        }
    })
    //menu fixed
    let header =$(`.header2`)
    let btn =$(`button`)
    $(window).scroll(function(){
        let scrollTopValue =$(window).scrollTop()
        if(scrollTopValue > 500){
            header.addClass(`menufixed`)
            btn.addClass(`showbtn2`)
        }
        else{
            header.removeClass(`menufixed`)
            btn.removeClass(`showbtn2`)
        }
    })

    // back to top

    let button =$(`button`)
    button.click(function(){
        $(`html,body`).animate({
            scrollTop : 0
        },1000)
    })


    // preloader 

let preloader =$(`.preloader`)
$(window).on(`load`,function(){
    preloader.fadeOut()
})
})