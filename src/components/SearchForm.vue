<template>
  <form
    @submit.prevent="handleSearch"
    class="d-flex"
  >
    <input
      @input="handleSearch"
      @keyup.delete="handleSearch"
      v-model="input"
      type="text"
      class="form-control rounded-0 rounded-start"
    />
    <input
      type="submit"
      value="Найти"
      class="btn btn-primary rounded-0 rounded-end"
    />
  </form>
</template>
<script>
export default {
  name: "SearchForm",
  data() {
    return {
      input: ''
    }
  },
  computed: {
    clients() {
      return this.$store.getters['getClients'];
    }
  },
  methods: {
    handleSearch() {
      const filteredClients = this.clients.filter((client) => {
        const { id, firstName, lastName, email, phone} = client;
        const clientData = `${id} ${firstName} ${lastName} ${email} ${phone}`.toLowerCase();
        if (clientData.includes(this.input.toLowerCase())) {
          return client;
        }
      });
      this.$store.commit('setClients', filteredClients);
    }
  }
};
</script>
<style></style>
