   <!-- .vitepress/components/Details.vue -->
   <template>
    <details>
      <summary><slot name="summary"></slot></summary>
      <slot></slot>
    </details>
  </template>

  <style scoped>
  details {
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 10px;
    margin-bottom: 1em;
  }

  details[open] > summary {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  summary {
    cursor: pointer;
    font-weight: bold;
    padding: 5px 10px;
    margin: -10px -10px 10px -10px;
    background-color: #f4f4f4;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  details[open] > summary {
    border-bottom: none;
  }
  </style>