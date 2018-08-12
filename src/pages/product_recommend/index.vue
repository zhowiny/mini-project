<template>
  <div class="container">
    <ul class="product">
      <li class="product_item"
          v-for="(item, index) in data"
          :key="index" :class="{operate: item.operate}"
          @touchstart="handleStart"
          @touchmove="handleMove"
          @touchend="handleEnd(item,index)"
      >
        <div class="product_item_main" @click="handleClick(item, index)">
          <div class="product_item_title">
            <div>
              <h2>{{index}}金融资产产品{{item.name}}</h2>
            </div>
            <p>
              <span class="product_item_tag">金融</span>
            </p>
          </div>
          <div class="product_item_info">
            <div>
              <p>8-10%</p>
              <span>预计年化</span>
            </div>
            <div>
              <p>3年</p>
              <span>投资期限</span>
            </div>
            <div>
              <p >$10万</p>
              <span>起投金融</span>
            </div>
          </div>
          <div class="product_item_mask" v-if="item.isOverdue">
            <span>已下架</span>
          </div>
        </div>
        <div class="product_item_operate">
          删除
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    components: {
    },
    data () {
      return {
        title: '产品推荐',
        data: Array.apply(null, {length: 8}).map((item, index) => {
          return {index, operate: false, name: index + 1, isOverdue: index > 5}
        }),
        point: {
          startX: 0,
          startY: 0,
          endX: -1,
          endY: -1,
        },
      }
    },
    created () {
    },
    methods: {
      handleClick (item, index) {
        if (!item.operate) {
          this.toPage({url: '/pages/product_detail/main', data: {a: 1, orderId: index + 1}})
        } else {
          item.operate = false
        }
      },
      handleStart (e) {
        this.point.startX = e.clientX
        this.point.startY = e.clientY
        this.point.endX = e.clientX
        this.point.endY = e.clientY
      },
      handleEnd (item, index) {
        if (item.isOverdue) return
        if (Math.abs(this.point.startY - this.point.endY) >= 30) return
        let distance = this.point.startX - this.point.endX
        if (distance > 0 && distance > 50) {
          console.log('swiper left')
          item.operate = true
        } else if (distance < 0 && distance < -50) {
          console.log('swiper right')
          item.operate = false
        }
      },
      handleMove (e) {
        this.point.endX = e.clientX
        this.point.endY = e.clientY
      }
    },
  }
</script>

<style lang="scss" scoped>
  .container {
    font-size: 24px;
  }
  .product {
    width: 100%;
    overflow-x: hidden;
    &_item {
      @include size(900px, auto);
      @include flex(flex-start);
      margin-top: $middle-space;
      background: #fff;
      transition: transform .2s linear;
      &.operate {
        transform: translateX(-150px);
      }
      &:last-child {
        margin-bottom: $middle-space;
      }
      &_main {
        width: 750px;
        padding: $middle-space;
        position: relative;
      }
      &_tag {
        @include flex();
        padding: 5px 15px;
        color: $mainColor;
        border: 1px solid $mainColor;
        border-radius: 10px;
      }
      &_mask {
        position: absolute;
        top: 0;
        left: 0;
        @include size(100%);
        @include flex();
        background: rgba(255,255,255,.8);
        span {
          @include flex();
          @include size(200px, 75px);
          font-size: 30px;
          border: 1px solid $deepColor;
          transform: rotate(-15deg);
        }
      }
      &_operate {
        @include flex();
        align-self: stretch;
        width: 150px;
        background: transparentize(red, 0.4);
        color: #fff;
        text-align: center;
        font-size: 34px;
      }
      &_title {
        @include flex(space-between);
        margin-bottom: $middle-space;
        h2 {
          font-size: 36px;
        }
        p {
          @include flex()
        }
      }
      &_status {
        color: $mainColor;
        margin-right: $middle-space;
      }
      &_info {
        @include flex();
        @include size(100%, auto);
        text-align: center;
        line-height: 1.6;
        border-top: 1px solid $borderColor;
        padding-top: $middle-space;
        div {
          flex: 1;
          font-size: 30px;
        }
        span {
          color: $lightColor;
          font-size: 26px;
        }
      }
    }
  }
</style>
