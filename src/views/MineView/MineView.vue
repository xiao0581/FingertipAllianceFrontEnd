<template>
  <div class="login" v-if="logined">
    <div class="mine-container">
      <div class="user">
        <div class="user-header">
          <span class="iconfont icon-shezhi" @click="onSetting"></span>
          <span class="iconfont icon-xiaoxi"></span>
        </div>
        <div class="user-body">
          <div class="user-image">
            <img src="../../assets/images/icon.png" alt="" @click="onData">
          </div>
          <div class="user-name" @click="onData">{{ user.username }}<span class="iconfont icon-jiantouyou"></span></div>
        </div>
      </div>
      <div class="order-list">
        <div class="item" @click="onOrderView('payOrder')">
          <span class="iconfont icon-a-bianzubeifen3"></span>
          <span class="order-info">待支付</span>
        </div>
        <div class="item" @click="onOrderView('takeOrder')">
          <span class="iconfont icon-a-bianzu14beifen8"></span>
          <span class="order-info">待收货</span>
        </div>
        <div class="item" @click="onOrderView('AppraiseOrder')">
          <span class="iconfont icon-a-bianzu14beifen4"></span>
          <span class="order-info">待评价</span>
        </div>
        <div class="item" @click="onOrderView('allOrder')">
          <span class="iconfont icon-a-bianzu14beifen"></span>
          <span class="order-info">全部订单</span>
        </div>
      </div>
    </div>
    <div class="fun-container">
      <van-grid :column-num="3">
        <van-grid-item>
          <span class="iconfont icon-fabusekuai"></span>
          <span>我的发布</span>
        </van-grid-item>
        <van-grid-item>
          <span class="iconfont icon-shoucang"></span>
          <span>我的收藏</span>
        </van-grid-item>
        <van-grid-item>
          <span class="iconfont icon-liulanjilusel"></span>
          <span>浏览历史</span>
        </van-grid-item>
        <van-grid-item>
          <span class="iconfont icon-dingwei"></span>
          <span>常用地址</span>
        </van-grid-item>
        <van-grid-item>
          <span class="iconfont icon-kefu"></span>
          <span>联系客服</span>
        </van-grid-item>
        <van-grid-item>
          <span class="iconfont icon-clarity"></span>
          <span>意见反馈</span>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
  <div class="unlogin" v-else>
      <span class="iconfont icon-weidenglu"></span>
      <p>您还没有登录，请登录后查看用户信息</p>
      <van-button color="#684886" type="primary" @click="onLogin">登录</van-button>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted } from "vue"
import { useTokenStore } from "../../stores/Login"
import { useRouter } from "vue-router"

const { user } = useTokenStore()
const router = useRouter()

// 声明一个登录状态
const logined = ref<boolean>(false)

onMounted(() => {
  user.token ? logined.value = true : logined.value = false
})

const onLogin = () =>{
  router.push("/login")
}

const onSetting = () =>{
  router.push("/mineset")
}

const onData = () =>{
  router.push("/minedata")
}

const onOrderView = (index:string) =>{
  router.push({
    name:"order",
    params:{index}
  })
}

</script>
<style lang="less" scoped>
.mine-container {
  background-color: #fff;

  .user {
    padding: 10px 15px;

    .user-header {
      width: 100%;
      height: 30px;
      line-height: 30px;

      span {
        font-size: 25px;
      }

      .icon-shezhi {
        float: left;
      }

      .icon-xiaoxi {
        float: right;
      }
    }

    .user-body {
      margin-bottom: 50px;

      .user-image {
        margin-top: 50px;
        text-align: center;

        img {
          width: 50px;
        }
      }

      .user-name {
        text-align: center;
        margin-top: 5px;

        span {
          font-size: 12px;
          margin-left: 5px;
        }
      }
    }
  }

  .order-list {
    border-top: 1px solid #f3f4f5;
    display: flex;
    height: 70px;
    justify-content: center;
    align-items: center;

    .item {
      flex: 1;
      display: flex;
      flex-direction: column;

      .iconfont {
        font-size: 25px;
        text-align: center;
      }

      .order-info {
        text-align: center;
        font-size: 14px;
        margin-top: 5px;
      }
    }
  }
}

.fun-container {
  margin-top: 10px;

  .iconfont {
    font-size: 25px;
    margin-bottom: 10px;
  }

  span {
    font-size: 14px;
  }
}

.unlogin{
  text-align: center;
  margin-top: 150px;
  span{
    font-size: 50px;
    color: #684886;
  }
  p{
    font-size: 15px;
    margin: 20px;
  }
}
</style>
