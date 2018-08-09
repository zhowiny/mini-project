<template>
  <div class="container" >
    <h3>请各位投资人客户仔细阅读下面一段话：</h3><br>
    <p>根据相关机构要求，美信金融只向特定的合格投资者宣传推介相关产品，如您有意见在美信金融平台进行投资，即“需要您选择下方关于合格投资者认定的标准，且需要您的个人金资产超过100W美元”，请您仔细阅读并选择相关问题进行合格投资者认定，方可进行产品投资；</p>
    <div class="question">
      <mx-checkbox-group @change="handleCheckboxChange">
        <mx-checkbox class-name="flex-start" key="a" :checked="true">最近两年我的个人收入都超过了20万美元，或者我和我配偶的共同收入超过了30万美元。并且，我有理由预计今年将获得至少20万美元的个人收入，或者与我的配偶今年至少有30万美元的共同收入。</mx-checkbox>
        <mx-checkbox class-name="item" key="b" :checked="true">我的个人净资产超过100万美元。</mx-checkbox>
      </mx-checkbox-group>
    </div>
    <div class="question">
      <p>3、我的净资产超过100万美元。</p>
      <mx-checkbox-group class-name="group" @change="handleCheckboxChange">
        <mx-checkbox class-name="item" key="a" :checked="false" >a. 0-2年</mx-checkbox>
        <mx-checkbox class-name="item" key="b" :checked="true" >b. 2-5年</mx-checkbox>
        <mx-checkbox class-name="item" key="c" :checked="false" >c. 超过5年</mx-checkbox>
      </mx-checkbox-group>
    </div>
    <div class="question">
      <p>4、就业情况:</p>
      <mx-checkbox-group class-name="group" type="radio" @change="handleCheckboxChange">
        <mx-checkbox class-name="item" key="a" :checked="false" >a. 失业中</mx-checkbox>
        <mx-checkbox class-name="item" key="b" :checked="true" >b. 就业中</mx-checkbox>
        <mx-checkbox class-name="item" key="c" :checked="false" >c. 自营企业主</mx-checkbox>
      </mx-checkbox-group>
    </div>
    <div class="question">
      <p>5、可接受的最长投资期限:</p>
      <mx-checkbox-group class-name="group" :max="2" @change="handleCheckboxChange">
        <mx-checkbox class-name="item" key="a" :checked="false" >a. 0-2年</mx-checkbox>
        <mx-checkbox class-name="item" key="b" :checked="true" >b. 2-5年</mx-checkbox>
        <mx-checkbox class-name="item" key="c" :checked="false" >c. 超过5年</mx-checkbox>
      </mx-checkbox-group>
    </div>
    <div class="button">
      <mx-button text="我已知晓并同意" @click="toPage({url:'/pages/index/main', type: 'switchTab'})" size="medium" round type="primary"/>
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
      title: '合格投资者认定',
    }
  },
  methods: {
    handleCheckboxChange (e) {
      console.log(e.mp)
    }
  },
  created () {
  }
}
</script>

<style lang="scss">
  .container {
    background: #fff;
    @include size(100%);
    border-top: 1px solid $borderColor;
    padding: 0 $middle-space;
    font-size: 26px;
    h3 {
      font-size: 30px;
      padding: $big-space 0;
    }
    .question {
      margin-top: $big-space;
      .group {
        @include flex();
        padding: 0 $big-space;
      }
      .item {
        padding-top: $middle-space;
      }
      mx-checkbox {
        flex: 1;
      }
      .flex-start {
        align-items: flex-start;
      }
    }
    .button {
      @include size(100%, 80px);
      @include flex();
      margin-top: 100px;
    }
  }
</style>
