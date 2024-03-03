<template>
    <v-list-item color="primary" rounded="lg">
        <div class="text-subtitle-2 font-weight-light">Барбер</div>
        <v-list-item-title class="font-weight-bold" v-text="employee.first_name"></v-list-item-title>
        <v-list-item-subtitle>
            <div class="d-flex align-center gap-1"><v-rating hover readonly :length="5" :size="27" :model-value="5"
                    active-color="yellow
" /> {{ employee.ratings.length }} </div>

            <VueImminentComponent v-if="!full" :iteration="30" :employee="employee"></VueImminentComponent>
        </v-list-item-subtitle>
        <template v-slot:append>
            <v-btn @click="onClickedSelect(employee.id)" color="pink-lighten-5" elevation="0">Выбрать <v-icon end
                    icon="mdi-arrow-right-thin"></v-icon></v-btn>
        </template>
    </v-list-item>
    <FullTimeSlotVue v-if="full" :iteration="30" :employee="employee"></FullTimeSlotVue>
</template>
<script lang="ts" setup>

import VueImminentComponent from '@/components/VueImminentComponent.vue';
import FullTimeSlotVue from './FullTimeSlot.vue';
import { Employee } from '@/domain/models';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const onClickedSelect = (employee_id: number) => {
    router.push({
        name: 'employee-detail', params: {
            id: employee_id
        }
    })
}

defineProps<{
    employee: Employee,
    full: boolean
}>();
</script>
