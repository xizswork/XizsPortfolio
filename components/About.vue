<template>
  <div class="wrapper">
    <div class="container">
      <div class="content">
        <h1 class="heading">
          <span>A</span>
          <span>b</span>
          <span>o</span>
          <span>u</span>
          <span>t</span>
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
      const targetList = document.querySelectorAll('.heading span')
      const trigger = 300
      targetList.forEach((target) => {
        console.log(target)
        if (window.innerHeight > target.getBoundingClientRect().top + trigger) {
          target.classList.add('show')
        }
      })
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
}
.container {
  margin: 0 2rem;
  padding: 0 2rem;
}
.heading  {
  font-family: 'Josefin Sans', sans-serif;
  font-size: 100px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
}
.heading span {
  display:inline-block;
  opacity: 0;
  transition: 2s;
}
.heading .show {
  opacity: 1;
  animation-name: wave;
  animation-duration: .4s;
  animation-direction: alternate;
  animation-iteration-count: 2;
  &:nth-of-type(2){
    animation-delay: .1s;
  }
  &:nth-of-type(3){
    animation-delay: .2s;
  }
  &:nth-of-type(4){
    animation-delay: .3s;
  }
  &:nth-of-type(5){
    animation-delay: .4s;
  }
}
.content-text {
  text-align: center;
  line-height: 2;
}
@keyframes wave {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(0, -100px, 0);
  }
}
</style>