<template>
  <div class="home">
    <!-- 头部图片 -->
    <img
      class="topImg"
      width="100%"
      src="https://image.uc.cn/s/uae/g/1y/broccoli/pneumonia/index/resources/png/logo.b5c1070f03dbaa1382e7f0067074c10e.png"
      alt=""
    />
    <!-- 疫情信息 -->
    <conInfo :covDesc="covDesc" :covNews="covNews"></conInfo>
    <!-- 中间栏 -->
    <div class="entryItems">
      <div>
<router-link to="/CovArea">
            <div>
          <img
            src="https://img1.dxycdn.com/2021/0804/220/9442938684169526943-22.png"
            alt=""
          />
        </div>
        <p>风险地区</p>
</router-link>
      </div>
      <div>
        <a href="https://dxys-mall.dxy.com/client/page?name=ddhsjc"
          ><div>
            <img
              src="https://img1.dxycdn.com/2021/0804/598/2642938684169526943-22.png"
              alt=""
            />
          </div>
          <p>核酸监测</p></a
        >
      </div>
      <div>
        <div>
          <img
            src="https://img1.dxycdn.com/2021/0804/827/1742938684169526943-22.png"
            alt=""
          />
        </div>
        <p>防疫物资</p>
      </div>
      <div>
        <div>
          <img
            src="https://img1.dxycdn.com/2021/0804/239/7448668684169526943-22.png"
            alt=""
          />
        </div>
        <p>出行政策</p>
      </div>
    </div>
    <!-- 全国疫情数量统计-->
    <conNum :covNums="covNums"></conNum>
  </div>
</template>

<script>
import conInfo from "./convInfo/conInfo.vue";
import conNum from "./convInfo/covNum.vue";
//导入api数据
import api from "@/api/index";
export default {
  name: "Home",
  data() {
    return {
      //疫情信息介绍
      covDesc: {},
      covNews: [],
      covNums: {
        currentConfirmedCount: "",
        confirmedCount: "",
        suspectedCount: "",
        curedCount: "",
        deadCount: "",
        seriousCount: "",
        suspectedIncr: "",
        currentConfirmedIncr: "",
        confirmedIncr: "",
        curedIncr: "",
        deadIncr: "",
        seriousIncr: "",
        modifyTime: "",

        /**
            currentConfirmedCount 现存确诊
            confirmedCount  累计确诊
            suspectedCount  累计境外输入人数
            curedCount    累计治愈人数
            deadCount   累计死亡人数
            seriousCount  现存无症状人数
            suspectedIncr  新增境外输入人数
            currentConfirmedIncr   相比昨日现存确诊人数
            confirmedIncr  相比昨日累计确诊人数
            curedIncr   相比昨日新增治愈人数
            deadIncr  相比昨日新增死亡人数
            seriousIncr 相比昨日现存无症状人数
              modifyTime 时间    
             */
      },
    };
  },
  created() {
    //主页信息 调用接口
    api.getConInfo().then((res) => {
      this.covDesc = res.data.newslist[0].desc;
      this.covNews = res.data.newslist[0].news;
      //中部全国统计信息nums
      //对象遍历赋值  听说自动带减
      for (let key in this.covNums) {
        this.covNums[key] = res.data.newslist[0].desc[key];
      }
      console.log(this.covDesc);
      console.log(this.covNums);
    });
  },
  components: {
    conInfo,
    conNum,
  },
};
</script>

<style lang='less'>
.topImg {
  background-color: #363fd9;
}
.entryItems {
  display: flex;
  padding-bottom: 0.2rem;
  > div {
    flex: 1;
    text-align: center;
    color: #666;
    img {
      width: 0.8rem;
      height: 0.8rem;
    }
  }
}
</style>