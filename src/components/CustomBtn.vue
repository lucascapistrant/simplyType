<template>
    <button @click="onClick">{{ text }}</button>
</template>
  
<script>
  export default {
    name: 'CostomBtn',
    props: {
      text: String,
      onClick: Function
    }
  }
</script>