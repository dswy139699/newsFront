<template>
  <div v-html="payGateWay">{{ payGateWay }}</div>
</template>

<script>
    export default {
        name: 'Index',
        data () {
            return {
                payGateWay: ''
            }
        },
        mounted () {
            const form = this.$route.query.htmlData
            this.payGateWay = form
            this.$nextTick(() => {
                document.getElementById('paymentSubmit').submit()
            })
        }
    }
</script>

<style scoped>

</style>
