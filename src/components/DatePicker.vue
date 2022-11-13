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
      :showToday="showToday"
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

const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  month: {
    type: Number,
    default: new Date().getMonth(),
  },
  year: {
    type: Number,
    default: new Date().getFullYear(),
  },
  showToday: {
    type: Boolean,
    default: true,
  },
  modelValue: {
    type: Object,
    default: null,
  },
});

const selectedMonth = ref(props.month);
const selectedYear = ref(props.year);
const selectedDateRange = ref({ start: null, end: null });

// gets selected date from Month component.
const selectedDate = (date) => {
  selectedDateRange.value = { start: date, end: date };
  emit("update:modelValue", selectedDateRange.value);
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
