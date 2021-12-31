<template>
  <div class="wrapper">
    <div class="container">
      <div class="heading">
        <h1>Works</h1>
      </div>
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
import WorkDetail from '~/components/WorkDetail.vue'

export default {
  components: {
    WorkDetail
  },
  data() {
    return {
      showAll: false,
      workList: [],
      works: [
        {
          id: 1,
          thumbnail: 'HNCK0129.jpg',
          title: 'コンテンツの名前',
          reading: 'コンテンツのふりがな',
          heading: 'コンテンツの見出し',
          explanation: `これは説明文\nこれは説明文\nこれは説明文`,
          screenshots: [
            {
              url: 'HNCK0129.jpg',
              head: 'スクショの見出し1',
              body: `これはスクショの説明文\nこれはスクショの説明文\nこれはスクショの説明文`,
            },
            {
              url: 'HNCK0129.jpg',
              head: 'スクショの見出し2',
              body: `これはスクショの説明文\nこれはスクショの説明文\nこれはスクショの説明文`,
            },
            {
              url: 'HNCK0129.jpg',
              head: 'スクショの見出し3',
              body: `これはスクショの説明文\nこれはスクショの説明文\nこれはスクショの説明文`,
            }
          ],
          tecs: [
            {
              icon: 'html-5.svg',
              name: "HTML",
            },
            {
              icon: 'css-3.svg',
		          name: 'CSS'
            },
            {
              icon: 'javascript.svg',
		          name: 'Javascript'
            }
          ]
        },
        {
          id: 2,
          thumbnail: 'HNCK0129.jpg',
          title: 'テスト2'
        },
        {
          id: 3,
          thumbnail: 'HNCK0129.jpg',
          title: 'テスト3'
        },
        {
          id: 4,
          thumbnail: 'HNCK0129.jpg',
          title: 'テスト4'
        },
        {
          id: 5,
          thumbnail: 'HNCK0129.jpg',
          title: 'テスト5'
        }
      ]
    }
  },
  mounted() {
    for (let i = 0; i < 6; i++) {
      if (this.works[i]) {
        this.workList.push(this.works[i])
      }
    }
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
    }
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container {
  width: 80%;
  margin: 0 auto;
}
.heading {
  font-size: clamp(20px, 5vw, 36px);
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
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