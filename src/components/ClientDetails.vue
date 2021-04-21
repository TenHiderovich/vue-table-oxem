<template>
  <div
    v-if="showDetailInfo"
    class="card"
  >
    <h5 class="card-header">
      Детальная информация
    </h5>
    <div class="card-body">
      <h5 class="card-title">
        Выбран пользователь:
      </h5>
      <p class="card-text">
        {{ currentClient.firstName }} {{ currentClient.lastName }}
      </p>

      <h5 class="card-title">
        Описание:
      </h5>
      <p class="card-text">
        {{ currentClient.description }}
      </p>

      <h5 class="card-title">
        Адрес проживания:
      </h5>
      <p class="card-text">
        {{ currentClient.address.streetAddress }}
      </p>

      <h5 class="card-title">
        Город:
      </h5>
      <p class="card-text">
        {{ currentClient.address.city }}
      </p>

      <h5 class="card-title">
        Провинция/штат:
      </h5>
      <p class="card-text">
        {{ currentClient.address.state }}
      </p>

      <h5 class="card-title">
        Индекс:
      </h5>
      <p class="card-text">
        {{ currentClient.address.zip }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "ClientDetails",
  data() {
    return {
      showDetailInfo: false,
    }
  },
  computed: {
    currentClient() {
      return this.$store.getters["getCurrentClient"];
    },
    processedClients() {
      return this.$store.getters["getProcessedClients"];
    },
  },
  watch: {
    currentClient(newValue) {
      this.showDetailInfo = !!newValue;
    },
    processedClients(newValue) {
      const { id } = this.currentClient;
      const hasClientToProcessedClients = !!this.processedClients.find((client) => client.id === id);
      this.showDetailInfo = hasClientToProcessedClients;
    }
  }
};
</script>
<style></style>
