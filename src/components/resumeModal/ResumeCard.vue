<script setup>
import { computed } from 'vue';

const isMobile = computed(() => window.innerWidth < 768);
</script>

<template>
  <div class="modal-body">
    <div class="col-12 my-resume-pdf-container" style="height: 100%; width: 100%">
      <object v-if="!isMobile" type="application/pdf" data="https://media.licdn.com/dms/document/media/D4E2DAQHGZTWKOSezJw/profile-treasury-document-pdf-analyzed/0/1715800125797?e=1716422400&v=beta&t=4E1kMSt-yDxS65odnkexltQiYvWA09WAgTnqDSQZR34#thumbnails=0&zoom=100,left,top&view=fit" width="100%" height="100%" class="desktop-pdf" />
      <iframe v-else name="resume-frame" type="application/pdf" src="https://media.licdn.com/dms/document/media/D4E2DAQHGZTWKOSezJw/profile-treasury-document-pdf-analyzed/0/1715800125797?e=1716422400&v=beta&t=4E1kMSt-yDxS65odnkexltQiYvWA09WAgTnqDSQZR34#thumbnails=0&zoom=100,left,top&view=fit" width="100%" height="75%" class="mobile-pdf" style="frame"></iframe>
    </div>
  </div>
</template>

<style lang="scss">
.my-resume-pdf-container {
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.desktop-pdf,
.mobile-pdf {
  border: 0;
  box-shadow: 0 0 10px currentColor;
  border-radius: 10px;
}
</style>