<template>
  <div id="index">
    <tab-nav class="tabNav"> </tab-nav>
    <div
      class="col-swipe-container"
      @mousewheel="handleScroll($event)"
      @DOMMouseScroll="handleScroll($event)"
    >
      <div class="col-swipe-wrapper" ref="colSwipeWrapper">
        <div class="floorBox floorBox1" :class="{ active: top == 0 }">
          <div class="bg">
            <img src="../assets/img/index/b7.png" alt="" />
          </div>
          <div class="floorInner">
            <p class="brife">专注早期，致力于寻找并帮助那些</p>
            <p class="brife">
              心怀崇高而热切愿望，有企业家精神的创业者开创伟大事业
            </p>
            <p class="brife">
              我们已经在科技创新、企业服务和消费升级等领域投资了150+优秀的创业公司，有一批企业已经成长为行业的领导者
            </p>
          </div>
        </div>
        <div class="floorBox floorBox5" :class="{ active: top == 1 }">
          <div class="box">
            <el-carousel>
              <el-carousel-item>
                <div class="contentBox">
                  <div class="left">
                    <div class="center">
                      <div class="imgBox">
                        <img src="../assets/img/index/51xyk.png" alt="" />
                      </div>
                      <div class="describe-wrap">
                        <div class="describe">
                          中国领先的信用卡账单管理工具
                        </div>
                      </div>
                      <div class="compant_more">
                        <p><span>创始人</span><span>孙海涛</span></p>
                        <p><span>投资时间</span><span>2013年</span></p>
                        <p>
                          <span>官网</span
                          ><a href="https://www.u51.com/" target="_blank"
                            >https://www.u51.com/</a
                          >
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="right">
                    <img src="../assets/img/index/b5.jpg" alt="" />
                  </div>
                </div> </el-carousel-item
              ><el-carousel-item>
                <div class="contentBox">
                  <div class="left">
                    <div class="center">
                      <div class="imgBox">
                        <img src="../assets/img/index/xdkj.png" alt="" />
                      </div>
                      <div class="describe-wrap">
                        <div class="describe">
                          IoT+便民充电服务创领者
                        </div>
                      </div>
                      <div class="compant_more">
                        <p><span>创始人</span><span>唐永波</span></p>
                        <p><span>投资时间</span><span>2016年</span></p>
                        <p>
                          <span>官网</span
                          ><a href="http://www.xiaodian.so/" target="_blank"
                            >http://www.xiaodian.so/</a
                          >
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="right">
                    <img src="../assets/img/index/b5.jpg" alt="" />
                  </div>
                </div> </el-carousel-item
              ><el-carousel-item>
                <div class="contentBox">
                  <div class="left">
                    <div class="center">
                      <div class="imgBox">
                        <img src="../assets/img/index/rrsp.jpeg" alt="" />
                      </div>
                      <div class="describe-wrap">
                        <div class="describe">
                          国内专业的海外视频内容社区
                        </div>
                      </div>
                      <div class="compant_more">
                        <p><span>创始人</span><span>周为民</span></p>
                        <p><span>投资时间</span><span>2015年</span></p>
                        <p>
                          <span>官网</span
                          ><a href="http://www.rr.tv/#/" target="_blank"
                            >http://www.rr.tv/#/</a
                          >
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="right">
                    <img src="../assets/img/index/b5.jpg" alt="" />
                  </div>
                </div>
              </el-carousel-item>
              <el-carousel-item>
                <div class="contentBox">
                  <div class="left">
                    <div class="center">
                      <div class="imgBox">
                        <img src="../assets/img/index/yow.png" alt="" />
                      </div>
                      <div class="describe-wrap">
                        <div class="describe">
                          科技+产业+投资平台和智库
                        </div>
                      </div>
                      <div class="compant_more">
                        <p><span>创始人</span><span>王彬</span></p>
                        <p><span>投资时间</span><span>2014年</span></p>
                        <p>
                          <span>官网</span
                          ><a href="https://www.iyiou.com/" target="_blank"
                            >https://www.iyiou.com/</a
                          >
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="right">
                    <img src="../assets/img/index/b5.jpg" alt="" />
                  </div>
                </div>
              </el-carousel-item>
              <el-carousel-item>
                <div class="contentBox">
                  <div class="left">
                    <div class="center">
                      <div class="imgBox">
                        <img src="../assets/img/index/cp.png" alt="" />
                      </div>
                      <div class="describe-wrap">
                        <div class="describe">
                          青年文化媒体平台
                        </div>
                      </div>
                      <div class="compant_more">
                        <p><span>创始人</span><span>陶伟华</span></p>
                        <p><span>投资时间</span><span>2015年</span></p>
                        <p>
                          <span>官网</span
                          ><a href="https://chaping.cn/" target="_blank"
                            >https://chaping.cn/</a
                          >
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="right">
                    <img src="../assets/img/index/b5.jpg" alt="" />
                  </div>
                </div>
              </el-carousel-item>
              <el-carousel-item>
                <div class="contentBox">
                  <div class="left">
                    <div class="center">
                      <div class="imgBox">
                        <img src="../assets/img/index/ywwl.png" alt="" />
                      </div>
                      <div class="describe-wrap">
                        <div class="describe">
                          国内领先的综合性数字营销服务提供商
                        </div>
                      </div>
                      <div class="compant_more">
                        <p><span>创始人</span><span>谢如栋</span></p>
                        <p><span>投资时间</span><span>2017年</span></p>
                        <p>
                          <span>官网</span
                          ><a href="https://www.ywwl.com/" target="_blank"
                            >https://www.ywwl.com/</a
                          >
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="right">
                    <img src="../assets/img/index/b5.jpg" alt="" />
                  </div>
                </div>
              </el-carousel-item>
              <el-carousel-item>
                <div class="contentBox">
                  <div class="left">
                    <div class="center">
                      <div class="imgBox">
                        <img src="../assets/img/index/ppy.png" alt="" />
                      </div>
                      <div class="describe-wrap">
                        <div class="describe">
                          面向中小型非品牌便利店的智能集采平台
                        </div>
                      </div>
                      <div class="compant_more">
                        <p><span>创始人</span><span>徐意</span></p>
                        <p><span>投资时间</span><span>2018年</span></p>
                        <p>
                          <span>官网</span
                          ><a href="https://www.pinpianyi.com/" target="_blank"
                            >https://www.pinpianyi.com/</a
                          >
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="right">
                    <img src="../assets/img/index/b5.jpg" alt="" />
                  </div>
                </div>
              </el-carousel-item>
              <el-carousel-item>
                <div class="contentBox">
                  <div class="left">
                    <div class="center">
                      <div class="imgBox">
                        <img src="../assets/img/index/mz.jpg" alt="" />
                      </div>
                      <div class="describe-wrap">
                        <div class="describe">
                          原创故事生产和IP运营公司
                        </div>
                      </div>
                      <div class="compant_more">
                        <p><span>创始人</span><span>敬庶人</span></p>
                        <p><span>投资时间</span><span>2017年</span></p>
                        <p>
                          <span>官网</span
                          ><a href="http://www.damozhou.com/" target="_blank"
                            >http://www.damozhou.com/</a
                          >
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="right">
                    <img src="../assets/img/index/b5.jpg" alt="" />
                  </div>
                </div>
              </el-carousel-item>
              <el-carousel-item>
                <div class="contentBox">
                  <div class="left">
                    <div class="center">
                      <div class="imgBox">
                        <img src="../assets/img/index/ak.png" alt="" />
                      </div>
                      <div class="describe-wrap">
                        <div class="describe">
                          基于企业微信的私域流量运营平台
                        </div>
                      </div>
                      <div class="compant_more">
                        <p><span>创始人</span><span>何健星</span></p>
                        <p><span>投资时间</span><span>2017年</span></p>
                        <p>
                          <span>官网</span
                          ><a href="http://www.aiagain.com/index.html" target="_blank"
                            >http://www.aiagain.com/index.html</a
                          >
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="right">
                    <img src="../assets/img/index/b5.jpg" alt="" />
                  </div>
                </div>
              </el-carousel-item>
              <el-carousel-item>
                <div class="contentBox">
                  <div class="left">
                    <div class="center">
                      <div class="imgBox">
                        <img src="../assets/img/index/nncz.png" alt="" />
                      </div>
                      <div class="describe-wrap">
                        <div class="describe">
                          儿童体育教育平台
                        </div>
                      </div>
                      <div class="compant_more">
                        <p><span>创始人</span><span>叶峰</span></p>
                        <p><span>投资时间</span><span>2018年</span></p>
                        <p>
                          <span>官网</span
                          ><a href="https://www.nncz.cn/" target="_blank"
                            >https://www.nncz.cn/</a
                          >
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="right">
                    <img src="../assets/img/index/b5.jpg" alt="" />
                  </div>
                </div>
              </el-carousel-item>
              <el-carousel-item>
                <div class="contentBox">
                  <div class="left">
                    <div class="center">
                      <div class="imgBox">
                        <img src="../assets/img/index/EMQ.jpeg" alt="" />
                      </div>
                      <div class="describe-wrap">
                        <div class="describe">
                          面向 5G 和物联网市场的消息与流处理开源软件公司
                        </div>
                      </div>
                      <div class="compant_more">
                        <p><span>创始人</span><span>李枫</span></p>
                        <p><span>投资时间</span><span>2016年</span></p>
                        <p>
                          <span>官网</span
                          ><a href="https://www.emqx.io/cn/" target="_blank"
                            >https://www.emqx.io/cn/</a
                          >
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="right">
                    <img src="../assets/img/index/b5.jpg" alt="" />
                  </div>
                </div>
              </el-carousel-item>
              <el-carousel-item>
                <div class="contentBox">
                  <div class="left">
                    <div class="center">
                      <div class="imgBox">
                        <img src="../assets/img/index/makj.png" alt="" />
                      </div>
                      <div class="describe-wrap">
                        <div class="describe">
                          云计算时代的新兴网络安全公司
                        </div>
                      </div>
                      <div class="compant_more">
                        <p><span>创始人</span><span>聂万泉</span></p>
                        <p><span>投资时间</span><span>2017年</span></p>
                        <p>
                          <span>官网</span
                          ><a href="https://www.moresec.cn/" target="_blank"
                            >https://www.moresec.cn/</a
                          >
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="right">
                    <img src="../assets/img/index/b5.jpg" alt="" />
                  </div>
                </div>
              </el-carousel-item>
              <el-carousel-item>
                <div class="contentBox">
                  <div class="left">
                    <div class="center">
                      <div class="imgBox">
                        <img src="../assets/img/index/dsy.png" alt="" />
                      </div>
                      <div class="describe-wrap">
                        <div class="describe">
                          数据中台基础设施建设服务商
                        </div>
                      </div>
                      <div class="compant_more">
                        <p><span>创始人</span><span>陈吉平</span></p>
                        <p><span>投资时间</span><span>2017年</span></p>
                        <p>
                          <span>官网</span
                          ><a href="https://www.dtstack.com/" target="_blank"
                            >https://www.dtstack.com/</a
                          >
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="right">
                    <img src="../assets/img/index/b5.jpg" alt="" />
                  </div>
                </div>
              </el-carousel-item>
              <el-carousel-item>
                <div class="contentBox">
                  <div class="left">
                    <div class="center">
                      <div class="imgBox">
                        <img src="../assets/img/index/EasyStack.jpg" alt="" />
                      </div>
                      <div class="describe-wrap">
                        <div class="describe">
                          OpenStack云解决方案和服务提供商
                        </div>
                      </div>
                      <div class="compant_more">
                        <p><span>创始人</span><span>陈喜伦</span></p>
                        <p><span>投资时间</span><span>2015年</span></p>
                        <p>
                          <span>官网</span
                          ><a href="https://www.easystack.cn/" target="_blank"
                            >https://www.easystack.cn/</a
                          >
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="right">
                    <img src="../assets/img/index/b5.jpg" alt="" />
                  </div>
                </div>
              </el-carousel-item>
              <el-carousel-item>
                <div class="contentBox">
                  <div class="left">
                    <div class="center">
                      <div class="imgBox">
                        <img src="../assets/img/index/SRT.png" alt="" />
                      </div>
                      <div class="describe-wrap">
                        <div class="describe">
                          以软体机器人技术为基础的创新型科技公司
                        </div>
                      </div>
                      <div class="compant_more">
                        <p><span>创始人</span><span>高少龙</span></p>
                        <p><span>投资时间</span><span>2017年</span></p>
                        <p>
                          <span>官网</span
                          ><a href="http://www.softrobottech.com/" target="_blank"
                            >http://www.softrobottech.com/</a
                          >
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="right">
                    <img src="../assets/img/index/b5.jpg" alt="" />
                  </div>
                </div>
              </el-carousel-item>
              <el-carousel-item>
                <div class="contentBox">
                  <div class="left">
                    <div class="center">
                      <div class="imgBox">
                        <img src="../assets/img/index/youshu.png" alt="" />
                      </div>
                      <div class="describe-wrap">
                        <div class="describe">
                          数字科技应用服务专家
                        </div>
                      </div>
                      <div class="compant_more">
                        <p><span>创始人</span><span>张利江</span></p>
                        <p><span>投资时间</span><span>2019年</span></p>
                        <p>
                          <span>官网</span
                          ><a href="https://www.youshu.com.cn/" target="_blank"
                            >https://www.youshu.com.cn/</a
                          >
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="right">
                    <img src="../assets/img/index/b5.jpg" alt="" />
                  </div>
                </div>
              </el-carousel-item>
              <el-carousel-item>
                <div class="contentBox">
                  <div class="left">
                    <div class="center">
                      <div class="imgBox">
                        <img src="../assets/img/index/qzkj.png" alt="" />
                      </div>
                      <div class="describe-wrap">
                        <div class="describe">
                          网络数据安全方案解决服务商
                        </div>
                      </div>
                      <div class="compant_more">
                        <p><span>创始人</span><span>方兴</span></p>
                        <p><span>投资时间</span><span>2018年</span></p>
                        <p>
                          <span>官网</span
                          ><a href="https://qzkeji.com.cn/" target="_blank"
                            >https://qzkeji.com.cn/</a
                          >
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="right">
                    <img src="../assets/img/index/b5.jpg" alt="" />
                  </div>
                </div>
              </el-carousel-item>
              <el-carousel-item>
                <div class="contentBox">
                  <div class="left">
                    <div class="center">
                      <div class="imgBox">
                        <img src="../assets/img/index/yzwl.png" alt="" />
                      </div>
                      <div class="describe-wrap">
                        <div class="describe">
                          智能工业一站式服务商
                        </div>
                      </div>
                      <div class="compant_more">
                        <p><span>创始人</span><span>司世南</span></p>
                        <p><span>投资时间</span><span>2018年</span></p>
                        <p>
                          <span>官网</span
                          ><a href="https://www.mgm-iot.com/" target="_blank"
                            >https://www.mgm-iot.com/</a
                          >
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="right">
                    <img src="../assets/img/index/b5.jpg" alt="" />
                  </div>
                </div>
              </el-carousel-item>
              <el-carousel-item>
                <div class="contentBox">
                  <div class="left">
                    <div class="center">
                      <div class="imgBox">
                        <img src="../assets/img/index/ydRPA.jpeg" alt="" />
                      </div>
                      <div class="describe-wrap">
                        <div class="describe">
                          RPA解决方案提供商
                        </div>
                      </div>
                      <div class="compant_more">
                        <p><span>创始人</span><span>金礼剑</span></p>
                        <p><span>投资时间</span><span>2019年</span></p>
                        <p>
                          <span>官网</span
                          ><a href="https://www.winrobot360.com/" target="_blank"
                            >https://www.winrobot360.com/</a
                          >
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="right">
                    <img src="../assets/img/index/b5.jpg" alt="" />
                  </div>
                </div>
              </el-carousel-item>
              <el-carousel-item>
                <div class="contentBox">
                  <div class="left">
                    <div class="center">
                      <div class="imgBox">
                        <img src="../assets/img/index/mxkj.png" alt="" />
                      </div>
                      <div class="describe-wrap">
                        <div class="describe">
                          互动营销游戏产品研发商
                        </div>
                      </div>
                      <div class="compant_more">
                        <p><span>创始人</span><span>朱健瑞</span></p>
                        <p><span>投资时间</span><span>2020年</span></p>
                        <p>
                          <span>官网</span
                          ><a href="http://www.moxigame.cn/#/" target="_blank"
                            >http://www.moxigame.cn/#/</a
                          >
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="right">
                    <img src="../assets/img/index/b5.jpg" alt="" />
                  </div>
                </div>
              </el-carousel-item>
              <el-carousel-item>
                <div class="contentBox">
                  <div class="left">
                    <div class="center">
                      <div class="imgBox">
                        <img src="../assets/img/index/shb.png" alt="" />
                      </div>
                      <div class="describe-wrap">
                        <div class="describe">
                          售后客户服务系统开发商
                        </div>
                      </div>
                      <div class="compant_more">
                        <p><span>创始人</span><span>李明</span></p>
                        <p><span>投资时间</span><span>2019年</span></p>
                        <p>
                          <span>官网</span
                          ><a href="https://www.shb.ltd/" target="_blank"
                            >https://www.shb.ltd/</a
                          >
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="right">
                    <img src="../assets/img/index/b5.jpg" alt="" />
                  </div>
                </div>
              </el-carousel-item>
              <el-carousel-item>
                <div class="contentBox">
                  <div class="left">
                    <div class="center">
                      <div class="imgBox">
                        <img src="../assets/img/index/hpy.png" alt="" />
                      </div>
                      <div class="describe-wrap">
                        <div class="describe">
                          无代码应用搭建平台
                        </div>
                      </div>
                      <div class="compant_more">
                        <p><span>创始人</span><span>陈金洲</span></p>
                        <p><span>投资时间</span><span>2020年</span></p>
                        <p>
                          <span>官网</span
                          ><a href="https://hipacloud.com/" target="_blank"
                            >https://hipacloud.com/</a
                          >
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="right">
                    <img src="../assets/img/index/b5.jpg" alt="" />
                  </div>
                </div>
              </el-carousel-item>
              <el-carousel-item>
                <div class="contentBox">
                  <div class="left">
                    <div class="center">
                      <div class="imgBox">
                        <img src="../assets/img/index/KodeRover.png" alt="" />
                      </div>
                      <div class="describe-wrap">
                        <div class="describe">
                          云原生 DevOps 服务商
                        </div>
                      </div>
                      <div class="compant_more">
                        <p><span>创始人</span><span>李倩</span></p>
                        <p><span>投资时间</span><span>2020年</span></p>
                        <p>
                          <span>官网</span
                          ><a href="https://www.koderover.com/" target="_blank"
                            >https://www.koderover.com/</a
                          >
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="right">
                    <img src="../assets/img/index/b5.jpg" alt="" />
                  </div>
                </div>
              </el-carousel-item>
              <el-carousel-item>
                <div class="contentBox">
                  <div class="left">
                    <div class="center">
                      <div class="imgBox">
                        <img src="../assets/img/index/teamind.png" alt="" />
                      </div>
                      <div class="describe-wrap">
                        <div class="describe">
                          新一代远程互动会议平台
                        </div>
                      </div>
                      <div class="compant_more">
                        <p><span>创始人</span><span>王晓磊</span></p>
                        <p><span>投资时间</span><span>2020年</span></p>
                        <p>
                          <span>官网</span
                          ><a href="https://www.teamind.co/" target="_blank"
                            >https://www.teamind.co/</a
                          >
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="right">
                    <img src="../assets/img/index/b5.jpg" alt="" />
                  </div>
                </div>
              </el-carousel-item>
              <el-carousel-item>
                <div class="contentBox">
                  <div class="left">
                    <div class="center">
                      <div class="imgBox">
                        <img src="../assets/img/index/xlb.jpeg" alt="" />
                      </div>
                      <div class="describe-wrap">
                        <div class="describe">
                          专业的商业情报搜索工具
                        </div>
                      </div>
                      <div class="compant_more">
                        <p><span>创始人</span><span>汪拥军</span></p>
                        <p><span>投资时间</span><span>2020年</span></p>
                        <p>
                          <span>官网</span
                          ><a href="https://www.xiaolanben.com/" target="_blank"
                            >https://www.xiaolanben.com/</a
                          >
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="right">
                    <img src="../assets/img/index/b5.jpg" alt="" />
                  </div>
                </div>
              </el-carousel-item>
              <el-carousel-item>
                <div class="contentBox">
                  <div class="left">
                    <div class="center">
                      <div class="imgBox">
                        <img src="../assets/img/index/ypy.png" alt="" />
                      </div>
                      <div class="describe-wrap">
                        <div class="describe">
                          中国领先的数据云服务商企业
                        </div>
                      </div>
                      <div class="compant_more">
                        <p><span>创始人</span><span>刘亮为</span></p>
                        <p><span>投资时间</span><span>2015年</span></p>
                        <p>
                          <span>官网</span
                          ><a href="https://www.upyun.com/" target="_blank"
                            >https://www.upyun.com/</a
                          >
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="right">
                    <img src="../assets/img/index/b5.jpg" alt="" />
                  </div>
                </div>
              </el-carousel-item>
              <el-carousel-item>
                <div class="contentBox">
                  <div class="left">
                    <div class="center">
                      <div class="imgBox">
                        <img src="../assets/img/index/ShowMeBug.png" alt="" />
                      </div>
                      <div class="describe-wrap">
                        <div class="describe">
                          程序员在线面试工具
                        </div>
                      </div>
                      <div class="compant_more">
                        <p><span>创始人</span><span>李亚飞</span></p>
                        <p><span>投资时间</span><span>2020年</span></p>
                        <p>
                          <span>官网</span
                          ><a href="https://www.showmebug.com/" target="_blank"
                            >https://www.showmebug.com/</a
                          >
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="right">
                    <img src="../assets/img/index/b5.jpg" alt="" />
                  </div>
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
        <footer-box class="footerBox"> </footer-box>
      </div>
    </div>
  </div>
</template>
<script>
  import tabNav from "../components/tabNav";
  import footerBox from "../components/footerBox";
  export default {
    name: "index",
    components: { tabNav ,footerBox},
  data() {
    return {
      top: 0,
      timer: null,
    };
  },
  methods: {
    scroll(e) {
      let direction = e.wheelDelta || -e.detail;
      if (direction > 0) {
        if (this.top !== 0) {
          this.top = this.top - 1;
          this.$refs.colSwipeWrapper.style.top = "-" + this.toPercent(this.top);
        }
      } else if (direction < 0) {
        if (this.top !== 2) {
          this.top = this.top + 1;
          this.$refs.colSwipeWrapper.style.top = "-" + this.toPercent(this.top);
        }
      }
    },
    handleScroll(e) {
      if (this.timer) clearTimeout(this.timer);
      let callNow = !this.timer;
      this.timer = setTimeout(() => {
        this.timer = null;
      }, 300);
      if (callNow) this.scroll(e);
    },
    toPercent(point) {
      var str = Number(point * 100).toFixed(0);
      str += "%";
      return str;
    },
  },
};
</script>
<style scoped lang="scss">
#index {
  width: 100%;
  height: 100%;
  min-width: 1150px;
  position: relative;
  .tabNav {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
  }
  .col-swipe-container {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    .col-swipe-wrapper {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      transition: all 0.5s;
      .floorBox {
        width: 100%;
        height: 100%;
        background-color: transparent;
        overflow: hidden;
        position: relative;
        .bg {
          position: absolute;
          top: -10%;
          left: -10%;
          width: 120%;
          height: 120%;
          z-index: -2;
          img {
            width: 100%;
            height: 100%;
          }
          // background-repeat: no-repeat;
          // background-size: cover;
          // background-position: 50% 50%;
          // transform: scale(1.2, 1.2);
          transition: all 2s linear;
          // background: transparent 50% 50%/120% 120% no-repeat;
          // transition: all 2s linear;
        }
        &.floorBox1 {
          .floorInner {
            width: 100%;
            height: 100%;
            padding: 200px 0 0 0;
            box-sizing: border-box;
            font-family: HYQiHei-AZEJF, HYQiHei;
            color: #ffffff;
            letter-spacing: 15px;
            cursor: pointer;
            .title {
              font-size: 60px;
              font-weight: bolder;
              line-height: 150px;
              text-align: center;
              transform: translateY(50px);
              opacity: 0;
              transition: all 0;
            }
            .floatBox {
              width: 60%;
              margin: 70px auto 0;
              .left {
                float: left;
                width: 50%;
              }
              .right {
                float: right;
                width: 50%;
              }
            }
            .brife {
              width: 60%;
              margin: 50px auto 0;
              text-align: center;
              font-size: 32px;
              line-height: 60px;
              transform: translateY(50px);
              opacity: 0;
              transition: all 0;
            }
          }
        }
        &.floorBox2 {
          .floorInner {
            width: 100%;
            height: 100%;
            padding: 150px 0 0 0;
            box-sizing: border-box;
            font-family: HYQiHei-AZEJF, HYQiHei;
            color: #ffffff;
            letter-spacing: 15px;
            cursor: pointer;
            .title {
              width: 50%;
              margin: 0 auto;
              font-size: 90px;
              font-weight: bolder;
              line-height: 150px;
              text-align: center;
              transform: translateY(50px);
              opacity: 0;
              transition: all 0;
            }
            .brife {
              width: 50%;
              margin: 50px auto 0;
              font-size: 32px;
              line-height: 60px;
              transform: translateY(50px);
              opacity: 0;
              transition: all 0;
            }
          }
        }
        &.floorBox3 {
          background: white;
          .jupaiBox {
            width: 100%;
            height: 100%;
            .top {
              height: 160px;
              padding: 60px 0 0;
              text-align: center;
              .title {
                height: 90px;
                line-height: 90px;
                font-size: 0;
                img {
                  display: inline-block;
                  width: 200px;
                  height: 48px;
                  padding-right: 20px;
                  border-right: 1px solid #a1a1b9;
                  vertical-align: middle;
                }
                span {
                  display: inline-block;
                  margin-left: 20px;
                  vertical-align: middle;
                  font-size: 48px;
                  font-family: HYQiHei-GEW, HYQiHei;
                  color: #1e1e29;
                }
              }
              .brife {
                line-height: 50px;
                font-family: HYQiHei-FZS, HYQiHei;
                font-size: 18px;
                color: #aaaaaa;
                letter-spacing: 10px;
              }
            }
            .middle {
              width: 1320px;
              height: 500px;
              margin: 0 auto;
              /deep/.row-swiperBox {
                width: 100%;
                height: 100%;
                .el-carousel {
                  width: 100%;
                  height: 100%;
                  .el-carousel__container {
                    width: 100%;
                    height: calc(100% - 40px);
                    .el-carousel__item {
                      width: 100%;
                      height: 100%;
                      img {
                        width: 100%;
                        height: 100%;
                      }
                    }
                  }
                  .el-carousel__indicators {
                    width: 650px;
                    text-align: center;
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    z-index: 100;
                    .el-carousel__indicator {
                      button {
                        width: 200px;
                        height: 8px;
                        background: #a1a1b9;
                        border-radius: 5px;
                        opacity: 0.4;
                      }
                      &.is-active {
                        button {
                          background: #fc5e40;
                        }
                      }
                    }
                  }
                }
              }
            }
            .bottom {
              text-align: center;
              line-height: 30px;
              margin-top: 0px;
              font-size: 14px;
              font-family: HYQiHei-FZS, HYQiHei;
              font-weight: normal;
              color: #aaaaaa;
            }
          }
        }
        &.floorBox4 {
          /deep/.investments {
            width: 80%;
            height: 70%;
            margin: 150px auto 0;
            // background: red;
            .el-carousel {
              width: 100%;
              height: 100%;
              .el-carousel__container {
                width: 100%;
                // height: 100%;
                height: calc(100% - 40px);
                .el-carousel__item {
                  .imgBox {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    z-index: 0;
                    img {
                      width: 100%;
                      height: 100%;
                    }
                  }
                  p {
                    position: absolute;
                    top: 0;
                    left: 0;
                    z-index: 1;
                    width: 100%;
                    height: 100%;
                    line-height: 700%;
                    text-align: center;
                    color: white;
                    font-size: 80px;
                  }
                }
              }
            }
          }

          .jujuBox {
            width: 750px;
            height: 100%;
            padding: 60px 0 0;
            box-sizing: border-box;
            margin: 0 auto;
            .top {
              height: 160px;
              text-align: center;
              font-family: HYQiHei-GEW, HYQiHei;
              font-weight: normal;
              color: #ffffff;
              .title {
                font-size: 48px;
                line-height: 90px;
                span {
                  letter-spacing: 9px;
                }
              }
              .brife {
                line-height: 50px;
                font-size: 18px;
                color: rgba(255, 255, 255, 0.5);
                letter-spacing: 10px;
              }
            }
            .bottom {
              .left {
                float: left;
                width: 350px;
                height: 600px;
                img {
                  width: 100%;
                  height: 100%;
                }
              }
              .right {
                float: left;
                padding: 150px 0 0 140px;
                p {
                  width: 240px;
                  height: 50px;
                  text-align: center;
                  line-height: 50px;
                  margin-bottom: 30px;
                  background: #1e1e29;
                  border-radius: 25px;
                  font-size: 18px;
                  font-family: HYQiHei-GZS, HYQiHei;
                  color: #ffffff;
                  letter-spacing: 1px;
                  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.25);
                  cursor: pointer;
                  &.ios {
                    margin-bottom: 60px;
                  }
                  &.jujuCreator {
                    background: linear-gradient(
                      90deg,
                      #fe543a 0%,
                      #f88857 100%
                    );
                    a {
                      color: #ffffff;
                    }
                  }
                }
              }
            }
          }
          // .bg {
          //   background-image: url("../assets/img/index/bg3.png");
          // }
        }
        &.floorBox5 {
          /deep/.box {
            width: 100%;
            height: 100%;
            padding: 60px 0 0;
            box-sizing: border-box;
            .el-carousel {
              width: 100%;
              height: 100%;
              .el-carousel__container {
                width: 100%;
                height: 100%;
                // height: calc(100% - 40px);
                .el-carousel__item {
                  width: 100%;
                  height: 100%;
                  .contentBox {
                    width: 100%;
                    height: 100%;
                    > div {
                      display: inline-block;
                      width: 50%;
                      height: 100%;
                    }
                    .left {
                      background: #4a90e2;
                      position: relative;
                      .center {
                        height: auto;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        .imgBox {
                          width: 150px;
                          height: auto;
                          max-height:150px;
                          img {
                            width: 100%;
                            height: 100%;
                          }
                        }
                        .describe-wrap {
                          // width: 70%;
                          color: #fff;
                          margin-top: 30px;
                          font-size: 16px;
                          line-height: 2;
                          word-break: break-word;
                        }
                        .compant_more {
                          margin-top: 20px;
                          p {
                            display: flex;
                            margin-top: 20px;
                            color: #fff;
                            font-size: 14px;
                            span:first-child {
                              width: 80px;
                            }
                            a {
                              color: white;
                            }
                          }
                        }
                      }
                    }
                    .right {
                      img {
                        width: 100%;
                        height: 100%;
                      }
                    }
                  }
                }
                .el-carousel__item:nth-child(2n) {
                  background-color: #99a9bf;
                }
                .el-carousel__item:nth-child(2n + 1) {
                  background-color: #d3dce6;
                }
              }
              .el-carousel__indicators {
                width: 650px;
                text-align: center;
                position: absolute;
                bottom: 0;
                left: 50%;
                z-index: 100;
                // background: red;
                .el-carousel__indicator {
                  button {
                    width: 8px;
                    height: 8px;
                    background: #a1a1b9;
                    border-radius: 5px;
                    opacity: 0.4;
                  }
                  &.is-active {
                    button {
                      background: #fc5e40;
                    }
                  }
                }
              }
            }
          }
        }
        &.floorBox6 {
          .floorInner {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 50%;
            height: auto;
            transform: translate(-50%, -80%);
            .tip {
              p {
                line-height: 36px;
                text-align: center;
                font-size: 18px;
                color: white;
              }
            }
            .btnGroups {
              text-align: center;
              margin-top: 50px;
              p {
                display: inline-block;
                width: 116px;
                padding: 10px 20px;
                margin-right: 50px;
                background: transparent;
                border: 1px solid #fff;
                cursor: pointer;
                color: #fff;
                font-size: 16px;
                text-align: center;
                &:last-child {
                  margin-right: 0;
                }
              }
            }
          }
          .webFooter {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            .tip {
              text-align: center;
              padding: 30px 0;
              color: hsla(0, 0%, 100%, 0.6);
            }
          }
        }
        &.active {
          .floorInner {
            .title {
              opacity: 1;
              transform: translateY(0);
              transition: all 1.5s 1s;
            }
            .brife {
              opacity: 1;
              transform: translateY(0);
              transition: all 1.5s 1.5s;
            }
          }
          .bg {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            // transform: scale(1, 1);
            transition: all 10s linear;
          }
          // &.bg {
          //   background-size: 100% 100%;
          //   transition: all 10s linear;
          // }
        }
      }
    }
  }
}
@media screen and (max-width: 1400px) {
  #index {
    .col-swipe-container {
      .col-swipe-wrapper {
        .floorBox {
          &.floorBox1{
            .floorInner {
              padding: 10% 0 0 0;

              .title {
                font-size: 30px;
                font-weight: initial;
              }
              .brife {
                width: 85%;
                margin: 30px auto 0;
                font-size: 30px;
              }
            }
          }
          &.active {
            .floorInner {
              .title {
                opacity: 1;
                transform: translateY(0);
                transition: all 1.5s 1s;
              }

              .brife {
                opacity: 1;
                transform: translateY(0);
                transition: all 1.5s 1.5s;
              }
            }

            .bg {
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              // transform: scale(1, 1);
              transition: all 10s linear;
            }

            // &.bg {
            //   background-size: 100% 100%;
            //   transition: all 10s linear;
            // }
          }
        }
      }
    }
  }
}
// @media (max-height: 568px) {
//   #index {
//     .col-swipe-container {
//       .col-swipe-wrapper {
//         .floorBox {
//           &.floorBox2 {
//             .jupaiBox {
//               .top {
//                 height: 90px;
//                 .title {
//                   height: 60px;
//                   line-height: 60px;
//                 }
//                 .brife {
//                   line-height: 30px;
//                 }
//               }
//               .middle {
//                 width: 990px;
//                 height: 375px;
//               }
//               .bottom {
//                 margin-top: 0px;
//               }
//             }
//           }
//           &.floorBox3 {
//             .jujuBox {
//               .top {
//                 height: 100px;
//                 .title {
//                   line-height: 70px;
//                 }
//                 .brife {
//                   line-height: 30px;
//                 }
//               }
//               .bottom {
//                 .left {
//                   width: 300px;
//                   height: 400px;
//                 }
//                 .right {
//                   padding: 100px 0 0 120px;
//                 }
//               }
//             }
//           }
//           &.floorBox4 {
//             .partnersBox {
//               header {
//                 height: 80px;
//                 line-height: 80px;
//               }
//               dl {
//                 margin-bottom: 10px;
//               }
//             }
//             .footerNav {
//               height: 150px;
//               opacity: 0;
//               transition: all 0.5s;
//               .relatedAgreement {
//                 height: 30px;
//                 display: inline;
//                 div {
//                   p {
//                     height: 30px;
//                     line-height: 30px;
//                   }
//                 }
//               }
//               .aboutBox {
//                 margin-top: 20px;
//               }
//               .tip {
//                 margin-top: 20px;
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }
// @media (min-height: 568px) {
//   #index {
//     .col-swipe-container {
//       .col-swipe-wrapper {
//         .floorBox {
//           &.floorBox2 {
//             .jupaiBox {
//               .top {
//                 height: 90px;
//                 .title {
//                   height: 60px;
//                   line-height: 60px;
//                 }
//                 .brife {
//                   line-height: 30px;
//                 }
//               }
//               .middle {
//                 width: 990px;
//                 height: 375px;
//               }
//               .bottom {
//                 margin-top: 0px;
//               }
//             }
//           }
//           &.floorBox3 {
//             .jujuBox {
//               .top {
//                 height: 100px;
//                 .title {
//                   line-height: 70px;
//                 }
//                 .brife {
//                   line-height: 30px;
//                 }
//               }
//               .bottom {
//                 .left {
//                   width: 300px;
//                   height: 400px;
//                 }
//                 .right {
//                   padding: 100px 0 0 120px;
//                 }
//               }
//             }
//           }
//           &.floorBox4 {
//             .partnersBox {
//               header {
//                 height: 80px;
//                 line-height: 80px;
//               }
//               dl {
//                 margin-bottom: 10px;
//               }
//             }
//             .footerNav {
//               height: 150px;
//               opacity: 1;
//               transition: all 0.5s;
//               .relatedAgreement {
//                 height: 25px;
//                 div {
//                   p {
//                     height: 25px;

//                     line-height: 25px;
//                   }
//                 }
//               }
//               .aboutBox {
//                 margin-top: 10px;
//               }
//               .tip {
//                 margin-top: 10px;
//                 &.tip2 {
//                   margin: 5px 0 10px;
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }
// @media (min-height: 668px) {
//   #index {
//     .col-swipe-container {
//       .col-swipe-wrapper {
//         .floorBox {
//           &.floorBox2 {
//             .jupaiBox {
//               .top {
//                 height: 160px;
//                 .title {
//                   height: 90px;
//                   line-height: 90px;
//                 }
//                 .brife {
//                   line-height: 50px;
//                 }
//               }
//               .bottom {
//                 margin-top: 20px;
//               }
//             }
//           }
//           &.floorBox3 {
//             .jujuBox {
//               .top {
//                 height: 160px;
//                 .title {
//                   line-height: 90px;
//                 }
//                 .brife {
//                   line-height: 50px;
//                 }
//               }
//             }
//           }
//           &.floorBox4 {
//             .partnersBox {
//               header {
//                 height: 120px;
//                 line-height: 120px;
//               }
//               dl {
//                 margin-bottom: 30px;
//               }
//             }
//             .footerNav {
//               height: 190px;
//               .relatedAgreement {
//                 height: 30px;
//                 div {
//                   p {
//                     height: 30px;
//                     line-height: 30px;
//                   }
//                 }
//               }
//               .aboutBox {
//                 margin-top: 20px;
//               }
//               .tip {
//                 margin-top: 20px;
//                 &.tip2 {
//                   margin: 10px 0 20px;
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }
// @media (min-height: 768px) {
//   #index {
//     .col-swipe-container {
//       .col-swipe-wrapper {
//         .floorBox {
//           &.floorBox2 {
//             .jupaiBox {
//               .middle {
//                 width: 1320px;
//                 height: 500px;
//               }
//               .bottom {
//                 margin-top: 0px;
//               }
//             }
//           }
//           &.floorBox3 {
//             .jujuBox {
//               .bottom {
//                 .left {
//                   width: 350px;
//                   height: 500px;
//                 }
//                 .right {
//                   padding: 150px 0 0 140px;
//                 }
//               }
//             }
//           }
//           &.floorBox4 {
//             .partnersBox {
//               header {
//                 height: 160px;
//                 line-height: 120px;
//               }
//             }
//             .footerNav {
//               height: 250px;
//               .relatedAgreement {
//                 height: 60px;
//                 div {
//                   p {
//                     height: 60px;
//                     line-height: 60px;
//                   }
//                 }
//               }
//               .aboutBox {
//                 margin-top: 30px;
//               }
//               .tip {
//                 margin-top: 30px;
//                 &.tip2 {
//                   margin: 10px 0 30px;
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }
// @media (min-height: 868px) {
//   #index {
//     .col-swipe-container {
//       .col-swipe-wrapper {
//         .floorBox {
//           &.floorBox3 {
//             .jujuBox {
//               .bottom {
//                 .left {
//                   width: 350px;
//                   height: 600px;
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }
</style>