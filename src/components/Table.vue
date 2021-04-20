<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th
            v-for="th in thead"
            :key="th.name"
          >
            {{ th.name }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="client in clientsSlice"
          :key="client.id"
          tabindex="0"
          role="tab"
          class="table__row"
          @click="() => handleGetClient(client.id)"
          @keypress.prevent.space.enter="() => handleGetClient(client.id)"
        >
          <td>{{ client.id }}</td>
          <td>{{ client.firstName }}</td>
          <td>{{ client.lastName }}</td>
          <td>{{ client.email }}</td>
          <td>{{ client.phone }}</td>
        </tr>
      </tbody>
    </table>
    <TablePagination
      :post-count="clients.length"
      :max-posts="postsSlice.max"
      @setPostsSlice="setPostsSlice"
    ></TablePagination>
  </div>
</template>
<script>
import TablePagination from "../components/TablePagination";

export default {
  name: "Table",
  components: {
    TablePagination,
  },
  data() {
    return {
      thead: [{ name: "id" }, { name: "Имя" }, { name: "Фамилия" }, { name: "Email" }, { name: "Телефон" }],
      postsSlice: {
        start: 0,
        end: 10,
        max: 10,
      }
    };
  },
  computed: {
    clients() {
      return this.$store.getters["getClients"];
    },
    clientsSlice() {
      const { start, end } = this.postsSlice;
      return this.clients.slice(start, end);
    },
    currentPageNumber() {
      const url = new URL(window.location.href);
      return url.searchParams.get('page')
    }
  },
  mounted() {
    this.fetchData();
    if (this.currentPageNumber) {
      this.setPostsSlice(this.currentPageNumber);
    }
  },
  methods: {
    fetchData() {
      return this.$store.dispatch("fetchClients");
    },
    handleGetClient(clientId) {
      const findedClient = this.clients.find(client => client.id === clientId);
      this.$store.commit("setCurrentClient", findedClient);
    },
    setPostsSlice(currentPage) {
      const { max } = this.postsSlice;
      if (currentPage === 1) {
        this.postsSlice.start = 0;
        this.postsSlice.end = max;
      } else {
        this.postsSlice.start = max * currentPage - max;
        this.postsSlice.end = this.postsSlice.start + max;
      }
    },
  }
};
</script>

<style lang="scss">
.table__row {
  cursor: pointer;
}
</style>
