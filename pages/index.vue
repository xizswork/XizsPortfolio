<template>
  <div class="base-wrapper">
    <Background />
    <Home v-if="state === 'Home' || state === 'All'" />
    <About v-if="state === 'About' || state === 'All'" />
    <Profile v-if="state === 'Profile' || state === 'All'" />
    <Skill v-if="state === 'Skill' || state === 'All'" />
    <Works v-if="state === 'Works' || state === 'All'" />
    <Contact v-if="state === 'Contact' || state === 'All'" />
    <Footer v-if="state === 'Contact' || state === 'All'" />
    <MenuButton
      ref="MenuButton"
      :links="links"
      :change-state="changeState"
    />
  </div>
</template>

<script>
import Background from '~/components/Background.vue'
import MenuButton from '~/components/MenuButton.vue'
import Home from '~/components/Home.vue'
import About from '~/components/About.vue'
import Profile from '~/components/Profile.vue'
import Skill from '~/components/Skill.vue'
import Works from '~/components/Works.vue'
import Contact from '~/components/Contact.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Background,
    MenuButton,
    Home,
    About,
    Profile,
    Skill,
    Works,
    Contact,
    Footer
  },
  data() {
    return {
      state: "All",
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
      ]
    }
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
