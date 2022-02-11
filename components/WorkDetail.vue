<template>
  <div>
    <v-dialog
      v-model="dialog"
    >
      <template #activator="{ on, attrs }">
        <div class="dialog-thumbnail-wrapper">
          <img
            class="dialog-thumbnail"
            :src="require(`~/assets/image/${work.thumbnail}`)"
            v-bind="attrs"
            v-on="on"
          >
        </div>
        <div class="dialog-title">
          {{ work.title }}
        </div>
      </template>

      <v-card>
        <div class="work-container">
          <v-btn
            color="#1995ad"
            x-large
            fixed
            bottom
            right
            fab
            dark
            @click="dialog=false"
          >
          <div>
            <div>close</div>
            <v-icon
              dark
            >
              mdi-close
            </v-icon>
          </div>
        </v-btn>
          <h1 class="work-title">
            <span>
              {{ work.title }}
            </span>
          </h1>
          <div class="work-head">
            <div class="work-content-thumbnail-wrapper">
              <img
                class="work-content-thumbnail"
                :src="require(`~/assets/image/${work.thumbnail}`)"
              >
            </div>
            <div class="head-content">
              <section>
                <h2 class="head-content-heading">
                  {{ work.heading }}
                </h2>
              </section>
              <div
                class="head-content-explanation"
                v-text="work.explanation">
              </div>
            </div>
          </div>
          <div class="work-body">
            <div class="screenshots-container">
              <div
                v-for="(ss, index) in work.screenshots"
                :key="index"
                class="screenshot-content"
              >
                <template v-if="index % 2 === 0">
                  <div class="screenshot-head">
                    <h2 class="screenshot-title">
                      <span>
                        {{ ss.head }}
                      </span>
                    </h2>
                    <p 
                      class="screenshot-explanation"
                      v-text="ss.body">
                    </p>
                  </div>
                  <div class="screenshot-body">
                    <div class="screenshot-wrapper">
                      <img
                        class="screenshot"
                        :src="require(`~/assets/image/${ss.url}`)"
                      >
                    </div>
                  </div>
                </template>
                <template v-else>
                  <div class="screenshot-body">
                    <div class="screenshot-wrapper">
                      <img
                        class="screenshot"
                        :src="require(`~/assets/image/${ss.url}`)"
                      >
                    </div>
                  </div>
                  <div class="screenshot-head">
                    <h2 class="screenshot-title">
                      <span>
                        {{ ss.head }}
                      </span>
                    </h2>
                    <p 
                      class="screenshot-explanation"
                      v-text="ss.body"
                    >
                    </p>
                  </div>
                </template>
              </div>
            </div>
            <div class="tecs-container">
              <h2 class="tec-title">
                <span>
                  使用した技術など
                </span>
              </h2>
              <div class="tec-content">
                <div
                  v-for="(tec, index) in work.tecs"
                  :key="index"
                  class="tec-item"
                >
                  <img
                    class="tec-item-icon"
                    :src="require(`~/assets/svg/${tec.icon}`)"
                  >
                  <p class="tec-item-name">
                    {{ tec.name }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    props: {
      work: { type: Object, required: false, default: null}
    },
    data () {
      return {
        dialog: false,
      }
    }
  }
</script>

<style lang="scss" scoped>
.dialog-thumbnail-wrapper {
  width: 100%;
  cursor: pointer;
  transition: 0.2s;
  box-shadow: 0 8px 16px 0 #0000003d;
  margin-bottom: 16px;
}
.dialog-thumbnail-wrapper:hover {
  transform: scale(1.05);
}
.dialog-thumbnail {
  width: 100%;
  object-fit: cover;
  object-position:  center;
}
.dialog-title {
  display: flex;
  justify-content: center;
}
.work-container {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  padding: 80px 16px;
  margin: 0 auto;
}
.work-title {
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  margin-bottom: 80px;
}
.work-title::before {
  content: "";
  height: 1px;
  width: 100%;
  position: absolute;
  top: 50%;
  z-index: 1;
  border-top: 1px solid #000000;
}
.work-title span {
  position: relative;
  z-index: 2;
  padding: 0 16px;
  background-color: #ffffff;
}
.work-head {
  display: flex;
  align-items: stretch;
  justify-content: center;
  width: 100%;
  margin-bottom: 80px;
}
.work-content-thumbnail-wrapper {
  width: 50%;
  overflow: hidden;
  margin-right: 56px;
}
.work-content-thumbnail {
  width: 100%;
  object-fit: cover;
  object-position:  center;
  margin: auto;
  border-radius: 3px;
}
.head-content {
  width: 50%;
}
.head-content-heading {
  margin: 16px 0;
}
.head-content-explanation { 
  padding-left: 1em;
  white-space: pre-wrap;
}
.work-body {
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
.screenshots-container {
  width: 100%;
  margin-bottom: 56px;
}
.screenshot-content {
  width: 100%;
  display: flex;
  align-items: stretch;
  margin-bottom: 40px;
}
.screenshot-content:last-child {
  margin-bottom: 0px;
}
.screenshot-head {
  width: 50%;
}
.screenshot-title {
  border-bottom: 1px solid #000000;
  margin: 16px 0;
}
.screenshot-title span {
  padding-left: 1em;
}
.screenshot-explanation {
  padding-left: 2em;
  white-space: pre-wrap;
}
.screenshot-body {
  width: 50%;
  padding: 24px;
  border: 1px solid #000000;
}
.screenshot-wrapper {
  width: 100%;
  overflow: hidden;
}
.screenshot {
  width: 100%;
  object-fit: cover;
  object-position:  center;
  border-radius: 3px;
}
.tecs-container {
  width: 100%;
}
.tec-title {
  display: flex;
  justify-content: center;
  position: relative;
  margin-bottom: 16px;
}
.tec-title::before {
  content: "";
  height: 1px;
  width: 100%;
  position: absolute;
  top: 50%;
  z-index: 1;
  border-top: 1px solid #000000;
}
.tec-title span {
  position: relative;
  z-index: 2;
  padding: 0 16px;
  background-color: #ffffff;
}
.tec-content {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.tec-item {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 16px;
}
.tec-item-icon {
  height: 50px;
}

@media screen and (max-width: 960px) {
  .work-container {
    padding: 40px 16px;
  }
  .work-title {
    margin-bottom: 40px;
  }
  .work-head {
    flex-flow: column;
    align-content: space-between;
    margin-bottom: 40px;
  }
  .work-content-thumbnail-wrapper {
    width: 100%;
    margin-bottom: 24px;
  }
  .head-content {
    width: 100%;
  }
  .screenshot-content {
    flex-flow: column;
    align-items: center;
  }
  .screenshot-head {
    width: 100%;
  }
  .screenshot-title span {
    padding-left: 0;
  }
  .screenshot-explanation {
    padding-left: 0;
  }
  .screenshot-head {
    order: 1;
    width: 100%;
  }
  .screenshot-body {
    order: 2;
    width: 100%;
    padding: 0;
    border: none;
  }
}

@media screen and (max-width: 600px) {
  .dialog-thumbnail {
    margin-bottom: 16px;
  }
}
</style>