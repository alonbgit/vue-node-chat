<template>
  <div class="chat-input">
    <input type="text" class="input-text" @keypress="onSendMessage"/>
    <button class="btn">Send</button>
  </div>
</template>

<script>

  import { mapMutations } from 'vuex';
  import socketManager from './../socketManager';

  export default {

    methods: {

      ...mapMutations([
        'addMessage'
      ]),

      onSendMessage(e) {

        if (e.keyCode == 13) {
          this.$emit('sendMessage');
        }

      }

    }

  }

</script>

<style lang="scss">

  .chat-input {

    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 50px;

    .input-text {
      flex: 7;
      height: 40px;
      border-radius: 10px;
      outline: 0;
      border: 1px solid #bfbfbf;
      padding: 0px 10px;
      font-family: Open Sans;
      font-size: 18px;
    }

    .btn {
      flex: 1;
      height: 30px;
      margin-left: 20px;
      border: 0;
      background: #9ab4ea;
      border-radius: 5px;
      height: 40px;
      cursor: pointer;
      font-weight: bold;
      color: white;
      font-size: 15px;
    }

    .btn:hover {
      background: #a89ec1;
    }

  }

</style>
