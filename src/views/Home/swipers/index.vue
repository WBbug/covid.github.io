<template>
  <div>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="item in banner" :key="item.title">
        <img :src="item.image" alt="" width="100%" />
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <!-- 轮播按钮 -->
    <ul class="list">
      <li
        v-for="(item, index) in banner"
        :key="item.title"
        :class="{ active: index === num }"
        @click="changeSwiper(index)"
      >
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import api from "@/api/index";
export default {
  data() {
    let that = this;
    return {
      swiperOptions: {
        initialSlide: 1,
        pagination: {
          el: ".swiper-pagination",
        },
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        on: {
          slideChangeTransitionStart: function () {
            if (this.activeIndex === that.arr.length + 1) {
              that.num = 0;
            } else if (this.activeIndex === 0) {
              that.num = 4;
            } else {
              that.num = this.activeIndex - 1;
            }
          },
        },
        loop: true,
      },
      arr: [1, 2, 3, 4, 5],
      num: 0,
      banner: [],
    };
  },
  computed: {
    //获取swiper实例
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  methods: {
    changeSwiper(index) {
      this.num = index;
      this.swiper.slideTo(index + 1, 1000, false);
    },
  },
  mounted() {
    console.log(api);
    api.getSwiperWrap().then((res) => {
      this.banner = res.data.result;
    });
  },
};
</script>

<style lang='less' scoped>
.list {
  display: flex;
  li {
    flex: 1;
    margin: 0.1rem;
    text-align: center;
    align-items: center;
  }
  .active {
    background: #dbe4ff
  }
}
</style>