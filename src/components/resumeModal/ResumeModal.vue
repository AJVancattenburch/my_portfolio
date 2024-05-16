<template>
  <div class="modal fade" id="resumeModal" tabindex="-1" aria-labelledby="resumeModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="resumeModalLabel">My Resume</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.modal {
  &-open {
    overflow: hidden;
  }
  &-content {
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--text-primary);
    text-shadow: 0 0 5px #000;
    background: linear-gradient(180deg, #323639 40%, #525659);
    box-shadow: 0 0 10px 5px #00000080 inset;
  }git commit -m "resume modal fix. updated documentation and comment guides in my_portfolio folder"
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