<style></style>
<template>
    <div class="widget">
        <AppBar :title="appStore.branch?.name"></AppBar>
        <div>Услуги</div>
        <v-list bg-color="rgba(0,0,0,0)" lines="three">
            <v-list-item @click="(e:any)=>{
                router.push({name:'service-detail', params: {
                    id: item.id
                }})
      }" rounded="lg" v-for="item in appStore.branch?.services">
                <v-list-item-title v-text="item.name"></v-list-item-title>
                <v-list-item-subtitle v-text="item.price"></v-list-item-subtitle>
                <template v-slot:append>
                    <v-btn color="pink-lighten-5" elevation="0">Выбрать <v-icon end
                            icon="mdi-arrow-right-thin"></v-icon></v-btn>
                </template>
            </v-list-item>
        </v-list>
    </div>
</template>
<style>
.b-vlist {
    background-color: transparent;
}
</style>

<script lang="ts" setup>
import AppBar from '@/layouts/default/AppBar.vue';
import { useAppStore } from '@/store/app';
import { onMounted, ref} from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const appStore = useAppStore();

const route = useRoute();
onMounted(() => {   
    appStore.loadBranch(parseInt(route.params.id as string))
});
</script>
