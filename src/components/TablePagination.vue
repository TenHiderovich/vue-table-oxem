<template>
  <nav aria-label="Table navigation">
    <ul class="pagination flex-wrap">
      <li
        v-for="pageNumber in pageCount"
        :key="pageNumber"
        :class="[
          'page-item',
          isActive(pageNumber) ? 'active' : '',
        ]"
      >
        <a
          :href="`/?page=${pageNumber}`"
          class="page-link"
          @click.prevent="(e) => handleSwitchPage(e, pageNumber)"
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
    urlCurrentPageNumber: Number,
  },
  data() {
    return {
      currentPageNumber: 1,
    }
  },
  computed: {
    pageCount() {
      return Math.ceil(this.postCount / this.maxPosts);
    },
  },
  mounted() {
    if (this.urlCurrentPageNumber) {
      this.currentPageNumber = this.urlCurrentPageNumber;
    } else {
      this.currentPageNumber = 1;
    }
  },
  methods: {
    handleSwitchPage(e, currentPage) {
      const url = new URL(e.target.href);
      history.pushState(null, null, `/${url.search}`);
      this.currentPageNumber = currentPage;
      this.$emit('setPostsSlice', currentPage);
    },
    isActive(pageNumber) {
      return this.currentPageNumber === pageNumber;
    }
  }
}
</script>
<style>

</style>
