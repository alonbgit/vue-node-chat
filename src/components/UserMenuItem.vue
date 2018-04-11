<template>
  <div class="user-menu-item">
    <span class="user-name">{{ user.name }}</span>
  </div>
</template>

<script>

  export default {

    props: {
      user: {
        type: Object,
        required: true
      }
    }

  }

</script>

<style lang="scss">

  .user-menu-item {

    height: 50px;
    display: flex;
    align-items: center;

  }

  .user-menu-item:hover {
    background: #c8edf7;
    cursor: pointer;
  }

</style>
