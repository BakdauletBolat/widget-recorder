<style>

</style>
<template>
  <div class="widget">
    <AppBar title="Филиалы"></AppBar>
    <v-list lines="three">
      <v-list-item @click="(e:any)=>{
          router.push({
            name: 'branch-detail',
            params: {
              id: item.id
            }
          });
      }" v-for="(item, i) in appStore.partner?.branches" :key="i" :value="item.id" color="primary" rounded="lg">
        <v-list-item-media>
          <v-avatar size="80" :image="item.image"></v-avatar>
        </v-list-item-media>
        <v-list-item-title v-text="item.name"></v-list-item-title>
        <v-list-item-subtitle>
          <div>4.7k отзывов {{ item.name }}</div>
        </v-list-item-subtitle>
        <template v-slot:append>
          <v-btn color="pink-lighten-5" elevation="0">Выбрать <v-icon
          end
          icon="mdi-arrow-right-thin"
        ></v-icon></v-btn>
        </template>
      </v-list-item>
      
    </v-list>
    </div>

</template>

<script lang="ts" setup>
import AppBar from '@/layouts/default/AppBar.vue';
import { useAppStore } from '@/store/app';
import { onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
const route = useRoute();
const appStore = useAppStore();

onMounted(()=>{
  appStore.loadPartner(parseInt(route.params.id as string));
});
</script>
