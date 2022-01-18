<template>
  <div class="wrapper">
    <div class="container">
      <h1 class="profile-heading">
        <span>P</span>
        <span>r</span>
        <span>o</span>
        <span>f</span>
        <span>i</span>
        <span>l</span>
        <span>e</span>
      </h1>
      <div class="content">
        <div class="content-head">
          <v-avatar :size="iconSize" class="image">
            <img src="@/assets/image/profile-icon.jpg" />
          </v-avatar>
          <h2 class="name">Nishi Yuta</h2>
        </div>
        <div class="content-body">
          <p class="d-none d-sm-block">
            愛犬と日本酒をこよなく愛するフロントエンドエンジニア。<br />
            IT業界の変化の速さと刺激に惹かれてIT業界へ転職。<br />
            フロントエンドを中心にWeb制作を経験。<br />
            一緒に働きたくなる人間性、美しさを意識したソースコード、<br />
            チームで働く力を磨くために日々精進しています。
          </p>
          <div class="d-sm-none content-text">
            <p>
              愛犬と日本酒をこよなく愛する<br />
              フロントエンドエンジニア。
            </p>
            <p>
              IT業界の変化の速さと刺激に<br />
              惹かれてIT業界へ転職。<br />
              フロントエンドを中心に<br />
              Web制作を経験。
            </p>
            <p>
              一緒に働きたくなる人間性、<br />
              読みやすいソースコード、<br />
              チームで働く力を磨くために<br />
              日々精進しています。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iconSize: '48'
    }
  },
  mounted() {
    window.addEventListener('resize', this.iconResize)
    window.addEventListener("scroll", this.showHeading)
  },
  destroyed() {
    window.addEventListener('resize', this.iconResize)
    window.addEventListener("scroll", this.showHeading)
  },
  methods: {
    iconResize() {
      const windowSize = window.innerWidth
      if (windowSize > 960) {
        this.iconSize = '104'
      } else {
        this.iconSize = '48'
      }
    },
    showHeading() { 
      const targetList = document.querySelectorAll('.profile-heading span')
      const trigger = 300 
      targetList.forEach((target) => { 
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
}
.container {
  margin: 0 2rem;
  padding: 0 2rem;
}
.profile-heading {
  font-size: 100px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1.5rem;
}
.profile-heading span {
  display:inline-block;
  opacity: 0;
  transition: 2s;
}
.profile-heading .show {
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
  &:nth-of-type(6){ 
    animation-delay: .5s; 
  }
  &:nth-of-type(7){ 
    animation-delay: .7s;
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
.content {
  display: flex;
  justify-content: center;
}
.content-head {
  max-width: 240px;
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-right: 24px;
}
.image {
  margin: 0 16px 16px 16px;
}
.name {
  font-size: 24px;
  font-weight: bold;
}
.content-body {
  line-height: 2;
}

@media screen and (max-width: 960px) {
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
    position: relative;
  }
  .content {
    flex-flow: column;
  }
  .content-head {
    flex-flow: row;
    max-width: none;
    margin-bottom: 16px;
    margin-right: 0;
  }
  .image {
    margin: 0 16px 0px 0px;
  }
  .name {
    font-size: 36px;
  }
  .content-body {
    margin-left: 0;
  }
}

@media screen and (max-width: 600px) {
  .content-text {
    text-align: center;
  }
}
</style>