<template>
  <div class="wrapper">
    <div class="container">
      <div class="content">
        <div class="heading">
          <h1>ポートフォリオサイト</h1>
          <h1>改行後テキスト</h1>
        </div>
        <div class="subHeading">
          <p>サブテキスト</p>
          <p>改行後</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f1f1f1;
}
.container {
  width: 90%;
}
.heading {
  font-size: 2.5vw;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1.5rem;
}
.subHeading {
  font-size: 2.5vw;
  font-weight: lighter;
  text-align: center;
}
</style>