Vue.component('loading',VueLoading);

new Vue({
 el:'#app',
 data:{
    tempProduct:{},
    products:[],
    isLoading:false,
    status:{},
    cart:[],
    cartTotal:0,
    uuid:'35e5ec2f-4b81-4496-9634-fef29022b381',
    apiPath:'https://course-ec-api.hexschool.io/api/',
 },
 methods:{
    //GET api/{uuid}/ec/products
    //取得產品列表（遠端資料）
    getProducts(num=1){
      this.isLoading=true; //進入產品頁面時會有的讀取效果
      const url =`${this.apiPath}${this.uuid}/ec/products?page=${num}`;
      axios.get(url)
      .then(res=>{
        this.isLoading=false; //當ajax結束時，把讀取效果拿掉
        console.log(res);
        this.products = res.data.data;
      }).catch(err=>{
        this.isLoading=false; //在讀取資料過程中可能會失敗，失敗也要記得把讀取效果拿掉
      });
    },
    //GET api/{uuid}/ec/product/{id}
    //取得單一產品資料
    getProduct(id){
      const url=`${this.apiPath}${this.uuid}/ec/product/{id}`;
      console.log(id);
      axios.get(url)
      .then(res=>{
        console.log(res);
        this.tempProduct=res.data.data;
      })
    },
 },
 created(){
    this.getProducts();
 }
})