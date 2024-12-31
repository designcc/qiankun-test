<script setup>
import { defineProps, ref } from 'vue'
const props = defineProps({
  onGlobalStateChange: Function,
})
const userData = ref({})
props.onGlobalStateChange((state, prev) => {
  console.log(state)
  userData.value = state
})
</script>

<template>
  <div>
    vuejs <br />
    {{ userData }}
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
