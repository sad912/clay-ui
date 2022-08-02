<script setup lang="ts">
  const confirm = () => {
    console.log('confirm')
  }
</script>

<template>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
  <clay-button type="primary" @click="confirm" size="large"></clay-button>
  <clay-button type="primary" @click="confirm" disabled ></clay-button>
  <clay-button type="primary" size="small"></clay-button>
  <div>123</div>
  <clay-button block type="primary">Confirm</clay-button>
  <clay-button block>Cancel</clay-button>
</template>

<style></style>
