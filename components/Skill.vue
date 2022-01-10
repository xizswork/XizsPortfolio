<template>
  <div class="wrapper">
    <div class="container">
      <div class="heading">
        <h1>My Skills</h1>
      </div>
      <div class="content">
        <div class="skill-table">
          <div class="select-box">
            <v-select
              v-model="filterValue"
              :items="categorys"
              label="skill-categorys"
              dense
              clearable
            ></v-select>
          </div>
          <div class="skill-table-head">
            <div class="skill-name">
              Skills
            </div>
            <div class="skill-rating">
              Rating
            </div>
          </div>
          <v-divider />
          <div class="skill-table-body">
            <div 
              v-for="item in filterdSkills"
              :key="item.name"
              class="skill-table-row"
            >
              <div class="skill-name">
                <img class="table-icon-image" :src="require(`~/assets/svg/${item.icon}`)">
                <div class="table-skill-name">
                  {{ item.name }}
                </div>
              </div>
              <div class="skill-rating">
                <v-rating
                  v-model="item.rating"
                  background-color="purple lighten-3"
                  color="purple"
                  dense
                  small
                  readonly
                ></v-rating>
              </div>
            </div>
          </div>
          <v-divider />
          <div class="explanation">
            <div class="explanation-head">
              ※レーティングの説明
            </div>
            <div
              v-for="(explanation, index) in explanations"
              :key="index"
              class="explanation-row"
            >
              <div class="explanation-body">
                <v-rating
                  v-model="explanation.rating"
                  background-color="purple lighten-3"
                  color="purple"
                  dense
                  size="8px"
                  readonly
                ></v-rating>
                ・・・{{ explanation.text }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import skills from '@/assets/json/skill.json'

export default {
  data() {
    return {
      skills,
      filterValue: '',
      categorys: [
        "Front-end",
        "Back-end",
        "Tools"
      ],
      explanations: [
        {
          rating: 1,
          text: '軽く使用したことがある'
        },
        {
          rating: 2,
          text: '実務で使用したことがある'
        },
        {
          rating: 3,
          text: '実務において一人で作業できる'
        },
        {
          rating: 4,
          text: '他人に教えることができる'
        },
        {
          rating: 5,
          text: '完全に理解した'
        }
      ]
    }
  },
  computed: {
    filterdSkills() {
      let newSkills = this.skills
      if(this.filterValue) {
          newSkills = newSkills.filter((skill) => {
            return skill.category === this.filterValue
        })
      }
      return newSkills
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
.heading {
  font-size: clamp(20px, 5vw, 36px);
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
}
.skill-table-head {
  display: flex;
  align-items: center;
  height: 54px;
  padding: 8px;
}
.select-box {
  width: 50%;
}
.skill-table-body {
  height: 200px;
  overflow-y: scroll;
  margin: 16px 0;
}
.skill-table-row {
  display: flex;
  align-items: center;
  height: 54px;
  padding: 8px;
}
.skill-name {
  display: flex;
  align-items: center;
  height: 100%;
  width: 70%;
  white-space: nowrap;
  padding-right: 16px;
}
.skill-rating {
  display: flex;
  align-items: center;
  height: 100%;
  width: 30%;
}
.table-icon-image {
  height: 100%;
  width: 40px;
  padding-right: 8px;
}
.table-skill-name {
  overflow: hidden;
}
.explanation {
  margin-top: 16px;
  font-size: 8px;
}
.explanation-head {
  margin-bottom: 8px;
}
.explanation-body {
  display: flex;
  align-items: center;
  padding-left: 8px;
}

@media screen and (max-width: 600px) {
  .skill-name {
    width: 60%;
  }
  .skill-rating {
    width: 40%;
  }
}
</style>