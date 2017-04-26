/*导航我想...*/
var tabVal01=[
         {showImg:true,id:"",img:"images/nav_p10.png",text01:"浏览只能手机",text02:"购买手机产品",text03:"获得技术支持",text04:"查找销售门店",text05:"",ahref:"访问消费者网站>"},
         {showImg:true,id:"",img:"images/nav_ebg.png",text01:"提交购买需求",text02:"查看成功案例",text03:"查找营销资料",text04:"成为渠道合作伙伴",text05:"",ahref:"访问企业业务网站>"},
         {showImg:true,id:"",img:"images/nav_cbg9-21.png",text01:"了解行业热点",text02:"了解运营商解决方案",text03:"查找运营商相关产品",text04:"了解运营商服务",text05:"",ahref:"访问运营商业务网站>"},
         {showImg:false,id:"last",img:"",text01:"联系华为",text02:"关注华为动态",text03:"提出产品建议",text04:"加入华为",text05:"在线反馈"},
         ]

var tab01=new Vue({
	el:"#tapContent01",
	data:{	
		items:tabVal01
	},
})
/*导航个人及家庭用品*/
var tabVal02=[
{title:"智能手机",img:"images/nav_p10.png",name:"HUAWEI  P10"},
{title:"笔记本&平板",img:"images/dropmenu2.png",name:"MateBook"},
{title:"穿戴设备",img:"images/dropmenu3.png",name:"TalkBand B3"},
{title:"移动宽带",img:"images/dropmenu4.png",name:"随行WIFI Plus"},
{title:"智能家居",img:"images/dropmenu5.png",name:"华为路由器Q1"},
{title:"配件",img:"images/dropmenu6.png",name:"VR眼镜"}
];
var tab02=new Vue({
	el:"#tapContent02",
	data:{
		items:tabVal02
	},
})
/*导航商用解决方案*/
var tabVal03=[
{title:"热门话题",showMore:false,text01:"大视频",text02:"大IT",text03:"大运营",text04:"大架构",text05:"大管道",text06:"软件定义网络(SDN)",text07:"精简IT,敏捷商道",text08:"物联网,驱动行业创新"},
{title:"行业",showMore:true,text01:"公共安全",text02:"政务",text03:"轨道",text04:"电力",text05:"金融",text06:"影视传媒",text07:"精简IT,教育",text08:""},
{title:"企业产品及服务",showMore:true,text01:"交换机",text02:"路由器",text03:"WLAN",text04:"服务器",text05:"存储",text06:"云计算",text07:"数据中心能源",text08:"服务"},
{title:"运营商产品及服务",showMore:true,text01:"无线网络",text02:"固定网络",text03:"云核心网",text04:"电信软件",text05:"IT基础设施",text06:"网络能源",text07:"全球服务",text08:""},
{title:"其他产品",showMore:false,text01:"智能光伏",text02:"",text03:"",text04:"",text05:"",text06:"",text07:"",text08:""},
];
var tab03=new Vue({
	el:"#tapContent03",
	data:{
		items:tabVal03,
	}
})
/*导航技术支持*/
var tabVal04=[
{title:"消费者",text01:"寄修服务",text02:"预约服务",text03:"保修状态查询",text04:"保修政策",text05:"花粉俱乐部",text06:"服务中心",text07:"升级软件应用"},
{title:"企业用户",text01:"技术支持",text02:"软件下载",text03:"互动社区",text04:"工具",text05:"文档查找",text06:"案例库",text07:"华为培训与认证"},
{title:"运营商用户",text01:"技术支持",text02:"软件下载",text03:"工具",text04:"知识库",text05:"公告",text06:"互动社区",text07:"智能问答"},
];
var tab04=new Vue({
	el:"#tapContent04",
	data:{
		items:tabVal04,
	}
})
/*合作伙伴*/
var tabVal05=[
{title:"合作伙伴计划",text01:"渠道伙伴政策",text02:"华为技术认证",text03:"企业业务解决方案伙伴计划",text04:"运营商解决方案伙伴计划",text05:"服务合作伙伴计划"},
{title:"合作伙伴展示",text01:"渠道伙伴",text02:"联盟伙伴",text03:"Marketplace",text04:"兼容性列表",text05:""},
{title:"联系合作伙伴",text01:"查找经销商",text02:"查找服务商",text03:"查找解决方案伙伴",text04:"",text05:""},
{title:"获取资源",text01:"合作伙伴大学",text02:"",text03:"",text04:"",text05:""},

];
var tab05=new Vue({
	el:"#tapContent05",
	data:{
		items:tabVal05,
	}
})

//导航滑动到顶部固定
var wrapWidth=$(window).width()
if (wrapWidth>760) {
	fixedTop();
}
function fixedTop(){
var a = $("#nav").offset().top;//获取div距离浏览器顶部高度
//绑定浏览器滚动事件
$(window).scroll(function() {
    var obj_height = document.documentElement.scrollTop || document.body.scrollTop;
    //当往下拉的高度超出div的高度时浮动跟随显示在浏览器最顶部
    if(obj_height >= a)
    {
        var this_width = $("#nav").width();
        var obj_width = $(window).width();//保证居中用的
        $("#nav").css({"position":"fixed","left":"0px","top":"0px","right":"0px"});
    }
    else
    {
        $("#nav").css({"position":"relative","left":"0","top":"0px","right":"0px"});//当浏览器高度小于div原高度时去除浮动跟随,定位回到原位置
    }
});
}
/*手风琴导航*/
var sideMenuVal=[
/*{
title:"个人及家用产品",icon:"glyphicon glyphicon-menu-down pull-right",showMenu:false,
menuItems:[{title:"",text01:"智能手机",text02:"笔记本&平板",text03:"智能穿戴",text04:"移动宽带",text05:"智能家居",text06:"配件",class:""}],
},*/
{
title:"个人及家用产品",icon:"glyphicon glyphicon-menu-down pull-right",showMenu:false,
menuItems:[
{title:"",
menuSon:[{text:"智能手机"},{text:"笔记本&平板"},{text:"智能穿戴"},{text:"移动宽带"},{text:"智能家居"},{text:"配件"}]
}
],
},
{
title:"商用解决方案",icon:"glyphicon glyphicon-menu-down pull-right",showMenu:false,
menuItems:[
{title:"热门话题",menuSon:[{text:"大视频"},{text:"大IT"},{text:"大运营"},{text:"大架构"},{text:"大管道"},{text:"软件定义网络(SDN)"},{text:"精简IT,敏捷商道"},{text:"物联网,驱动行业创新"},]},
{title:"行业",menuSon:[{text:"公共安全"},{text:"政务"},{text:"轨道"},{text:"电力"},{text:"金融"},{text:"影视传媒"},{text:"精简IT,教育"}]},
{title:"企业产品及服务",menuSon:[{text:"交换机"},{text:"路由器"},{text:"WLAN"},{text:"服务器"},{text:"存储"},{text:"云计算"},{text:"数据中心能源"},{text:"服务"},]},
{title:"运营商产品及服务",menuSon:[{text:"无线网络"},{text:"固定网络"},{text:"云核心网"},{text:"电信软件"},{text:"IT基础设施"},{text:"网络能源"},{text:"全球服务"}]},
{title:"其他产品",menuSon:[{text01:"智能光伏",}]},
],
},
{
title:"技术支持",icon:"glyphicon glyphicon-menu-down pull-right",showMenu:false,
menuItems:[
{title:"消费者",menuSon:[{text:"寄修服务"},{text:"预约服务"},{text:"保修状态查询"},{text:"保修政策"},{text:"花粉俱乐部"},{text:"服务中心"},{text:"升级软件应用"}]},
{title:"企业用户",menuSon:[{text:"技术支持"},{text:"软件下载"},{text:"互动社区"},{text:"工具"},{text:"文档查找"},{text:"案例库"},{text:"华为培训与认证"}]},
{title:"运营商用户",menuSon:[{text:"技术支持"},{text:"软件下载"},{text:"工具"},{text:"知识库"},{text:"公告"},{text:"互动社区"},{text:"智能问答"}]},
],
},
{
title:"合作伙伴",icon:"glyphicon glyphicon-menu-down pull-right",showMenu:false,
menuItems:[
{title:"合作伙伴计划",menuSon:[{text:"渠道伙伴政策"},{text:"华为技术认证"},{text:"企业业务解决方案伙伴计划"},{text:"运营商解决方案伙伴计划"},{text:"服务合作伙伴计划"}]},
{title:"合作伙伴展示",menuSon:[{text:"渠道伙伴"},{text:"联盟伙伴"},{text:"Marketplace"},{text:"兼容性列表"}]},
{title:"联系合作伙伴",menuSon:[{text:"查找经销商"},{text:"查找服务商"},{text03:"查找解决方案伙伴"}]},
{title:"获取资源",menuSon:[{text:"合作伙伴大学"}]},
],
},
{
title:"开发者",icon:"glyphicon glyphicon-menu-right pull-right",
menuItems:[],
},
{
title:"华为商城",icon:"glyphicon glyphicon-menu-right pull-right",
menuItems:[],
},
{
title:"[选择区域/语言]",icon:"glyphicon glyphicon-menu-right pull-right",
menuItems:[],
},
{
title:"[登录]",icon:"glyphicon glyphicon-menu-right pull-right",
menuItems:[],
}
];
var sideMenu=new Vue({
	el:".sideMenu",
	data:{
		items:sideMenuVal
	},

})
//菜单滑入滑出
$(".itemFa").click(function() {
	$(this).addClass("clickClass");
	$(this).parent(".sideMenuItem").siblings().children(".itemFa").removeClass('clickClass');
	$(this).siblings('.itemSon').slideToggle();
});
//主菜单
var wrapWidth=$(window).width();
$(".col-sm-2.col-sm-2-5").width(wrapWidth/6);
//标签页
$('.nav.navbar-nav a').hover(function (e) {
 // e.preventDefault();
 var tabHref=$(this).attr("href");
 $(tabHref).addClass('active');
 console.log(tabHref);
  // $(this).tab('show');
  // var a=$(this).atrr("id");
  // console.log(a);
},function(){
   // $(this).tab().attr("href");
   $(".tab-pane").removeClass('active')
})

// $('.nav.navbar-nav a').mouseenter(function(){
//           $(this).tab('show');
// })
// $('.nav.navbar-nav a').mouseleave(function(){

// })
//点击显示菜单
$(".navbar-toggle.collapsed").click(function() {
	// if ($(".contaner-full.sideMenu").is(":hidden")) {
		 $(".contaner-full.sideMenu").show();
		 $(".contaner-full.sideMenu").animate({left:0});
		 $(".container-full").hide();
	// }
 
	
});
$("#close").click(function(){

$(".contaner-full.sideMenu").animate({left:"120%"});
$(".contaner-full.sideMenu").hide();
 $(".container-full").show();
})
//banner高度
function getBannerHigh(){
	var  windowHeight=$(window).height();
	var windowWidth=$(window).width();
	var navHeight=$("#nav").height();
	if (windowWidth>760) {
		$(".banner-content").height(windowHeight-navHeight*2);
		$(".video").height(windowHeight/1.5);
	}
	else{
		$(".banner-content").height(windowHeight/2.5-navHeight);
		$(".video").height(windowHeight/2.5);
	}
}
// 监听浏览器窗口大小的改变
window.onresize=getBannerHigh;
getBannerHigh();

//card
window.onresize=getCardHigh;
 getCardHigh()
function getCardHigh()
{
var windowWidth=$(window).width();
if (windowWidth>760) {
	var cardFirstHigh=$(".col-sm-6.cardFirst").height();
	var cardFirstSonHigh=$(".row.cardFirstSon").height();
	console.log(cardFirstHigh);
	console.log(cardFirstSonHigh);
	var magintTop=cardFirstHigh - cardFirstSonHigh;
	$("#marginTop").css("margin-top",magintTop);
}else{

}
}

//鼠标移动改变card状态
$(".card-block").hover(function() {
    $(this).children('.card-img').addClass('hover');
    $(this).children('.card-txt').addClass('upward');
    $(this).children('.card-txt').children(".txt-content").css('opacity','1');
    $(this).children('.card-black').show();
}, function() {
    $(this).children('.card-img').removeClass('hover');
    $(this).children('.card-txt').removeClass('upward');
    $(this).children('.card-txt').children(".txt-content").css('opacity','0');
    $(this).children('.card-black').hide();
});
// 播放按钮
$(".video").hover(function() {
	$("#btn-img").attr("src","./images/video_btn_hover.png");
}, function() {
	$("#btn-img").attr("src","./images/video_btn.png");
});
//底部手风琴菜单

footerMenu();
function footerMenu(){
var windowWidth=$(window).width();
if (windowWidth<760) {
 $('.footerMenu-title').addClass('footerMenu');
 $("#hideUl").hide();
}else{
 $('.footerMenu-title').removeClass('footerMenu');
}
 }
$(".footerMenu-title.footerMenu").click(function(){
	$(this).siblings('.footerMeun-lists').slideToggle();
	 $("#hideUl").hide();
})

// 视频
videojs.options.flash.swf = "Building_a_Better_Connected_World_201620160905.swf";
function playVideo(){
              var myPlayer = videojs('my-video');
	    videojs("my-video").ready(function(){
	   var myPlayer = this;
	   myPlayer.play();
	});
}
function overVideo(){
	  var myPlayer = videojs('my-video');
	    videojs("my-video").ready(function(){
	   var myPlayer = this;
	   myPlayer.load();
	});
}
hideLayer();

function hideLayer(){
           $(".layer").hide();
	$(".layerBlack").hide();
}
function showLayer(){
	$(".layer").show();
	$(".layerBlack").show();
}
$("#closeIcon").click(function() {
	hideLayer();
	overVideo();
});
$(".video-btn.text-center").click(function() {
	showLayer();
	playVideo();
});
//layer宽度高度
var windowWidth=$(window).width();
var layerWidth=windowWidth*0.8;
var layerHeight=layerWidth/1.7;
$(".layer").width(layerWidth);
$(".layer").height(layerHeight);
$(".layer").css("margin-left",-layerWidth/2);
$(".layer").css("margin-bottom",-layerHeight/2);