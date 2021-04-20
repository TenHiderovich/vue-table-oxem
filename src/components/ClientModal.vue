<template>
  <div class="modal-wrapper">
    <div
      id="clientCreateModal"
      :class="[
        'modal fade',
        showModal ? 'show' : '',
      ]"
      tabindex="-1"
      aria-labelledby="clientCreateModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <form class="modal-content">
          <div class="modal-header">
            <h5
              id="clientCreateModalLabel"
              class="modal-title"
            >
              Добвление клиента
            </h5>
            <button
              type="button"
              class="btn-close"
              aria-label="Close"
              @click="handleCloseModal"
            ></button>
          </div>
          <div class="modal-body">
            <div class="input-group mb-2">
              <input
                v-model="modalContent.firstName"
                type="text"
                class="form-control"
                placeholder="Имя"
                aria-label="Имя"
              >
            </div>
            <div class="input-group mb-4">
              <input
                v-model="modalContent.lastName"
                type="text"
                class="form-control"
                placeholder="Фамилия"
                aria-label="Фамилия"
              >
            </div>
            <fieldset class="mb-4">
              <legend class="fs-5">
                Контакты
              </legend>
              <div class="input-group mb-2">
                <input
                  v-model="modalContent.phone"
                  type="text"
                  class="form-control"
                  placeholder="Телефон"
                  aria-label="Телефон"
                >
              </div>
              <div class="input-group">
                <input
                  v-model="modalContent.email"
                  type="text"
                  class="form-control"
                  placeholder="Email"
                  aria-label="Email"
                >
              </div>
            </fieldset>
            <fieldset>
              <legend class="fs-5">
                Адрес
              </legend>
              <div class="input-group mb-2">
                <input
                  v-model="modalContent.street"
                  type="text"
                  class="form-control"
                  placeholder="Улица"
                  aria-label="Улица"
                >
              </div>
              <div class="input-group mb-2">
                <input
                  v-model="modalContent.city"
                  type="text"
                  class="form-control"
                  placeholder="Город"
                  aria-label="Город"
                >
              </div>
              <div class="input-group mb-2">
                <input
                  v-model="modalContent.state"
                  type="text"
                  class="form-control"
                  placeholder="Провинция/штат"
                  aria-label="Провинция/штат"
                >
              </div>
              <div class="input-group mb-2">
                <input
                  v-model="modalContent.zip"
                  type="text"
                  class="form-control"
                  placeholder="Индекс"
                  aria-label="Индекс"
                >
              </div>
            </fieldset>
          </div>
          <input
            type="submit"
            value="Добавить"
            class="btn btn-primary rounded-0 rounded-bottom"
            @submit.prevent="handleAddClient"
          >
        </form>
      </div>
    </div>
    <button
      type="button"
      class="btn btn-primary btn-lg modal-triger rounded-circle"
      @click="handleShowModal"
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
      modalContent: {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        street: '',
        city: '',
        state: '',
        zip: '',
      }
    }
  },
  methods: {
    handleShowModal() {
      this.showModal = true;
    },
    handleCloseModal() {
      this.showModal = false;
    },
    handleAddClient() {

    }
  },
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
