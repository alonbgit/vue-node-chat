<template>
  <div class="chat-input">
    <input type="text" class="input-text"/>
  </div>
</template>

<script>

  export default {

  }

</script>

<style lang="scss">

  .chat-input {

    height: 70px;
    display: flex;
    justify-content: center;

    .input-text {
      width: 90%;
      height: 40px;
      border-radius: 10px;
      outline: 0;
      border: 1px solid #bfbfbf;
      padding: 0px 10px;
      font-family: Open Sans;
      font-size: 18px;
    }

    .btn {
      width: 100px;
      height: 30px;
    }

  }

</style>
