<template>
  <div id="app">
    <SearchForm></SearchForm>
    <Table></Table>
    <TablePagination></TablePagination>
    <ClientModal></ClientModal>
  </div>
</template>

<script>
import Table from './components/Table';
import SearchForm from './components/SearchForm';
import TablePagination from './components/TablePagination';
import ClientModal from './components/ClientModal';

export default {
  name: 'App',
  components: {
    Table,
    SearchForm,
    TablePagination,
    ClientModal,
  }
}
</script>

<style>

</style>
