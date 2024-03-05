<template>
  <Teleport to=".modals-container">
      <div class="modal">
        <h1><slot name="title"></slot></h1>
        <slot></slot>
        <button>Hide modal</button>
      </div>
    </Teleport>
</template>

<style>

  .modal {
    background-color: beige;
    padding: 10px;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

</style>