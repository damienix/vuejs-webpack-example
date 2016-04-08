<template>
	<div>
	  <p>{{message}}</p>
	  <input v-model="message">
	</div>
</template>

<script>
export default {
  data: () => ({
    message: 'Component 2'
  })
}
</script>

<style scoped>
input {
	background: yellow;
}
</style>
