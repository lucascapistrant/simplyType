<template>
  <footer>
    <CustomBtn @click="printPage" text="Print" />
    <CustomBtn @click="savePage" text="Save" />
  </footer>
</template>

<script>
import CustomBtn from './CustomBtn.vue'
export default {
  name: "PageFooter",
  components: {
        CustomBtn
  },
  methods: {
    printPage() {
        window.print();
    },
    savePage() {
      localStorage.setItem('text', this.$root.$text);
    }
  }
}
</script>

<style>
footer {
  width: 100%;
  padding: 1.5rem;

  position: absolute;
  bottom: 0;

  display: flex;
  justify-content: space-between;
}
</style>