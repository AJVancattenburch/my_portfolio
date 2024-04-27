<template>
  <section class="contact-wrapper">
    <div class="contact-content p-5">
      <h5 class="contact-subtitle text-uppercase text-secondary">Get In Touch</h5>
      <h1 class="contact-title text-primary">Contact.</h1>
      <form ref="formRef" @submit.prevent="handleSubmit" class="mt-5 d-flex flex-column gap-8">
        <label class="d-flex flex-column">
          <span class="text-white font-medium mt-4 mb-2">Your Name</span>
          <input
            type="text"
            v-model="form.name"
            placeholder="What's your name?"
            class="bg-tertiary p-2 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
          />
        </label>
        <label class="d-flex flex-column">
          <span class="text-white font-medium mt-4 mb-2">Your Email</span>
          <input
            type="email"
            v-model="form.email"
            placeholder="What's your email?"
            class="bg-tertiary p-2 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
          />
        </label>
        <label class="d-flex flex-column">
          <span class="text-white font-medium mt-4 mb-2">Your Message</span>
          <textarea
            rows="7"
            v-model="form.message"
            placeholder="What do you want to say?"
            class="bg-tertiary p-2 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
          />
        </label>
        <button
          type="submit"
          class="col-12 col-md-4 col-lg-2 bg-primary py-3 outline-none rounded-xl ms-auto mt-4"
        >
          {{ loading ? "Sending..." : "Send Message" }}
        </button>
      </form>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue';
import emailjs from 'emailjs-com';
import { emailService } from '../services/EmailService.js'
import { logger } from "../utils/Logger.js";

export default {
  setup() {
    const formRef = ref(null);
    const form = ref({
      name: "",
      email: "",
      message: "",
    });
    const loading = ref(false);

    function handleChange(e) {
      const { name, value } = e.target;

      form.value = { ...form.value, [name]: value };
    }

    async function handleSubmit(e) {
      try {
        e.preventDefault();
        loading.value = true;
        await emailService.sendEmail(form.value);
        loading.value = false;
      } catch (error) {
        logger.error(error);
      }
    }

    return {
      formRef,
      form,
      loading,
      handleChange,
      handleSubmit,
    }
  },
}
</script>

<style scoped lang="scss">
.contact {
  &-wrapper {
    display: flex;
    gap: 10px;
    overflow: hidden;
  }
  &-content {
    flex: 0.75;
    background-color: var(--black-100);
    padding: 2rem;
    border-radius: 1rem;
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
  &-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
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