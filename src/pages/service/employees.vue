<style>
.widget {
    max-width: 500px;
    margin: 0 auto;
}
</style>
<template>
    <div class="widget">
        <AppBar :title="''"></AppBar>
        <div v-if="appStore.employee">
            <EmployeeItem full :employee="appStore.employee"></EmployeeItem>
        </div>
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

const appStore = useAppStore();

const route = useRoute();

onMounted(() => {
    appStore.loadEmployee(parseInt(route.params.id.toString()));
});
</script>
<style>
</style>
