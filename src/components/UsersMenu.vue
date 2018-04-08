<template>
  <div class="users-menu">
    <user-menu-item v-for="user in users" :user="user"/>
  </div>
</template>

<script>

  import UserMenuItem from './UserMenuItem.vue';

  import { mapGetters } from 'vuex';

  export default {

    components: {
      userMenuItem: UserMenuItem
    },

    created() {

    },

    computed: {
      ...mapGetters([
        'users'
      ])
    }

  }

</script>

<style lang="scss">

    .users-menu {

      font-family: Open Sans;
      font-size: 18px;

    }

</style>
