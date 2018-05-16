<template>
  <div :class="[
      `col-${span}`,
      offset ? `col-offset-${offset}` : ''
    ]"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'Col',
  props: {
    span: {
      type: [Number, String],
      required: true
    },
    offset: {
      type: [Number, String],
      default: null
    }
  }
}
</script>
