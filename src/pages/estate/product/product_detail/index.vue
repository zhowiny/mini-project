<template>
  <div class="container">
    <div class="banner_box">
      <swiper autoplay @change="changeCurrent">
        <block v-for="(item,index) in detail.images" :key="index">
          <swiper-item>
            <img :src="item" class="banner_img"/>
            <!-- <video :src="item.url" class="banner_video" v-if="item.type == 2"></video> -->
          </swiper-item>
        </block>
      </swiper>
      <cover-image src="/images/icon_video.png" v-if="type == 2" class="video_icon"/>
      <cover-image src="/images/icon_pic.png" class="pic_icon"/>
      <!-- <div class="banner_page">{{current}}/{{length}}</div> -->
    </div>
    
    <div class="product_simple">
      <P class="product_title">{{detail.name}}</P>
      <div class="product_address">
        <img src="/images/icon_map.png" class="map_icon" />
        <span>泰国 · 曼谷</span>
        <div class="border_small">|</div>
        <div>佣金：<span class="commision">15%</span></div>
      </div>
      <div class="product_feature">
        <block v-for="(item,index) in featureList" :key="index">
          <div class="feature_li">
            <p class="amount">{{item.amount}}</p>
            <p class="feature_name">{{item.name}}</p>
          </div>
          <div class="border_big" v-if="index != featureList.length - 1"></div>
        </block>
      </div>
    </div>

    <div class="admin">
      <img src="/images/icon_house.png" class="admin_logo"/>
      <div class="admin_info">
        <p class="admin_name">Asset Wise</p>
        <div class="admin_tag">
          <div class="admin_official">官方通道</div>
          <block>
            <div class="admin_feater">全球规模</div>
          </block>
        </div>
      </div>
      <img src="/images/icon_arrow_product.png" class="arrow_icon"/>
    </div>

    <div class="common_detail">
      <div class="common_top">
        <img src="/images/icon_bitmap.png" class="bitmap_icon"/>
        <span class="common_label">项目信息</span>
        <img src="/images/icon_arrow_product.png" class="arrow_icon"/>
      </div>
      <div class="detail_introduction">
        多通道抵达主路（Ladprao road、Phaholyothin road、
        Ratchadapisek road、Soi Ladprao 1、Soi Ladprao 15和Soi Phaholyothin 24）、区域内规建超大型超市功能区、
        规建中的BTS延长线绿色线与现有MRT汇合实现双轨交汇、
        步行可达当地人最爱的Central Ladprao商场及多个市政公园、泰国本地人最热衷的居住区域，多个泰国“央企”总部所在地、周边设有国际学校以及泰国大学。
      </div>
      <ul class="detail_option">
        <li>
          <p>产权年限：<span>永久产权</span></p>
          <p>物业类型：<span>公寓</span></p>
          <p>规划面积：<span>6400平方米</span></p>
        </li>
        <li>
          <p>交房日期：<span>永久产权</span></p>
          <p>户数：<span>公寓</span></p>
          <p>能否贷款：<span>6400平方米</span></p>
        </li>
      </ul>
    </div>

    <div class="common_detail">
      <div class="common_top">
        <img src="/images/icon_bitmap.png" class="bitmap_icon"/>
        <span class="common_label">周边配套</span>
        <img src="/images/icon_arrow_product.png" class="arrow_icon"/>
      </div>
      <div class="detail_address">
        <p>0777 Westheimer Rd, Unit 1118, Houston, TXfsia 0777 Westheimer Rd, Unit 1118, Houston, TXfsia</p>
        <img src="https://doc.meixinglobal.com/docs/20180704/1530636623485/30/4.jpg" class="map_img"/>
      </div>
    </div>

    <div class="common_detail">
      <div class="common_top">
        <img src="/images/icon_bitmap.png" class="bitmap_icon"/>
        <span class="common_label">周边学校</span>
        <!-- <img src="/images/icon_arrow_product.png" class="arrow_icon"/> -->
      </div>
      <div class="detail_school">
        <div class="school_tags">
          <block v-for="(item,index) in schoolTagList" :key="index">
            <p :class="selectedSchool == item.value ? 'school_tag_active' : 'school_tag'" @click="changeSchoolTag(item.value)">{{item.name}}</p>
          </block>
        </div>
        <div class="school_name_box">
          <p class="school_name_symbol">8</p>
          <span class="school_name">Chauwafgsu Istanbul Turkey  Question niversity niversity niversity</span>
          <div>
            <p class="school_distance">480</p>
            <p class="school_distance">公里</p>
          </div>
        </div>
        <div class="school_name_box school_name_box_none">
          <p class="school_name_symbol">8</p>
          <span class="school_name">Chauwafgsu Istanbul Turkey  Question niversity niversity niversity</span>
          <div>
            <p class="school_distance">480</p>
            <p class="school_distance">公里</p>
          </div>
        </div>
      </div>
    </div>

    <div class="common_detail">
      <div class="common_top">
        <img src="/images/icon_bitmap.png" class="bitmap_icon"/>
        <span class="common_label">在售户型</span>
        <!-- <img src="/images/icon_arrow_product.png" class="arrow_icon"/> -->
      </div>
      <div class="house_type">
        <scroll-view scroll-x>
          <div class="type_scroll">
            <div class="type_scroll_option">
              <img src="https://doc.meixinglobal.com/docs/20180704/1530636623485/30/4.jpg" class="house_img" />
              <p>1A-102 · 28㎡ · ¥62万</p>
            </div>
          </div>
        </scroll-view>
      </div>
    </div>
    
    <div class="image_and_text">
      <div class="img_text_tags">
        <block v-for="(item,index) in houseTagList" :key="index">
          <p :class="selectedHouse == item.value ? 'img_text_tag_active' : 'img_text_tag'" @click="changeHouseTag(item.value)">{{item.name}}</p>
        </block>
      </div>
      <div class="text_detail" v-if="selectedHouse == 1">
        <p>多通道抵达主路（Ladprao road、Phaholyothin road、Ratchadapisek road、Soi Ladprao 1、Soi Ladprao 15和Soi Phaholyothin 24）、
          区域内规建超大型超市功能区、规建中的BTS延长线绿色线与现有MRT汇合实现双轨交汇、步行可达当地人最爱的Central Ladprao商场及多个市政公园、
          泰国本地人最热衷的居住区域，多个泰国“央企”总部所在地、周边设有国际学校以及泰国大学。</p>
        <img src="https://doc.meixinglobal.com/docs/20180704/1530636670707/26/6.jpg" class="detail_img"/>
        <p>多通道抵达主路（Ladprao road、Phaholyothin road、Ratchadapisek road、Soi Ladprao 1、Soi Ladprao 15和Soi Phaholyothin 24）、
          区域内规建超大型超市功能区、规建中的BTS延长线绿色线与现有MRT汇合实现双轨交汇、
          步行可达当地人最爱的Central Ladprao商场及多个市政公园、泰国本地人最热衷的居住区域。</p>
      </div>
      <div class="purchase_notice" v-if="selectedHouse == 2">
        <div class="purchase_process">
          <p class="process_label">交易流程</p>
          <img src="https://file.meixinglobal.com/media/20180813/4340b295-a576-4b77-883c-a2e827a45f11.png" class="process_img" />
          <p class="img_title">LP15售中流程</p>
        </div>
        <div class="border_block"></div>
        <div class="question" >
          <p class="question_label">问题解答</p>
          <block>
            <div class="question_answer">
              <div class="question_box">
                <img class="question_icon" src="/images/icon_question.png" />
                <p class="question_title">柯罗尼物流地产基金主要投资于标的基金CIF 柯罗尼物流地产基金主要投资于标的基金CIF?</p>
              </div>
              <div class="answer_box">
                <div class="question_box">
                  <img class="question_icon" src="/images/icon_answer.png" />
                  <p class="question_title">柯罗尼物流地产基金主要投资于标的基金CIF（Colony Industrial Fund）项下的优质物流地产投资组合。
                  投资组合足够分散，覆盖全美16个州，总投资规模达3,900万平方英尺；</p>
                </div>
                <p class="answer_time">2017年12月29日</p>
              </div>
            </div>
            <div class="question_answer">
              <div class="question_box">
                <img class="question_icon" src="/images/icon_question.png" />
                <p class="question_title">柯罗尼物流地产基金主要投资于标的基金CIF?</p>
              </div>
              <div class="answer_box">
                <div class="question_box">
                  <img class="question_icon" src="/images/icon_answer.png" />
                  <p class="question_title">柯罗尼物流地产基金主要投资于标的基金CIF（Colony Industrial Fund）项下的优质物流地产投资组合。
                  投资组合足够分散，覆盖全美16个州，总投资规模达3,900万平方英尺；</p>
                </div>
                <p class="answer_time">2017年12月29日</p>
              </div>
            </div>
          </block>
        </div>
      </div>
      <div class="project_documents" v-if="selectedHouse == 3">
        <div class="doc_type_name">产品介绍文件</div>
        <ul class="docs_list">
          <li class="doc">
            <span class="doc_name">狮子山类固收基金1号产品计划书</span>
            <img src="/images/icon_download1.png" class="download_icon"/>
          </li>
          <li class="doc border_none">
            <span class="doc_name">狮子山类固收基金1号产品计划书</span>
            <img src="/images/icon_download1.png" class="download_icon"/>
          </li>
        </ul>
        <div class="border_block"></div>
        <div class="doc_type_name">投资者认购文件</div>
        <div class="read_only">仅供阅读</div>
        <ul class="docs_list">
          <li class="doc">
            <span class="doc_name">狮子山类固收基金1号产品计划书</span>
            <img src="/images/icon_download1.png" class="download_icon"/>
          </li>
          <li class="doc border_none">
            <span class="doc_name">狮子山类固收基金1号产品计划书</span>
            <img src="/images/icon_download1.png" class="download_icon"/>
          </li>
        </ul>
        <div class="read_only sign">签署文件</div>
        <ul class="docs_list">
          <li class="doc">
            <span class="doc_name">狮子山类固收基金1号产品计划书</span>
            <img src="/images/icon_download1.png" class="download_icon"/>
          </li>
          <li class="doc border_none">
            <span class="doc_name">狮子山类固收基金1号产品计划书</span>
            <img src="/images/icon_download1.png" class="download_icon"/>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      bannerList: [
        // {id: 1, url: 'https://file.meixinglobal.com/media/20180703/409c2f20-1da7-476b-a7c0-9060b0da0cbc.mp4', type: 2},
        {id: 2, url: 'https://doc.meixinglobal.com/docs/20180704/1530636659626/29/5.png', type: 2},
        {id: 3, url: 'https://doc.meixinglobal.com/docs/20180704/1530636623485/30/4.jpg', type: 1},
        {id: 4, url: 'https://doc.meixinglobal.com/docs/20180704/1530636670707/26/6.jpg', type: 1}
      ],
      featureList: [
        {name: '总价', amount: 52},
        {name: '总价总价', amount: 52},
        {name: '总价', amount: 525252},
      ],
      schoolTagList: [
        {name: '附近大学', value: 1},
        {name: '附近中学', value: 2},
        {name: '附近小学', value: 3}
      ],
      houseTagList: [
        {name: '图文特色', value: 1},
        {name: '购房须知', value: 2},
        {name: '项目资料', value: 3}
      ],
      selectedSchool: 1,
      selectedHouse: 3,
      current: 1,
      type: 1,
      product_id: '',
      detail: {},
      totleLength: 0
    }
  },
  methods: {
    changeSchoolTag (value) {
      this.selectedSchool = value
    },
    changeHouseTag (value) {
      this.selectedHouse = value
    },
    changeCurrent (e) {
      let index = e.target.current
      this.type = this.bannerList[index].type
      this.current = index + 1
    },
    getEstateDetail (id) {
      this.$http.get('/mini/finance/detail', {product_id: id, product_type: 2}).then((res) => {
        console.log(res)
        this.detail = res.body
        // this.totleLength = res.body.images.length
      })
    }
  },
  created () {
  },
  mounted () {
    let id = this.$root.$mp.query.product_id
    this.product_id = id
    this.getEstateDetail(id)
  }
}
</script>

<style scoped lang="scss">

  .container{
    font-size: 24rpx;
    color: #555;
  }
  .banner_box{
    position: relative;
  }
  swiper{
    height: 450rpx;
  }
  cover-image { 
    position: absolute;
    bottom: 22rpx;
  }
  .banner_img{
    width: 100%;
    height: 450rpx;
  }
  .video_icon{
    left: 20rpx;
    z-index: 100;
    width: 50rpx;
    height: 30rpx;
  }
  .pic_icon{
    right: 100rpx;
    width: 40rpx;
    height: 32rpx;
  }
  .banner_page{
    position: absolute;
    bottom: 20rpx;
    right: 30rpx;
    color: #fff;
    font-size: 28rpx;
  }
  .banner_video{
    width: 100%;
    height: 450rpx;
  }
  .product_simple{
    background: #fff;
    padding-bottom: 35rpx;
  }
  .product_title{
    font-size: 32rpx;
    text-align: center;
    padding: 28rpx 20rpx;
  }
  .product_address{
    display: flex;
    align-items: center;
    justify-content: center;
    color: #999;
  }
  .map_icon{
    width: 30rpx;
    height: 33rpx;
    margin-right: 20rpx;
  }
  .border_small{
    color: #ddd;
    margin: 0 40rpx;
  }
  .commision{
    color: #306FF4;
  }
  .product_feature{
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 20rpx;
    margin-top: 45rpx;
  }
  .amount{
    color: #306FF4;
    font-size: 36rpx;
    text-align: center;
    margin-bottom: 12rpx;
  }
  .feature_name{
    text-align: center;
  }
  .border_big{
    width: 0;
    height: 60rpx;
    border-left: 1rpx solid #ddd;
  }

  .admin{
    height: 145rpx;
    display: flex;
    align-items: center;
    background: #fff;
    padding: 0 20rpx;
    margin: 20rpx 0;
  }
  .admin_logo{
    width: 106rpx;
    height: 106rpx;
    margin-right: 28rpx;
  }
  .admin_info{
    flex: 1;
  }
  .admin_tag{
    display: flex;
  }
  .admin_name{
    font-weight: bold;
    margin-bottom: 14rpx;
  }
  .admin_official{
    width: 106rpx;
    height: 36rpx;
    color: #fff;
    font-size: 20rpx;
    line-height: 36rpx;
    text-align: center;
    background-image: linear-gradient(39deg, #E1A678 0%, #EBC07F 100%);
    border-radius: 6rpx;
  }
  .admin_feater{
    color: #EA8165;
    font-size: 20rpx;
    line-height: 34rpx;
    border-radius: 6rpx;
    border: 1rpx solid #EA8165;
    padding: 0 16rpx;
    margin-left: 10rpx;
  }
  .arrow_icon{
    width: 15rpx;
    height: 28rpx;
  }

  .common_detail{
    background: #fff;
    margin-bottom: 20rpx;
  }
  .common_top{
    height: 90rpx;
    display: flex;
    align-items: center;
    padding: 0 30rpx;
    border-bottom: 1rpx solid #ddd;
  }
  .bitmap_icon{
    width: 27rpx;
    height: 28rpx;
    margin-right: 20rpx;
  }
  .common_label{
    flex: 1;
    font-size: 28rpx;
  }
  .detail_introduction{
    font-size: 26rpx;
    line-height: 48rpx;
    padding: 20rpx 20rpx 40rpx;
  }
  .detail_option{
    display: flex;
    padding: 40rpx 0rpx 25rpx;
    margin: 0 20rpx;
    border-top: 1rpx dashed #ddd;
  }
  .detail_option li{
    flex: 1;
  }
  .detail_option p{
    color: #999;
    font-size: 26rpx;
    margin-bottom: 20rpx;
  }
  .detail_option span{
    color: #666;
  }
  .detail_address{
    font-size: 26rpx;
    padding: 30rpx 20rpx 36rpx;
  }
  .map_img{
    width: 100%;
    height: 400rpx;
    margin-top: 30rpx;
  }
  .detail_school{
    padding: 30rpx 22rpx 10rpx;
  }
  .school_tags{
    display: flex;
    justify-content: space-around;
  }
  .school_tag{
    font-size: 26rpx;
    padding: 0 8rpx 15rpx;
    border-bottom: 4rpx solid transparent;
  }
  .school_tag_active{
    color: #306FF4;
    font-size: 26rpx;
    padding: 0 8rpx 15rpx;
    border-bottom: 4rpx solid #306FF4;
  }
  .school_name_box{
    display: flex;
    padding-bottom: 30rpx;
    margin-top: 30rpx;
    border-bottom: 1rpx solid #ddd;
  }
  .school_name_box_none{
    border: none;
  }
  .school_name_symbol{
    width: 80rpx;
    height: 80rpx;
    color: #306FF4;
    font-size: 48rpx;
    line-height: 80rpx;
    text-align: center;
    border-radius: 50%;
    border: 1rpx dashed #306FF4;
    margin-right: 30rpx;
  }
  .school_name{
    max-width: 476rpx;
    font-size: 26rpx;
    margin-right: 45rpx;
  }
  .school_distance{
    color: #999;
    font-size: 26rpx;
    text-align: right;
  }
 
  .type_scroll{
    width: 100%;
    display: flex;
    font-size: 26rpx;
    padding: 20rpx 20rpx 30rpx;
  }
  .type_scroll_option{
    max-width: 454rpx;
    margin-right: 20rpx;
  }
  .house_img{
    width: 454rpx;
    height: 296rpx;
    margin-bottom: 20rpx;
  }
  
  .image_and_text{
    background: #fff;
  }
  .img_text_tags{
    display: flex;
    justify-content: space-around;
    padding-top: 24rpx;
    border-bottom: 1rpx solid #ddd;
  }
  .img_text_tag{
    font-size: 28rpx;
    color: #999;
    padding: 0 8rpx 15rpx;
    border-bottom: 4rpx solid transparent;
  }
  .img_text_tag_active{
    font-size: 28rpx;
    color: #306FF4;
    padding: 0 8rpx 15rpx;
    border-bottom: 4rpx solid #306FF4;
  }
  .text_detail{
    font-size: 26rpx;
    color: #666;
    line-height: 48rpx;
    padding: 40rpx 20rpx 30rpx;
  }
  .detail_img{
    width: 100%;
    height: 473rpx;
    margin: 30rpx 0;
  }

  .purchase_process,.question{
    padding: 20rpx 20rpx 25rpx;
  }
  .process_label,.question_label{
    font-size: 28rpx;
    color: #999;
  }
  .process_img{
    width: 100%;
    height: 379rpx;
    margin: 30rpx 0 26rpx;
    border: 1rpx solid #E7E7E7;
  }
  .img_title{
    font-size: 28rpx;
    color: #999;
    text-align: center;
  }
  .border_block{
    width: 100%;
    height: 20rpx;
    background: $backgroundColor;
  }

  .question_label{
    margin-bottom: 10rpx;
  }
  .question_box{
    display: flex;
  }
  .question_answer{
    padding: 22rpx 0;
    margin-bottom: 18rpx;
  }
  .question_icon{
    width: 38rpx;
    height: 41rpx;
    vertical-align: middle;
    margin-right: 20rpx;
  }
  .question_title{
    flex: 1;
    font-size: 26rpx;
    line-height: 42rpx;
  }
  .answer_box{
    font-size: 24rpx;
    color: #787878;
    line-height: 38rpx;
    background: #F5F5F5;
    padding: 20rpx;
    margin-left: 55rpx;
    margin-top: 10rpx;
  }
  .answer_time{
    font-size: 20rpx;
    color: #646464;
    text-align: right;
    margin-top: 10rpx;
  }
  .doc_type_name{
    font-size: 26rpx;
    color: #5A5A5A;
    font-weight: bold;
    line-height: 80rpx;
    padding-left: 30rpx;
    border-bottom: 1rpx solid #ddd;
  }
  .docs_list{
    padding: 0 30rpx;
  }
  .doc{
    height: 78rpx;
    @include flex(space-between,center);
    border-bottom: 1rpx dashed #ddd;
  }
  .doc_name{
    color: #306FF4;
  }
  .download_icon{
    width: 44rpx;
    height: 38rpx;
  }
  .read_only{
    font-size: 26rpx;
    color: #999;
    padding: 20rpx 30rpx 18rpx;
  }
  .sign{
    border-top: 1rpx solid #ddd;
  }
  .border_none{
    border: none
  }
</style>
