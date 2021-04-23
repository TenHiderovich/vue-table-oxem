<template>
  <component
    :is="tag"
    class="btn"
    :class="classes"
    v-bind="$attrs"
    v-on="$listeners"
    :disabled="disabled"
  >
    <BaseLoader
      v-if="processed"
      :is-processed="processed"
      loader-calsses="spinner-border spinner-border-sm"
    />
    <span v-else>{{ innerText }}</span>
  </component>
</template>
<script>
import BaseLoader from "./BaseLoader";

export default {
  name: "BaseButton",
  components: {
    BaseLoader,
  },
  props: {
    tag: {
      type: String,
      default: "button",
    },
    innerText: String,
    classes: String,
    processed: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
<style>

</style>
