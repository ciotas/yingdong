<template>
  <div id="tabNav" class="clearfix">
    <div class="logoBox">
      <router-link to="index"><img src="../assets/img/index/logo.jpg" alt="" /></router-link>
    </div>
    <a class="rightList" href="http://www.incapital.cn/sign">管理</a>
    <ul class="middleList">
      <li :class="{'scal':active =='/index'}">
        <router-link to="index" tag="a">我们</router-link>
      </li>
      <li :class="{'scal':active =='/investment'}">
        <router-link to="investment" tag="a">投资</router-link>
      </li>
      <li :class="{'scal':active =='/team'}">
        <router-link to="team" tag="a">团队</router-link>
      </li>
      <li :class="{'scal':active =='/contact'}">
        <router-link to="contact" tag="a">联系</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "tabNav",
  data() {
		return {
      active:"false"
    }
  },
  mounted: function(){
    console.log(this.$route.path)
    if(this.$route.path == "/index"){
      this.active ="/index"
    }
    if(this.$route.path == "/investment"){
      this.active ="/investment"
    }
    if(this.$route.path == "/team"){
      this.active ="/team"
    }
    if(this.$route.path == "/contact"){
      this.active ="/contact"
    }
	},
};
</script>
<style scoped lang="scss">
#tabNav {
  width: 100%;
  height: 60px;
  padding: 0 100px;
  box-sizing: border-box;
  background: #fff;
  border-bottom: 1px solid #e8e8e8;
  .logoBox {
    float: left;
    width: 140px;
    height: 60px;
    line-height: 60px;
    font-size: 0;
    position: relative;
    overflow: hidden;
    img {
      position: absolute;
      top: -65%;
      left: 0;
      width: 140px;
      // height: 40px;
      vertical-align: middle;
    }
  }
  .rightList {
    float: right;
    width: 140px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    color: black;
  }
  .middleList {
    height: 100%;
    text-align: center;
    li {
      display: inline-block;
      padding: 0 30px;
      line-height: 60px;
      font-size: 14px;
      font-family: HYQiHei-FZS, HYQiHei;
      font-weight: normal;
      color: black;
      a {
        color: black;
      }
    }
    .scal{
      font-size: 15px;
      font-weight: bold;
    }
  }
}
</style>
