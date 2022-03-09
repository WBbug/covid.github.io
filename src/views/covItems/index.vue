<template>
  <div class="covItems">
    <!-- 顶部图片 -->
    <img
      width="100%"
      src="https://img1.dxycdn.com/2020/0225/360/3398657919733724819-2.png"
      alt=""
    />
    <!-- 物资内容 -->
    <div class="content">
      <!-- vant标签库 -->
      <van-tabs color="#3343ff" v-model="active" animated>
        <van-tab v-for="item in arr" :title="item.title" :key="item.title">
          <!-- <img width="100%" src="../../assets/images/jiujing.png" alt="" /> -->
          <img width="100%" :src="item.img" alt="" />
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
    name:'covItems',
  data() {
    return {
      active: 0,
      arr: [
        {
            img:'https://img1.dxycdn.com/2020/0215/220/3396780175063930893-135.png',
          title: "消毒剂",
        },
        {
            img:'	https://img1.dxycdn.com/2020/0225/169/3398653034208226202-135.png',
          title: "口罩",
        },
        {
            img:'https://img1.dxycdn.com/2020/0225/169/3398653034208226202-135.png',
          title: "洗手液",
        },
        {
            img:'https://img1.dxycdn.com/2020/0215/743/3396785021934726693-135.png',
          title: "温度计",
        },
      ],
    };
  },
};
</script>

<style lang='less' scoped>
.covItems {
  background: #3343ff;
}
.content {
  background: #3343ff;
  padding: 0.2rem;
}
</style>