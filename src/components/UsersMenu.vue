<template>
  <div class="users-menu">
    <user-menu-item v-for="user in users" :user="user"/>
  </div>
</template>

<script>

  import UserMenuItem from './UserMenuItem.vue';

  export default {

    components: {
      userMenuItem: UserMenuItem
    },

    data() {
      return {
        users: [
          {
            name: 'Alon'
          },
          {
            name: 'Sam'
          }
        ]
      }
    }

  }

</script>

<style lang="scss">

    .users-menu {

      font-family: Open Sans;
      font-size: 18px;

    }

</style>
