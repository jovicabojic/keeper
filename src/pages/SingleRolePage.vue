<template>
  <section class="single-role-section p-y-3">
    <div class="wrapper">
      <template v-if="role">
        <div class="column-row">
          <div class="column-12">
            <article>
              <h3 class="m-b-1">{{ role.name }}</h3>
              <p>{{ role.description }}</p>
              <div v-if="role.users.length" class="users-list d-flex">
                <div v-for="(user, index) in role.users" :key="index">
                  <img :src="user.photo_url"
                       alt="user image">
                </div>
              </div>
            </article>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="column-row">
          <div class="column-12 text-center">
            Sorry, no role with this id...
          </div>
        </div>
      </template>
    </div>
  </section>
</template>
<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
  name: 'SingleRolePage',
  computed: {
    ...mapGetters({
      role: 'role'
    })
  },
  methods: {
    ...mapMutations(['setRole'])
  },
  mounted() {
    this.$store.dispatch("getRole", this.$route.params.id)
  }
}
</script>

<style lang="scss" scoped>
article {
  & h3 {
    text-transform: capitalize;
    font-weight: 500;
  }
  & .users-list {
    margin-top: 20px;
    & div {
      width: 30px;
      margin-right: 10px;
      overflow: hidden;
      border-radius: 50%;
      & img {
        width: 100%;
        border-radius: 50%;
      }
    }
  }
}
</style>
