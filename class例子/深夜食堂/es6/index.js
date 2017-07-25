/**
 * Created by wangchen8 on 2017/3/14.
 */

// 是否需要设置locaStorage
// 最外层是wrap
// 页面内容是page，且是全屏
// 兼容jshpo
// 需要设置页面内动画
// 需要设置翻页按钮
//



(function () {
    var curNow = 0;
    if(window.localStorage.curNow){
        curNow=parseInt(window.localStorage.curNow);

    }

    document.addEventListener("touchmove", function (ev) {
        ev.preventDefault();
    });
    document.addEventListener("DOMContentLoaded", function () {

        var html = document.querySelector("html");
        var body = document.getElementsByTagName("body");
        var aImg = document.querySelectorAll("img");
        var oWrap = document.querySelector(".wrap");
        html.style.width = "100%";
        html.style.height = "100%";
        body[0].style.width = "100%";
        body[0].style.height = "100%";
        body[0].style.overflow = "hidden";
        var screenHeight = document.body.clientHeight;
        var screenWidth = document.body.clientWidth;
        oWrap.style.height = screenHeight + "px";

        /*以上是初始化jshop*/

        /*所有的dom节点*/
        var aPage = getEle(".page"),
            oSlide = getEle(".slide_div")[0],
            footer = getEle(".footercc")[0],
            footerLi = getEle(".footercc ul li"),
            aDiv = getEle("div"),
            oStart = getEle(".start")[0],
            pop = getEle(".pop_up_rule")[0],
            popClose = getEle(".pop_up_rule .rule_close")[0],
            popBtn = getEle(".page2 .rule_btn")[0],
            _this=this;

        this.targetY=0;
        this.startLen=30;
        this.startTY = 0;
        /*初始化页面page结构*/
        oSlide.style.WebkitTransform = oSlide.style.transform = "translate3d(0," + 0 + "px,0)";

        /*添加拖动事件*/
        function slide(slide) {


            document.addEventListener("touchstart", function (ev) {
                var startY = ev.changedTouches[0].pageY;
                var targetY = 0;
                /*当前的滑动*/

                document.addEventListener("touchmove", move, false);

                document.addEventListener("touchend", end, false);

                function move(ev) {

                    var disY = ev.changedTouches[0].pageY;

                    targetY = disY - startY;

                    slide.style.WebkitTransform = slide.style.transform = "translate3d(0," + (targetY + _this.startTY) + "px,0)"

                }

                function end() {
                    if (Math.abs(targetY) > 100) {
                        if (targetY > 0) {
                            curNow--;
                        } else {
                            curNow++;
                        }

                    }
                    if (curNow >= aPage.length - 1) {
                        curNow = aPage.length - 1;
                    }
                    if (curNow <= 0) {
                        curNow = 0;
                    }
                    document.removeEventListener("touchmove", move);
                    document.removeEventListener("touchend", end);
                    _this.startTY = -curNow * screenHeight;

                    _this.targetY=_this.startTY;

                    slideAnimate(slide,_this.targetY);

                }
            }, false);

        }

        /*获取元素*/
        function getEle(dom) {
            return document.querySelectorAll(dom);
        }

        // initScreen();
        /*设置页面高度*/
        function initScreen() {
            return new Promise(function (resolve, reject) {
                var oDivArr = getEle("div");
                var len = [];
                for (var i = 0; i < oDivArr.length; i++) {
                    if (oDivArr[i].dataset.screen == "true") {
                        len.push(oDivArr[i]);
                    }
                }
                for (var i = 0; i < len.length; i++) {
                    len[i].style.height = screenHeight + "px";
                    if (len.length - 1 == i) {
                        resolve(true);
                    }
                }
                for (let i = 0; i < _this.startLen; i++) {
                    let start = document.createElement("span");
                    let startchicun = Math.random() * 5;
                    start.style.width = startchicun + "px";
                    start.style.height = startchicun + "px";
                    start.style.transform = start.style.Webkittransform = "translate(" + (Math.random() * screenWidth) + "px," + ((Math.random() * screenWidth - 50)) + "px)";
                    start.style.animationDelay = start.style.WebkitanimationDelay = Number(Math.random() * 1000) + "ms";
                    oStart.appendChild(start);
                }

            });
        }

        /*给每个页添加动画*/
        function endFn() {
            /*0==1,1==2,2==3...*/
            switch (curNow) {
                case 0:
                    step.page0();
                    break;
                case 1:
                    //console.log("第二页");
                    step.page1();
                    break;
                case 2:
                    //console.log("第三页");
                    step.page2();
                    break;
                case 3:
                    //console.log("第三页");
                    step.page3();
                    break;
                case 4:
                    //console.log("第四页");
                    step.page4();
                    break;
                case 5:
                    //console.log("第四页");
                    step.page5();
                    break;
                case 6:
                    //console.log("第四页");
                    step.page6();
                    break;
                case 7:
                    //console.log("第四页");
                    step.page7();
                    break;
            }
        }

        /*第几页的第几步*/
        var step = {
            /*第1页的动画*/
            page0: function () {
                footer.style.display = "none";
                setFooterClass();
            },
            /*第2页动画*/
            page1: function () {
                footer.style.display = "block";

                var lateDiv = aPage[1].querySelectorAll("div");

                stepAnimate(lateDiv);

                setFooterClass();
            },
            /*第3页动画*/
            page2: function () {
                footer.style.display = "block";

                var lateDiv = aPage[2].querySelectorAll("div");

                stepAnimate(lateDiv);

                setFooterClass();
            },
            /*第4页动画*/
            page3: function () {
                footer.style.display = "block";

                var lateDiv = aPage[3].querySelectorAll("div");

                stepAnimate(lateDiv);

                setFooterClass();
            },
            page4: function () {
                footer.style.display = "block";

                var lateDiv = aPage[4].querySelectorAll("div");

                stepAnimate(lateDiv);

                setFooterClass();
            },
            page5: function () {
                footer.style.display = "block";

                var lateDiv = aPage[5].querySelectorAll("div");

                stepAnimate(lateDiv);

                setFooterClass();
            },
            page6: function () {
                footer.style.display = "block";

                var lateDiv = aPage[5].querySelectorAll("div");

                stepAnimate(lateDiv);

                setFooterClass();
            },
            page7: function () {
                footer.style.display = "block";

                var lateDiv = aPage[5].querySelectorAll("div");

                stepAnimate(lateDiv);

                setFooterClass();
            }


        };

        function imgLoad() {
            var imgArr = [];
            var imgcount = 0;

            for (var i = 0; i < aImg.length; i++) {

                imgArr.push(aImg[i].src);

            }

            for (i = 0; i < imgArr.length; i++) {
                (function (index) {

                    var img = new Image();

                    img.src = imgArr[index];

                    img.onload = function () {

                        imgcount++;

                        if (imgcount == imgArr.length - 1) {

                            reloadImg();

                        }
                    }

                })(i)
            }
        }

        function reloadImg() {

            var re = new RegExp(".gif");

            for (var i = 0; i < aImg.length; i++) {

                var src = re.test(aImg[i].src);

                if (src) {

                    aImg[i].src = aImg[i].getAttribute("data-srcset");

                }
            }
        }

        function setFooterClass() {

            var activeNow = curNow;

            for (var i = 0; i < footerLi.length; i++) {

                footerLi[i].classList.remove("active");

            }
            switch (activeNow) {
                case 1:
                case 2:
                    footerLi[0].classList.add("active");
                    break;
                case 3:
                case 4:
                    footerLi[1].classList.add("active");
                    break;
                case 5:
                    footerLi[2].classList.add("active");
                    break;
                case 6:
                    footerLi[3].classList.add("active");
                    break
            }
            /* if(activeNow!=0 && activeNow<=footerLi.length){

             footerLi[activeNow-1].classList.add("active");

             }*/
        }

        function stepAnimate(domArr) {
            var timer = null;
            var now = 0;
            var moveDiv = [];

            for (var i = 0; i < domArr.length; i++) {
                if (domArr[i].dataset) {
                    moveDiv.push(domArr[i]);
                }
            }
            clearInterval(timer);
            timer = setInterval(function () {
                if (now == moveDiv.length - 1) {
                    clearInterval(timer);
                }
                /*更改为添加class*/
                if (moveDiv[now].dataset.animateTranslatex) {

                    moveDiv[now].classList.add("step_animateX");

                } else if (moveDiv[now].dataset.animateOpacity) {

                    moveDiv[now].classList.add("step_animateO");

                } else if (moveDiv[now].dataset.animateTranslatey) {

                    moveDiv[now].classList.add("step_animateY");

                }

                now++
            }, 100);

        }

        function bindEvent() {
             /*弹窗阻止冒泡*/

             pop.addEventListener("touchstart",function(e){e.stopPropagation()},false);

             /*弹窗绑定*/

             popClose.addEventListener("click",function(){
             pop.style.display="none";
             },false);

             popBtn.addEventListener("click",function(){
             pop.style.display="block";
             },false);

            /*添加导航*/

            for (var i = 0; i < footerLi.length; i++) {

                footerLi[i].index = i;

                footerLi[i].addEventListener("click", function () {

                    switch (this.index) {
                        case 0:
                            curNow = 1;
                            _this.targetY=-curNow*screenHeight;
                            break;
                        case 1:
                            curNow = 3;
                            _this.targetY=-curNow*screenHeight;
                            break;
                        case 2:
                            curNow = 5;
                            _this.targetY=-curNow*screenHeight;
                            break;
                        case 3:
                            curNow = 6;
                            _this.targetY=-curNow*screenHeight;
                            break;
                    }

                    slideAnimate(oSlide, _this.targetY);
                    return false;
                });
            }

        }

        function slideAnimate(dom,target) {
            window.localStorage.curNow=curNow;
            _this.targetY=target;
            _this.startTY=target;
            function endAnimate() {
                "use strict";
                dom.removeEventListener("webkitTransitionEnd", endAnimate);
                dom.style.WebkitTransition = dom.style.transition = "none";
                endFn();

            }
            dom.addEventListener("webkitTransitionEnd", endAnimate);

            dom.style.WebkitTransition = dom.style.transition = "0.4s all ease";

            dom.style.WebkitTransform = dom.style.transform = "translate3d(0," + (target) + "px,0)"
        }

        initScreen().then(function (data) {
            /*执行换图片*/
            imgLoad();

        }).then(function () {
            /*执行设置*/
            for (var i = 0; i < aDiv.length; i++) {

                if (aDiv[i].dataset.animateTranslatex) {

                    aDiv[i].classList.add("step_init_x");

                } else if (aDiv[i].dataset.animateOpacity) {

                    aDiv[i].classList.add("step_init_o");

                } else if (aDiv[i].dataset.animateTranslatey) {

                    aDiv[i].classList.add("step_init_y");

                }

            }

        }).then(function () {
            slide(oSlide, endFn);
            bindEvent();

            slideAnimate(oSlide, -curNow*screenHeight);
        });


    })
})();
