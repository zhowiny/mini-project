<template>
  <div class="container">
    <div class="finance">
      <div class="finance_info">
        <figure class="finance_info_basic">
          <p class="finance_info_basic_logo"> <img class="finance_info_basic_logo" mode="scaleToFill" src="/images/test.png" alt=""> </p>
          <p class="finance_info_basic_name">狮子山固收基金一号狮狮子收</p>
        </figure>
        <div class="finance_info_read">
          <p class="finance_info_read_icon"> <img class="finance_info_read_icon" mode="aspectFit" src="/images/icon_bell.png" alt=""> </p>
          <p class="finance_info_read_text"> 投资必读 </p>
        </div>
      </div>
      <div class="finance_attr">
        <div class="finance_attr_item">
          <p class="finance_attr_item_value"> 11+8.8% </p>
          <p class="finance_attr_item_label"> 预计年化 </p>
        </div>
        <div class="finance_attr_item" style="border-left: 1px solid #eeeeee;border-right: 1px solid #eeeeee;">
          <p class="finance_attr_item_value"> 8.8% </p>
          <p class="finance_attr_item_label"> 投资金额 </p>
        </div>
        <div class="finance_attr_item">
          <p class="finance_attr_item_value"> 8.8% </p>
          <p class="finance_attr_item_label"> 佣金比例 </p>
        </div>
      </div>
      <div class="finance_admin">
        <div class="finance_admin_item">
          <p class="finance_admin_item_icon"> <img class="finance_admin_item_icon" mode="scaleToFill" src="/images/icon_productbook.png" alt=""> </p>
          <p class="finance_admin_item_text"> 下载产品书 </p>
        </div>
        <div class="finance_admin_item">
          <p class="finance_admin_item_icon"> <img class="finance_admin_item_icon" mode="scaleToFill" src="/images/icon_admin.png" alt=""> </p>
          <p class="finance_admin_item_text"> Colony Northstar 克罗尼北极星 </p>
        </div>
      </div>
      <div class="finance_points">
        <div class="finance_points_title">
          <p class="finance_points_title_name"> 投资亮点投资亮点投资亮点投资亮点投资亮点投资亮点投资亮点投资亮点投资亮点投资亮点 </p>
          <div class="finance_points_title_copy">
            <p class="finance_points_title_copy_icon"> <img class="finance_points_title_copy_icon" mode="scaleToFill" src="/images/icon_copy.png" alt=""> </p>
            <p class="finance_points_title_copy_text"> 复制 </p>
          </div>
        </div>
        <div class="finance_points_content">  </div>
      </div>
      <div class="finance_other">
        <div class="finance_other_tabs">
          <p class="finance_other_tabs_item" :class="{active: tabIndex === 0}" @click="tabIndex=0"> 相关资讯 </p>
          <p class="finance_other_tabs_item" :class="{active: tabIndex === 1}" @click="tabIndex=1"> 产品要素 </p>
          <p class="finance_other_tabs_item" :class="{active: tabIndex === 2}" @click="tabIndex=2"> 认购流程 </p>
          <p class="finance_other_tabs_item" :class="{active: tabIndex === 3}" @click="tabIndex=3"> 产品文件 </p>
        </div>
        <div class="finance_other_content">

          <div class="finance_other_content_information" v-if="tabIndex==0">
            <div class="finance_other_content_information_item">
              <p class="finance_other_content_information_item_pic"> <img class="finance_other_content_information_item_pic" mode="scaleToFill" src="/images/icon_copy.png" alt=""> </p>
              <div class="finance_other_content_information_item_main">
                <p class="finance_other_content_information_item_main_name"> 方式可能分开苏丹诺夫肯定是能否看到你发粉嫩的少女风 </p>
                <p class="finance_other_content_information_item_main_other"> <span> 2天前 </span>|<span>123阅读量</span> </p>
              </div>
            </div>
            <div class="finance_other_content_information_item">
              <p class="finance_other_content_information_item_pic"> <img class="finance_other_content_information_item_pic" mode="scaleToFill" src="/images/icon_copy.png" alt=""> </p>
              <div class="finance_other_content_information_item_main">
                <p class="finance_other_content_information_item_main_name"> 方式可能分开苏丹诺夫肯定是能否看到你发粉嫩的少女风 </p>
                <p class="finance_other_content_information_item_main_other"> <span> 2天前 </span>|<span>123阅读量</span> </p>
              </div>
            </div>
          </div>

          <div class="finance_other_content_part" v-if="tabIndex==1">
            <div class="finance_other_content_part_item">
              <p class="finance_other_content_part_item_label"> 产品名称 </p>
              <p class="finance_other_content_part_item_value"> skdlasdlsa人寿保险 </p>
            </div>
            <div class="finance_other_content_part_item">
              <p class="finance_other_content_part_item_label"> 产品名称 </p>
              <p class="finance_other_content_part_item_value"> skdlasdlsa人寿保险 </p>
            </div>
            <div class="finance_other_content_part_item">
              <p class="finance_other_content_part_item_label"> 产品名称 </p>
              <p class="finance_other_content_part_item_value"> skdlasdlsa人寿保险 </p>
            </div>
          </div>

          <div class="finance_other_content_process" v-if="tabIndex==2">
            <div  class="finance_other_content_process_item">
              <p class="finance_other_content_process_item_pic"> <img class="finance_other_content_process_item_pic" mode="scaleToFill" src="/images/icon_copy.png" alt=""> </p>
              <p class="finance_other_content_process_item_text"> 1111 </p>
            </div>
            <div class="finance_problem">
              <div class="finance_problem_title"> <p class="finance_problem_title_text"> 常见问题 </p> </div>
              <div class="finance_problem_content">
                <div class="finance_other_content_problem_item">
                  <div class="finance_other_content_problem_item_question">
                    <p class="finance_other_content_problem_item_question_icon"> <img class="finance_other_content_problem_item_question_icon" mode="scaleToFill" src="/images/icon_question.png" alt=""> </p>
                    <p class="finance_other_content_problem_item_question_text"> 萨博的撒比的就是不待见撒都不叫撒点吧 </p>
                  </div>
                  <div class="finance_other_content_problem_item_answer">
                    <p class="finance_other_content_problem_item_answer_icon"> <img class="finance_other_content_problem_item_answer_icon" mode="scaleToFill" src="/images/icon_answer.png" alt=""> </p>
                    <p class="finance_other_content_problem_item_answer_text"> 萨博的撒比的就是不待见撒都不叫撒点吧萨博的撒比的就是不待见撒都不叫撒点吧萨博的撒待见撒都不叫撒点吧
                      <time class="finance_other_content_problem_item_answer_text_time"> 2016-21-21 </time>
                    </p>
                  </div>
                </div>
                <div class="finance_other_content_problem_item">
                  <div class="finance_other_content_problem_item_question">
                    <p class="finance_other_content_problem_item_question_icon"> <img class="finance_other_content_problem_item_question_icon" mode="scaleToFill" src="/images/icon_question.png" alt=""> </p>
                    <p class="finance_other_content_problem_item_question_text"> 萨博的撒比的就是不待见撒都不叫撒点吧 </p>
                  </div>
                  <div class="finance_other_content_problem_item_answer">
                    <p class="finance_other_content_problem_item_answer_icon"> <img class="finance_other_content_problem_item_answer_icon" mode="scaleToFill" src="/images/icon_answer.png" alt=""> </p>
                    <p class="finance_other_content_problem_item_answer_text"> 萨博的撒比的就是不待见撒都不叫撒点吧萨博的撒比的就是不待见撒都不叫撒点吧萨博的撒待见撒都不叫撒点吧
                      <time class="finance_other_content_problem_item_answer_text_time"> 2016-21-21 </time>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="finance_other_content_file" v-if="tabIndex==3">
            <div class="finance_other_content_file_item">
              <div class="finance_other_content_file_item_title"> 产品介绍文件 </div>
              <div class="finance_other_content_file_item_content">
                <div class="finance_other_content_file_item_content_item">
                  <p class="finance_other_content_file_item_content_item_text"> 213213123213213123213213123213213123213213123213213123 </p>
                  <p class="finance_other_content_file_item_content_item_icon"> <img class="finance_other_content_file_item_content_item_icon" mode="scaleToFill" src="/images/icon_answer.png" alt=""></p>
                </div>
                <div class="finance_other_content_file_item_content_item">
                  <p class="finance_other_content_file_item_content_item_text"> 213213123213213123213213123213213123213213123213213123 </p>
                  <p class="finance_other_content_file_item_content_item_icon"> <img class="finance_other_content_file_item_content_item_icon" mode="scaleToFill" src="/images/icon_answer.png" alt=""></p>
                </div>
                <div class="finance_other_content_file_item_content_item">
                  <p class="finance_other_content_file_item_content_item_text"> 213213123213213123213213123213213123213213123213213123 </p>
                  <p class="finance_other_content_file_item_content_item_icon"> <img class="finance_other_content_file_item_content_item_icon" mode="scaleToFill" src="/images/icon_answer.png" alt=""></p>
                </div>
              </div>
            </div>
            <div class="finance_other_content_file_item">
              <div class="finance_other_content_file_item_title"> 投资者认购文件 </div>
              <div class="finance_other_content_file_item_content">
                <p class="finance_other_content_file_item_content_title"> 仅供阅读 </p>
                <div class="finance_other_content_file_item_content_item">
                  <p class="finance_other_content_file_item_content_item_text"> 213213123213213123213213123213213123213213123213213123 </p>
                  <p class="finance_other_content_file_item_content_item_icon"> <img class="finance_other_content_file_item_content_item_icon" mode="scaleToFill" src="/images/icon_answer.png" alt=""></p>
                </div>
                <div class="finance_other_content_file_item_content_item">
                  <p class="finance_other_content_file_item_content_item_text"> 213213123213213123213213123213213123213213123213213123 </p>
                  <p class="finance_other_content_file_item_content_item_icon"> <img class="finance_other_content_file_item_content_item_icon" mode="scaleToFill" src="/images/icon_answer.png" alt=""></p>
                </div>
                <div class="finance_other_content_file_item_content_item">
                  <p class="finance_other_content_file_item_content_item_text"> 213213123213213123213213123213213123213213123213213123 </p>
                  <p class="finance_other_content_file_item_content_item_icon"> <img class="finance_other_content_file_item_content_item_icon" mode="scaleToFill" src="/images/icon_answer.png" alt=""></p>
                </div>
              </div>
              <div class="finance_other_content_file_item_content">
                <p class="finance_other_content_file_item_content_title"> 签署文件 </p>
                <div class="finance_other_content_file_item_content_item">
                  <p class="finance_other_content_file_item_content_item_text"> 213213123213213123213213123213213123213213123213213123 </p>
                  <p class="finance_other_content_file_item_content_item_icon"> <img class="finance_other_content_file_item_content_item_icon" mode="scaleToFill" src="/images/icon_answer.png" alt=""></p>
                </div>
                <div class="finance_other_content_file_item_content_item">
                  <p class="finance_other_content_file_item_content_item_text"> 213213123213213123213213123213213123213213123213213123 </p>
                  <p class="finance_other_content_file_item_content_item_icon"> <img class="finance_other_content_file_item_content_item_icon" mode="scaleToFill" src="/images/icon_answer.png" alt=""></p>
                </div>
                <div class="finance_other_content_file_item_content_item">
                  <p class="finance_other_content_file_item_content_item_text"> 213213123213213123213213123213213123213213123213213123 </p>
                  <p class="finance_other_content_file_item_content_item_icon"> <img class="finance_other_content_file_item_content_item_icon" mode="scaleToFill" src="/images/icon_answer.png" alt=""></p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div class="finance_footer">
        <div class="finance_footer_adviser"> 联系理财师 </div>
        <div class="finance_footer_invest"> 立即投资 </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        title: '金融产品',
        tabIndex: 0,
      }
    },
    created () {

    },
    methods: {

    },
    components: {
    },
  }
</script>

<style lang="scss" scoped>
  .finance {
    &_info{
      margin-top: 20rpx;
      padding: $middle-space;
      background: #ffffff;
      @include flex(space-between, center);
      border-bottom: 1px solid $borderColor;
        &_basic{
          @include flex( space-between );
          &_logo{
            width: 88rpx;
            height: 88rpx;
          }
          &_name{
            margin: 0 20rpx;
            font-size: 32rpx;
            color: $deepColor;
            font-weight: 600;
          }
        }
        &_read{
          @include flex( space-between );
          padding: $small-space;
          border: 1px solid $borderColor;
          border-radius: $default-border-radius;
          &_icon{
            width: 28rpx;
            height: 28rpx;
          }
          &_text{
            margin-left: 10rpx;
            width: 40rpx;
            font-size: 20rpx;
            color: $lightColor;
          }
        }
    }
    &_attr{
      padding: $middle-space;
      background: #ffffff;
      @include flex(space-around, center);
      &_item{
        width: 30%;
        text-align: center;
        @include text-truncate();
        &_value{
          font-size: 36rpx;
          color: $mainColor;
        }
        &_label{
          font-size: 24rpx;
        }
      }
    }
    &_admin{
      padding: $middle-space;
      background: #ffffff;
      margin-top: 20rpx;
      @include flex(space-between);
      &_item{
        width: 330rpx;
        height: 120rpx;
        padding: $middle-space;
        background: #FAFAFA;
        border: 1px solid $borderColor;
        border-radius: $default-border-radius;
        @include flex(flex-start, center);
        &_icon{
          width: 70rpx;
          height: 80rpx;
        }
        &_text{
          margin-left: 20rpx;
          font-size: 25rpx;
          @include text-truncate();
        }
      }
    }
    &_points{
      padding: $middle-space;
      background: #ffffff;
      margin-top: 20rpx;
      &_title{
        @include flex(space-between);
        border-bottom: 1px solid $borderColor;
        padding-bottom: 20rpx;
        &_name{
          font-size: 28rpx;
          font-weight: 600;
          width: 580rpx;
          @include text-truncate();
        }
        &_copy{
          padding: $small-space;
          border: 1px solid $borderColor;
          border-radius: $default-border-radius;
          display: flex;
          &_icon{
            width: 28rpx;
            height: 28rpx;
          }
          &_text{
            margin-left: 10rpx;
            font-size: 22rpx;
            color: $lightColor;
          }
        }
      }
      &_content{
        padding-top: 20rpx;
      }
    }
    &_other{
      margin-top: 20rpx;
      &_tabs{
        display: flex;
        &_item{
          background: #ffffff;
          padding: 20rpx 0;
          width: 25%;
          text-align: center;
          &.active{
            border-bottom: 5px solid $mainColor;
          }
        }
      }
      &_content{
        margin-bottom: 120rpx;
        &_information{
          margin-top: 20rpx;
          &_item{
            background: #ffffff;
            padding: $middle-space;
            border-bottom: 1px solid $borderColor;
            display: flex;
            &_pic{
              width: 120rpx;
              height: 120rpx;
            }
            &_main{
              margin-left: 20rpx;
              @include flex(space-between, flex-start);
              flex-direction: column;
              &_name{
                font-size: 26rpx;
                font-weight: 600;
              }
              &_other{
                font-size: 24rpx;
                color: $lightColor;
              }
            }
          }
        }
        &_part{
          margin-top: 20rpx;
          &_item{
            background: #ffffff;
            padding: $middle-space;
            margin-bottom: 20rpx;
            &_label{
              font-size: 26rpx;
              padding-bottom: $middle-space;
              border-bottom: 1px solid $borderColor;
            }
            &_value{
              padding-top: $middle-space;
              font-size: 26rpx;
              color: $lightColor;
            }
          }
        }
        &_process{
          margin-top: 20rpx;
          &_item{
            background: #ffffff;
            padding: $big-space;
            margin-bottom: 20rpx;
            &_pic{
              width: 600rpx;
              height: 300rpx;
              margin: 0 auto;
            }
            &_text{
              padding-top: 40rpx;
              color: $lightColor;
            }
          }

          .finance_problem{
            &_title{
              padding: $middle-space;
              background: #ffffff;
              border-bottom: 1px solid $borderColor;
              &_text{
                padding-left: $small-space;
                border-left: 6px solid $mainColor;
              }
            }
            &_content{
              .finance_other_content_problem_item{
                background: #ffffff;
                padding: $middle-space;
                border-bottom: 1px solid $borderColor;
                &_question{
                  @include flex(flex-start, center);
                  &_icon{
                    width: 38rpx;
                    height: 38rpx;
                  }
                  &_text{
                    margin-left: 20rpx;
                    font-size: 26rpx;
                  }
                }
                &_answer{
                  margin-top: 20rpx;
                  margin-left: 50rpx;
                  border-radius: $default-border-radius;
                  padding: $middle-space;
                  background: #eeeeee;
                  display: flex;
                  &_icon{
                    width: 38rpx;
                    height: 38rpx;
                  }
                  &_text{
                    margin-left: 20rpx;
                    font-size: 26rpx;
                    color: $lightColor;
                    padding-bottom: 28rpx;
                    position: relative;
                    &_time{
                      position: absolute;
                      right: 0;
                      bottom: 0;
                      font-size: 24rpx;
                    }
                  }
                }
              }
            }
          }
        }
        &_file{
          margin-top: 20rpx;
          &_item{
            margin-bottom: 20rpx;
            &_title{
              background: #ffffff;
              padding: $middle-space;
              font-size: 26rpx;
              border-bottom: 1px solid $borderColor;
            }
            &_content{
              &_title{
                background: #ffffff;
                padding: $middle-space;
                font-size: 26rpx;
                border-bottom: 1px solid $borderColor;
                color: $lightColor;
              }
              &_item{
                background: #ffffff;
                padding: $middle-space;
                font-size: 26rpx;
                border-bottom: 1px solid $borderColor;
                @include flex(space-between, center);
                &:last-child{
                  border-bottom: 0;
                }
                &_text{
                  width: 640rpx;
                  color: $mainColor;
                  @include text-truncate();
                }
                &_icon{
                  width: 38rpx;
                  height: 38rpx;
                }
              }
            }
          }
        }


      }
    }
    &_footer{
      width: 100%;
      height: 100rpx;
      position: fixed;
      bottom: 0;
      left: 0;
      display: flex;
      &_adviser{
        width: 50%;
        height: 100rpx;
        text-align: center;
        line-height: 100rpx;
        background: #ffffff;
        color: $mainColor;
      }
      &_invest{
        width: 50%;
        height: 100rpx;
        background: $mainColor;
        text-align: center;
        line-height: 100rpx;
        color: #ffffff;
      }
    }
  }
</style>


