<template>
  <div v-if="postCount > maxPosts">
    <ul>
      <li
        v-for="pageNumber in pageCount"
        :key="pageNumber"
      >
        <a
          :href="`/?page=${pageNumber}`"
          @click.prevent="(e) => handleSwitchPage(e, pageNumber)"
        >
          {{ pageNumber }}
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'TablePagination',
  props: {
    postCount: Number,
    maxPosts: Number,
    setPostsSlice: Function,
  },
  computed: {
    pageCount() {
      return Math.ceil(this.postCount / this.maxPosts);
    },
  },
  methods: {
    handleSwitchPage(e, currentPage) {
      const url = new URL(e.target.href);
      history.pushState(null, null, `/${url.search}`);
      this.$emit('setPostsSlice', currentPage);
    },
  }
}
</script>
<style>

</style>
