<template>
  <GoodsDetailsHeader :title="title" />
  <div class="details-container">
    <div class="dc-goods">
      <img class="goods-image" :src="goodsDetails?.image" alt="">
      <p class="goods-title">{{ goodsDetails?.title }}</p>
      <p><span class="goods-price">￥{{ goodsDetails?.price }}.00</span><span class="goods-price-old">￥500</span></p>
    </div>
    <div class="other">
      <span class="s1">快递：免邮费</span>
      <span class="s2">好评率：99%</span>
      <span class="s3">销量：3000</span>
    </div>
  </div>
  <div class="gap">
    <ItemView :image="false" :item="item" />
  </div>
  <div class="comment-container">
    <div class="comment">
      <div class="comment-header">
        <div class="title">用户评价(999+)</div>
        <div class="percent">
          <span class="text-desc">98%好评</span>
          <span class="iconfont icon-jiantouyou"></span>
        </div>
      </div>
    </div>
    <CommentView :comment="item" v-for="(item, index) in comment" :key="index" />
    <div class="more" @click="onListMore">
      <div>查看更多</div>
    </div>
  </div>
  <div class="footer">
    <van-action-bar>
      <van-action-bar-icon icon="chat-o" text="客服" />
      <van-action-bar-icon icon="cart-o" text="购物车" />
      <van-action-bar-icon icon="shop-o" text="店铺" />
      <van-action-bar-button type="warning" text="加入购物车" />
      <van-action-bar-button type="danger" text="立即购买" @click="onBuy" />
    </van-action-bar>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted } from "vue"
import { useRoute, useRouter } from "vue-router"
import { getGoodsDetails, getGoodsComment } from "../../api/Goods/index"
import GoodsDetailsHeader from "../../components/PubHeaderComponent.vue"
import ItemView from "./components/ItemView.vue"
import CommentView from "./CommentView.vue"
import { getCreateOrder } from "../../api/Order/index"

const route = useRoute()
const router = useRouter()

const title = "商品详情"

interface IGoods {
  id: number,
  image: any,
  title: string,
  price: string
}

const goodsDetails = ref<IGoods>()

onMounted(async () => {
  var res = await getGoodsDetails({ id: route.params.id })
  if (res.status === 200) {
    goodsDetails.value = res.data.data
  }
})

/**
 * 规格
 */
const item = {
  text: "选择规格",
  desc: ""
}

/**
 * 获取商品评价
 */

const comment = ref([])

onMounted(async () => {
  const res = await getGoodsComment({ id: route.params.id })
  if (res.data.status == 200) {
    comment.value = res.data.data
  }
})

const onListMore = () => {
  router.push("/commentList")
}

/**
 * 立即购买 生成订单
 */
const onBuy = () => {
  getCreateOrder({
    title: goodsDetails.value?.title,
    totalFee: goodsDetails.value?.price
  }).then(res => {
    if (res.data.code == 200) {
      router.push({
        name: "pay",
        params: { 
          id: route.params.id,
          orderNo:res.data.data.orderNo 
        }
      })
    }
  })
}

</script>
<style lang="less" scoped>
.details-container {
  .dc-goods {
    background: #fff;

    .goods-image {
      width: 100%;
    }

    .goods-title {
      padding: 10px;
      box-sizing: border-box;
      font-size: 14px;
    }

    p {
      padding-bottom: 10px;

      .goods-price {
        padding: 10px;
        box-sizing: border-box;
        font-size: 16px;
        color: #F23D52;
      }

      .goods-price-old {
        padding: 10px;
        box-sizing: border-box;
        font-size: 12px;
        color: #999;
        text-decoration: line-through;
      }
    }

  }

  .other {
    background: #fff;
    display: flex;
    padding: 10px;

    span {
      flex: 1;
      font-size: 12px;
      color: #999;
    }

    .s1 {
      text-align: left;
    }

    .s2 {
      text-align: center;
    }

    .s3 {
      text-align: right;
    }
  }
}

.gap {
  margin: 5px 0;
}

.comment {
  background: #fff;
  border-bottom: 1px solid #f3f4f5;

  .comment-header {
    padding: 10px;
    display: flex;

    .title {
      flex: 1;
      font-size: 14px;
      text-align: left;
    }

    .percent {
      flex: 1;
      text-align: right;
      color: #999;

      .text-desc {
        font-size: 12px;
      }

      .iconfont {
        font-size: 12px;
      }
    }
  }
}

.more {
  background: #fff;
  padding: 10px;
  border-top: 1px solid #f3f4f5;

  div {
    text-align: center;
    font-size: 14px;
  }
}
</style>
