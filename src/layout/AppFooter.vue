<template>
	<div class="app-footer">
		<p class="app-footer__desc">genepan / vuex shopping cart</p>
		<p class="app-footer__desc">@2018 Gene Pan for practice</p>
		<p class="app-footer__desc app-footer__desc--highlight">pictures credits to ASOS.com</p>
	</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "@/assets/sass/_variables.scss";
.app-footer {
	width: 100%;
	background: #eee;
	color: black;
	padding: 20px 0px;

	&__desc {
		margin: 5px auto;
		font-size: $font-size-6;
		color: #bdbdbd;
		text-align: center;
		&--highlight {
			color: black;
		}
	}
}
</style>
