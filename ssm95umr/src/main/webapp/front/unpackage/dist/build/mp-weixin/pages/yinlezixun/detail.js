(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/yinlezixun/detail"],{"102f":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e,n,a,r,i,s){try{var u=t[i](s),o=u.value}catch(c){return void n(c)}u.done?e(o):Promise.resolve(o).then(a,r)}function s(t){return function(){var e=this,n=arguments;return new Promise((function(a,r){var s=t.apply(e,n);function u(t){i(s,a,r,u,o,"next",t)}function o(t){i(s,a,r,u,o,"throw",t)}u(void 0)}))}}var u={data:function(){return{autoplaySwiper:!1,intervalSwiper:5e3,btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],id:"",detail:{},swiperList:[],commentList:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,user:{},sfshIndex:-1,sfshOptions:["通过","不通过"],count:0}},computed:{SecondToDate:function(){var t=this.count;return null!=t&&""!=t&&(t=t>60&&t<3600?parseInt(t/60)+"分钟"+parseInt(60*(parseFloat(t/60)-parseInt(t/60)))+"秒":t>=3600&&t<86400?parseInt(t/3600)+"小时"+parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))+"分钟"+parseInt(60*(parseFloat(60*(parseFloat(t/3600)-parseInt(t/3600)))-parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))))+"秒":t>=86400?parseInt(t/3600/24)+"天"+parseInt(24*(parseFloat(t/3600/24)-parseInt(t/3600/24)))+"小时"+parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))+"分钟"+parseInt(60*(parseFloat(60*(parseFloat(t/3600)-parseInt(t/3600)))-parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))))+"秒":parseInt(t)+"秒"),t}},onLoad:function(t){var e=this;return s(a.default.mark((function n(){return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.id=t.id;case 1:case"end":return n.stop()}}),n)})))()},onShow:function(e){var n=this;return s(a.default.mark((function e(){var r,i;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n.init(),r=t.getStorageSync("nowTable"),e.next=4,n.$api.session(r);case 4:i=e.sent,n.user=i.data,n.btnColor=n.btnColor.sort((function(){return.5-Math.random()}));case 7:case"end":return e.stop()}}),e)})))()},destroyed:function(){window.clearInterval(this.inter)},methods:{onPayTap:function(){t.setStorageSync("paytable","yinlezixun"),t.setStorageSync("payObject",this.detail),this.$utils.jump("../pay-confirm/pay-confirm?type=1")},shoucang:function(){var e=this;return s(a.default.mark((function n(){var r;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=e,t.showModal({title:"提示",content:"是否收藏",success:function(){var t=s(a.default.mark((function t(e){return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.confirm){t.next=4;break}return t.next=3,r.$api.add("storeup",{userid:r.user.id,name:r.detail.biaoti,picture:r.swiperList[0],refid:r.detail.id,tablename:"yinlezixun"});case 3:r.$utils.msg("收藏成功");case 4:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()});case 2:case"end":return n.stop()}}),n)})))()},onAcrossTap:function(e){t.setStorageSync("crossTable","yinlezixun"),t.setStorageSync("crossObj",this.detail),this.$utils.jump("../".concat(e,"/add-or-update?cross=true"))},init:function(){var t=this;return s(a.default.mark((function e(){var n;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$api.info("yinlezixun",t.id);case 2:n=e.sent,t.detail=n.data,t.swiperList=t.detail.tupian?t.detail.tupian.split(","):[],t.detail.xiangqing=t.detail.xiangqing.replace(/img src/gi,'img style="width:100%;" src');case 6:case"end":return e.stop()}}),e)})))()},mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(t){var e=this;return s(a.default.mark((function n(){var r;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$api.list("discussyinlezixun",{page:t.num,limit:t.size,refid:e.id});case 2:r=n.sent,1==t.num&&(e.commentList=[]),e.commentList=e.commentList.concat(r.data.list),0==r.data.list.length&&(e.hasNext=!1),t.endSuccess(t.size,e.hasNext);case 7:case"end":return n.stop()}}),n)})))()},onChatTap:function(){this.$utils.jump("../chat/chat")},download:function(e){var n=this;t.downloadFile({url:e,success:function(t){200===t.statusCode&&(n.$utils.msg("下载成功"),window.open(e))}})},onCartTabTap:function(){this.$utils.tab("../shop-cart/shop-cart")},onCommentTap:function(){this.$utils.jump("../discussyinlezixun/add-or-update?refid=".concat(this.id))},zan:function(){var e=this;return s(a.default.mark((function n(){var r;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=e,t.showModal({title:"提示",content:"是否点赞",success:function(){var t=s(a.default.mark((function t(e){return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.confirm){t.next=5;break}return r.detail.thumbsupnum=parseInt(r.detail.thumbsupnum)+1,t.next=4,r.$api.update("yinlezixun",r.detail);case 4:r.$utils.msg("点赞成功");case 5:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()});case 2:case"end":return n.stop()}}),n)})))()},cai:function(){var e=this;return s(a.default.mark((function n(){var r;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=e,t.showModal({title:"提示",content:"是否点踩",success:function(){var t=s(a.default.mark((function t(e){return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.confirm){t.next=5;break}return r.detail.crazilynum=parseInt(r.detail.crazilynum)+1,t.next=4,r.$api.update("yinlezixun",r.detail);case 4:r.$utils.msg("点踩成功");case 5:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()});case 2:case"end":return n.stop()}}),n)})))()},onSHTap:function(){this.$refs.popup.open()},onFinishTap:function(){var t=this;return s(a.default.mark((function e(){return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.detail.sfsh){e.next=3;break}return t.$utils.msg("请选择审核状态"),e.abrupt("return");case 3:if(t.detail.shhf){e.next=6;break}return t.$utils.msg("请填写审核回复"),e.abrupt("return");case 6:return"通过"==t.detail.sfsh&&(t.detail.sfsh="是"),"不通过"==t.detail.sfsh&&(t.detail.sfsh="否"),e.next=10,t.$api.update("yinlezixun",t.detail);case 10:t.$utils.msg("审核成功"),t.$refs.popup.close();case 12:case"end":return e.stop()}}),e)})))()},onCloseWinTap:function(){this.$refs.popup.close()},sfshChange:function(t){console.log(this.detail),this.sfshIndex=t.target.value,this.detail.sfsh=this.sfshOptions[this.sfshIndex]}}};e.default=u}).call(this,n("543d")["default"])},"245e":function(t,e,n){"use strict";n.r(e);var a=n("102f"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a},"8dee":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var a={mescrollUni:function(){return Promise.all([n.e("common/vendor"),n.e("components/mescroll-uni/mescroll-uni")]).then(n.bind(null,"9e7d"))},uniPopup:function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"6da0"))}},r=function(){var t=this,e=t.$createElement;t._self._c},i=[]},a61a:function(t,e,n){"use strict";n.r(e);var a=n("8dee"),r=n("245e");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("d077");var s,u=n("f0c5"),o=Object(u["a"])(r["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],s);e["default"]=o.exports},bc42:function(t,e,n){"use strict";(function(t){n("8f13");a(n("66fd"));var e=a(n("a61a"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},cd71:function(t,e,n){},d077:function(t,e,n){"use strict";var a=n("cd71"),r=n.n(a);r.a}},[["bc42","common/runtime","common/vendor"]]]);