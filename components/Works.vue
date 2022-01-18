<template>
  <div class="wrapper">
    <div class="container">
      <h1 class="works-heading">
        <span>W</span>
        <span>o</span>
        <span>r</span>
        <span>k</span>
        <span>s</span>
      </h1>
      <div class="content">
        <div class="content-head">今までご縁があったプロジェクトを紹介します</div>
        <div class="content-body">
          <div 
            v-if="works.length > 6"
            class="toggle-button"
            @click="toggleWroks"
          >
            <template v-if="workList.length > 6">
              表示を隠す
            </template>
            <template v-else>
              全て見る
            </template>
            <v-icon :class="{ 'hide-content':workList.length > 6 }">
              mdi-chevron-down
            </v-icon>
          </div>
          <transition-group
            name="work-list"
            tag="div"
            class="works-container"
            appear
          >
            <div
              v-for="(work, index) in workList"
              :key="work.id"
              :class="'card-' + index"
              class="work-content"
            >
              <WorkDetail :work="work" />
            </div>
          </transition-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import works from '@/assets/json/works.json'
import WorkDetail from '~/components/WorkDetail.vue'

export default {
  components: {
    WorkDetail
  },
  data() {
    return {
      works,
      workList: []
    }
  },
  mounted() {
    window.addEventListener("scroll",this.showHeading)
    for (let i = 0; i < 6; i++) {
      if (this.works[i]) {
        this.workList.push(this.works[i])
      }
    }
  },
  destroyed() {
    window.addEventListener("scroll", this.showHeading)
  },
  methods: {
     toggleWroks() {
      if (this.workList.length <= 6) {
        for(let i = 6; i < this.works.length; i++) {
          if (this.works[i]) {
            this.workList.push(this.works[i])
          }
        }
      } else {
        for(let i = this.works.length; i > 6; i--) {
          this.workList.pop()
        }
      }
    },
    showHeading() { 
      const targetList = document.querySelectorAll('.works-heading span')
      const trigger = 300 
      targetList.forEach((target) => { 
      if (window.innerHeight > target.getBoundingClientRect().top + trigger) {
          target.classList.add('show') 
        } 
      }) 
    }
  },
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
  width: 80%;
  margin: 0 auto;
}
.works-heading {
  font-size: 100px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1.5rem;
}
.works-heading span {
  display:inline-block;
  opacity: 0;
  transition: 2s;
}
.works-heading .show {
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
  flex-direction: column;
  align-items: center;
}
.content-head {
  margin-bottom: 24px;
}
.toggle-button {
  display: flex;
  justify-content: right;
  align-items: center;
  margin-bottom: 16px;
  transition: 0.2;
  cursor: pointer;
}
.hide-content {
  transition: 0.2;
  transform: rotateX(180deg);
}
.works-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: -10px;
}
.works-container:after{
  content:"";
  display:block;
  width: 30%;
  height:0;
}
.work-content {
  width: 30%;
  margin-bottom: 24px;
  transition: 1s;
}
@for $i from 0 through 12 {
  $enter-delay: 0.2s;
  .work-list-enter-active {
    opacity: 0;
    animation: fade-in 1.2s;
      &.card-#{$i} {
        animation-delay: #{0.2s * $i + $enter-delay};
      }
  }
}
.work-list-leave-active {
  opacity: 1;
  animation: fade-out 1.2s;
}
@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(-15px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fade-out {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-15px);
  }
}
</style>