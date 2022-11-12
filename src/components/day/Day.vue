<template>
  <button :class="classes" @click="selectDate">
    {{ formattedDate }}
  </button>
</template>
<script>
export default {
  name: "BaseDay",
};
</script>
<script setup>
import { computed, ref } from "vue";
import { isSameDay } from "../../datepicker";

const emit = defineEmits(["click"]);
const props = defineProps({
  day: {
    type: Date,
    default: null,
  },
  selected: {
    type: Boolean,
    default: false,
  },
});

const today = ref(isSameDay(new Date(), props.day));
const formattedDate = computed(() => props.day.getDate());

const selectDate = () => {
  emit("click", props.day);
};

const classes = computed(() => ({
  day: true,
  today: today.value && !props.selected,
  selected: props.selected,
}));
</script>
<style scoped>
.day {
  background-color: transparent;
  border: unset;
  cursor: pointer;
  padding: 12px;
  border-radius: 10px;
  width: 100%;
  height: 100%;
}
.today {
  border-width: 1px;
  border-style: solid;
  border-color: blue;
}
.selected {
  background-color: blue;
  color: white;
}
</style>
