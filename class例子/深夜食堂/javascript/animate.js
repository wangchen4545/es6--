/**
 * Created by richu on 2016/9/5.
 */
(function (w, d) {

    function animate(parent) {
        this.parent = document.querySelector(parent);
        var data = {
            pageCount: 0
        };
        //this.imgLoad();

        this.ready(w, this.imgLoad);
    }

    animate.prototype.ready = function () {
        if (document.addEventListener) {
            document.addEventListener('DOMContentLoaded', fn, false);
        }
        else {
            document.attachEvent('onreadystatechange', function () {
                if (document.readyState == 'complete') {
                    fn && fn();
                }
            });
        }
    };
    animate.prototype.bind = function (obj, name, fn) {
        if (obj.addEventListener) {
            obj.addEventListener(name, function (ev) {
                if (false == fn.call(obj, ev)) {
                    ev.cancelBubble = true;

                    ev.preventDefault();
                }
            }, false);
        }
        else {
            obj.attachEvent('on' + name, function () {
                if (false == fn.call(obj, event)) {
                    event.cancelBubble = true;

                    return false;
                }
            });
        }
    };
    animate.prototype.imgLoad = function () {
        var aImg = this.parent.querySelectorAll("img"),
            aSrc = [],
            i = 0,
            imgLoadCount = 0,
            counter = 0;

        for (i; i < aImg.length; i++) {
            aSrc.push(aImg[i].src);
        }

        for (imgLoadCount; aImg.length; imgLoadCount++) {
            (function (i) {
                var Img = new Image();
                Img.src = aSrc[i].src;
                Img.onload = function () {
                    counter++;
                };
                Img.onerror = function () {
                    counter++;
                };
                /*ִ����һ��*/
                if (counter == aImg.length) {

                }
                console.log(this);
                this.load = true;
            })(imgLoadCount)
        }
    };

})(window, document);