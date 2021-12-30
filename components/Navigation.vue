<template>
  <header class="app-bar">
    <div class="app-bar-content">
      <h1 class="app-head">I am...</h1>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      drawer: false
    }
  }
}
</script>

<style lang="scss" scoped>
.app-bar {
  position: fixed;
  top: 32px;
  left: 16px;
}
.app-bar-content {
  display: flex;
  align-items: center;
  min-height: 56px;
  margin: 0 24px;
}
.app-head {
  font-size: clamp(24px, 10vw, 56px);
}
</style>