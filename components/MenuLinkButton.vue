<template>
	<div class="menu-link-button">
		<v-btn
			fab
			dark
			large
			outlined
			color="#a1d6e2"
			@click="changeState(text)"
		>
			<v-icon dark>
				{{ icon }}
			</v-icon>
		</v-btn>
		<p class="menu-link-text">{{ text }}</p>
	</div>
</template>

<script>
export default {
	props: {
		icon: { type: String, default: ""},
		text: { type: String, default: ""},
		changeState: { type: Function, default: null }
	}
}
</script>

<style lang="scss" scoped>
.menu-link-button {
	display: flex;
	flex-direction: column;
	align-items: center;
}
.menu-link-text {
	margin-top: 8px;
	color: #a1d6e2;
}
</style>