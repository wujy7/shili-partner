(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uview-ui/components/u-code/u-code"],{"5c9e":function(e,t,n){"use strict";n.r(t);var i=n("73ae"),s=n.n(i);for(var u in i)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(u);t["default"]=s.a},6780:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){}));var i=function(){var e=this.$createElement;this._self._c},s=[]},"73ae":function(e,t,n){"use strict";(function(e){var i=n("47a9");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=i(n("668e")),u={name:"u-code",mixins:[e.$u.mpMixin,e.$u.mixin,s.default],data:function(){return{secNum:this.seconds,timer:null,canGetCode:!0}},mounted:function(){this.checkKeepRunning()},watch:{seconds:{immediate:!0,handler:function(e){this.secNum=e}}},methods:{checkKeepRunning:function(){var t=Number(e.getStorageSync(this.uniqueKey+"_$uCountDownTimestamp"));if(!t)return this.changeEvent(this.startText);var n=Math.floor(+new Date/1e3);this.keepRunning&&t&&t>n?(this.secNum=t-n,e.removeStorageSync(this.uniqueKey+"_$uCountDownTimestamp"),this.start()):this.changeEvent(this.startText)},start:function(){var e=this;this.timer&&(clearInterval(this.timer),this.timer=null),this.$emit("start"),this.canGetCode=!1,this.changeEvent(this.changeText.replace(/x|X/,this.secNum)),this.timer=setInterval((function(){--e.secNum?e.changeEvent(e.changeText.replace(/x|X/,e.secNum)):(clearInterval(e.timer),e.timer=null,e.changeEvent(e.endText),e.secNum=e.seconds,e.$emit("end"),e.canGetCode=!0)}),1e3),this.setTimeToStorage()},reset:function(){this.canGetCode=!0,clearInterval(this.timer),this.secNum=this.seconds,this.changeEvent(this.endText)},changeEvent:function(e){this.$emit("change",e)},setTimeToStorage:function(){if(this.keepRunning&&this.timer&&this.secNum>0&&this.secNum<=this.seconds){var t=Math.floor(+new Date/1e3);e.setStorage({key:this.uniqueKey+"_$uCountDownTimestamp",data:t+Number(this.secNum)})}}},beforeDestroy:function(){this.setTimeToStorage(),clearTimeout(this.timer),this.timer=null}};t.default=u}).call(this,n("df3c")["default"])},"91ab":function(e,t,n){"use strict";var i=n("928a"),s=n.n(i);s.a},"928a":function(e,t,n){},e2dc:function(e,t,n){"use strict";n.r(t);var i=n("6780"),s=n("5c9e");for(var u in s)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return s[e]}))}(u);n("91ab");var a=n("828b"),c=Object(a["a"])(s["default"],i["b"],i["c"],!1,null,"cf7be74a",null,!1,i["a"],void 0);t["default"]=c.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uview-ui/components/u-code/u-code-create-component',
    {
        'uni_modules/uview-ui/components/u-code/u-code-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('df3c')['createComponent'](__webpack_require__("e2dc"))
        })
    },
    [['uni_modules/uview-ui/components/u-code/u-code-create-component']]
]);