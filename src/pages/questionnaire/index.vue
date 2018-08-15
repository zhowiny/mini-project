<template>
  <div class="container" >
    <h3>请各位投资人客户仔细阅读下面一段话：</h3><br>
    <p>根据相关法律法规要求，美信平台上的产品仅开放给特定的合格投资者。如您有意在美信平台进行投资，请确认您的个人净资产（除主要住宅外）超过100万美元，同时请您仔细阅读并回答以下其他问题。</p>
    <div class="question">
      <mx-checkbox-group @change="handleCheckboxChange">
        <mx-checkbox class-name="item" key="b" :checked="true">我的个人净资产（除主要住宅外）超过100万美元。</mx-checkbox>
      </mx-checkbox-group>
    </div>
    <div class="question">
      <p>2、我的个人净资产（除主要住宅外）超过100万美元。</p>
      <mx-checkbox-group class-name="group" @change="handleCheckboxChange">
        <mx-checkbox class-name="item" key="a" :checked="false" >a. 0-2年</mx-checkbox>
        <mx-checkbox class-name="item" key="b" :checked="true" >b. 2-5年</mx-checkbox>
        <mx-checkbox class-name="item" key="c" :checked="false" >c. 超过5年</mx-checkbox>
      </mx-checkbox-group>
    </div>
    <div class="question">
      <p>3、就业情况:</p>
      <mx-checkbox-group class-name="group" type="radio" @change="handleCheckboxChange">
        <mx-checkbox class-name="item" key="a" :checked="false" >a. 失业中</mx-checkbox>
        <mx-checkbox class-name="item" key="b" :checked="true" >b. 就业中</mx-checkbox>
        <mx-checkbox class-name="item" key="c" :checked="false" >c. 自营企业主</mx-checkbox>
      </mx-checkbox-group>
    </div>
    <div class="question">
      <p>4、可接受的最长投资期限:</p>
      <mx-checkbox-group class-name="group" :max="2" @change="handleCheckboxChange">
        <mx-checkbox class-name="item" key="a" :checked="false" >a. 0-2年</mx-checkbox>
        <mx-checkbox class-name="item" key="b" :checked="true" >b. 2-5年</mx-checkbox>
        <mx-checkbox class-name="item" key="c" :checked="false" >c. 超过5年</mx-checkbox>
      </mx-checkbox-group>
    </div>
    <div class="question">
      <mx-checkbox-group @change="handleCheckboxChange">
        <mx-checkbox key="a">我同意，如果我的个人净资产（除主要住宅外）在此次确认后，变成低于100万美元，我将及时通知美信。由于未及时通知美信导致的法律后果由我个人承担。</mx-checkbox>
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
