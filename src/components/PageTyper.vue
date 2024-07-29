<template>
  <div class="typingArea" ref="typingArea">
    <span v-for="(item, index) in textContent" :key="index"> {{ item }}</span>
  </div>
</template>

<script>
export default {
  name: 'PageTyper',
  mounted() {
    window.addEventListener("keydown", this.inputHandler)
  },
  data() {
    return {
      nonCharacterKeys: [
        "Shift", "Control", "Alt", "CapsLock", "Backspace", "Tab", "Enter", "Escape", 
        "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Insert", "Delete", "Home", 
        "End", "PageUp", "PageDown", "Function", "NumLock", "ScrollLock", "Pause", 
        "PrintScreen", "ContextMenu", "Meta", "Win", "AltGraph", "Intl", "ShiftLeft", 
        "ShiftRight", "ControlLeft", "ControlRight", "AltLeft", "AltRight"
      ],
      textContent: ['a', 'b', 'c']
    }
  },
  methods: {
    inputHandler(event) {
      if(!this.nonCharacterKeys.includes(event.key)) {
        this.textContent.push(event.key);
      }
    }
  }
}
</script>

<style scoped >
.typingArea {
  width: 100%;
  height: 100vh;
  border: none;
  outline: none;

  font-size: 2rem;
}
</style>
