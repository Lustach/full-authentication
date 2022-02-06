<script setup lang="ts">
import { ref } from "vue";
import { useField } from "vee-validate";
import { Props } from "./interface";
//* TODO: imported interfaces are not support official by Evan(nice joke) :) https://github.com/vuejs/vue-next/issues/4294
/* we need to use plugin https://github.com/wheatjs/vite-plugin-vue-type-imports
 */
// https://vee-validate.logaretm.com/v4/guide/composition-api/validation#handling-events


const props = withDefaults(defineProps<Props>(), {
  type: "text",
  label: "Label",
  placeholder: "Placeholder",
});

const { value: modelValue, errorMessage, handleBlur, handleChange, meta } = useField(
  props.id, undefined,{ initialValue: props.modelValue,validateOnValueUpdate: false}
);
const count = ref(0);
</script>

<template>
  <div class="input__container" :class="{ 'has-error': !!errorMessage, success: meta.valid && meta.dirty}">
  {{meta}}
  {{!!errorMessage}}
    <label :for="id">{{ label }}</label>
    <!-- (e: any)=>$emit('update:modelValue', e.target.value) -->
    <input
      :type="type"
      v-model.lazy="modelValue"
      @input="handleChange"
      @blur="handleBlur"
      :placeholder="placeholder"
      :id="id"
      :name="id"
      class="my-input"
    />
    <span id="input-error" v-if="errorMessage">{{ errorMessage }}</span>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/ui/form-item.scss";
.input__container {
  @include form-item__container;
}
</style>
