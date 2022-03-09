<template>
  <div>
    <div class="title">出行防疫政策</div>
    <!-- 出发框 弹窗 -->
    <van-field
      v-model="outVal"
      is-link
      readonly
      label="出发城市"
      placeholder="请选择出发地区"
      @click="show = true"
    />
    <van-popup v-model="show" round position="bottom">
      <van-cascader
        v-model="cascaderValue"
        title="请选择地区"
        :options="options"
        @close="show = false"
        @finish="goFinish"
      />
    </van-popup>
    <!-- 到达弹窗 -->
    <van-field
      v-model="arrVal"
      is-link
      readonly
      label="到达城市"
      placeholder="请选择到达地区"
      @click="show2 = true"
    />
    <van-popup v-model="show2" round position="bottom">
      <van-cascader
        v-model="cascaderValue2"
        title="请选择地区"
        :options="options"
        @close="show2 = false"
        @finish="arrFinish"
      />
    </van-popup>
    <!-- 按钮 -->
    <div>
      出
      <div>{{goPolicy}}</div>
    </div>
    <div>
      入
      <div>{{ arrPolicy }}</div>
    </div>
  </div>
</template>

<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      show: false,
      show2: false,
      outVal: "", //出发城市
      arrVal: "", //到达城市
      cascaderValue: "",
      cascaderValue2: "",
      // 选项列表，children 代表子选项，支持多级嵌套
      options: [],
      policies: [],
      goPolicy: "",
      arrPolicy: "",
    };
  },
  methods: {
    // 全部选项选择完毕后，会触发 finish 事件
    goFinish({ selectedOptions }) {
      this.show = false;
      this.outVal = selectedOptions.map((option) => option.text).join("/");
      this.policies.forEach((item) => {
        if (selectedOptions[0].value === item.locationId) {
          item.cities.forEach((ele) => {
            if (selectedOptions[1].value === ele.locationId) {
              this.goPolicy = ele.outDesc;
            }
          });
        }
      });
    },
    arrFinish({ selectedOptions }) {
      this.show2 = false;
      this.arrVal = selectedOptions.map((option) => option.text).join("/");

      this.policies.forEach((item) => {
        if (selectedOptions[0].value === item.locationId) {
          item.cities.forEach((ele) => {
            if (selectedOptions[1].value === ele.locationId) {
              this.arrPolicy = ele.lowInDesc;
            }
          });
        }
      });
    },
  },
  created() {
    api.getPolicy().then((res) => {
      let result = res.data.data,
        arr = [];
      this.policies = result;

      console.log(result);
      result.forEach((item) => {
        let obj = {};
        obj.text = item.provinceShortName;
        obj.value = item.locationId;
        obj.children = [];
        item.cities.forEach((ele) => {
          let child = {};
          child.text = ele.cityName;
          child.value = ele.locationId;
          obj.children.push(child);
        });
        arr.push(obj);
      });

      this.options = arr;
    });
  },
};
</script>

<style>
</style>