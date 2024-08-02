<template>
  <div class="typingArea" ref="typingArea" @focus="focusTypingArea()" @blur="blurTypingArea()" tabindex="0">
    <span v-for="(item, index) in textContent" :key="index" class="letter"> {{ item }}</span>
    <span class="typingCursor" ref="typingCursor">.</span>
  </div>
</template>

<script>
export default {
  name: 'PageTyper',
  data() {
    return {
      canType: false,
      isTyping: false,
      lettersTyped: 0,
      placeHolderText: 'Start Typing Here',
      nonCharacterKeys: [
        "Shift", "Control", "Alt", "CapsLock", "Backspace", "Tab", "Enter", "Escape", 
        "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Insert", "Delete", "Home", 
        "End", "PageUp", "PageDown", "Function", "NumLock", "ScrollLock", "Pause", 
        "PrintScreen", "ContextMenu", "Meta", "Win", "AltGraph", "Intl", "ShiftLeft", 
        "ShiftRight", "ControlLeft", "ControlRight", "AltLeft", "AltRight"
      ],
      textContent: []
    }
  },
  mounted() {
    this.textContent = this.placeHolderText.split('');
    window.addEventListener("keydown", this.inputHandler);
  },
  methods: {
    inputHandler(event) {
      if(this.canType === true) {
        this.addInput(event);
      }
    },

    addInput(input) {
      if(!this.nonCharacterKeys.includes(input.key)) {
        if(this.lettersTyped === 0) this.textContent = [];
        this.textContent.push(input.key);
        this.lettersTyped++;
        this.pauseTypingCursor();
      }
    },

    focusTypingArea() {
      this.canType = true;
      console.log("The typing area is focused.");
      this.startTypingCursor();
    },

    blurTypingArea() {
      this.canType = false;
      console.log("The typing area is blurred.");
      this.stopTypingCursor();
    },

    pauseTypingCursor() {
      this.$refs.typingCursor.style.animation = 'none';
        setTimeout(() => {
          this.$refs.typingCursor.style.animation = 'fadeinout 1s ease-in-out infinite'
        }, 500);
    },

    startTypingCursor() {
      this.$refs.typingCursor.style.animation = 'fadeinout 1s ease-in-out infinite'
    },

    stopTypingCursor() {
      this.$refs.typingCursor.style.animation = 'none';
    }
  }
}
</script>

<style scoped >
.typingArea {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  display: block;

  font-size: 2rem;
}

.letter {

}

.typingCursor {
  color: var(--color-dark);
  background: var(--color-dark);
  /* animation: fadeinout 1s ease-in-out infinite; */
}
</style>
