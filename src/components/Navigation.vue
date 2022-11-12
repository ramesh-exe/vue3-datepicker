<template>
  <div class="navigation-wrapper">
    <button class="navigation" @click="previousMonth">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-arrow-left"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
        />
      </svg>
    </button>
    <div class="month-year-wrapper">
      <div class="month">{{ months[month] }}</div>
      <div class="year">{{ year }}</div>
    </div>
    <button class="navigation" @click="nextMonth">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-arrow-right"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
        />
      </svg>
    </button>
  </div>
</template>
<script>
export default {
  name: "BaseNavigation",
};
</script>
<script setup>
import { months } from "../datepicker";
const emit = defineEmits(["previousMonth", "nextMonth"]);

const previousMonth = () => {
  emit("previousMonth");
};

const nextMonth = () => {
  emit("nextMonth");
};

defineProps({
  month: {
    type: Number,
    default: null,
  },
  year: {
    type: Number,
    default: null,
  },
});
</script>
<style scoped>
.navigation-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.navigation-wrapper .navigation {
  background-color: transparent;
  border: unset;
  cursor: pointer;
  padding: 12px;
}
.month-year-wrapper {
  display: flex;
}
.month-year-wrapper .month {
  margin-right: 10px;
}
</style>
