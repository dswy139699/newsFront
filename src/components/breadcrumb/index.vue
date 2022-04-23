<template>
  <div class="breadcrumb">
    <a-breadcrumb separator=">" :routes="getRoute">
      <template slot="itemRender" slot-scope="{route}">
        <!--<span v-for="(item,index) in breadcrumb" :key="index" >-->
        <span v-if="route.path" href="" >
          <a @click="toPath(route.path)">{{ route.title }}</a>
        </span>
        <span v-else>
          {{ route.title }}
        </span>
        <!--</span>-->
      </template>
    </a-breadcrumb>
  </div>
</template>

<script>
  export default {
    name: 'Index',
    props: {
      breadcrumb: {
        type: Array,
        default: () => {
          return []
        }
      }
    },
    data () {
      return {
      }
    },
    computed: {
      getRoute () {
        const newRoute = []
        const userInfo = this.$store.getters.userInfo ? this.$store.getters.userInfo.user : {}//
        const permission = userInfo.user_permissions || []// 拿到权限
        const route = this.$route.meta && this.$route.meta.breadcrumb || []// 面包屑数据
        for (let i = 0; i < route.length; i++) {
          if (route[i].name) { // 判断面包屑有没有受权限控制的route
            const length = permission.filter(item => item === route[i].name)// 判断面包屑这个route是否有权限可以展示
            if (length && length.length > 0) { // 判断面包屑这个route是否有权限可以展示
              newRoute.push(route[i])
            }
          } else { // 如果本身不受权限控制就展示
            newRoute.push(route[i])
          }
        }
        return newRoute
      }
    },
    methods: {
    toPath (path) {
      this.$router.push({ path: path })
    }
  }
  }
</script>

<style scoped lang="less">
  .breadcrumb{
  /*/deep/  .ant-breadcrumb{*/
      /*color:#666;*/
    /*}*/
    /deep/ .ant-breadcrumb a {
      /*color:#666;*/
    }
   /*/deep/ .ant-breadcrumb-link{*/
      /*color:#666;*/
    /*}*/
   /deep/ .ant-breadcrumb > span:last-child{
      color:#151515;
    }
 /deep/.ant-breadcrumb-separator{
      margin:0 2px;
    }
  }

</style>
