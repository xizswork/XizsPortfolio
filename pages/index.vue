<template>
  <div class="base-wrapper">
    <Navigation />
    <About v-if="state === 'About'" />
    <Profile v-else-if="state === 'Profile'" />
    <Skill v-else-if="state === 'Skill'" />
    <Works v-else-if="state === 'Works'" />
    <Contact v-else-if="state === 'Contact'" />
    <Home v-else />
    <MenuButton
      ref="MenuButton"
      :links="links"
      :change-state="changeState"
    />
  </div>
</template>

<script>
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import Navigation from '~/components/Navigation.vue'
import MenuButton from '~/components/MenuButton.vue'
import Home from '~/components/Home.vue'
import About from '~/components/About.vue'
import Profile from '~/components/Profile.vue'
import Skill from '~/components/Skill.vue'
import Works from '~/components/Works.vue'
import Contact from '~/components/Contact.vue'
const db = getFirestore()

export default {
  components: {
    Navigation,
    MenuButton,
    Home,
    About,
    Profile,
    Skill,
    Works,
    Contact
  },
  data() {
    return {
      state: "Home",
      links: [
        {
          icon: 'mdi-help',
          text: 'About'
        },
        {
          icon: 'mdi-account',
          text: 'Profile'
        },
        {
          icon: 'mdi-wrench',
          text: 'Skill'
        },
        {
          icon: 'mdi-note-edit-outline',
          text: 'Works'
        },
        {
          icon: 'mdi-email',
          text: 'Contact'
        }
      ],
      test: ""
    }
  },
  async created() {
    const querySnapshot = await getDocs(collection(db, 'test'))
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data())
    })
  },
  methods: {
    changeState(arg) {
      this.state = arg
      this.$refs.MenuButton.close()
    }
  }
}
</script>

<style lang="scss" scoped>
.base-wrapper {
  position: relative;
}
</style>
