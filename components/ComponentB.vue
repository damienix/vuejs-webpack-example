<template>
	<div>
	  <p>{{message}}</p>
	  <input v-model="message">
	</div>
</template>

<script>
export default {
  data: () => ({
    message: 'Hello Vue.js!2sd22'
  })
}
</script>

<style scoped>
input {
	background: yellow;
}
</style>
