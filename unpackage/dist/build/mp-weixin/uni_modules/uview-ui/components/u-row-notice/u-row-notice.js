(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uview-ui/components/u-row-notice/u-row-notice"],{3445:function(t,n,e){"use strict";var i=e("d854"),u=e.n(i);u.a},"653a":function(t,n,e){"use strict";(function(t){var i=e("47a9");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=i(e("7eb4")),o=i(e("ee10")),a=i(e("7ec2")),r={name:"u-row-notice",mixins:[t.$u.mpMixin,t.$u.mixin,a.default],data:function(){return{animationDuration:"0",animationPlayState:"paused",nvueInit:!0,show:!0}},watch:{text:{immediate:!0,handler:function(n,e){this.vue(),t.$u.test.string(n)||t.$u.error("noticebar组件direction为row时，要求text参数为字符串形式")}},fontSize:function(){this.vue()},speed:function(){this.vue()}},computed:{textStyle:function(){var n={};return n.color=this.color,n.fontSize=t.$u.addUnit(this.fontSize),n},animationStyle:function(){var t={};return t.animationDuration=this.animationDuration,t.animationPlayState=this.animationPlayState,t},innerText:function(){for(var t=[],n=this.text.split(""),e=0;e<n.length;e+=20)t.push(n.slice(e,e+20).join(""));return t}},mounted:function(){this.init()},methods:{init:function(){this.vue(),t.$u.test.string(this.text)||t.$u.error("noticebar组件direction为row时，要求text参数为字符串形式")},vue:function(){var n=this;return(0,o.default)(u.default.mark((function e(){var i;return u.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return 0,i=0,e.next=3,t.$u.sleep();case 3:return e.next=5,n.$uGetRect(".u-notice__content__text");case 5:return i=e.sent.width,e.next=8,n.$uGetRect(".u-notice__content");case 8:e.sent.width,n.animationDuration="".concat(i/t.$u.getPx(n.speed),"s"),n.animationPlayState="paused",setTimeout((function(){n.animationPlayState="running"}),10);case 12:case"end":return e.stop()}}),e)})))()},nvue:function(){return(0,o.default)(u.default.mark((function t(){return u.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},loopAnimation:function(t,n){},getNvueRect:function(t){},clickHandler:function(t){this.$emit("click")},close:function(){this.$emit("close")}}};n.default=r}).call(this,e("df3c")["default"])},9834:function(t,n,e){"use strict";e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}));var i={uIcon:function(){return Promise.all([e.e("common/vendor"),e.e("uni_modules/uview-ui/components/u-icon/u-icon")]).then(e.bind(null,"e6b1"))}},u=function(){var t=this.$createElement,n=(this._self._c,this.__get_style([this.animationStyle])),e=this.__get_style([this.textStyle]),i=["link","closable"].includes(this.mode);this.$mp.data=Object.assign({},{$root:{s0:n,s1:e,g0:i}})},o=[]},d854:function(t,n,e){},f183:function(t,n,e){"use strict";e.r(n);var i=e("9834"),u=e("f5ae");for(var o in u)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return u[t]}))}(o);e("3445");var a=e("828b"),r=Object(a["a"])(u["default"],i["b"],i["c"],!1,null,"6d2640ec",null,!1,i["a"],void 0);n["default"]=r.exports},f5ae:function(t,n,e){"use strict";e.r(n);var i=e("653a"),u=e.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=u.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uview-ui/components/u-row-notice/u-row-notice-create-component',
    {
        'uni_modules/uview-ui/components/u-row-notice/u-row-notice-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('df3c')['createComponent'](__webpack_require__("f183"))
        })
    },
    [['uni_modules/uview-ui/components/u-row-notice/u-row-notice-create-component']]
]);
