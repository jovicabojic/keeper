<template>
  <section class="single-role-section p-y-3">
    <div class="wrapper">
      <template v-if="role">
        <div class="column-row">
          <div class="column-4">
            <img src="../assets/img/single-role.jpeg"
                 class="rounded-circle w-100"
                 alt="Role image"/>
          </div>
          <div class="column-8">
            <article>
              <h3 class="m-b-1">{{ role.title }}</h3>
              <p>{{ role.body }}</p>
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
}
</style>
