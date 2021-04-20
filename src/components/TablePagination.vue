<template>
  <div>
    <ul>
      <li
        v-for="pageNumber in pageCount"
        :key="pageNumber"
      >
        <a
          :href="`/?page=${pageNumber}`"
          @click.prevent="handleSwitchPage"
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
  },
  date() {
    return {
      currentPage: 1,
    }
  },
  mounted() {
    console.log(this.pageCount);
  },
  computed: {
    pageCount() {
      return Math.ceil(this.postCount / this.maxPosts);
    },
  },
  methods: {
    handleSwitchPage(e) {
      const url = new URL(e.target.href);
      history.pushState(null, null, `/${url.search}`);
    }
  }
}
</script>
<style>

</style>
