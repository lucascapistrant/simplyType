<template>
  <h1>{{ title }}</h1>
</template>

<script>
export default {
    name: "HeaderTitle",
    props: {
      title: String
    }
}
</script>

<style>
h1 {
  font-size: 3rem;
  margin: 0;
}
</style>