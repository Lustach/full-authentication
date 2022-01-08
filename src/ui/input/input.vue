<script setup lang="ts">
import { ref } from "vue";
import { useField } from 'vee-validate';
//* TODO imported interfaces are not support official by Evan(nice joke) :) https://github.com/vuejs/vue-next/issues/4294
/* we need to use plugin https://github.com/wheatjs/vite-plugin-vue-type-imports
*/
import { Props } from "./interface";

const props = withDefaults(defineProps<Props>(), {
  type: "text",
  label: "Label",
  placeholder: "Placeholder",
});


// function isRequired(value:string) {
//       if (value && value.trim()) {
//         return true;
//       }
//       return 'This is required';
//     }

// const { errorMessage, value } = useField(props.id, isRequired);


const count = ref(0);
</script>

<template>
  <div class="input__container">
    <label :for="id">{{ label }}</label>
    <input
      :type="type"
      v-model="modelValue"
      @input="(e: any)=>$emit('update:modelValue', e.target.value)"
      :placeholder="placeholder"
      :id="id"
    />
    <!-- <span>{{ errorMessage }}err</span> -->
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/ui/form-item.scss";
.input__container {
  @include form-item__container;
}
</style>
