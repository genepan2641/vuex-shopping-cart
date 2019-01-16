<template>
	<div id="app">
		<app-nav></app-nav>

		<div class="app-body">
			<div class="page-container">
				<router-view/>
			</div>
		</div>

		<app-footer></app-footer>
	</div>
</template>

<script>
import AppNav from '@/layout/AppNav.vue';
import AppFooter from '@/layout/AppFooter.vue';
export default {
	components: {
		AppNav,
		AppFooter,
	},
	name: 'App'
}
</script>

<style lang="scss">
@import "~@/assets/sass/_variables.scss";
* {
	box-sizing: border-box;
}
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	/* text-align: center; */
	/* color: #2c3e50; */
	/* margin-top: 60px; */
}

html {
	font-size: 12px;
}
body,
html {
	margin: 0;
	padding: 0;
}

a {
	text-decoration: none;
	font-size: $font-size-5;
	color: black;
}

button {
	cursor: pointer;
	appearance: none;
	font-size: $font-size-5;
}

h1 {
	font-size: $font-size-1;
}

h2 {
	font-size: $font-size-2;
}

h3 {
	font-size: $font-size-3;
}

h4 {
	font-size: $font-size-4;
}

h5 {
	font-size: $font-size-5;
}

h6 {
	font-size: $font-size-6;
}

p {
	font-size: $font-size-5;
}

.btn-primary {
	display: inline-block;
	font-size: 1.4rem;
	background-color: white;
	color: black;
	padding: 8px 10px;
	outline: none;
	border-radius: 0px;
	text-align: center;
	border: 1px solid black;
}

.btn-secondary {
	display: inline-block;
	font-size: 1.4rem;
	background-color: black;
	color: white;
	padding: 8px 10px;
	outline: none;
	border-radius: 0px;
	text-align: center;
	border: 1px solid black;
}

.btn-small {
	padding: 3px 4px;
}

.form-control {
	border-radius: 0px;
	border: 1px solid black;
	height: 38px;
	padding: 8px 10px;
	vertical-align: bottom;
}

.bold {
	font-weight: 500;
}

.boldest {
	font-weight: 700;
}

.page-container {
	max-width: 960px;
	margin: 45px auto 0px;
}

.text-center {
	text-align: center;
}

@for $i from 0 through 20 {
	@each $prop, $abbrev in (margin: m, padding: p) {
		.#{$abbrev}#{$i*5} {
			#{$prop}: $i * 5px !important;
		}

		.#{$abbrev}T#{$i*5} {
			#{$prop}-top: $i * 5px !important;
		}

		.#{$abbrev}B#{$i*5} {
			#{$prop}-bottom: $i * 5px !important;
		}

		.#{$abbrev}L#{$i*5} {
			#{$prop}-left: $i * 5px !important;
		}

		.#{$abbrev}R#{$i*5} {
			#{$prop}-right: $i * 5px !important;
		}
	}
}

#app {
	min-height: 100vh;
}

.app-body {
	min-height: 75vh;
}
</style>
