<template>
  <div class="base-wrapper">
    <Home />
    <About />
    <Profile />
    <Skill />
    <Works />
    <Contact />
    <Footer />
    <MenuButton
      ref="MenuButton"
      :links="links"
      :change-state="changeState"
    />
  </div>
</template>

<script>
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
