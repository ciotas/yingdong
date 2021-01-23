<template>
<!--  <div id="floorBox">-->
    <div class="floorBox floorBox6 p-r">
      <div class="bg">
        <img src="../assets/img/index/bg3.png" alt="" />
      </div>
      <div class="floorInner">
        <div class="tip">
          <p class="footTitle">联系我们</p>
          <p class="about">关于未来</p>
          <p>Do more, know more, be more.</p>
          <p>欢迎联系我们</p>
          <p>BP投递 bp@incapital.cn<i class="m-r20"></i>加入盈动 joinus@incapital.cn</p>
        </div>
        <div class="btnGroups">
          <a href="mailto:bp@incapital.cn">BP投递</a>
          <a href="mailto:joinus@incapital.cn">加入盈动</a>
        </div>
      </div>
      <div class="webFooter">
        <p class="tip">
          - 2011～2019
          盈动资本|浙ICP备14004249号|Add：杭州市西湖区文一西路588号
          中节能西溪首座A2-1-522|Tel：86-571-87997755 -
        </p>
      </div>
    </div>
<!--  </div>-->
</template>
<script>
export default {
  name: "footerBox",
};
</script>
<style scoped lang="scss">
  .p-r{
    position: relative;
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
            transition: all 2s linear;
          }
          &.floorBox6 {
            .floorInner {
              position: absolute;
              top: 70%;
              left: 50%;
              width: 60%;
              height: auto;
              transform: translate(-50%, -80%);

              .tip {
                p {
                  line-height: 45px;
                  text-align: center;
                  font-size: 20px;
                  color: white;
                  .m-r20{
                    margin-right: 20px;
                  }
                }
                .footTitle{
                  font-size: 55px;
                  font-weight: bolder;
                  padding-bottom: 60px;
                }
                .about{
                  /*margin-top:60px;*/
                }
              }

              .btnGroups {
                text-align: center;
                margin-top: 50px;

                a {
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
          }
        }
      }
    }
  @media screen and (max-width: 1400px) {
    /*@media (max-height: 300px) {*/
    #index {
      .col-swipe-container {
        .col-swipe-wrapper {
          .floorBox {
            &.floorBox1{
              .floorInner {
                padding: 100px 0 0 0;

                .title {
                  font-size: 85px;
                }
                .brife {
                  font-size: 40px;
                }
              }
            }
            &.floorBox2 {
              .floorInner {
                padding: 80px 0 0 0;

                .title {
                  width: 65%;
                  margin: 0 auto;
                  font-size: 80px;
                  font-weight: bolder;
                  line-height: 150px;
                }

                .brife {
                  width: 65%;
                  margin: 50px auto 0;
                  font-size: 25px;
                  line-height: 60px;
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

            }
          }
        }
      }
    }
  }
</style>
