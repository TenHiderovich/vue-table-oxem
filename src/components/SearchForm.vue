<template>
  <form @submit.prevent="handleSearch">
    <input
      @input="handleSearch"
      @keyup.delete="handleSearch"
      v-model="input"
      type="text"
    />
    <input
      type="submit"
      value="Найти"
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
  methods: {
    handleSearch() {
      const clients = this.$store.getters['getClients'];
      const filteredClients = clients.filter((client) => {
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
