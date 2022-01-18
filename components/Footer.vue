<template>
	<div>
		<div class="wrapper">
			<div class="container">
				<div class="content">
					<h1 class="footer-heading">
						Thank you
					</h1>
				</div>
			</div>
		</div>
		<div class="footer-body"></div>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.wrapper {
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	width: 100vw;
	min-height: 40vh;
	background-color: #f2f2f2;
	overflow: hidden;
}
.container {
	margin: 0 2rem;
	padding: 0 2rem;
}
.footer-heading  {
	position: relative;
	font-family: 'Josefin Sans', sans-serif;
	font-size: 100px;
	font-weight: bold;
	text-align: center;
	margin-bottom: 2rem;
}
.footer-body {
	height: 10vh;
	width: 100%;
	background-color: #dfdfdf;
}
</style>