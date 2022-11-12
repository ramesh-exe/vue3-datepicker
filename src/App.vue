<template>
  <DatePicker v-model="date" />
  {{ date }}
</template>

<script setup>
import DatePicker from "./components/DatePicker.vue";
import { ref } from "vue";

const date = ref(null);
</script>
<style>
body {
  font-family: "Ubuntu", sans-serif;
}
</style>
