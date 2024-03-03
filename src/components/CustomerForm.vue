<template>
    <v-form v-model="valid">
        <v-container>
            <v-snackbar v-model="snackbar">
                {{ text }}

                <template v-slot:actions>
                    <v-btn color="pink" variant="text" @click="snackbar = false">
                        Close
                    </v-btn>
                </template>
            </v-snackbar>
            <v-row>
                <v-col cols="12" md="4">
                    <v-text-field v-model="firstname" :rules="nameRules" :counter="10" label="Имя" required
                        hide-details></v-text-field>
                </v-col>

                <v-col cols="12" md="4">
                    <v-text-field v-model="lastname" :rules="nameRules" :counter="10" label="Фамилия" hide-details
                        required></v-text-field>
                </v-col>

                <v-col cols="12" md="4">
                    <v-text-field v-model="email" :rules="emailRules" label="Почта" hide-details required></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                    <v-text-field v-model="phone" label="Телефон" required></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                    <v-btn :loading="isLoading" @click="createRecord" color="pink-lighten-5"
                        elevation="0">Записаться</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>
<script setup lang="ts">
import { create_record } from '@/domain/services';
import { useAppStore } from '@/store/app';
import { ref } from 'vue';
import moment from 'moment';

const appStore = useAppStore();
const valid = ref();
const phone = ref("87059943864");
const firstname = ref("Bolat");
const lastname = ref("Bakdaulet");
const isLoading = ref();
const text = ref();
const snackbar = ref(false);

const nameRules = [
    (value: string) => {
        if (value) return true

        return 'Name is required.'
    },
    (value: string) => {
        if (value?.length <= 10) return true

        return 'Name must be less than 10 characters.'
    },
];
const email = ref("bakosh21345@gmail.com");
const emailRules = [
    (value: string) => {
        if (value) return true

        return 'E-mail is requred.'
    },
    (value: string) => {
        if (/.+@.+\..+/.test(value)) return true

        return 'E-mail must be valid.'
    },
];

const serialize_date = (dateobject: Date) => {
    return moment(dateobject).format("YYYY-MM-DD HH:mm:ss")
}


const createRecord = async () => {
    if (valid.value) {
        try {
            isLoading.value = true;
            await create_record({
                "record_start_datetime": serialize_date(appStore.selected_date!),
                "record_end_datetime": serialize_date(new Date(appStore.selected_date?.getTime()! + appStore.service?.duration! * 60000)),
                "branch_id": appStore.service!.branch,
                "first_name": firstname.value,
                "last_name": lastname.value,
                "email": email.value,
                "phone": phone.value,
                "employee_id": appStore.selected_employee_id,
                "services_ids": [appStore.service!.id]
            });
            appStore.loadService(appStore.service!.id);
        }
        catch (e: any) {
            text.value = e.response.data.detail;
            snackbar.value = true;
        }
        finally {
            isLoading.value = false;
        }
    }

}

</script>