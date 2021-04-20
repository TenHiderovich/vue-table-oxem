<template>
  <div class="modal-wrapper">
    <div
      :class="[
        'modal fade',
        showModal ? 'show' : '',
      ]"
      id="clientCreateModal"
      tabindex="-1"
      aria-labelledby="clientCreateModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="clientCreateModalLabel">Добвление клиента</h5>
            <button
              @click="handleCloseModal"
              type="button"
              class="btn-close"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            ...
          </div>
        </div>
      </div>
    </div>
    <button
      @click="handleShowModal"
      type="button"
      class="btn btn-primary btn-lg modal-triger rounded-circle"
    >
      +
    </button>
    <div
      :class="[
        'modal-backdrop fade',
        showModal ? 'show' : '',
      ]"
    ></div>
  </div>
</template>
<script>
export default {
  name: "ClientModal",
  data() {
    return {
      showModal: false,
    }
  },
  methods: {
    handleShowModal() {
      this.showModal = true;
    },
    handleCloseModal() {
      this.showModal = false;
    }
  }
};
</script>
<style>
  .modal-backdrop {
    display: none;
  }
  .modal-backdrop.show {
    display: block;
  }

  .modal {
    display: none;
  }

  .modal.show {
    display: block;
  }

  .modal-triger {
    position: fixed;
    right: 40px;
    bottom: 40px;
  }
</style>
