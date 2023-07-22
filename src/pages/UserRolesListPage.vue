<template>
  <section class="wrapper">
    <div class="column-row">
      <div class="column-12">
        <ActionsSection/>
        <UserRolesList/>
      </div>
    </div>
  </section>
</template>
<script>
import ActionsSection from '../components/ActionsSection.vue'
import UserRolesList from '../components/user_roles/UserRolesList.vue'

export default {
  name: 'UserRolesListPage',
  components: {
    ActionsSection,
    UserRolesList
  },
  mounted() {
    this.$store.dispatch("getUserRoles")
  }
}
</script>
