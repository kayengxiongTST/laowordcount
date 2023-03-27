<template>
    <div>
        <textarea v-model="text" type="text" />
        <div>
            <button @click="send">ສົ່ງ</button>
        </div>
        <div
            v-for="(item, index) in items"
            :key="index"
            :style="`background-color: ${
                index % 2 === 0 ? '#fff' : '#000'
            }; padding: 10px; color:  ${index % 2 !== 0 ? '#fff' : '#000'};`"
        >
            {{ item }}
        </div>
    </div>
</template>
<script setup lang="ts">
const text = ref("");
const items: any = ref({ data: [] });
onMounted(() => {
    get();
});
async function send() {
    await useFetch("/api/chat?text=" + text.value);
    get();
    text.value = "";
}
async function get() {
    const { data: messages }: any = await useFetch("/api/chat");
    items.value = JSON.parse(JSON.stringify(messages._rawValue.data.reverse()));
}
</script>
