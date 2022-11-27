<template>
    <a-space>
      <a-button type="primary" @click="success">Success</a-button>
      <a-button type="primary" danger @click="error">Error</a-button>
      <a-button type="primary" danger @click="warning">Warning</a-button>
    </a-space>
  </template>
  <script lang="ts">
  import { message } from 'ant-design-vue';
  import { defineComponent } from 'vue';
  export default defineComponent({
    setup() {
      const success = () => {
        message.success('This is a success message');
      };
      const error = () => {
        message.error('This is an error message');
      };
      const warning = () => {
        message.warning('This is a warning message');
      };
      return {
        success,
        error,
        warning,
      };
    },
  });
  </script>
  
  