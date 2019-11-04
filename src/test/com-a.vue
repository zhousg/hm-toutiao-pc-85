<template>
  <div class='container-a'>
    <p>COM-A ---- {{str}}</p>
  </div>
</template>

<script>
import eventBus from '@/eventBus'
export default {
  data () {
    return {
      str: ''
    }
  },
  created () {
    eventBus.$on('B2A', (data) => {
      this.str = data
    })
  }
}
</script>

<style scoped lang='less'></style>
