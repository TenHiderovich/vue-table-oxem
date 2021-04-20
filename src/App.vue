<template>
  <div class="py-4">
    <div class="container">
      <SearchForm class="mb-3"></SearchForm>
      <Table class="mb-3"></Table>
      <ClientDetails></ClientDetails>
      <ClientModal></ClientModal>
    </div>
  </div>
</template>

<script>
import Table from "./components/Table";
import SearchForm from "./components/SearchForm";
import ClientDetails from "./components/ClientDetails";
import ClientModal from "./components/ClientModal";

export default {
  name: "App",
  components: {
    Table,
    SearchForm,
    ClientDetails,
    ClientModal,
  },
};
</script>

<style>
  @import url(https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css);
</style>
