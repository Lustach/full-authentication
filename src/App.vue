<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Registration from "@/components/Registration.vue";
</script>

<template>
  <Registration id="app" />
</template>

<style>
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
}
#app * {
  font-family: IBM Plex Sans,sans-serif;
  font-style: normal;
  font-weight: normal;
}
:root {
  --primary-color: #0071fe;
  --error-color: #f23648;
  --error-bg-color: #fddfe2;
  --success-color: #21a67a;
  --success-bg-color: #e0eee4;
}
</style>
