<template>
  <div v-if="currentClient">
    <div>
      Выбран пользователь <b>{{ currentClient.firstName }} {{ currentClient.lastName }}</b>
    </div>
    Описание:
    <div>
      {{ currentClient.description }}
    </div>
    <div>
      Адрес проживания: <b>{{ currentClient.address.streetAddress }}</b>
    </div>
    <div>
      Город: <b>{{ currentClient.address.city }}</b>
    </div>
    <div>
      Провинция/штат: <b>{{ currentClient.address.state }}</b>
    </div>
    <div>
      Индекс: <b>{{ currentClient.address.zip }}</b>
    </div>
  </div>
</template>
<script>
export default {
  name: "ClientDetails",
  computed: {
    currentClient() {
      return this.$store.getters["getCurrentClient"];
    }
  }
};
</script>
<style></style>
