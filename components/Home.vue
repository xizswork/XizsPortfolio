<template>
  <div class="wrapper">
    <div class="home-background">
      <div class="background-inner">
        <div class="background-main">
          <div class="home-container">
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
        <div class="background-rigth" />
        <div class="background-bottom" />
      </div>
    </div>
    <div class="bottom-line" />
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
.home-container {
  position: relative;
  width: 100%;
  height: 100%;
}
.content {
  position: absolute;
  top: 30%;
  left: 10%;
}
.heading {
  font-family: "ExodusDemo-Sharpen",serif;
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
</style>