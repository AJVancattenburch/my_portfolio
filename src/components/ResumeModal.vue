<template>
  <div class="modal fade" id="resumeModal" tabindex="-1" aria-labelledby="resumeModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="resumeModalLabel">Modal title</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.modal {
  &-content {
    color: var(--text-primary);
    background: linear-gradient(180deg, #323639 40%, #525659);
  }
  &-body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  }
  .btn-close {
    position: relative;
    visibility: hidden;
    &::after {
      content: '×';
      position: absolute;
      top: -35px;
      right: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-family: 'Poppins', sans-serif;
      font-size: 3rem;
      font-weight: 300;
      visibility: visible;
    }
  }
}

::webkit-scrollbar {
  display: none;
}

@media (min-width: 768px) {
  .modal-content {
    padding: 1rem;
  }
}
</style>