
const base ={
    //疫情信息
    host:'http://api.tianapi.com/',//天行数据
    covInfo:'txapi/ncov/index?key=b5919dd6f573907e378d0a6be7a78ff3',

    baseUrl:'https://vyps.api.storeapi.net/api',
    chinaData:'/94/219?format=json&appid=14558&',//sign=c3ad57880b68fe078b7de7fcafa666c4国内疫情
    worldData:'/94/220?format=json&appid=14558&',//sign=c3ad57880b68fe078b7de7fcafa666c4' 国外
    cityData:'/94/221?',//城市数据
    getSwiper:'http://iwenwiki.com/wapicovid19/ncovimg.php',//轮播图的图
    policy:'https://file1.dxycdn.com/2021/0127/319/0185768311460321643-135.json?t=27445773'//直接利用丁香防疫政策
}

export default base