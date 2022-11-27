<template>
  <div>
    <Header />
    <a-card title="日期组件演示" bodyStyle="text-align: center">
      <!-- 组件1 -->
      <a-range-picker v-model:value="value1" />
    </a-card>
    <a-card title="Pinia演示" bodyStyle="text-align: center">
      <!-- 组件2 -->
      <count />
    </a-card>
    <a-card title="Message组件演示" bodyStyle="text-align: center">
      <!-- 组件3 -->
      <Message />
    </a-card>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import Count from "@/components/Count/index.vue";
import Message from "@/components/Message/index.vue";
import Header from "@/components/Header/index.vue";
const value1 = ref();
</script>
<style></style>
