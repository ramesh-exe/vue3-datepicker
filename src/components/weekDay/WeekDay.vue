<template>
  <div class="weekday">
    {{ title.slice(0, 3) }}
  </div>
</template>
<script>
export default {
  name: "BaseWeekDay",
};
</script>
<script setup>
defineProps({
  title: {
    type: String,
    default: null,
  },
});
</script>
<style scoped>
.weekday {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  text-transform: capitalize;
  color: #6d7175;
}
</style>
