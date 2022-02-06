<script setup lang="ts">
import { computed, ref } from "vue";
import { useForm } from "vee-validate";
import * as yup from "yup";
import myInput from "@/ui/input/input.vue";
import myButton from "@/ui/button.vue";
import { Props as FormField } from "../ui/input/interface";


import { setLocale } from 'yup';
// TODO: вообще лучше не использовать генераторы форм по типу yup или zod, так как в случае необходимости гибких настроек, можно потратить
// очень много времени не получив результата (use <Field></Field> <Form></Form> and options API)
setLocale({
  mixed: {
    required: 'Обязательное поле',
  },
  string:{
    email: 'Невалидный e-mail',
    min: 'Минимальная длина ${min} символов'
  },
});

interface Ref<T> {
  value: T;
}
interface Form {
  name: FormField;
  email: FormField;
  phone: FormField;
  password: FormField;
  passwordConfirm: FormField;
  language: FormField;
}

const form = ref<Form>({
  name: {
    modelValue: "",
    id: "name",
    label: "Имя",
    placeholder: "Введите ваше имя",
    type: "text",
    error: null,
  },
  email: {
    modelValue: "",
    id: "email",
    label: "Еmail",
    placeholder: "Введите ваш email",
    type: "email",
    error: null,
  },
  phone: {
    modelValue: "",
    id: "phone",
    label: "Номер телефона",
    placeholder: "Введите номер телефона",
    type: "phone",
    error: null,
  },
  password: {
    modelValue: "",
    id: "password",
    label: "Пароль",
    placeholder: "Введите пароль",
    type: "password",
    error: null,
  },
  passwordConfirm: {
    modelValue: "",
    id: "password_confirm",
    label: "Подтверждение пароля",
    placeholder: "Подтвердите пароль",
    type: "password",
    error: null,
  },
  language: {
    modelValue: "",
    id: "name",
    label: "Язык",
    placeholder: "Язык",
    type: "select",
    error: null,
  },
});
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
//  TODO: для полной красоты нужно прописать matches для всех, так как i18 yup не работает ? 
const schema = yup.object({
  email: yup.string().required().email(),
  name: yup.string().required(),
  phone: yup.string().matches(phoneRegExp, "Невалидный номер телефона").required(),
  password: yup.string().min(8).required(),
  password_confirm: yup.string().required().oneOf([yup.ref("password")], "Повторите пароль"),
})

const { meta } = useForm({
  validationSchema: schema,
});
</script>

<template>
  <div class="registration__wrapper">
    <h1 id="title">Регистрация</h1>
    <div id="login">
      Уже есть аккаунт?
      <h2>Войти</h2>
    </div>
    <!-- {{ meta }} -->
    <form class="form__container">
      <template v-for="e in form">
        <my-input
          v-if="e.type !== 'select'"
          :type="e.type"
          :placeholder="e.placeholder"
          :label="e.label"
          :id="e.id"
          v-model="e.modelValue"
          :error="e.error"
        />
      </template>
      <my-button title="Зарегистрироваться" :disabled="!meta.valid"></my-button>
    </form>
  </div>
</template>

<style scoped lang="scss">
.form__container {
  margin-top: 58px;
}
* {
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
