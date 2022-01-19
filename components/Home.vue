<template>
  <div class="wrapper">
    <div class="home-background">
      <div class="background-inner">
        <div class="background-main" />
        <div class="background-rigth" />
        <div class="background-bottom" />
      </div>
    </div>
    <div class="container">
      <div class="content">
        <div class="heading">
          <h1>Nishi Yuta</h1>
        </div>
        <div class="subHeading">
          <p>I'm Front-end engineer</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100vw;
  min-height: 100vh;
}
.container {
  margin: 0 2rem;
  padding: 0 2rem;
  z-index: 1;
}
.heading {
  font-family: 'Josefin Sans', sans-serif;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1.5rem;
}
.subHeading {
  font-size: 2.5vw;
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
  clip-path: polygon(0 0, 70% 0, 30% 100%, 0% 100%);
  background-color: lightcyan;
}
.background-rigth {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -2;
  clip-path: polygon(100% 40%, 80% 100%, 100% 100%);
  background-color: lightcyan;
}
.background-bottom {
  position: absolute;
  width: 100%;
  height: 10%;
  bottom: 0;
  background-color: #fff;
  z-index: -1;
}
</style>