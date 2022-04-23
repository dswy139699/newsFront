<template>
  <div class="contain">
    <div>
      <!--<img src="../../../assets/img/sell.png" width="30px" height="30px">-->
      <!--<span>特色商铺</span>-->
    </div>
    <div class="content" style="margin-left:30px">
      <div class="title">
        <span>推荐</span>
      </div>
      <div class="buildList">
        <div style="margin-bottom:20px;">
          <!--<div class="tag">-->
            <!--品牌开发商-->
          <!--</div>-->
          <div class="brand" v-for="(item,index) in brand" :key="index">
            <span style="display: inline-block;width:160px;" @click="$router.push({path:'/officeDetail'})">{{item.name}}</span>
            <span style="display: inline-block;width:160px;text-align: right;color:#ff5a00">{{index+1}}</span>
          </div>
        </div>
        <!--<div style="margin-bottom:20px;">-->
          <!--&lt;!&ndash;<div class="tag">&ndash;&gt;-->
            <!--&lt;!&ndash;轨交房&ndash;&gt;-->
          <!--&lt;!&ndash;</div>&ndash;&gt;-->
          <!--<div class="brand" v-for="(item,index) in brand" :key="index">-->
            <!--<span style="display: inline-block;width:140px;">{{item.name}}</span>-->
            <!--<span style="display: inline-block;width:140px;text-align: right">{{item.price}}</span>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div style="">-->
          <!--<div class="tag">-->
            <!--大型社区-->
          <!--</div>-->
          <!--<div class="brand" v-for="(item,index) in brand" :key="index">-->
            <!--<span style="display: inline-block;width:140px;">{{item.name}}</span>-->
            <!--<span style="display: inline-block;width:140px;text-align: right">{{item.price}}</span>-->
          <!--</div>-->
        <!--</div>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      brand: [
        {
          name: '江桥万达',
          price: '20套'
        },
        {
          name: '中骏广场',
          price: '18套'
        },
        {
          name: '景瑞张江中心',
          price: '16套'
        },
        {
          name: '中信广场',
          price: '12套'
        },
        {
          name: '江桥万达',
          price: '20套'
        },
        {
          name: '中骏广场',
          price: '18套'
        },
        {
          name: '景瑞张江中心',
          price: '16套'
        },
        {
          name: '中信广场',
          price: '12套'
        }, {
          name: '江桥万达',
          price: '20套'
        },
        {
          name: '中骏广场',
          price: '18套'
        },
        {
          name: '景瑞张江中心',
          price: '16套'
        },
        {
          name: '中信广场',
          price: '12套'
        }, {
          name: '江桥万达',
          price: '20套'
        },
        {
          name: '中骏广场',
          price: '18套'
        },
        {
          name: '景瑞张江中心',
          price: '16套'
        },
        {
          name: '中信广场',
          price: '12套'
        },
        {
          name: '景瑞张江中心',
          price: '16套'
        }
      ]
    }
  }
}
</script>

<style scoped lang="less">
  .contain {
    /*margin-top: 20px;*/
    .title {
      background:#00af63;
      padding:20px;
      font-size: 22px;
      color: #fff;
    }
    .content{
      height:830px;
      border:1px solid #eaeaea;
      .buildList{
        padding:20px;
        .tag{
          width:100px;
          height:30px;
          border:1px solid #ff5a00;
          color:#ff5a00;
          text-align: center;
          line-height:30px;
        }
        .brand{
          font-size:16px;
          color:#666;
          margin-bottom:20px;
          cursor: pointer;
        }
        .brand:hover{
          color:#f60;
        }
      }
    }
  }
</style>
