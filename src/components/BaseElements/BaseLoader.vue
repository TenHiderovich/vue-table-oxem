<template>
  <div
    v-if="isProcessed"
    :class="wrapperCalsses"
  >
    <span
      :class="loaderCalsses"
      role="status"
    >
      <span class="visually-hidden">Loading...</span>
    </span>
  </div>
</template>
<script>
export default {
  name: "BaseLoader",
  props: {
    isProcessed: {
      type: Boolean,
      default: false,
    },
    wrapperCalsses: String,
    loaderCalsses: String,
  }
}
</script>
<style>

</style>
