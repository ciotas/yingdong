(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39e354db"],{"0db1":function(t,s,i){},"0fd9":function(t,s,i){},"1e4b":function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"index"}},[a("tab-nav",{staticClass:"tabNav"}),a("div",{staticClass:"col-swipe-container",on:{mousewheel:function(s){return t.handleScroll(s)},DOMMouseScroll:function(s){return t.handleScroll(s)}}},[a("div",{ref:"colSwipeWrapper",staticClass:"col-swipe-wrapper"},[a("div",{staticClass:"floorBox floorBox1",class:{active:0==t.top}},[t._m(0),t._m(1)]),a("div",{staticClass:"floorBox floorBox2",class:{active:1==t.top}},[t._m(2),t._m(3)]),a("div",{staticClass:"floorBox floorBox4",class:{active:2==t.top}},[a("p",{staticClass:"title"},[t._v("投资方向")]),a("p",{staticClass:"brife"},[t._v("盈动资本深耕科技创新、企业服务和消费升级三大领域，致力于成为这些领域优秀创业者最坚定的支持者")]),a("div",{staticClass:"investments"},[a("el-carousel",{attrs:{interval:4e3,type:"card"}},[a("el-carousel-item",[a("div",{staticClass:"imgBox"},[a("img",{attrs:{src:i("5f49"),alt:""}})]),a("p",[t._v("科技创新")])]),a("el-carousel-item",[a("div",{staticClass:"imgBox"},[a("img",{attrs:{src:i("656c"),alt:""}})]),a("p",[t._v("企业服务")])]),a("el-carousel-item",[a("div",{staticClass:"imgBox"},[a("img",{attrs:{src:i("5f49"),alt:""}})]),a("p",[t._v("消费升级")])])],1)],1)]),a("footer-box",{staticClass:"footerBox"})],1)])],1)},e=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"bg"},[a("img",{attrs:{src:i("5f49"),alt:""}})])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"floorInner"},[i("p",{staticClass:"title"},[t._v("只投我们想要的世界")]),i("div",{staticClass:"floatBox"},[i("div",{staticClass:"left"},[i("p",{staticClass:"brife"},[t._v("基金规模")]),i("p",{staticClass:"brife"},[t._v("20亿")])]),i("div",{staticClass:"right"},[i("p",{staticClass:"brife"},[t._v("项目数量")]),i("p",{staticClass:"brife"},[t._v("150+")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"bg"},[a("img",{attrs:{src:i("5f49"),alt:""}})])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"floorInner"},[i("p",{staticClass:"title"},[t._v("盈动资本")]),i("p",{staticClass:"brife"},[t._v("一家专注于科技和创新领域的早期投资机构。")]),i("p",{staticClass:"brife"},[t._v(" 我们致力于寻找并帮助那些心怀崇高而热切愿望，具创新能力和企业家精神的创业者，一起成就伟大事业！ ")])])}],r=i("c96d"),l=i("c027"),c={name:"index",components:{tabNav:r["a"],footerBox:l["a"]},data(){return{top:0,timer:null}},methods:{scroll(t){let s=t.wheelDelta||-t.detail;s>0?0!==this.top&&(this.top=this.top-1,this.$refs.colSwipeWrapper.style.top="-"+this.toPercent(this.top)):s<0&&3!==this.top&&(this.top=this.top+1,this.$refs.colSwipeWrapper.style.top="-"+this.toPercent(this.top))},handleScroll(t){this.timer&&clearTimeout(this.timer);let s=!this.timer;this.timer=setTimeout(()=>{this.timer=null},100),s&&this.scroll(t)},toPercent(t){var s=Number(100*t).toFixed(0);return s+="%",s}}},o=c,n=(i("fbbe"),i("2877")),p=Object(n["a"])(o,a,e,!1,null,"e79cb370",null);s["default"]=p.exports},"4c14":function(t,s,i){t.exports=i.p+"img/logo.58554f43.jpg"},"5f49":function(t,s,i){t.exports=i.p+"img/bg1.a1e90859.png"},"656c":function(t,s,i){t.exports=i.p+"img/bg3.09eb4fcf.png"},8432:function(t,s,i){"use strict";i("d8c0")},b086:function(t,s,i){"use strict";i("0fd9")},c027:function(t,s,i){"use strict";var a=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},e=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"floorBox floorBox6 p-r"},[a("div",{staticClass:"bg"},[a("img",{attrs:{src:i("656c"),alt:""}})]),a("div",{staticClass:"floorInner"},[a("div",{staticClass:"tip"},[a("p",{staticClass:"footTitle"},[t._v("联系我们")]),a("p",{staticClass:"about"},[t._v("关于未来")]),a("p",[t._v("Do more, know more, be more.")]),a("p",[t._v("欢迎联系我们")]),a("p",[t._v("BP投递 bp@incapital.cn"),a("i",{staticClass:"m-r20"}),t._v("加入盈动 joinus@incapital.cn")])]),a("div",{staticClass:"btnGroups"},[a("a",{attrs:{href:"mailto:bp@incapital.cn"}},[t._v("BP投递")]),a("a",{attrs:{href:"mailto:joinus@incapital.cn"}},[t._v("加入盈动")])])]),a("div",{staticClass:"webFooter"},[a("p",{staticClass:"tip"},[t._v(" - 2011～2019 盈动资本|浙ICP备14004249号|Add：杭州市西湖区文一西路588号 中节能西溪首座A2-1-522|Tel：86-571-87997755 - ")])])])}],r={name:"footerBox"},l=r,c=(i("8432"),i("2877")),o=Object(c["a"])(l,a,e,!1,null,"eca4d16e",null);s["a"]=o.exports},c96d:function(t,s,i){"use strict";var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"clearfix",attrs:{id:"tabNav"}},[a("div",{staticClass:"logoBox"},[a("router-link",{attrs:{to:"index"}},[a("img",{attrs:{src:i("4c14"),alt:""}})])],1),a("a",{staticClass:"rightList",attrs:{href:"http://www.incapital.cn/sign"}},[t._v("管理")]),a("ul",{staticClass:"middleList"},[a("li",[a("router-link",{attrs:{to:"index",tag:"a"}},[t._v("我们")])],1),a("li",[a("router-link",{attrs:{to:"investment",tag:"a"}},[t._v("投资")])],1),a("li",[a("router-link",{attrs:{to:"team",tag:"a"}},[t._v("团队")])],1),a("li",[a("router-link",{attrs:{to:"contact",tag:"a"}},[t._v("联系")])],1)])])},e=[],r={name:"tabNav"},l=r,c=(i("b086"),i("2877")),o=Object(c["a"])(l,a,e,!1,null,"5c71cac8",null);s["a"]=o.exports},d8c0:function(t,s,i){},fbbe:function(t,s,i){"use strict";i("0db1")}}]);
//# sourceMappingURL=chunk-39e354db.b7606da6.js.map