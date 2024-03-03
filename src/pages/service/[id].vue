<style>
.widget {
    max-width: 500px;
    margin: 0 auto;
}
</style>
<template>
    <div class="widget">
        <AppBar title="Выбрать мастера"></AppBar>
        <v-list lines="three">
            <div v-for="item in appStore.service?.employees" :key="item.id" :value="item.id">
                <EmployeeItem :full="false" :employee="item"></EmployeeItem>
            </div>
        </v-list>
        <div v-if="appStore.selected_date">
            <CustomerForm></CustomerForm>
        </div>
    </div>
</template>

<script lang="ts" setup>
import AppBar from '@/layouts/default/AppBar.vue';
import { useAppStore } from '@/store/app';
import { onMounted } from 'vue';
import EmployeeItem from '@/components/EmployeeItem.vue';
import { useRoute } from 'vue-router';
import CustomerForm from '@/components/CustomerForm.vue';

const appStore = useAppStore();

const route = useRoute();

onMounted(() => {
    appStore.loadService(parseInt(route.params.id.toString()));
});
</script>
<style>
</style>
