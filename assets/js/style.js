$(document).ready(function(){

    // // sidebar collapse
    $(document).on('click', '#icon-left', function(){
        // putar icon left ke right
        var nav = $('#icon-left')
        if(nav.hasClass('putar')){
            nav.removeClass('putar')
        }else{
            nav.addClass('putar')
        }

        // geser sidebar
        var wrap = $('#sidebar-wrapper')
        if(wrap.hasClass('toggled-sidebar')){
            wrap.removeClass('toggled-sidebar')
        }else{
            wrap.addClass('toggled-sidebar')
        }

        // geser konten
        var wrap_con = $('#wrapper')
        if(wrap_con.hasClass('toggled-wrapper')){
            wrap_con.removeClass('toggled-wrapper')
        }else{
            wrap_con.addClass('toggled-wrapper')
        }

        // geser navbar
        var navbar = $('#navbar')
        if(navbar.hasClass('toggled-navbar')){
            navbar.removeClass('toggled-navbar')
        }else{
            navbar.addClass('toggled-navbar')
        }

    })

    // link active sidebar
    $(document).on('click', '#sidebar-wrapper .list-group-item', function(){
        // link active
        var link = $('#sidebar-wrapper .list-group-item')
        link.removeClass('active')
        $(this).addClass('active')

        // link active collapse
        var collapse_active = $('#sidebar-wrapper .list-group-item .collapse')
        collapse_active.removeClass('show')

        // icon panah active
        var icon_panah = $('#sidebar-wrapper .bi.bi-arrow-down-short')
        icon_panah.removeClass('putar-icon')
        $(this).find('.bi.bi-arrow-down-short').addClass('putar-icon')
    })
})