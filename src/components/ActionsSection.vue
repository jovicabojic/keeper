<template>
  <section class="search-section d-flex justify-content-center align-items-center">
    <div class="wrapper">
      <div class="column-row justify-content-center">
        <div class="column-12 d-flex justify-content-between align-items-center">
          <SearchBar/>
          <FilterDropdown />
          <button class="btn-primary">Create new role</button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import SearchBar from './common/SearchBar'
import FilterDropdown from "./common/FilterDropdown.vue";

export default {
  name: 'SearchSection',
  components: {
    SearchBar,
    FilterDropdown
  },
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/base/colors";

.search-section {
  min-height: 200px;

  & h2 {
    color: $white;
    font-weight: 500;
  }

  .btn-primary {
    background: $primary;
    padding: 15px 25px;
    text-transform: uppercase;
    color: $white;
    font-size: 25px;
    border: none;
  }

}
</style>
