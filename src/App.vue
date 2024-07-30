<template>
  <div class="container">
    <PageHeader/>
    <PageTyper/>
    <PageFooter/>
    </div>
</template>
<!-- import Blank from './components/blank' -->

<script>
import PageTyper from './components/PageTyper.vue';
import PageHeader from './components/PageHeader.vue';
import PageFooter from './components/PageFooter.vue';
export default {
  components: {
    PageHeader,
    PageTyper,
    PageFooter
  },
  
}
</script>

<style>
</style>