<template>
  <a-config-provider :locale="zhCN">
    <div id="app" style="background:#f0f2f5;">
      <router-view/>
    </div>
  </a-config-provider>
</template>

<script>
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import moment from 'moment'
import 'moment/dist/locale/zh-cn'

moment.locale('zh')
export default {
  data () {
    return {
      zhCN
    }
  },
  created () {
    if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
      this.$store.dispatch('SetMobile', true)
    } else {
      this.$store.dispatch('SetMobile', false)
    }
  },
  mounted () {
    // if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
    //   this.$store.dispatch('SetMobile', true)
    // } else {
    //   this.$store.dispatch('SetMobile', false)
    // }
  },
  computed: {

  }
}
</script>
<style scoped lang="less">
  @import './global.less';
</style>
