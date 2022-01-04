<template>
	<v-dialog
		v-model="dialog"
		overlay-color="#f0f0f0"
		overlay-opacity="0.98"
		width="90%"
		class="ma-5"
	>
		<template #activator="{ on, attrs }">
			<v-fab-transition>
        <v-btn
          v-if="!dialog"
          x-large
          fixed
          bottom
          right
          fab
          style="z-index: 300;"
          v-bind="attrs"
          v-on="on"
        >
          <div>
            <div>menu</div>
            <v-icon
              dark
            >
              mdi-menu
            </v-icon>
          </div>
        </v-btn>
      </v-fab-transition>
      <v-fab-transition>
        <v-btn
          v-if="dialog"
          x-large
          fixed
          bottom
          right
          fab
          style="z-index: 300;"
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
			</v-fab-transition>
		</template>

		<v-container class="menu-container">
			<v-row class="mb-2" justify="center">
        <img src="@/assets/svg/Logo.svg" />
				<p class="menu-title">menu</p>
			</v-row>
			<v-row class="mb-4" justify="center">
				<p class="menu-text">移動先を選択して下さい</p>
			</v-row>
			<v-row class="mb-4" justify="center">
				<v-col
					v-for="(link, index) in links"
					:key="index"
					cols="4"
				>
					<MenuLinkButton 
						:icon="link.icon"
						:text="link.text"
						:change-state="changeState"
					/>
				</v-col>
			</v-row>
			<v-row class="menu-close pa-2" justify="center">
				<v-btn
					text
					dark
					block
					@click="dialog=false"
				>
					close
					<v-icon
						dark
					>
						mdi-close
					</v-icon>
				</v-btn>
			</v-row>
		</v-container>
	</v-dialog>
</template>

<script>
import MenuLinkButton from '~/components/MenuLinkButton.vue'
export default {
	components: {
    MenuLinkButton
  },
	props: {
		links: { type: Array, default: null },
		changeState: { type: Function, default: null }
	},
	data () {
		return {
			dialog: false,
		}
	},
	methods: {
		close() {
			this.dialog = false
		}
	},
}
</script>

<style lang="scss" scoped>
.menu-container {
  padding: 80px 24px;
  height: 100vh;
  max-width: 500px;
}
.menu-title {
  font-family: 'Josefin Sans', sans-serif;
	font-size: 40px;
	font-weight: bold;
}
.menu-text {
	text-align: center;
}
.menu-close {
	border-top: 1px solid #a1d6e2;
	border-bottom: 1px solid #a1d6e2;
}
</style>