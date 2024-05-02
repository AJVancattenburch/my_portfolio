<template>
  <div class="modal-body">
    <div class="my-resume-pdf-container" style="height: 100%; width: 100%">
      <object v-if="!isMobile" data="https://media.licdn.com/dms/document/media/D562DAQG7wo4IQWY9rQ/profile-treasury-document-pdf-analyzed/0/1713379140340?e=1715817600&v=beta&t=U39-IwGc7afBIJ6rJVSbr7ZcEpN9AsbmfBTDHV02TcA" width="100%" height="100%" class="desktop-pdf" />
      <iframe v-else name="resume-frame" src="https://media.licdn.com/dms/document/media/D562DAQG7wo4IQWY9rQ/profile-treasury-document-pdf-analyzed/0/1713379140340?e=1715817600&v=beta&t=U39-IwGc7afBIJ6rJVSbr7ZcEpN9AsbmfBTDHV02TcA#thumbnails=0&border=0" width="100%" height="75%" class="mobile-pdf" style="frame" />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { logger } from '../utils/Logger';

const isMobile = computed(() => window.innerWidth < 768);

</script>

<style lang="scss">
.my-resume-pdf-container {
  padding: 0;
  margin: 0;
}

.desktop-pdf,
.mobile-pdf {
  border: 0;
  outline: 10px solid var(--dark-purple);
  border-radius: 10px;
}

.mobile-pdf {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  #viewer {
    border: 10px solid red !important;
  }
}
</style>