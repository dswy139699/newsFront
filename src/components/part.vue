<template>
    <div class="part">
      <div class="part1">
        <span>{{title}}</span>
        <a-icon type="caret-right" style="color:#ffd328"/>
      </div>
      <!--<div class="part2">-->
        <!--<a-icon type="caret-down" style="color:#ffd328"/>-->
      <!--</div>-->
    </div>
</template>

<script>
export default {
  name: 'part',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="less">
  .part{
    /*padding:20px;*/
    /*text-align: center;*/
    .part1{
      font-size:20px;
    }
  }

</style>
