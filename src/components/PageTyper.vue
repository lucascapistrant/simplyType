<template>
  <div class="typingArea" ref="typingArea" @focus="focusTypingArea()" @blur="blurTypingArea()" tabindex="0">
    <span v-for="(item, index) in textContent" :key="index" class="letter" :style="{ opacity: item.opacity }">
      <template v-if="item.char === '\n'">
        <span class="newline"></span>
        <span v-if="index < textContent.length - 1 && textContent[index + 1].char === ' '" class="empty-line">&nbsp;</span>
      </template>
      <span v-else-if="!(index > 0 && textContent[index-1].char === '\n' && item.char === ' ')">{{ item.char }}</span>
    </span>
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
      lettersTyped: localStorage.text ? JSON.parse(localStorage.text).length : 0,
      placeHolderText: 'Start Typing Here',
      nonCharacterKeys: [
        "Shift", "Control", "Alt", "CapsLock", "Backspace", "Tab", "Escape", 
        "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Insert", "Delete", "Home", 
        "End", "PageUp", "PageDown", "Function", "NumLock", "ScrollLock", "Pause", 
        "PrintScreen", "ContextMenu", "Meta", "Win", "AltGraph", "Intl", "ShiftLeft", 
        "ShiftRight", "ControlLeft", "ControlRight", "AltLeft", "AltRight"
      ],
      textContent: []
    }
  },
  mounted() {
    if(localStorage.text) {
      this.textContent = JSON.parse(localStorage.text);
    } else {
      this.textContent = this.placeHolderText.split('').map(char => ({ char, opacity: 1 }));
    }
    window.addEventListener("keydown", this.inputHandler);
  },
  methods: {
    inputHandler(event) {
      if(this.canType === true) {
        this.addInput(event);
      }
    },

    addInput(input) {
      if(!this.nonCharacterKeys.includes(input.key) || input.key === 'Enter') {
        if(this.lettersTyped === 0) this.textContent = [];

        let newChar;
        if(input.key === 'Enter') {
          newChar = '\n';
          this.textContent.push({ char: newChar, opacity: this.getRandomOpacity() });

          let lastNonSpaceIndex = this.textContent.length - 2;
          while (lastNonSpaceIndex >= 0 && this.textContent[lastNonSpaceIndex].char === ' ') {
            lastNonSpaceIndex--;
          }

          if(lastNonSpaceIndex >= 0 && this.textContent[lastNonSpaceIndex].char === '\n') {
            this.textContent.push({ char: ' ', opacity: this.getRandomOpacity() });
          }
        } else {
          newChar = input.key;
          this.textContent.push({ char: newChar, opacity: this.getRandomOpacity() });
        }

        localStorage.text = JSON.stringify(this.textContent);
        this.lettersTyped++;
        this.pauseTypingCursor();
      }
    },

    focusTypingArea() {
      this.canType = true;
      this.startTypingCursor();
    },

    blurTypingArea() {
      this.canType = false;
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
    },

    getRandomOpacity() {
      return Math.random() * 0.4 + 0.6;
    },
  }
}
</script>


<style scoped>
.typingArea {
  width: 100%;
  max-width: 800px;
  height: 100%;
  border: 2px solid var(--color-dark);
  outline: none;
  padding: 0 10px;
  margin: 0 auto;
  display: block;
  font-size: 2rem;
  white-space: pre-wrap;
}

.letter {
  display: inline;
}

.newline {
  display: block;
  width: 100%;
}

.empty-line {
  display: block;
  height: 1em; /* Adjust as needed */
}

.typingCursor {
  color: var(--color-dark);
  background: var(--color-dark);
}

</style>