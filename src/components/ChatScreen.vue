<template>
  <div class="chat-screen">
    <div v-for="message in messages" class="message">
      <span>{{ message.name }}: </span>
      <span>{{ message.message }}</span>
    </div>
  </div>
</template>

<script>

  export default {

    data() {
      return {
        messages: [
          {
            name: 'Alon',
            message: 'How are you?',
            date: new Date().getTime()
          },
          {
            name: 'Sam',
            message: 'Fine, and how are you?',
            date: new Date().getTime()
          }
        ]
      }
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
