<template>
  <div class="modal-wrapper">
    <div
      id="clientCreateModal"
      class="modal fade"
      :class="{'show': showModal}"
      tabindex="-1"
      aria-labelledby="clientCreateModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <form
          class="modal-content"
          @submit.prevent="handleAddClient"
        >
          <div class="modal-header">
            <h5
              id="clientCreateModalLabel"
              class="modal-title"
            >
              Добвление клиента
            </h5>
            <BaseButton
              tag="button"
              type="button"
              aria-label="Close"
              classes="btn-close"
              @click="handleCloseModal"
            />
          </div>
          <div class="modal-body">
            <fieldset class="mb-4">
              <legend class="visually-hidden">
                Имя и фамилия
              </legend>
              <div class="input-group mb-2">
                <input
                  v-model="formContent.firstName"
                  type="text"
                  class="form-control"
                  :class="{'is-invalid': !!errors.firstName}"
                  placeholder="Имя *"
                  aria-label="Имя (обязательное)"
                >
                <div
                  v-if="errors.firstName"
                  class="invalid-feedback"
                >
                  {{ errors.firstName }}
                </div>
              </div>
              <div class="input-group">
                <input
                  v-model="formContent.lastName"
                  type="text"
                  class="form-control"
                  :class="{'is-invalid': !!errors.lastName}"
                  placeholder="Фамилия *"
                  aria-label="Фамилия (обязательное)"
                >
                <div
                  v-if="errors.lastName"
                  class="invalid-feedback"
                >
                  {{ errors.lastName }}
                </div>
              </div>
            </fieldset>
            <fieldset class="mb-4">
              <legend class="fs-5">
                Контакты
              </legend>
              <div class="input-group mb-2">
                <input
                  v-model="formContent.phone"
                  type="text"
                  class="form-control"
                  :class="{'is-invalid': !!errors.phone}"
                  placeholder="Телефон *"
                  aria-label="Телефон (обязательное)"
                >
                <div
                  v-if="errors.phone"
                  class="invalid-feedback"
                >
                  {{ errors.phone }}
                </div>
              </div>
              <div class="input-group">
                <input
                  v-model="formContent.email"
                  type="text"
                  class="form-control"
                  :class="{'is-invalid': !!errors.phone}"
                  placeholder="Email *"
                  aria-label="Email (обязательное)"
                >
                <div
                  v-if="errors.email"
                  class="invalid-feedback"
                >
                  {{ errors.email }}
                </div>
              </div>
            </fieldset>
            <fieldset class="mb-4">
              <legend class="fs-5">
                Адрес
              </legend>
              <div class="input-group mb-2">
                <input
                  v-model="formContent.address.streetAddress"
                  type="text"
                  class="form-control"
                  placeholder="Улица"
                  aria-label="Улица"
                >
              </div>
              <div class="input-group mb-2">
                <input
                  v-model="formContent.address.city"
                  type="text"
                  class="form-control"
                  placeholder="Город"
                  aria-label="Город"
                >
              </div>
              <div class="input-group mb-2">
                <input
                  v-model="formContent.address.state"
                  type="text"
                  class="form-control"
                  placeholder="Провинция/штат"
                  aria-label="Провинция/штат"
                >
              </div>
              <div class="input-group">
                <input
                  v-model="formContent.address.zip"
                  type="text"
                  class="form-control"
                  placeholder="Индекс"
                  aria-label="Индекс"
                >
              </div>
            </fieldset>
            <div class="mb-2">
              <label
                for="description"
                class="form-label fs-5"
              >
                Описание
              </label>
              <textarea
                v-model="formContent.description"
                class="form-control"
                rows="3"
              ></textarea>
            </div>
          </div>
          <BaseButton
            tag="button"
            type="submit"
            inner-text="Добавить"
            classes="btn-primary rounded-0 rounded-bottom"
            :processed="processed"
            :disabled="processed"
          />
        </form>
      </div>
    </div>
    <BaseButton
      tag="button"
      type="button"
      inner-text="+"
      classes="btn-primary btn-lg modal-triger rounded-circle"
      @click="handleShowModal"
    />
    <div
      class="modal-backdrop fade"
      :class="{'show': showModal}"
    ></div>
  </div>
</template>
<script>
import * as yup from 'yup';
import BaseButton from "../components/BaseElements/BaseButton";

export default {
  name: "ClientModal",
  components: {
    BaseButton,
  },
  data() {
    return {
      showModal: false,
      processed: false,
      valid: true,
      formContent: {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        address: {
          streetAddress: '',
          city: '',
          state: '',
          zip: '',
        },
        description: '',
      },
      errors: {},
    }
  },
  watch: {
    errors(newValue) {
      this.valid = Object.keys(newValue).length === 0;
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
      this.validate(this.formContent);
      if (!this.valid) {
        return;
      }
      this.processed = true;
      this.$store
        .dispatch('addNewClient', this.formContent)
        .then(() => {
          this.processed = false;
          this.showModal = false;
          this.resetFormContent(this.formContent);
        });
    },
    resetFormContent(fields) {
      const fieldsKeys = Object.keys(fields);
      for (const key of fieldsKeys) {
        if (typeof fields[key] === 'object') {
          this.resetFormContent(fields[key]);
        } else {
          fields[key] = '';
        }
      }
    },
    validate(fields) {
      let schema = yup.object().shape({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        email: yup.string().email().required(),
        phone: yup.string().matches(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/, { excludeEmptyString: true }).required(),
      });

      try {
        schema.validateSync(fields, { abortEarly: false });
        this.valid = true;
        this.errors = {};
      } catch (e) {
        this.valid = false;
        this.errors = e.inner.reduce((acc, error) => {
          switch (error.type) {
            case 'required': {
              return {
                ...acc,
                [error.path]: 'Поле обязательное для заполнения',
              }
            }
            case 'email':
            case 'matches': {
              return {
                ...acc,
                [error.path]: 'Введите корректное значнние',
              }
            }
            default:
              return acc;
          }
        }, {});
      }
    },
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
    overflow-y: scroll
  }

  .modal-triger {
    position: fixed;
    right: 40px;
    bottom: 40px;
  }
</style>
