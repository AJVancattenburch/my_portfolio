<template>
  <section class="contact-wrapper">
    <div class="contact-content p-5">
      <h5 class="contact-subtitle text-uppercase text-secondary">Get In Touch</h5>
      <h1 class="contact-title text-primary">Contact.</h1>
      <form ref="formRef" @submit.prevent="handleSubmit" class="form-box d-flex flex-column m7-5">
        <div class="col-12 input-box">
          <input type="text" v-model="newEmail.name" placeholder="What's your name?" class="p-2" minlength="2" required />
          <label class="d-flex flex-column"></label>
        </div>
        <div class="col-12 input-box">
          <input type="email" v-model="newEmail.email" placeholder="What's your email?" class="bg-dark p-2" minlength="5" required />
          <label class="d-flex flex-column"></label>
        </div>
        <div class="col-12 input-box">
          <textarea rows="7" v-model="newEmail.message" placeholder="What do you want to say?" class="p-2" minlength="10" maxlength="1000" required />
          <label class="d-flex flex-column"></label>
        </div>
        <div class="col-12 pt-5 mt-3">
          <button type="submit" class="col-12 col-md-4 col-lg-3 col-xl-2 outline-none rounded-xl">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {{ loading ? "Sending..." : "Send Message" }}
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue';
import { logger } from '../utils/Logger';
import { emailService } from '../services/EmailService'

export default {
  setup() {
    const formRef = ref(null);
    const newEmail = ref({
      name: "",
      email: "",
      message: "",
    });
    const loading = ref(false);

    function handleChange(e) {
      const { name, value } = e.target;

      newEmail.value = { ...newEmail.value, [name]: value };
    }

    async function handleSubmit(e) {
      try {
        e.preventDefault();
        loading.value = true;
        await emailService.sendEmail(newEmail.value);
        loading.value = false;
      } catch (error) {
        logger.error(error);
      }
    }

    return {
      formRef,
      newEmail,
      loading,
      handleChange,
      handleSubmit,
    }
  },
}
</script>

<style scoped lang="scss">
@import url('../assets/scss/_formStyles.scss');
.contact {
  &-wrapper {
    height: 95vh;
  }
}

@media (max-width: 768px) {
  .contact {
    &-content {
      padding: 1rem;
    }
  }
}
</style>