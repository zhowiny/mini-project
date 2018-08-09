<template>
  <div class="container" >
    <div class="tip">
      <p>请使用您注册的手机号进行绑定!</p>
      <p>绑定后，您可在本微信公众号总随时查看您的在投资产情况</p>
    </div>
    <div class="authentication">
      <div class="fields_row">
        <input type="text" placeholder="姓名" placeholder-style="color: #ccc;">
      </div>
      <div class="fields_row">
        <input type="text" placeholder="身份证号" placeholder-style="color: #ccc;">
      </div>
      <div class="button">
        <mx-button text="立即验证" @click="toPage('/pages/questionnaire/main')" round type="primary"/>
      </div>
    </div>
  </div>
</template>

<script>
import mxButton from '@/components/button'
export default {
  components: {
    mxButton
  },
  data () {
    return {
      title: '身份认证',
    }
  },
  methods: {
  },
  created () {
  }
}
</script>

<style scoped lang="scss">
  .container {
    background: #fff;
    @include size(100%);
    @include flex();
    border-top: 1px solid $borderColor;
    padding: 0 $middle-space;
  }
  .tip {
    position: fixed;
    top: 0;
    padding: $middle-space;
    @include flex(center, flex-start);
    flex-direction: column;
    @include size(100%, 150px);
    background: $mainColor;
    color: #fff;
    font-size: 26px;
  }
  .authentication {
    width: 100%;
    padding: 0 $small-space * 3;
    font-size: 36px;
    .fields_row {
      @include flex(space-between);
      @include size(100%, 100px);
      border-bottom: 1px solid $borderColor;
      input {
        flex: 1;
      }
    }
    .button {
      margin-top: 100px;
    }
  }
</style>
