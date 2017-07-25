
function getEle(dom){
  return document.querySelectorAll(dom);
}
class fullPage {
  constructor(){
    this.iNow=0;
    this.screenWidth=document.body.clientWidth;
    this.screenHeight=document.body.clientHeight;
    this.slideDiv=null;
    this.page=null;
  }

//需要设置
  setJshop(){
    var html=getEle("html")[0],
        body=getEle("body")[0];

    html.style.width = "100%";
    html.style.height = "100%";
    body.style.width = "100%";
    body.style.height = "100%";
    body.style.overflow = "hidden";
  }
  setJshopImg(){
    let aImg=getEle("img");
    const re=new RegExp(".gif");
    aImg=Array.prototype.slice.call(aImg);

    aImg.forEach(function(img,index){
      if(re.test(img.getAttribute("src"))){
        img.src=img.getAttribute("data-srcset");
      }
    });
  }
  setFullScreen(page,slideDiv){
    this.slideDiv=getEle(slideDiv)[0];
    this.page=getEle(page);
    const aPage=Array.prototype.slice.call(this.page);
    const _this=this;

    aPage.forEach(function (page,index){
      page.style.height=_this.screenHeight+"px";

    });
    this.slideDiv.style.height=aPage.length*this.screenHeight+"px"
  }

}
class slide extends fullPage {
  constructor(){
    super();
    this.startTY=0;

  }

    static bindEvent(){
    console.log(this.startTY)

    document.addEventListener("touchstart",function(ev){

      document.addEventListener("touchmove",move);
      document.addEventListener("touchend",move);

      let startY=ev.changedTouches[0].pageY;

      let targetY=0;

      function move(ev){
          let disY=ev.changedTouches[0].pageY;

          console.log(_this.startTY);

          targetY=disY-_this.startTY;
          console.log(_this)
          // super.slideDiv.style.WebkitTransform = super.slideDiv.style.transform = "translate3d(0," + (targetY + _this.startTY) + "px,0)"
      }
      function end(ev){

      }

    },false);
  }
}
class init extends fullPage {

  constructor(page,slideDiv) {
    super();
    this.setJshop();
    this.setJshopImg();
    this.setFullScreen(page,slideDiv);
    // console.log(this);
    // var slideFn=new slide();

    slide.bindEvent();

  }

}
class start extends fullPage {
  constructor() {

  }


}



// init(){
//   console.log(this)
//   this.setJshop();
//
// }


//var page=new fullPage(".page",".slide_div");
var initFn=new init('.page',".slide_div");
// var move=new
// initFn.bindEvent();
// page.slide();
