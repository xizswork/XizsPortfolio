<template>
	<div>
		<div class="footer-head">
			<Heading id="footer-heading" text="Thank you" />
		</div>
		<div class="footer-body"></div>
	</div>
</template>

<script>
import Heading from '~/components/Heading.vue'

export default {
  components: {
    Heading
  }
}
</script>

<style lang="scss" scoped>
.footer-head {
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
  font-family: "ExodusDemo-Sharpen",serif;
  text-align: center;
  width: 100vw;
	min-height: 40vh;
  background-color: #cbd1d2;
	overflow: hidden;
}
.footer-body {
	height: 10vh;
	width: 100%;
	background-color: #404040;
}
</style>