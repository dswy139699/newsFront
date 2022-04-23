<template>
  <page-header-wrapper>
    <template v-slot:content>
      <div class="page-header-content">
      </div>
    </template>
    <div class="content" id="printMe">
      <div class="title" style="color:#000;font-size:20px;text-align: center;font-weight: bold">
        {{ title }}
      </div>
      <div style="margin:0 40px; overflow: hidden">
        <div style="min-height:420px;">
          <div style="color:#000;font-size:14px;font-weight: bold;margin:20px 0;overflow: hidden">
            <!--<span style="display: inline-block;margin-right:40px;float:left"></span>-->
            <span style="display: inline-block;margin-left:70px;float:left">书名</span>
            <span style="display: inline-block;margin-left:100px;float:right;width:40px;text-align: right">定价</span>
            <span style="display: inline-block;margin-left:100px;float:right;width:40px;text-align: right">折扣</span>
            <span style="display: inline-block;margin-left:100px;float:right;width:40px;text-align: right">实价</span>
          </div>
          <div v-for="item in books" style="color:#000;font-size:14px;margin:20px 0;overflow: hidden" :key="item.id">
            <span style="display: inline-block;margin-right:20px;float:left">{{ item.id }}</span>
            <span style="display: inline-block;margin-left:40px;float:left">{{ item.bookName }}</span>
            <span style="display: inline-block;width:40px;margin-left:100px;float:right;text-align: right">{{ item.price }}</span>
            <span style="display: inline-block;width:40px;margin-left:100px;float:right;text-align: right">{{ item.discount }}</span>
            <span style="display: inline-block;float:right;margin-left:100px;width:40px;text-align: right">{{ item.money }}</span>
          </div>
          <div style="color:#000;font-size:14px;margin:40px 0 20px 0;text-align: right;font-weight: bold">
            {{ header }}
          </div>
        </div>
        <div style="margin-top:100px;font-size:12px;color:#333;text-align: center;margin-bottom:15px;">
          拆封前根据本单仔细核点，并妥善保存本单，作为售后服务的依据！
        </div>
        <div style="border-bottom:1px solid #999">
        </div>
        <div style="border-bottom:1px solid #333;margin-top:2px;">
        </div>
        <div style="margin-top:20px;">
          <div style="float:left;color:#000;font-weight:bold">
            <div>
              {{ studentName }}
            </div>
            <div>
              {{ studentNum }}
            </div>
          </div>
          <div style="float:right;color:#000;text-align: right">
            <div>
              {{ className }}
            </div>
            <div>
              {{ classNum }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="text-align: right;margin-top:20px;">
      <a-button v-print="printObj" type="primary">
        打印
      </a-button>
      <a-button @click="goToHistory" style="margin-left:5px;">
        取消
      </a-button>
    </div>
  </page-header-wrapper>
</template>

<script>
  export default {
    name: 'Index',
    data () {
      return {
        printObj: {
          id: 'printMe',
          popTitle: '付款清单'
        },
        title: '上海电子信息职业技术学院2021年春季教材清单',
        header: '总书册数：5册    原价：191元    折后总价：191元',
        studentName: '胡叶飞',
        studentNum: '2020110105020',
        className: '2020-20电竞1',
        classNum: '5-302',
        books: [
          {
            id: '1',
            bookName: '电工电子技术',
            price: '39.8',
            discount: '1',
            money: '39.8'
          }
          // {
          //   id: '2',
          //   bookName: '创业意识与创业技巧',
          //   price: '26',
          //   discount: '1',
          //   money: '26.0'
          // },
          // {
          //   id: '3',
          //   bookName: '大学生形势与政策',
          //   price: '36',
          //   discount: '1',
          //   money: '36.0'
          // },
          // {
          //   id: '4',
          //   bookName: '创业意识与创业技巧',
          //   price: '26',
          //   discount: '1',
          //   money: '26.0'
          // },
          // {
          //   id: '5',
          //   bookName: '单片机应用技术（C语言版）',
          //   price: '49.8',
          //   discount: '1',
          //   money: '49.8'
          // },
          // {
          //   id: '6',
          //   bookName: '单片机应用技术（C语言版）',
          //   price: '49.8',
          //   discount: '1',
          //   money: '49.8'
          // },
          // {
          //   id: '7',
          //   bookName: '单片机应用技术（C语言版）',
          //   price: '49.8',
          //   discount: '1',
          //   money: '49.8'
          // },
          // {
          //   id: '8',
          //   bookName: '单片机应用技术（C语言版）',
          //   price: '49.8',
          //   discount: '1',
          //   money: '49.8'
          // },
          // {
          //   id: '9',
          //   bookName: '单片机应用技术（C语言版）',
          //   price: '49.8',
          //   discount: '1',
          //   money: '49.8'
          // }
        ]
      }
    },
    mounted () {
      // const params = this.$route.query || {}
    },
    methods: {
      // 取消返回上一页
      goToHistory () {
        this.$router.go(-1)// 返回上一层
      }
    }
  }
</script>

<style scoped lang="less">
  .content{
    background: #fff;
    padding:20px;
    border-radius:2px;
  }
</style>
