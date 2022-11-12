<template>
  <div>
    <Navigation
      :month="selectedMonth"
      :year="selectedYear"
      @previousMonth="previousMonth"
      @nextMonth="nextMonth"
    />
    <Month
      :month="selectedMonth"
      :year="selectedYear"
      :selectedDateRange="selectedDateRange"
      @selectedDate="selectedDate"
    />
  </div>
</template>
<script>
export default {
  name: "BaseDatePicker",
};
</script>
<script setup>
import { ref } from "vue";
import Navigation from "./Navigation.vue";
import Month from "./month/Month.vue";

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
const selectedDateRange = ref({ start: null, end: null });

// gets selected date from Month component.
const selectedDate = (date) => {
  selectedDateRange.value = { start: date, end: date };
};

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
