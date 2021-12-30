<template>
  <div class="wrapper">
    <div class="container">
      <div class="heading">
        <h1 @click="showWroks">Works</h1>
      </div>
      <div class="content">
        <div class="content-head">今までご縁があったプロジェクトを紹介します</div>
        <div class="content-body">
          <transition-group
            name="work-list"
            tag="div"
            class="works-container"
          >
            <div
              v-for="(work, index) in worklist"
              :key="work.id"
              class="work-content"
            >
              <WorkDetail :index="index" :work="work" />
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
        },
        {
          id: 6,
          thumbnail: 'HNCK0129.jpg',
          title: 'テスト6'
        },
        {
          id: 7,
          thumbnail: 'HNCK0129.jpg',
          title: 'テスト7'
        },
        {
          id: 8,
          thumbnail: 'HNCK0129.jpg',
          title: 'テスト8'
        },
        {
          id: 9,
          thumbnail: 'HNCK0129.jpg',
          title: 'テスト9'
        }
      ]
    }
  },
  computed: {
    worklist() {
      let works = this.works
      if (!this.showAll){
        works = works.slice(0, 6)
      }
      return works
    }
  },
  methods: {
    showWroks() {
      this.showAll = !this.showAll
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
.works-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: -10px;
}
.work-content {
  width: 30%;
  margin-bottom: 24px;
  transition: 1s;
}
</style>