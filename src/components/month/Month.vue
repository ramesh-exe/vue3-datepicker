<template>
  <div>
    <div class="weekday-wrapper">
      <WeekDay v-for="weekDay in weekdayName" :key="weekDay" :title="weekDay" />
    </div>
    <div v-for="week in weeks" :key="week" class="weeks-wrapper">
      <div v-for="day in week" :key="day" class="day-wrapper">
        {{ day }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "BaseMonth",
};
</script>
<script setup>
import { computed } from "vue";
import { weekdayName, getWeeksForMonth } from "../../datepicker";
import WeekDay from "../weekDay/WeekDay.vue";

const props = defineProps({
  month: {
    type: Number,
    default: 0,
  },
  year: {
    type: Number,
    default: 0,
  },
});

const weeks = computed(() => getWeeksForMonth(props.month, props.year, 0));
</script>
<style scoped>
.weekday-wrapper {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  padding: 3px;
}
.weeks-wrapper {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  padding: 12px;
}
.day-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
