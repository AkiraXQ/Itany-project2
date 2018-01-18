$(function (){
	var swiperFirst=new Swiper(".swiper-container",{
		//滚动方向
		direction:"vertical",

		//间距
		spaceBetween:20,

		//切换页面effect属性
		effect:"coverflow",
		slidesPerView: 1,//每页显示一个slide
		centeredSlides: true,

		// 滚动条
		scrollbar:".swiper-scrollbar",
		scrollbarHide : true,//隐藏
		scrollbarDraggable : true ,//可拖拽
		scrollbarSnapOnRelease : true ,//自动贴合

		//视差效果
		pagination:".swiper-pagination",
		parallax:true,//开启视差效果

		//动画
		onInit: function(swiper){
	    	swiperAnimateCache(swiper); //隐藏动画元素
	    	swiperAnimate(swiper); //初始化完成开始动画
	    },
		onSlideChangeEnd:function(swiper){
			swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
			if (swiper.activeIndex==2) {//切换到第三个页面是加载再动画
				setTimeout(page3promise,8500)
				function page3promise(){
					$(".page-3-promise").css({
						display:"block",
						animation:"page3promise 2s linear 0s 1 normal",
					});
				}
			}
        },
	})
});


var musicCount=1;
$(".mymusicrun").click(function (){
	if(musicCount%2==1){
		$(".mymusicrun").removeClass("mymusicroll");
		document.getElementsByTagName("audio")[0].pause();
	}else{
		$(".mymusicrun").addClass("mymusicroll");
		document.getElementsByTagName("audio")[0].play();
	}
	musicCount++;
})