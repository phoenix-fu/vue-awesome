<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <a v-link="'/'">home</a>
      <a v-link="'/page/1'">page1</a>
    </div>
    <div class="tipsDiv">
      <button @click="showErrorTips">弹出统一错误提示</button>
    </div>
    <div class="tipsDiv">
      <button @click="showRootLoading">触发根的加载中</button>
      <button @click="hideRootLoading">隐藏</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Page2'
    }
  },

  methods: {
    showErrorTips () {
      this.$root.$broadcast('show-popup-error', '这是一个统一错误提示示例')
    },

    showRootLoading () {
      this.$root.$broadcast('show-loading')
    },

    hideRootLoading () {
      this.$root.$broadcast('hide-loading')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
.tipsDiv {
  margin-top: 15px
}
</style>
