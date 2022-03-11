<template>
  <div class="info">
    <div class="cov">
      <div class="title">疫情信息</div>
      <p>{{ covDesc.note1 }}</p>
      <p>{{ covDesc.note2 }}</p>
      <p>{{ covDesc.note3 }}</p>
      <p>{{ covDesc.remark1 }}</p>
      <p>{{ covDesc.remark2 }}</p>
      <p>{{ covDesc.remark3 }}</p>
    </div>
    <div class="covHot">
      <div        class="title">
        <img
          height="17px"
          src="https://image.uc.cn/s/uae/g/1y/broccoli/pneumonia/index/resources/png/top-news.84ea5e40bb76f116372d7e9d264c414d.png"
          alt=""
        />
      </div>
      <ul  class="newsWrap">
          <li v-for="item in covNews" :key='item.id'>
             <a :href="item.sourceUrl"> {{item.title}}</a>
          </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  // props:{
  //     covDesc:{

  //     }
  // }
  props: ["covDesc",'covNews'],

};
</script>

<style lang='less' scoped>
.info {
  padding: 0.2rem;
  .title {
    border-left: 0.1rem solid #363fd9;
    padding-left: 0.1rem;
  }
  p {
    line-height: 0.5rem;
    color: rgb(88, 88, 88);
  }

.newsWrap{
  border-bottom: 0.01rem solid #ebebeb;

  li{
    padding: 0 0.2rem;
    margin: 0.16rem;
  }
}

}
</style>