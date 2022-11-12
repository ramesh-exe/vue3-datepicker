<template>
  <div>
    <div class="weekday-wrapper">
      <WeekDay v-for="weekDay in weekdayName" :key="weekDay" :title="weekDay" />
    </div>
    <div v-for="week in weeks" :key="week" class="weeks-wrapper">
      <div v-for="day in week" :key="day" class="day-wrapper">
        <Day
          v-if="day"
          :key="day"
          :day="day"
          :selected="isSelected(datesRange, day)"
          @click="selectedDate"
        />
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
import {
  weekdayName,
  getWeeksForMonth,
  isSelected,
  getDatesInRange,
} from "../../datepicker";
import WeekDay from "../weekDay/WeekDay.vue";
import Day from "../day/Day.vue";

const emit = defineEmits(["selectedDate"]);

const props = defineProps({
  month: {
    type: Number,
    default: 0,
  },
  year: {
    type: Number,
    default: 0,
  },
  selectedDateRange: {
    type: Object,
    default: null,
  },
});

const selectedDate = (date) => {
  emit("selectedDate", date);
};

const weeks = computed(() => getWeeksForMonth(props.month, props.year, 0));
const datesRange = computed(() => getDatesInRange(props.selectedDateRange));
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
