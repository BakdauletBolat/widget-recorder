<template>
    <div class="text-black mt-5">Ближайшее время для записи</div>
    <v-chip-group selected-class="text-deep-purple-accent-4">
        <v-chip label @click="() => { appStore.selected_date = slot.date; appStore.selected_employee_id = employee.id }"
            :disabled="slot.isReserved" v-for="slot in slots" :key="slot.date.toString()" :value="slot.date">
            {{ getFullHours(slot.date) }}:{{ getFullMinutes(slot.date) }}
        </v-chip>
    </v-chip-group>
</template>
<script setup lang="ts">
import { Employee } from '@/domain/models';
import { TimeSlotManager } from '@/plugins/time-slot';
import {getFullHours, getFullMinutes} from '@/utils/getFullMinutes';
import { useAppStore } from '@/store/app';
import { onMounted } from 'vue';
import { ref } from 'vue';
import moment from 'moment';

const appStore = useAppStore();
const slots = ref<{
    isReserved: boolean,
    date: Date
}[]>([]);

const props = defineProps<{
    employee: Employee,
    iteration: number
}>();

const timeManager = new TimeSlotManager();


onMounted(() => {
    props.employee.records.forEach(record => {
        timeManager.reserveAllTimeSlot(new Date(record.record_start_datetime), new Date(record.record_end_datetime));
    });
    generate_slots();

});

const generate_slots = () => {

    const nowStart = new Date();
    const now = new Date();
    nowStart.setHours(8, 0, 0, 0);
    const nowEnd = new Date();
    nowEnd.setHours(23, 0, 0, 0);
    for (let time = nowStart.getTime(); time <= nowEnd.getTime(); time += props.iteration * 60000) {
        if (slots.value.length <= 4) {
            if (time >= now.getTime() && !timeManager.checkTimeSlot(new Date(time), props.iteration)) {
            slots.value.push({
                isReserved: false,
                date: new Date(time)
            })
        }
        }   
       
    }
}
</script>