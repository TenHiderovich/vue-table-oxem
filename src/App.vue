<template>
  <div id="app">
    <SearchForm></SearchForm>
    <Table></Table>
    <ClientDetails></ClientDetails>
    <ClientModal></ClientModal>
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

<style></style>
