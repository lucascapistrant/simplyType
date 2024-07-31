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

<style scoped>
button {
  background: none;
  outline: none;
  border: 2px solid var(--color-dark);
  padding: .5rem 1rem;
  border-radius: 20px;
  font-size: 2rem;
  cursor: pointer;
  transition: all .2s;
}

button:hover {
  background: var(--color-dark);
  color: var(--color-light);
}
</style>