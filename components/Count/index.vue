<template>
  <a-input-number id="inputNumber" size="large" prefix="￥" style="width: 100%" v-model:value="count" :min="1" :max="10000" />
</template>

<script setup lang="ts">
const { count } = useCount();
</script>
