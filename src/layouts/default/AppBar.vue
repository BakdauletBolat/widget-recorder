<template>
  <div class="pt-4 pb-4 flex app-bar">
    <v-btn @click="router.back()" icon="mdi-arrow-left" :class="{
      'd-none': hasHistory() == false
    }" elevation="0"></v-btn>
      <h3 class="text-h4 font-weight-regular">{{title}}</h3>
  </div>
     
</template>
<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';

  const props = defineProps(['title']);
  const router = useRouter();
  const route = useRoute();
  const routes_without_back_button = ['/']
  const hasHistory = () => {
    if (routes_without_back_button.includes(route.fullPath)) {
      return false;
    } 
    return window.history.length > 2;
  }
</script>
<style>
.app-bar {
  display: flex;
  gap: 10px;
  align-items: center;
}
</style>
