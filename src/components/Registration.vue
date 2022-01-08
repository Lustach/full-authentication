<script setup lang="ts">
import { ref } from "vue";
import myInput from "@/ui/input/input.vue";
import myButton from '@/ui/button.vue'
import { Props as FormField } from "../ui/input/interface";

interface Ref<T> {
  value: T;
}
interface Form {
  [name: string]: FormField;
  email: FormField;
  phone: FormField;
  password: FormField;
  passwordConfirm: FormField;
  language: FormField;
}

const form = ref<Form>({
  name: {
    modelValue: "fasdf",
    id: "name",
    label: "Имя",
    placeholder: "Введите ваше имя",
    type: "text",
  },
  email: {
    modelValue: "fasdf",
    id: "email",
    label: "Еmail",
    placeholder: "Введите ваш email",
    type: "email",
  },
  phone: {
    modelValue: "fasdf",
    id: "phone",
    label: "Номер телефона",
    placeholder: "Введите номер телефона",
    type: "phone",
  },
  password: {
    modelValue: "",
    id: "password",
    label: "Пароль",
    placeholder: "Введите пароль",
    type: "password",
  },
  passwordConfirm: {
    modelValue: "",
    id: "password-confirm",
    label: "Подтверждение пароля",
    placeholder: "Подтвердите пароль",
    type: "password",
  },
  language: {
    modelValue: "fasdf",
    id: "name",
    label: "Язык",
    placeholder: "Язык",
    type: "select",
  },
});

// return { isModal1Open, isModal2Open };
</script>

<template>
  <div class="registration__wrapper">
    <h1 id="title">Регистрация</h1>
    <div id="login">
      Уже есть аккаунт?
      <h2>Войти</h2>
    </div>
    <div class="form__container">
      <template v-for="e in form">
        <my-input
          v-if="e.type !== 'select'"
          :type="e.type"
          :placeholder="e.placeholder"
          :label="e.label"
          :id="e.id"
          v-model="e.modelValue"
        />
      </template>
      <my-button title="Зарегистрироваться" :disabled="true"></my-button>
    </div>
  </div>
</template>

<style scoped lang="scss">
* {
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: normal;
  // color: #2c2738;
  margin: 0;
  box-sizing: border-box;
}
.registration__wrapper {
  background: #ffffff;
  box-shadow: 0px 12px 24px rgba(44, 39, 56, 0.02), 0px 32px 64px rgba(44, 39, 56, 0.04);
  border-radius: 24px;
  width: 100%;
  max-width: 460px;
  padding: 40.41px 30px 40.49px 30px;
  margin: 0 auto;
}
#title {
  font-weight: bold;
  font-size: 34px;
  line-height: 44px;
  color: #2c2738;
  text-align: left;
}
#login {
  // justify-content: center;
  display: flex;
  font-size: 16px;
  line-height: 22px;
  h2 {
    font-size: 16px;
    line-height: 22px;
    color: #0880ae;
    margin-left: 6px;
  }
}
</style>
