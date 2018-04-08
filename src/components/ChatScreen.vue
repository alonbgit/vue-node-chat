<template>
  <div class="chat-screen">
    <div v-for="message in messages" class="message">
      <span>{{ message.name }}: </span>
      <span>{{ message.message }}</span>
    </div>
  </div>
</template>

<script>

  import { mapGetters } from 'vuex';

  export default {

    computed: {

      ...mapGetters([
        'messages'
      ])

    }

  }

</script>

<style lang="scss">

  .chat-screen {

    font-family: Open Sans;
    font-size: 18px;
    padding: 20px;

    .message {
      margin-top: 5px;
    }

  }

</style>
