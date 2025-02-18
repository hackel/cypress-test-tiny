<script setup>
import { onMounted, useTemplateRef } from 'vue';

const test = useTemplateRef('test');

onMounted(() => {
  console.log('ref', test.value);
  test.value.$el.style.color = 'red';
});
</script>

<template>
  <BCard ref="test" title="Test Component">
    <h1>Test</h1>
  </BCard>
</template>
