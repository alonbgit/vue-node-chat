<template>
  <div id="app">
    <users-menu class="users-menu"/>
    <div class="chat">
      <chat-screen class="chat-screen"/>
      <chat-input/>
    </div>
  </div>
</template>

<script>

  import UsersMenu from './components/UsersMenu.vue';
  import ChatScreen from './components/ChatScreen.vue';
  import ChatInput from './components/ChatInput';

  export default {

    components: {
      usersMenu: UsersMenu,
      chatScreen: ChatScreen,
      chatInput: ChatInput
    }

  }

</script>

<style lang="scss">

  @import './style/style.scss';

  #app {
    display: flex;
    height: 100%;
    border: 2px solid #bfbfbf;
  }

  .users-menu {
    border-right: 3px solid #bfbfbf;
    flex: 1;
  }

  .chat {
    flex: 4;
    display: flex;
    flex-direction: column;

    .chat-screen {
      flex: 1;
    }

  }

</style>
