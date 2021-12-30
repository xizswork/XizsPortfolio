<template>
	<v-dialog
		v-model="dialog"
		overlay-color="#000014"
		overlay-opacity="0.9"
		max-width="500px"
		class="ma-5"
	>
		<template #activator="{ on, attrs }">
			<v-fab-transition>
				<div v-if="!dialog">
					<v-btn
						color="#1995ad"
						x-large
						fixed
						bottom
						right
						fab
						dark
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
				</div>
			</v-fab-transition>
		</template>

		<v-container class="menu-container">
			<v-row class="mb-2" justify="center">
				<p class="menu-title">ここにタイトルとロゴを入力</p>
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
.menu-title {
	font-size: clamp(24px, 5vw, 36px);
	font-weight: bold;
  color: #ffffff;
}
.menu-text {
	text-align: center;
	color: #ffffff;
}
.menu-close {
	border-top: 1px solid #a1d6e2;
	border-bottom: 1px solid #a1d6e2;
}
</style>