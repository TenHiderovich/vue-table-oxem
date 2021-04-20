<template>
  <nav
    v-if="postCount > maxPosts"
    aria-label="Table navigation"
  >
    <ul class="pagination">
      <li
        v-for="pageNumber in pageCount"
        :key="pageNumber"
        :class="[
          'page-item',
          innerCurrentPageNumber === pageNumber ? 'active' : '',
        ]"
      >
        <a
          :href="`/?page=${pageNumber}`"
          @click.prevent="(e) => handleSwitchPage(e, pageNumber)"
          class="page-link"
        >
          {{ pageNumber }}
        </a>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: 'TablePagination',
  props: {
    postCount: Number,
    maxPosts: Number,
    setPostsSlice: Function,
    currentPageNumber: Number,
  },
  data() {
    return {
      innerCurrentPageNumber: 1,
    }
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
      this.innerCurrentPageNumber = currentPage;
      this.$emit('setPostsSlice', currentPage);
    },
  }
}
</script>
<style>

</style>
