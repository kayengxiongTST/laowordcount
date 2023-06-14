<template>
    <div>
        <textarea
            v-model="text"
            name="test"
            id=""
            cols="30"
            rows="10"
        ></textarea>
        <button @click="sendApi">ນັບ</button>
        <div>{{ response.length }}</div>
        <ul>
            <li v-for="(item, index) in response" :key="index">
                {{ item }}
            </li>
        </ul>
    </div>
</template>
<script setup lang="ts">
const text = ref(
    "ຄອບຄົວຢູ່ບ້ານດອນກາງຂອງ ຊຶ່ງເປັນດອນກາງແມ່ນໍ້າຂອງ ໃນເຂດເມືອງສັງທອງ ນະຄອນຫລວງວຽງຈັນ ຈະຖືກໃຫ້ໂຍກຍ້າຍ ໄປຢູ່ບ່ອນໃໝ່ ເພື່ອໃຫ້ບໍຣິສັດ ຂອງເກົາຫລີໃຕ້ ກໍ່ສ້າງນາມກັອບ ແລະຣີສອດ, ຂະນະນີ້ ຍັງຢູ່ໃນຂັ້ນຕອນການສໍາຣວດ"
);
const response: any = ref([]);
async function sendApi() {
    const value = await $fetch("/api/chat", {
        method: "POST",
        body: { text: text.value },
    });
    response.value = value;
}
</script>