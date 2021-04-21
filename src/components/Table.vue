<template>
  <div>
    <div
      class="btn btn-primary"
      @click="() => toggleFetchClientData('small')"
    >
      Мало данных
    </div>
    <div
      class="btn btn-primary ms-4"
      @click="() => toggleFetchClientData('large')"
    >
      Много данных
    </div>
    <table
      v-if="!isProcessed"
      class="table table-striped table-hover"
    >
      <thead>
        <tr>
          <th
            v-for="th in thead"
            :key="th.name"
            scope="col"
            @click="() => handleSort(th.sortType)"
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
    <div
      v-if="isProcessed"
      class="d-flex justify-content-center p-5"
    >
      <div
        class="spinner-border text-primary text-center"
        role="status"
      >
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <TablePagination
      v-if="!isProcessed"
      :post-count="processedClients.length"
      :max-posts="postsSlice.max"
      :url-current-page-number="urlCurrentPageNumber"
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
      thead: [
        { name: "id", sortType: "id", },
        { name: "Имя", sortType: "firstName", },
        { name: "Фамилия", sortType: "lastName", },
        { name: "Email", sortType: "email", },
        { name: "Телефон", sortType: "phone", }
      ],
      postsSlice: {
        start: 0,
        end: 10,
        max: 10,
      },
      isProcessed: true,
    };
  },
  computed: {
    processedClients() {
      return this.$store.getters["getProcessedClients"];
    },
    clientsSlice() {
      const { start, end } = this.postsSlice;
      return this.processedClients.slice(start, end);
    },
    urlCurrentPageNumber() {
      const url = new URL(window.location.href);
      return parseInt(url.searchParams.get('page'));
    },
    isLoaded() {
      return this.processedClients.length > 0;
    },
  },
  mounted() {
    if (this.urlCurrentPageNumber) {
      this.setPostsSlice(this.urlCurrentPageNumber);
    }
  },
  methods: {
    handleGetClient(clientId) {
      const findedClient = this.processedClients.find(client => client.id === clientId);
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
    handleSort(sortType) {
      this.$store.commit('sortClietntsBy', sortType);
    },
    toggleFetchClientData(typeColl) {
      this.isProcessed = true;
      if (typeColl === 'small') {
        this.$store.dispatch("fetchSmallClientsColl")
          .then(() => {
            this.isProcessed = false;
          });
      }
      if (typeColl === 'large') {
        this.$store.dispatch("fetchLargeClientsColl")
          .then(() => {
            this.isProcessed = false;
          });
      }
    }
  }
};
</script>

<style lang="scss">
.table__row {
  cursor: pointer;
}
</style>
