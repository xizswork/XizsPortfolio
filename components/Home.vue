<template>
  <div class="wrapper">
    <div class="home-background">
      <div class="background-inner">
        <div class="background-main"/>
        <div class="background-rigth" />
        <div class="background-bottom" />
        <div class="bottom-line" />
      </div>
    </div>
    <div class="home-container">
      <Heading id="home-heading" text="Nishi Yuta" />
      <div class="sub-heading">
        <p>I'm Front-end engineer</p>
      </div>
    </div>
  </div>
</template>

<script>
import Heading from '~/components/Heading.vue'

export default {
  components: {
    Heading
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100vw;
  min-height: 100vh;
}
.home-container {
  position: absolute;
  top: 30%;
  left: 10%;
}
.sub-heading {
  font-family: "ExodusDemo-Sharpen",serif;
  font-size: 24px;
  font-weight: lighter;
  text-align: center;
}
.home-background {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  height: 100%;
  width: 100%;
}
.background-inner {
  position: relative;
  z-index: 0;
  height: 100%;
  width: 100%;
}
.background-main {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
  clip-path: polygon(0 0, 80% 0, 40% 100%, 0% 100%);
  background-color: #cbd1d2;
}
.background-rigth {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -2;
  clip-path: polygon(100% 20%, 70% 100%, 100% 100%);
  background-color: #cbd1d2;
}
.bottom-line {
  position: absolute;
  bottom: 0;
  left: 50%;
  z-index: 100;
  height: 30px;
  width: 2px;
  border-left: 1px solid #221f20;
}

@media screen and (max-width: 600px) {
  .home-container {
    position: relative;
    top: 0;
    left: 0;
  }
}
@media screen and (max-width: 400px) {
  .sub-heading {
    font-family: "ExodusDemo-Sharpen",serif;
    font-size: 16px;
    font-weight: lighter;
    text-align: center;
  }
}
</style>