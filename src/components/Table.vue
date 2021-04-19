<template>
  <table>
    <thead>
      <tr>
        <th v-for="th in thead" :key="th.name">
          {{ th.name }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="client in clients" :key="client.id">
        <td>{{ client.firstName }}</td>
        <td>{{ client.lastName }}</td>
        <td>{{ client.email }}</td>
        <td>{{ client.phone }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "Table",
  data() {
    return {
      thead:[
        { name: 'id' },
        { name: 'Имя' },
        { name: 'Фамилия' },
        { name: 'Email' },
        { name: 'Телефон' },
      ]
    }
  },
  computed: {
    clients() {
      return this.$store.getters['getClients'];
    }
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      return this.$store.dispatch('fetchClients');
    }
  }
};
</script>

<style></style>
