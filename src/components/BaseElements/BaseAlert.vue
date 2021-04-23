<template>
  <div
    class="alert"
    :class="classes"
    role="alert"
  >
    {{ innerText }}
  </div>
</template>
<script>
export default {
  name: "BaseAlert",
  props: {
    innerText: String,
    classes: String,
  },
}
</script>
<style></style>
