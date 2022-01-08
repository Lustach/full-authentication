<script setup lang="ts">
import { ref } from "vue";
interface Props {
  title: string;
  disabled: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  title: "Кнопка",
  disabled: false,
});
const count = ref(0);
</script>

<template>
  <button :disabled="props.disabled">{{ title }}</button>
</template>

<style lang="scss">
button {
  width: 100%;
  height: 56px;
  outline: none;
  border: none;
  box-shadow: 0px 2px 4px rgba(44, 39, 56, 0.08), 0px 4px 8px rgba(44, 39, 56, 0.08);
  border-radius: 6px;
  background: #0880ae;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  text-align: center;
  color: #ebf4f8;
  cursor: pointer;
  &:hover{
    background: #68bfe1;
  }
  &[disabled] {
    background: #dbe2ea;
    cursor: initial;
  }
}
</style>
