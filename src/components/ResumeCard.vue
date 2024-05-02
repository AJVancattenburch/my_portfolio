<template>
  <div class="modal-body">
    <div class="my-resume-pdf-container" style="height: 100%; width: 100%">
      <object v-if="!isMobile" data="https://media.licdn.com/dms/document/media/D562DAQG7wo4IQWY9rQ/profile-treasury-document-pdf-analyzed/0/1713379140340?e=1715817600&v=beta&t=U39-IwGc7afBIJ6rJVSbr7ZcEpN9AsbmfBTDHV02TcA" width="100%" height="100%" class="desktop-pdf" />
      <iframe v-else name="resume-frame" type="application/pdf" src="https://media.licdn.com/dms/document/media/D562DAQG7wo4IQWY9rQ/profile-treasury-document-pdf-analyzed/0/1713379140340?e=1715817600&v=beta&t=U39-IwGc7afBIJ6rJVSbr7ZcEpN9AsbmfBTDHV02TcA#thumbnails=0&zoom=100,left,top&view=fit" width="100%" height="75%" class="mobile-pdf" style="frame"></iframe>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { logger } from '../utils/Logger';


export default {
  setup() {
    const isMobile = computed(() => window.innerWidth < 768);


    return {
      isMobile,
    };
  },
};
</script>

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