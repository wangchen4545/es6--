
function getEle(dom){
  return document.querySelectorAll(dom);
}
preventDefault();
function preventDefault(){
  document.addEventListener("touchmove", function (ev) {
      ev.preventDefault();
  });
}
class fullPage {
  constructor(){
    this.iNow=0;
    this.screenWidth=document.body.clientWidth;
    this.screenHeight=document.body.clientHeight;
    this.slideDiv=null;
    this.page=null;
    this.startTY=0;
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
  slide(){
    const _this=this;
    let slideDom=this.slideDiv;
    let page=this.page;

    document.addEventListener("touchstart",(ev)=>{
      let startY=ev.changedTouches[0].pageY;

      let targetY=0;

      const move=(ev)=>{
          let disY=ev.changedTouches[0].pageY;

          console.log(disY);

          targetY=disY-startY-this.startTY;

          console.log(targetY);

          slideDom.style.WebkitTransform = slideDom.style.transform = "translate3d(0," + (targetY + _this.startTY) + "px,0)"
      }
      const end=()=>{
          if (Math.abs(targetY) > 100) {
              if (targetY > 0) {
                  this.iNow--;
              } else {
                  this.iNow++;
              }

          }
          if (this.iNow >= page.length - 1) {
              this.iNow = page.length - 1;
          }
          if (this.iNow <= 0) {
              this.iNow = 0;
          }
          document.removeEventListener("touchmove", move);
          document.removeEventListener("touchend", end);

          return  this.pageAnimate(slideDom)
          //slideAnimate(slide,_this.targetY);

      }
      document.addEventListener("touchmove",move);
      document.addEventListener("touchend",end);




    },false);
  }
  pageAnimate(dom){
    const target=this.iNow*this.screenHeight;
    this.startTY=target

    function endFn(){
      dom.removeEventListener("webkitTransitionEnd",endFn);


      dom.style.webkitTransition=dom.style.webkitTransition="none";

    }

    dom.addEventListener("webkitTransitionEnd",endFn);


    dom.style.webkitTransition=dom.style.webkitTransition="0.4s all ease";

    dom.style.WebkitTransform = dom.style.transform = "translate3d(0," + (-target) + "px,0)"


  }
}
class init extends fullPage {

  constructor(page,slideDiv) {
    super();
    this.setJshop();
    this.setJshopImg();
    this.setFullScreen(page,slideDiv);
    this.slide();

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
