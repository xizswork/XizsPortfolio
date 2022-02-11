<template>
	<div :id="id" class="heading" :style="{ color: color }">
		<h1>{{ text }}</h1>
	</div>
</template>

<script>
export default {
	props: {
		id : { type: String, required: true },
		text: { type: String, required: true },
		color: { type: String, required: false, default: '#000000' },
		anime: { type: String, required: true, default: 'none' }
	},

	mounted() {
		const heading = document.querySelector('#' + this.id)
		const headingTexts = heading.textContent

		heading.innerHTML = null

		headingTexts.split('').forEach((headingText, index) => {
			heading.innerHTML += `<span style="display: inline-block; font-size: 80px; animation-delay: ${ index/10 }s;">` + headingText +'</span>'
		})
	}
}
</script>
  
<style lang="scss" scoped>
.heading {
	font-family: "ExodusDemo-Sharpen",serif;
	font-size: 0;
	font-weight: bold;
	text-align: center;
	margin-bottom: 1.5rem;
	white-space: pre;
}

@media screen and (max-width: 600px) {
	.heading {
		font-family: "ExodusDemo-Sharpen",serif;
		font-size: 64px;
		font-weight: bold;
		text-align: center;
		margin-bottom: 1.5rem;
	}
	.heading-text {
		color: red;
	}
}
@media screen and (max-width: 400px) {
	.heading {
		font-family: "ExodusDemo-Sharpen",serif;
		font-size: 48px;
		font-weight: bold;
		text-align: center;
		margin-bottom: 1.5rem;
	}
}
</style>