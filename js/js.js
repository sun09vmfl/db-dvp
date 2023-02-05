//gnb
$(function(){
    $('.gnb > li > a').on('mouseenter focus', function(){
        let gnbindex = $('.gnb > li > a').index($(this));
        $('.gnb .inner').removeClass('on');
        $('.gnb .inner:eq('+ gnbindex +')').addClass('on');   
     });   
     $('header').on('mouseleave', function(){
         $('.gnb .inner').removeClass('on');
     });     
});

// 헤더 픽스
let scrollFix = 0;
scrollFix=$(document).scrollTop();
fixHeader();
//윈도우창 조절시 이벤트
$(window).on('scroll resize', function() {
    scrollFix=$(document).scrollTop();
    fixHeader();
})

function fixHeader() {
    if(scrollFix > 150) {
        $('header').addClass('on');
    } else {
        $('header').removeClass('on')
    }
}

// 글자 애니메이션 Splitting 데모 사이트 그대로 작성 따라하기.
$(function() {
    Splitting();
});
$(function () {
    $('.visual .slide').slick({
        arrows:true, //화살표
        dots:false,
        autoplay:true, //자동재생
        fade:true,
        autoplayspeed:7000, // 재생시간
        pauseOnHover:false, // 호버 시 멈추는 것 해제
        pauseOnFocus:false,     
    });
    $('.slick-prev').text("prev");

    //두 번째 슬라이드 
    $('.slide2').slick({
        arrows:false, //화살표
        dots:true,
        autoplay:true, 
        Infinity: true,
        slidesToShow: 2,
        slidesToScroll:1,
        autoplayspeed:6000, 
        pauseOnHover:true, // 호버 시 멈추는 것
        pauseOnFocus:true,     
    });
                                                
    $(".slide2 #slick-slide-control10").text("충남내포신도시2차 대방 엘리움(RH5-1BL");
    $(".slide2 #slick-slide-control11").text("부산에코델타시티 1차(31BL)");
    $(".slide2 #slick-slide-control12").text("화성동탄문화복합(18BL)");
    $(".slide2 #slick-slide-control13").text("화성동탄 3차 주상복합(C18BL)");
});

//