<template>
  <div :class="wrpCls">
    <avatar-dropdown :menu="showMenu" :current-user="userInfo" :class="prefixCls" />
    <!--<select-lang :class="prefixCls" />-->
    <div v-if="userInfo.userType&&(userInfo.userType === 'school')"  style="display: inline-block;width:200px">
      <a-select
        @change="schoolChange"
        placeholder="请选择学校"
        :value="selectSchoolInfo.value || null"
        style="width:100%"
      >
        <a-select-option v-for="item in schoolNameList" :key="item.schoolId" :value="item.value">
          {{ item.label }}
        </a-select-option>
      </a-select>
    </div>
  </div>
</template>

<script>
import AvatarDropdown from './AvatarDropdown'
import { mapActions, mapGetters } from 'vuex'
// import SelectLang from '@/components/SelectLang'

export default {
  name: 'RightContent',
  components: {
    AvatarDropdown
    // SelectLang
  },
  props: {
    prefixCls: {
      type: String,
      default: 'ant-pro-global-header-index-action'
    },
    isMobile: {
      type: Boolean,
      default: () => false
    },
    topMenu: {
      type: Boolean,
      required: true
    },
    theme: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      showMenu: true,
      currentUser: {}
    }
  },
  computed: {
    ...mapGetters(['userInfo', 'schoolNameList', 'selectSchoolInfo']),
    wrpCls () {
      return {
        'ant-pro-global-header-index-right': true,
        [`ant-pro-global-header-index-${(this.isMobile || !this.topMenu) ? 'light' : this.theme}`]: true
      }
    },
    defaultValue () {
      const value = this.schoolNameList[0] ? this.schoolNameList[0].value : ''
      return value
    }
  },
  mounted () {
    // console.log(this.userInfo)
  },
  methods: {
    ...mapActions(['SetSelectSchool']),
    schoolChange (value, option) {
      let selectValue = {}
      for (let i = 0; i < this.schoolNameList.length; i++) {
        if (this.schoolNameList[i].value === value) { selectValue = this.schoolNameList[i] }
      }
      this.SetSelectSchool(selectValue)
    }
  }
}
</script>
