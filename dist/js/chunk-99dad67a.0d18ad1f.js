(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-99dad67a"],{"0902":function(A,t,s){A.exports=s.p+"img/web3-4.b7909282.png"},"144e":function(A,t,s){},"1b26":function(A,t,s){"use strict";s("144e")},"1c2f":function(A,t,s){A.exports=s.p+"img/web4-1.a2e7c269.png"},"1e4b":function(A,t,s){"use strict";s.r(t);var a=function(){var A=this,t=A.$createElement,a=A._self._c||t;return a("div",{attrs:{id:"index"}},[a("tab-nav",{staticClass:"tabNav"}),a("div",{staticClass:"col-swipe-container",on:{mousewheel:function(t){return A.handleScroll(t)},DOMMouseScroll:function(t){return A.handleScroll(t)}}},[a("div",{ref:"colSwipeWrapper",staticClass:"col-swipe-wrapper"},[a("div",{staticClass:"floorBox floorBox2",class:{active:0==A.top}},[A._m(0),A._m(1)]),a("div",{staticClass:"floorBox floorBox1",class:{active:1==A.top}},[A._m(2),A._m(3)]),a("div",{staticClass:"floorBox floorBox4",class:{active:2==A.top}},[A._m(4),a("p",{staticClass:"title"},[A._v("投资方向")]),a("p",{staticClass:"brife"},[A._v("盈动资本深耕科技创新、企业服务和消费升级三大领域，致力于成为这些领域优秀创业者最坚定的支持者")]),a("div",{staticClass:"investments"},[a("el-carousel",{attrs:{interval:4e3,type:"card"}},[a("el-carousel-item",[a("div",{staticClass:"imgBox"},[a("img",{attrs:{src:s("70fd"),alt:""}})]),a("p",[A._v("科技创新")])]),a("el-carousel-item",[a("div",{staticClass:"imgBox"},[a("img",{attrs:{src:s("a9ef"),alt:""}})]),a("p",[A._v("企业服务")])]),a("el-carousel-item",[a("div",{staticClass:"imgBox"},[a("img",{attrs:{src:s("8645"),alt:""}})]),a("p",[A._v("消费升级")])])],1)],1)]),a("footer-box",{staticClass:"footerBox",attrs:{imgUrl:A.imgUrl}})],1)])],1)},e=[function(){var A=this,t=A.$createElement,a=A._self._c||t;return a("div",{staticClass:"bg"},[a("img",{attrs:{src:s("3f28"),alt:""}})])},function(){var A=this,t=A.$createElement,s=A._self._c||t;return s("div",{staticClass:"floorInner"},[s("p",{staticClass:"title"},[A._v("盈动资本")]),s("p",{staticClass:"brife"},[A._v("一家专注于科技和创新领域的早期投资机构。")]),s("p",{staticClass:"brife"},[A._v(" 我们致力于寻找并帮助那些心怀崇高而热切愿望，具创新能力和企业家精神的创业者，一起成就伟大事业！ ")])])},function(){var A=this,t=A.$createElement,a=A._self._c||t;return a("div",{staticClass:"bg"},[a("img",{attrs:{src:s("3865"),alt:""}})])},function(){var A=this,t=A.$createElement,s=A._self._c||t;return s("div",{staticClass:"floorInner"},[s("p",{staticClass:"title"},[A._v("只投我们想要的世界")]),s("div",{staticClass:"floatBox"},[s("div",{staticClass:"left"},[s("p",{staticClass:"brife"},[A._v("基金规模")]),s("p",{staticClass:"brife"},[A._v("20亿")])]),s("div",{staticClass:"right"},[s("p",{staticClass:"brife"},[A._v("项目数量")]),s("p",{staticClass:"brife"},[A._v("150+")])])])])},function(){var A=this,t=A.$createElement,a=A._self._c||t;return a("div",{staticClass:"bg"},[a("img",{attrs:{src:s("dbc7"),alt:""}})])}],i=s("c96d"),l=s("c027"),o={name:"index",components:{tabNav:i["a"],footerBox:l["a"]},data(){return{top:0,timer:null,imgUrl:s("2ae5")}},methods:{scroll(A){let t=A.wheelDelta||-A.detail;t>0?0!==this.top&&(this.top=this.top-1,this.$refs.colSwipeWrapper.style.top="-"+this.toPercent(this.top)):t<0&&3!==this.top&&(this.top=this.top+1,this.$refs.colSwipeWrapper.style.top="-"+this.toPercent(this.top))},handleScroll(A){this.timer&&clearTimeout(this.timer);let t=!this.timer;this.timer=setTimeout(()=>{this.timer=null},100),t&&this.scroll(A)},toPercent(A){var t=Number(100*A).toFixed(0);return t+="%",t}}},c=o,r=(s("1b26"),s("2877")),n=Object(r["a"])(c,a,e,!1,null,"6cbedd34",null);t["default"]=n.exports},"2ae5":function(A,t,s){A.exports=s.p+"img/web1-4.8766d3a7.png"},"2aed":function(A,t,s){A.exports=s.p+"img/web2-3.36e98aa5.png"},3865:function(A,t,s){A.exports=s.p+"img/web1-2.d79eee6b.png"},"3f28":function(A,t,s){A.exports=s.p+"img/web1-1.6bdfacfe.png"},"4c14":function(A,t,s){A.exports=s.p+"img/logo.58554f43.jpg"},"70fd":function(A,t,s){A.exports=s.p+"img/b2.226fd0dc.png"},8645:function(A,t,s){A.exports=s.p+"img/b3.cbf0e0bf.png"},"8aae":function(A,t,s){"use strict";s("90be")},"90be":function(A,t,s){},a9ef:function(A,t){A.exports="data:image/jpeg;base64,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"},bdf2:function(A,t,s){},c027:function(A,t,s){"use strict";var a=function(){var A=this,t=A.$createElement,s=A._self._c||t;return s("div",{staticClass:"floorBox floorBox6 p-r"},[s("div",{staticClass:"bg"},[s("img",{attrs:{src:A.imgUrl,alt:""}})]),A._m(0),A._m(1)])},e=[function(){var A=this,t=A.$createElement,s=A._self._c||t;return s("div",{staticClass:"floorInner"},[s("div",{staticClass:"tip"},[s("p",{staticClass:"footTitle"},[A._v("联系我们")]),s("p",{staticClass:"about"},[A._v("关于未来")]),s("p",[A._v("Do more, know more, be more.")]),s("p",[A._v("欢迎联系我们")]),s("p",[A._v("BP投递 bp@incapital.cn"),s("i",{staticClass:"m-r20"}),A._v("加入盈动 joinus@incapital.cn")])]),s("div",{staticClass:"btnGroups"},[s("a",{attrs:{href:"mailto:bp@incapital.cn"}},[A._v("BP投递")]),s("a",{attrs:{href:"mailto:joinus@incapital.cn"}},[A._v("加入盈动")])])])},function(){var A=this,t=A.$createElement,s=A._self._c||t;return s("div",{staticClass:"webFooter"},[s("p",{staticClass:"tip"},[A._v(" - 2011～2021 盈动资本|浙ICP备14004249号|Add：杭州市西湖区文一西路588号 中节能西溪首座A2-1-522|Tel：86-571-87997755 - ")])])}],i={name:"footerBox",data(){return{imgUrl:""}},created:function(){console.log(this.$route.path),"/index"==this.$route.path&&(this.imgUrl=s("2ae5")),"/investment"==this.$route.path&&(this.imgUrl=s("2aed")),"/team"==this.$route.path&&(this.imgUrl=s("0902")),"/contact"==this.$route.path&&(this.imgUrl=s("1c2f"))}},l=i,o=(s("8aae"),s("2877")),c=Object(o["a"])(l,a,e,!1,null,"74d5986c",null);t["a"]=c.exports},c96d:function(A,t,s){"use strict";var a=function(){var A=this,t=A.$createElement,a=A._self._c||t;return a("div",{staticClass:"clearfix",attrs:{id:"tabNav"}},[a("div",{staticClass:"logoBox"},[a("router-link",{attrs:{to:"index"}},[a("img",{attrs:{src:s("4c14"),alt:""}})])],1),a("a",{staticClass:"rightList",attrs:{href:"http://www.incapital.cn/sign"}},[A._v("管理")]),a("ul",{staticClass:"middleList"},[a("li",{class:{scal:"/index"==A.active}},[a("router-link",{attrs:{to:"index",tag:"a"}},[A._v("我们")])],1),a("li",{class:{scal:"/investment"==A.active}},[a("router-link",{attrs:{to:"investment",tag:"a"}},[A._v("投资")])],1),a("li",{class:{scal:"/team"==A.active}},[a("router-link",{attrs:{to:"team",tag:"a"}},[A._v("团队")])],1),a("li",{class:{scal:"/contact"==A.active}},[a("router-link",{attrs:{to:"contact",tag:"a"}},[A._v("联系")])],1)])])},e=[],i={name:"tabNav",data(){return{active:"false"}},mounted:function(){console.log(this.$route.path),"/index"==this.$route.path&&(this.active="/index"),"/investment"==this.$route.path&&(this.active="/investment"),"/team"==this.$route.path&&(this.active="/team"),"/contact"==this.$route.path&&(this.active="/contact")}},l=i,o=(s("ea67"),s("2877")),c=Object(o["a"])(l,a,e,!1,null,"b6ed1f6e",null);t["a"]=c.exports},dbc7:function(A,t,s){A.exports=s.p+"img/web1-3.e35b7a0f.png"},ea67:function(A,t,s){"use strict";s("bdf2")}}]);
//# sourceMappingURL=chunk-99dad67a.0d18ad1f.js.map