<template>
  <div>
    <Navigation
      :month="selectedMonth"
      :year="selectedYear"
      @previousMonth="previousMonth"
      @nextMonth="nextMonth"
    />
    <div class="weekday-wrapper">
      <WeekDay v-for="weekDay in weekdayName" :key="weekDay" :title="weekDay" />
    </div>
  </div>
</template>
<script>
export default {
  name: "BaseDatePicker",
};
</script>
<script setup>
import { ref } from "vue";
import { weekdayName } from "../datepicker";
import WeekDay from "./weekDay/WeekDay.vue";
import Navigation from "./Navigation.vue";

const props = defineProps({
  month: {
    type: Number,
    default: new Date().getMonth(),
  },
  year: {
    type: Number,
    default: new Date().getFullYear(),
  },
});

const selectedMonth = ref(props.month);
const selectedYear = ref(props.year);

const previousMonth = () => {
  const currentMonth = selectedMonth.value;
  const currentYear = selectedYear.value;
  if (currentMonth < 1) {
    selectedMonth.value = 11;
    selectedYear.value = currentYear - 1;
  } else {
    selectedMonth.value = currentMonth - 1;
  }
};
const nextMonth = () => {
  const currentMonth = selectedMonth.value;
  const currentYear = selectedYear.value;
  if (currentMonth > 10) {
    selectedMonth.value = 0;
    selectedYear.value = currentYear + 1;
  } else {
    selectedMonth.value = currentMonth + 1;
  }
};
</script>
<style scoped>
.weekday-wrapper {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  padding: 3px;
}
</style>
