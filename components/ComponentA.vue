<template>
	<div>
	  <p>{{message}}</p>
	  <input v-model="message">
	</div>
</template>

<script>
export default {
  data: () => ({
    message: 'Component 1'
  })
}
</script>

<style>
</style>
