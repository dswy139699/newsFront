<template>
  <div id="components-layout-demo-basic">
  <a-layout>
    <a-layout-header>
      <div class="search-nav">
      <div class="search-nav-container">
      <div><img src="../assets/news.jpg"><span style="display: inline-block;margin-left:10px;color:#f60">新闻管理系统</span></div>
<!--      <ul>-->
<!--      <li v-for="(item,index) in menuData[0].children"  :key="index" v-if="item.name" >-->
        <!--{{item.meta.title}}-->
<!--        <a-dropdown v-if="item.children">-->
<!--          <div class="ant-dropdown-link"  :class="getRoute(item.children) ? 'select' : ''">-->
<!--            {{item.meta.title}} <a-icon type="down" />-->
<!--          </div>-->
<!--          <a-menu slot="overlay" >-->
<!--            <a-menu-item v-for="(data,i) in item.children" :key="i">-->
<!--              <a @click="$router.push({path:data.path,query:{routeName:data.name}})">{{data.meta.title}}</a>-->
<!--            </a-menu-item>-->
<!--          </a-menu>-->
<!--        </a-dropdown>-->
<!--&lt;!&ndash;        <div v-else @click="$router.push({path:item.path,query:{routeName:item.name}})" :class="$route.path === item.path ? 'select' : ''">&ndash;&gt;-->
<!--           首页-->
<!--        </div>-->
<!--      </li>-->
<!--      </ul>-->
        <div style="line-height:64px" class="user">
          <div style="width:20px;height:20px;margin:0 5px 0 20px;position:relative;bottom: 3px;"><img src="../assets/user.png" style="width:20px;height:20px;"></div>
          <div v-if="!$store.getters.nickname">
            <span style="display: inline-block;margin-right:5px;">登录</span>
            <span style="display: inline-block;">注册</span>
          </div>
          <div style="color:red;" v-else>{{$store.getters.nickname}}</div>
<!--          <div style="color:#f60;font-size:16px;">贵宾</div>-->
        </div>
      </div>
      </div>
    </a-layout-header>
    <a-layout-content>
      <div>
      <router-view :key="$route.path"/>
      </div>
    </a-layout-content>
    <a-layout-footer>
      <div>
<!--        <Footer/>-->
      </div>
    </a-layout-footer>
  </a-layout>
  </div>
</template>
<script>
// import SideMenu from '@/components/sideMenu'
// import Footer from '@/components/footer/Footer'

export default {
  data () {
    // const menuData = this.$router.options.routes || []
    return {
      collapsed: false
      // menuData
    }
  },
  methods: {
    getRoute: function (routes) {
      for (let i = 0; i < routes.length; i++) {
        if (this.$route.path === routes[i].path) {
          return true
        }
      }
      return false
    }
  },
  watch: {
    '$route.path': function (val) {
      // console.log(this.$route)
    }
  },
  components: {
    // SideMenu,
    // Footer
  }
}
</script>
<style scoped lang="less">
  #components-layout-demo-basic {
    /*text-align: center;*/
    background: #fff;
  }
  #components-layout-demo-basic .ant-layout-header,
  #components-layout-demo-basic .ant-layout-footer {
    background: #fff;
    padding:0;
    /*color: #fff;*/
    .user{
      span{
        cursor: pointer;
        color:rgb(255, 102, 0);
      }
      span:hover{
        color:#00af63;
      }
    }
  }
  #components-layout-demo-basic .ant-layout-footer {
    div{
      width:1200px;
      margin:0 auto;
    }
  }
  #components-layout-demo-basic .ant-layout-sider {
    /*background: #3ba0e9;*/
    /*color: #fff;*/
    /*line-height: 120px;*/
  }
  #components-layout-demo-basic .ant-layout-content {
    background: #fff;
    /*display: flex;*/
    /*justify-content:center;*/
    /*position: absolute;*/
    /*left:50%;*/
    /*transform:translateX(-50%);*/
    /*top:60px;*/
    /*padding-top:10px;*/
    padding-top:20px;
    min-height:600px;
    div{
      margin: 0 auto;
      width:1200px;
    }
  }
  #components-layout-demo-basic > .ant-layout {
    /*margin-bottom: 48px;*/
  }
  #components-layout-demo-basic > .ant-layout:last-child {
    margin: 0;
  }

  .search-nav{
    width: 100%;
    height: 64px;
    background:#fff ;
    position: fixed;
    top:0;
    left:0;
    z-index: 100;
  }
  .search-nav-container{
    display: flex;
    padding:0 200px;
    /*justify-content:center;*/
    justify-content: space-between;
    /*min-width: 1200px;*/
    height: 64px;
    /*margin: 0px auto;*/
    border-bottom:1px solid  #00af63;

  }
  .search-nav-container div{
    display: inline-block;
    vertical-align: top;
    position: relative;
    /*width:40px;*/
    height:40px;
    left:0;
    bottom: 0;
    img{
      width:40px;
      height:40px;
    }
  }
  .search-nav-container ul{
    display: inline-block;
  }
  .search-nav-container li{
    cursor: pointer;
    padding:0 20px;
    color: #333;
    line-height: 64px;
    font-size: 14px;
    float: left;
  }
  .search-nav-container .select{
    color:#00af63;
  }
  .search-nav-container li:hover{
    color:#00af63;
  }
</style>
