<template>
hey
</template>
<script setup lang="ts">
import AppBar from '@/layouts/default/AppBar.vue';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
const branch = {
    title: "Bonkers&Co (Tole  Bi)"
}

const route = useRoute();

onMounted(()=>{
    console.log(route.name)
});

</script>