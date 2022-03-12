# covid
> vue写的疫情查看网页，适配手机，算是复习vue也学了一下适配手机的方法，也用了echarts地图，了解了一下
>
> 项目地址：http://49.234.104.34

#### 技术栈

> vue+vantjs+echarts+axios+nginx

## 目录结构

```
├── package.json       // 项目配置文件
├── public      
│   ├── index.html     // 入口文件
├── src                // 生产目录
│   ├── api            // axios接口管理
│   ├── assets         // 图片资源
│   ├── plugins        // echarts、vant
│   ├── router         // router配置项
│   ├── utils          // 地图、地图映射表等
│   ├── views          // router页面
│   ├── App.vue        // 主页面 
│   └── main.js        // 组件等各种全局配置
```

## 功能

#### 信息浏览

利用接口获取的信息展示到页面上没什么好说的，要闻用a标签，可以点击查看具体新闻

![image-20220312142157276](https://raw.githubusercontent.com/WBbug/covidnews/main/screenshots/image-20220312142157276.png)

#### 风险地区

![image-20220312142728721](https://raw.githubusercontent.com/WBbug/covidnews/main/screenshots/image-20220312142728721.png)

#### 防疫物资

![image-20220312142749485](https://raw.githubusercontent.com/WBbug/covidnews/main/screenshots/image-20220312142749485.png)

#### 出行政策

使用vant组件库可以选择城市，并获取参数带着参数发请求，将获取到的信息展示出来

![image-20220312142901368](https://raw.githubusercontent.com/WBbug/covidnews/main/screenshots/image-20220312142901368.png)

#### 地图

点击查看具体确诊人数，再次点击标签可以查看具体城市地图，因为接口原因，和echarts配合的不是很好

![image-20220312142341320](https://raw.githubusercontent.com/WBbug/covidnews/main/screenshots/image-20220312142341320.png)

#### 趋势

下方趋势图直接copy丁香园的图hhhh，使用了swiper

![image-20220312142556628](https://raw.githubusercontent.com/WBbug/covidnews/main/screenshots/image-20220312142556628.png)
