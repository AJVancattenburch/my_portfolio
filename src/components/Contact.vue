<template>
  <section id="contact" class="contact-wrapper p-5">
    <h5 class="contact-subtitle text-uppercase text-secondary">Get In Touch</h5>
    <h1 class="contact-title text-primary">Contact.</h1>
    <div class="col-12 col-md-8 col-lg-6 d-flex flex-column login-box mt-5">
      <form ref="formRef" @submit.prevent="handleSubmit">
        <fieldset>
          <legend class="d-none">Contact Form</legend>
          <div class="col-12 user-box">
            <input id="name" name="name" type="text" v-model="newEmail.name" class="input" minlength="2" required />
            <label for="name">Your Name</label>
            <label class="d-flex flex-column"></label>
          </div>
          <div class="col-12 user-box">
            <input id="email" name="email" type="email" v-model="newEmail.email" class="input" minlength="5" required />
            <label for="email">Your Email</label>
          </div>
          <div class="col-12 user-box">
            <textarea id="message" rows="7" v-model="newEmail.message" class="input textarea" minlength="10" maxlength="1000" required />
            <label for="message">Your Message</label>
          </div>
          <div class="col-12 col-md-6 col-lg-3 pt-5 mt-5">
            <button type="submit" class="outline-none rounded-3">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              {{ loading ? "Sending..." : "Send Message" }}
            </button>
          </div>
        </fieldset>
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
        newEmail.value = {
          name: "",
          email: "",
          message: "",
        };
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
@import url('../assets/scss/_formButton.scss');
.contact {
  &-wrapper {
    height: 95vh;
  }
  &-subtitle {
    font-size: 1.1rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }
  &-title {
    font-size: 3.5rem;
    font-weight: 900;
    margin-bottom: 2rem;
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