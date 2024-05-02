<template>
  <div class="modal-body">
    <div class="my-resume-pdf-container" style="height: 100%; width: 100%">
      <object v-if="!isMobile" data="https://media.licdn.com/dms/document/media/D562DAQG7wo4IQWY9rQ/profile-treasury-document-pdf-analyzed/0/1713379140340?e=1715817600&v=beta&t=U39-IwGc7afBIJ6rJVSbr7ZcEpN9AsbmfBTDHV02TcA" width="100%" height="100%" class="desktop-pdf" />
      <iframe v-else name="resume-frame" src="https://media.licdn.com/dms/document/media/D562DAQG7wo4IQWY9rQ/profile-treasury-document-pdf-analyzed/0/1713379140340?e=1715817600&v=beta&t=U39-IwGc7afBIJ6rJVSbr7ZcEpN9AsbmfBTDHV02TcA#thumbnails=0&border=0" width="100%" height="75%" class="mobile-pdf" style="frame" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { logger } from '../utils/Logger';
import { PDFDocument } from 'pdf-lib';

export default {
  props: {
    pdfDocument: {
      type: Object,
      required: true,
    },
    style: {
      type: String,
      required: true,
    },
    newStyle: {
      type: String,
      required: true,
    },
  },
  setup(props) {
  const isMobile = computed(() => window.innerWidth < 768);

  const PDFDocument = computed(() => {
    return props.pdfDocument;
  });
  const style = computed(() => {
    return props.style;
  });
  const newStyle = computed(() => {
    return props.newStyle;
  });
  function changePDFStyle(PDFDocument, style, newStyle) {
      const pdfDoc = PDFDocument;
      const pages = pdfDoc.getPages();
      for (let i = 0; i < pages.length; i++) {
          const page = pages[i];
          const { width, height } = page.getSize();
          const { x, y } = { x: 5, y: height - 5 };
          const fontSize = 20;
          page.drawText(style, { x, y, size: fontSize });
      }
      logger.log('PDF Style Changed', pdfDoc);
      return pdfDoc;
    }

    onMounted(() => {
      logger.log('ResumeCard Mounted', PDFDocument, style, newStyle);
      //changePDFStyle(PDFDocument, style, newStyle);
    });
    return {
      isMobile,
      PDFDocument,
      changePDFStyle,
    }
  },
}

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