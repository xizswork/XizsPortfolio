<template>
  <div class="wrapper">
    <div class="about-background">
      <div class="about-background-inner">
        <div class="about-background-left" />
        <div class="about-background-rigth" />
      </div>
    </div>
    <div class="container">
      <div class="content">
        <h1 class="about-heading">
          <!-- <div class="about-heading-line" /> -->
          <div class="about-blind" />
          <span class="about-blind-text">About</span>
        </h1>
        <div class="content-text">
          <p class="d-none d-sm-block">
            このサイトはエンジニアNishi Yutaのポートフォリオサイトです。<br />
            これまでに関わった制作物、身につけたスキルをまとめています。<br />
            私のことをもっと深く知ってほしいと思って作りました。<br />
            少しでも興味を持っていただいたら嬉しく思います。
          </p>
          <div class="d-sm-none">
            <p>
              このサイトはエンジニアNishi Yutaの<br />
              ポートフォリオサイトです。
            </p>
            <p>
              これまでに関わった制作物、<br />
              習得したスキルをまとめています。
            </p>
            <p>
              私のことを少しでも知ってほしいと<br />
              思って作りました。
            </p>
            <p>
              もし興味を持っていただいたら<br />
              嬉しく思います。
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="about-bottom-line" /> -->
  </div>
</template>

<script>
export default {
  mounted() {
    window.addEventListener("scroll",this.showHeading)
  },
  destroyed() {
    window.addEventListener("scroll", this.showHeading)
  },
  methods: {
    showHeading() {
      const targetBlind = document.querySelector('.about-blind')
      const targetText = document.querySelector('.about-blind-text')
      const targetHeadingLine = document.querySelector('.about-heading-line')
      const targetBottomLine = document.querySelector('.about-bottom-line')
      const trigger = 300
      if (window.innerHeight > targetText.getBoundingClientRect().top + trigger) {
        targetBlind.classList.add('about-blind-animation')
        targetText.classList.add('text-animation')
        targetHeadingLine.classList.add('heading-line-animation')
        targetBottomLine.classList.add('bottom-line-animation')
      }
    }
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
  background-color: #ffffff;
  overflow: hidden;
}
.container {
  margin: 0 2rem;
  padding: 0 2rem;
}
.about-heading  {
  position: relative;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 100px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
}
.about-blind-text {
  opacity: 0;
}
.about-blind {
  position: absolute;
  background-color: #5f5f5f;
  width: 100%;
  height: 100%;
  opacity: 0;
}
.about-heading-line {
  position: absolute;
  top: 0;
  left: -50%;
  background-color: #dfdfdf;
  width: 0%;
  height: 100px;
}
.about-bottom-line {
  position: absolute;
  bottom: -10%;
  left: -50%;
  background-color: #dfdfdf;
  width: 0%;
  height: 100px;
  transform: rotate(3deg);
}
.about-blind-animation {
  animation-name: blindAnime;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}
.text-animation {
  animation-name: textAnime;
  animation-duration: 1s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
}
.heading-line-animation {
  animation-name: headingLineAnime;
  animation-duration: 1s;
  animation-delay: 1s;
  animation-fill-mode: forwards;
}
.bottom-line-animation {
  animation-name: bottomLineAnime;
  animation-duration: 1s;
  animation-delay: 2s;
  animation-fill-mode: forwards;
}
.content-text {
  text-align: center;
  line-height: 2;
}
@keyframes blindAnime{
  0% {
    transform-origin: left;
    transform: scaleX(0);
    opacity: 1;
  }
  50% {
    transform-origin: left;
    transform: scaleX(1);
    opacity: 1;
  }
  51% {
    transform-origin: right;
    opacity: 1;
  }
  100% {
    transform-origin: right;
    transform: scaleX(0);
    opacity: 1;
  }
}
@keyframes textAnime{
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes headingLineAnime{
  0% {
    top: 0;
    width: 0%;
    height: 100px;
    transform: rotate(0);
  }
  50% {
    top: 0;
    width: 200%;
    height: 100px;
    transform: rotate(0);
  }
  75% {
    top: 0;
    width: 200%;
    height: 100px;
    transform: rotate(-10deg);
  }
  100% {
    top: -90vh;
    width: 200%;
    height: 100vh;
    transform: rotate(-10deg);
  }
}
@keyframes bottomLineAnime{
  0% {
    width: 0%;
  }
  100% {
    width: 200%;
  }
}
.about-background {
  position: absolute;
  width: 100%;
  height: 100%;
}
.about-background-inner {
  position: relative;
  width: 100%;
  height: 100%;
}
.about-background-left {
  position: absolute;
  width: 100%;
  height: 100%;
  clip-path: polygon(0 0, 0 95%, 40% 0);
  background-color: #EEF3F5;
}
.about-background-rigth {
  position: absolute;
  width: 100%;
  height: 100%;
  clip-path: polygon(70% 0, 100% 0, 100% 100%, 33% 100%);
  background-color: #EEF3F5;
}
</style>