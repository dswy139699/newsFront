<template>
  <div>
    <div class="lookUp" style="overflow: hidden">
      <div style="width: 800px;border-radius:4px;float:left">
        <!--        <a-tabs-->
        <!--          default-active-key='1'-->
        <!--          :tab-position="mode"-->
        <!--          :style="{ height: '200px' }"-->
        <!--          @change="callback"-->
        <!--        >-->
        <!--          <a-tab-pane key="1" tab="买房">-->
        <!--            <div style="padding:10px 10px 10px 0">-->
        <!--              <div style="margin-bottom:20px;">-->
        <!--                <a-input placeholder="请输入小区名称，地址..." style="width:400px;height:33px;"/>-->
        <!--                <a-button type="primary" style="vertical-align: top" @click="$router.push({path:'/office'})">-->
        <!--                  <a-icon type="search" />-->
        <!--                  搜索-->
        <!--              </a-button>-->
        <!--              </div>-->
        <!--              <div style="width:300px;border-right:1px solid #d8d8d8;display: inline-block;margin-right:40px;vertical-align: top">-->
        <!--                <TagList title="商铺" :tagData="secondData" :footData="footData"/>-->
        <!--              </div>-->
        <!--              <div style="width:250px;display: inline-block;vertical-align: top">-->
        <!--                <TagList title="写字楼" :tagData="secondData" :footData="footData"/>-->
        <!--              </div>-->
        <!--            </div>-->
        <!--          </a-tab-pane>-->
        <!--          <a-tab-pane key="3" tab="租房">-->
        <!--            <div style="padding:10px 10px 10px 0">-->
        <!--              <div style="margin-bottom:20px;">-->
        <!--                <a-input placeholder="请输入房源特征，地址，小区，楼盘名或..." style="width:400px;height:33px;"/>-->
        <!--                <a-button type="primary" style="vertical-align: top">-->
        <!--                  <a-icon type="search" />-->
        <!--                  租房-->
        <!--                </a-button>-->
        <!--              </div>-->
        <!--              <div style="width:300px;height:136px;border-right:1px solid #d8d8d8;display: inline-block;margin-right:40px;vertical-align: top">-->
        <!--                <TagList title="热门板块" :tagData="secondData"/>-->
        <!--              </div>-->
        <!--              <div style="width:200px;display: inline-block;vertical-align: top">-->
        <!--                <TagList title="租房预算" :tagData="priceData"/>-->
        <!--              </div>-->
        <!--            </div>-->
        <!--          </a-tab-pane>-->
        <!--        </a-tabs>-->
      </div>
      <!--      <div style="float:left;width:400px;height:200px;">-->
      <!--        <img src="../../assets/img/reserve.png" style="width:160px;height:150px;margin-left:120px;"/>-->
      <!--        <div style="width:100px;cursor:pointer;margin-left:150px;margin-top:20px;height:30px;line-height:30px;text-align:center;border-radius:4px;background: #fe8e20;color:#fff">立即预约</div>-->
      <!--      </div>-->
    </div>
    <div style="overflow: hidden">
      <div class="buildInfoLeft" style="width:800px;float:left">
        <div style="margin:30px 0">
          <Part title="最新" id="new"/>
        </div>
        <div class="brand" v-for="(item,index) in newData" :key="index">
          <span style="display: inline-block" class="newsTitle" @click="$router.push({path:'/officeDetail'})">{{ item.title }}</span>
          <span class="leftTag">
            <a-tag :color="index%4 ===0 &&'pink'" v-if="index%4 ===0">{{ item.item }}</a-tag>
            <a-tag :color="index%4 ===1 &&'green'" v-if="index%4 ===1">{{ item.item }}</a-tag>
            <a-tag :color="index%4 ===2 &&'cyan'" v-if="index%4 ===2">{{ item.item }}</a-tag>
            <a-tag :color="index%4 ===3 &&'blue'" v-if="index%4 ===3">{{ item.item }}</a-tag>
            <!--            <span :class="`tag-${index%3}`" class="tag">{{ item.item }}</span>-->
          </span>
          <!--          <span style="display: inline-block" class="newsTitle" @click="$router.push({path:'/officeDetail'})">{{ item.title }}</span>-->
        </div>
        <div style="margin:30px 0">
          <Part title="最热" id="hot"/>
        </div>
        <div class="brand" v-for="(item,index) in newData" :key="index">
          <span style="display: inline-block" class="newsTitle" @click="$router.push({path:'/officeDetail'})">{{ item.title }}</span>
          <span class="leftTag">
            <a-tag :color="index%4 ===0 &&'pink'" v-if="index%4 ===0">{{ item.item }}</a-tag>
            <a-tag :color="index%4 ===1 &&'green'" v-if="index%4 ===1">{{ item.item }}</a-tag>
            <a-tag :color="index%4 ===2 &&'cyan'" v-if="index%4 ===2">{{ item.item }}</a-tag>
            <a-tag :color="index%4 ===3 &&'blue'" v-if="index%4 ===3">{{ item.item }}</a-tag>
            <!--            <span :class="`tag-${index%3}`" class="tag">{{ item.item }}</span>-->
          </span>
        </div>
        <!--      <HotBuild/>-->
        <!--      <div style="margin-top:20px;">-->
        <!--        <Office/>-->
        <!--      </div>-->
        <!--      <div style="margin-top:20px;">-->
        <!--        <HotPoint/>-->
        <!--      </div>-->
        <!--      <div style="margin-top:20px;">-->
        <!--        <HotOffice/>-->
        <!--      </div>-->
        <!--      <officeDetail/>-->
        <div style="margin:30px 0">
          <Part title="更多" id="more"/>
        </div>
        <div class="brand" v-for="(item,index) in newData" :key="index">
          <span style="display: inline-block" class="newsTitle" @click="$router.push({path:'/officeDetail'})">{{ item.title }}</span>
          <span class="leftTag">
            <a-tag :color="index%4 ===0 &&'pink'" v-if="index%4 ===0">{{ item.item }}</a-tag>
            <a-tag :color="index%4 ===1 &&'green'" v-if="index%4 ===1">{{ item.item }}</a-tag>
            <a-tag :color="index%4 ===2 &&'cyan'" v-if="index%4 ===2">{{ item.item }}</a-tag>
            <a-tag :color="index%4 ===3 &&'blue'" v-if="index%4 ===3">{{ item.item }}</a-tag>
            <!--            <span :class="`tag-${index%3}`" class="tag">{{ item.item }}</span>-->
          </span>
        </div>
        <!--        <div style="margin-left:10px;font-size: 18px;color:rgb(255, 102, 0)">敬请期待。。。</div>-->
      </div>
      <div class="buildInfoRight" style="width:400px;float:left">
        <div style="margin-top:20px;">
          <Rank/>
        </div>
        <!--      <div style="margin-top:20px;">-->
        <!--        <RenoCompany/>-->
        <!--      </div>-->
      </div>
    </div>
  </div>
</template>

<script>
import Rank from './rank'
import Part from '@/components/part'

export default {
  name: 'Index',
  components: {
    Rank,
    Part
  },
  data () {
    return {
      mode: 'left',
      newData: [
        {
          id: 1,
          title: '新闻标题',
          item: '娱乐'
        },
        {
          id: 2,
          title: '体育',
          item: '体育'
        },
        {
          id: 3,
          title: '养生',
          item: '养生'
        }
      ]
    }
  }
}
</script>

<style scoped lang="less">
  .buildInfoLeft{
    .newsTitle{
      font-size:16px;
      color:#666;
      /*margin-bottom:20px;*/
      cursor: pointer;
      line-height: 25px;
      margin-right:10px;
    }
    .newsTitle:hover{
      color:#f60;
    }
    .brand{
      margin-bottom: 10px;
    }
    .leftTag{
      width:80px;
      font-size:14px;
      display: inline-block;
    }
    .tag{
      display: inline-block;
      background: red;
      padding:2px 10px;
      border-radius:8px;
      color:#fff;
    }
    .tag-0{
      background: red;
    }
    .tag-2{
      background:#00af63 ;
    }
    .tag-1{
      background:rgb(255, 102, 0);
    }
  }
.right{

  .title{
    font-size: 18px;
    margin-bottom:5px;
  }
  .content{
    font-size: 12px;
    color:#9d9d9d
  }
}
</style>
