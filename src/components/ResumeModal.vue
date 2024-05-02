<template>
  <!-- Modal -->
  <div class="modal fade" id="resumeModal" tabindex="-1" aria-labelledby="resumeModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="resumeModalLabel">Modal title</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <slot></slot>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.modal {
  &-content {
    color: var(--text-primary);
    background: linear-gradient(180deg, #323639 40%, #525659);
    .btn-close {
      position: relative;
      filter: invert(1);
      &::after {
        content: '×';
        position: absolute;
        top: -19px;
        right: 2px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: red;
        font-size: 2.55rem;
      }
    }
  }
  &-body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
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