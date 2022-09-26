<template>
  <div class="fog">
    <div class="modal">

      <header>
        <h1>
          <slot name="header" />
        </h1>
      </header>

      <div class="modal__body">
        <slot name="body" />
      </div>

      <footer>
        <slot name="footer" />
          <button-item icon="pi pi-thumbs-up" />
          <button-item
            @click="$emit('cancel')"
            icon="pi-times-circle" />
      </footer>

    </div>
  </div>
</template>

<script>
import ButtonItem from '../shared/ButtonItem.vue'

import 'animate.css'

export default {
  name: 'rabarbarModal',
  components: {
    ButtonItem
  }
}
</script>
<style scoped>
.fog {
  background-color: #21D4FD;
  background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  z-index: 2;
}

.modal {
  max-width: 20rem;
  padding: 20px;
  background: #fff;
  margin: auto auto;
  border-radius: 2rem;
  box-shadow: 0 0 20px 20px rgba(0,0,0,0.1);
  color: #637892;

  &__body {
     font-size: 1rem;
     margin-bottom: 2rem;
  }

  &__footer {
    button {
      margin: 0.5rem;
    }
  }
}
    .btn {
      background-color: #9a9a9a;
      background-image: linear-gradient(0deg, #9a9a9a 0%, #e8fdff 100%);
      border: none;
      border-radius: 50%;
      cursor: pointer;
      box-shadow: 0 20px 40px 0 rgba(107,154,212,.1);
      transition: .3s;
      outline: none;
      margin: 10px;
      font-size: 1.5rem;
      color: #637892;
       &:hover {
        margin-top: var(--movement);
       }
    }
</style>
