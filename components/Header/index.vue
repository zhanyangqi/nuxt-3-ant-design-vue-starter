<template>
  <a-page-header
    style="border: 1px solid rgb(235, 237, 240)"
    title="迈特云"
    sub-title="迈特云专注于微服务产品解决方案"
    :avatar="{ src: 'https://cdn.mate.vip/matecloud.svg' }"
  >
    <template #extra>
      <a-menu v-model:selectedKeys="current" mode="horizontal">
        <a-menu-item key="index">
          <template #icon>
            <home-outlined />
          </template>
          <NuxtLink to="/">首页</NuxtLink>
        </a-menu-item>
        <a-menu-item key="doc">
          <template #icon>
            <file-done-outlined />
          </template>
          <NuxtLink to="https://doc.mate.vip" target="_blank">文档</NuxtLink>
        </a-menu-item>
        <a-menu-item key="github">
          <template #icon>
            <github-outlined />
          </template>
          <NuxtLink to="https://github.com" target="_blank"> Github </NuxtLink>
        </a-menu-item>
      </a-menu>
      <!-- <a-button key="3"
        ><NuxtLink to="/"><HomeOutlined />首页</NuxtLink></a-button
      >
      <a-button key="2"
        ><NuxtLink to="https://doc.mate.vip" target="_blank"
          ><FileDoneOutlined />文档</NuxtLink
        ></a-button
      >
      <a-button key="1" type="primary"
        ><NuxtLink to="https://github.com" target="_blank"
          ><GithubOutlined />Github</NuxtLink
        ></a-button
      > -->
    </template>
  </a-page-header>
</template>
<script setup>
import {ref} from 'vue'
import {
  HomeOutlined,
  FileDoneOutlined,
  GithubOutlined,
} from "@ant-design/icons-vue";

const current = ref(['index']);
</script>
