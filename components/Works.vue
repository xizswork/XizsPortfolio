<template>
  <div class="wrapper">
    <div class="top-line" />
    <div class="works-container">
      <Heading id="works-heading" text="Works" color="#ffffff" />
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
          <div class="work-contents">
            <div
              v-for="(work, index) in workList"
              :key="work.id"
              :class="'card-' + index"
              class="work-content"
            >
              <WorkDetail :work="work" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-line" />
  </div>
</template>

<script>
import works from '~/assets/json/works.json'
import WorkDetail from '~/components/WorkDetail.vue'
import Heading from '~/components/Heading.vue'

export default {
  components: {
    WorkDetail,
    Heading
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
  background-color: #404040;
  color: #ffffff
}
.works-container {
  width: 80%;
  margin: 56px auto;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.content-head {
  margin-bottom: 24px;
}
.content-body {
  width: 100%;
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
.work-contents {
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
.top-line {
  position: absolute;
  top: 0;
  left: 50%;
  z-index: 100;
  height: 30px;
  width: 2px;
  border-left: 1px solid #ffffff;
}
.bottom-line {
  position: absolute;
  bottom: 0;
  left: 50%;
  z-index: 100;
  height: 30px;
  width: 2px;
  border-left: 1px solid #ffffff;
}

@media screen and (max-width: 960px) {
  .work-content {
    width: 48%;
    margin-bottom: 32px;
  }
}

@media screen and (max-width: 600px) {
  .container {
    margin: 40px auto ;
  }
  .content-head {
    margin-bottom: 48px;
  }
  .work-content {
    width: 100%;
    margin-bottom: 48px;
  }
}
</style>