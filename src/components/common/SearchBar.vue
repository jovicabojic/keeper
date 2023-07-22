<template>
  <div class="input-group">
    <form @submit.prevent="submitSearch">
      <div class="form-group">
        <input type="text"
               class="input-field"
               placeholder="Search..."
               aria-label="Search..."
               v-model="query"/>
        <span class="material-icons"
              v-if="query"
              @click="clearSearch">close</span>
        <span class="material-icons"
              v-else
              @click="submitSearch">search</span>
      </div>
    </form>
  </div>
</template>

<script>
import {mapActions, mapMutations} from 'vuex'

export default {
  name: 'SearchBar',
  data: () => ({
    query: ''
  }),
  // computed: {
  //   ...mapGetters([
  //     'getPostsByUserName',
  //   ]),
  // },
  methods: {
    ...mapMutations(['setSearch']),
    ...mapActions(['getUserRoles']),
    submitSearch() {
      this.setSearch(this.query)
    },
    clearSearch() {
      this.query = ''
      this.setSearch(this.query)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/base/colors";

.input-group {
  & form {
    & .form-group {
      max-width: 250px;
      margin: 0 auto;
      position: relative;

      .input-field {
        background: transparent;
        border-width: 0 0 2px 0;
        border-style: solid;
        border-bottom-color: #85C7D2;
        color: $dark;
        width: 250px;
        box-sizing: border-box;
        font-size: 14px;
        padding: 5px 10px;
        height: 36px;

        &:focus-visible {
          box-shadow: none;
          outline: none;
        }
      }

      & .material-icons {
        position: absolute;
        right: 10px;
        top: 6px;
      }
    }
  }
}
</style>
