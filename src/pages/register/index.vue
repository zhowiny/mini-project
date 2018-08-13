<template>
  <div class="register_container" >
    <div class="register_form">
      <div class="fields_row">
        <input type="text" placeholder="您的姓名" placeholder-style="color: #ccc;">
      </div>
      <div class="fields_row">
        <div class="phone_code">
          <mx-select v-model="phoneCode" :data="array" valueKey="value" label="name"/>
        </div>
        <input class="phone" type="text" placeholder="手机号码" placeholder-style="color: #ccc;">
      </div>
      <div class="fields_row">
        <input type="text" placeholder="图片验证码" placeholder-style="color: #ccc;">
        <img src="/images/icon_placeholder.png" mode="aspectFit" style="width: 180rpx;height:60rpx;">
      </div>
      <div class="fields_row">
        <input type="text" placeholder="短信校验码" placeholder-style="color: #ccc;">
        <span class="get_verify_code">获取校验码</span>
      </div>
      <div class="fields_row">
        <mx-select :data="items" valueKey="value" @change="onSelect" v-model="type" label="meaning" placeholder="选择投资人类型"/>
      </div>
      <!--<wx-checker defaultClass="protocol" v-model="protocol" @checker-change="protocolChange">-->
        <!--<p>我已阅读并同意</p>-->
        <!---->
      <!--</wx-checker>-->

      <div class="button">
        <mx-button text="立即开户" @click="toPage('/pages/authentication/main')" round type="primary"/>
      </div>

      <div class="protocol">
        <mx-checkbox @change="handleCheckboxChange" >我已阅读并同意</mx-checkbox>
        <a>《投资者使用协议》</a>
      </div>
      <!--<mx-select :data="items" key="value" label="meaning"/>-->
      <!--<mx-button text="立即开户" @click="handleEvent"/>-->
      <!--<mx-button type="primary" text="立即开户" disabled/>-->
      <!--<mx-button type="info" text="立即开户" disabled />-->
      <!--<mx-button type="success" text="立即开户" size="medium" round/>-->
      <!--<mx-button type="warning" text="立即开户" size="small" round/>-->
      <!--<mx-button type="danger" text="立即开户" size="mini" round/>-->
      <!--<mx-button text="立即开户" plain open-type="getUserInfo"/>-->
      <!--<mx-button type="primary" text="立即开户" plain open-type="contact" @handleEvent="handleEvent"/>-->
      <!--<mx-button type="info" text="立即开户" plain open-type="getPhoneNumber"/>-->
      <!--<mx-button type="success" text="立即开户" plain open-type="launchApp" />-->
      <!--<mx-button type="warning" text="立即开户" plain open-type="openSetting"/>-->
      <!--<mx-button type="danger" text="立即开户" plain />-->
      <!--<mx-button text="立即开户" round/>-->
      <!--<mx-button type="primary" text="立即开户" round/>-->
      <!--<mx-button type="info" text="立即开户" round />-->
      <!--<mx-button type="success" text="立即开户" round />-->
      <!--<mx-button type="warning" text="立即开户" round />-->
      <!--<mx-button type="danger" text="立即开户" round />-->
    </div>
  </div>
</template>

<script>
import mxSelect from '@/components/select'
import mxButton from '@/components/button'
export default {
  components: {
    mxSelect,
    mxButton,
  },
  data () {
    return {
      title: '客户开户',
      protocol: false,
      type: '',
      items: [
        {value: 'a', meaning: '1'},
        {value: 'b', meaning: '2'},
        {value: 'c', meaning: '3'},
      ],
      phoneCode: '',
      array: [
        {
          name: '中国 +86',
          value: '86',
        },
        {
          name: '台湾',
          value: '886',
        },
        {
          name: '香港',
          value: '8121',
        },
        {
          name: '澳门',
          value: '8122',
        },
      ],
      index: 0,
    }
  },
  methods: {
    bindPickerChange ({mp}) {
      console.log(mp.detail.value)
      this.index = mp.detail.value
    },
    protocolChange (e) {
      console.log(e)
    },
    handleCheckboxChange (e) {
      let value = e.mp.detail
      if (Object.prototype.toString.apply(value) === '[object Array]') {
        this.items.map(item => {
          item.checked = value.includes(item.value)
        })
      }
      console.log(e.mp)
    },
    onSelect (item) {
      console.log(item, this)
    },
    handleEvent (e) {
      console.log(e)
    }
  },
}
</script>

<style scoped lang="scss">
  .group {
    @include flex();
    mx-checkbox {
      flex: 1;
    }
  }
  .register_container {
    background: #fff;
    @include size(100%);
    @include flex();
    border-top: 1px solid $borderColor;
    padding: 0 $middle-space;
  }
  .register_form {
    width: 100%;
    padding: 0 $small-space * 3;
    font-size: 36px;
    .fields_row {
      @include flex(space-between);
      @include size(100%, 100px);
      border-bottom: 1px solid $borderColor;
      > input {
        flex: 2;
      }
      .get_verify_code {
        color: $mainColor;
        width: 180px;
        text-align: center;
      }
      .phone_code{
        flex: 1;
      }
      .phone {
        padding-left: $middle-space;
      }
      img {
        background: $backgroundColor;
      }
    }
    .protocol {
      font-size: 26px;
      @include flex(flex-start);
      @include size(100%, 100px);
      a {
        margin-left: $small-space;
        color: $mainColor;
      }
    }
    .button {
      margin-top: $big-space;
    }
  }
</style>
