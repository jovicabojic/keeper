<template>
  <section class="search-section d-flex justify-content-center align-items-center">
    <div class="wrapper">
      <div class="column-row">
        <div class="column-12 d-flex justify-content-between align-items-center">
          <SearchBar/>
          <FilterDropdown />
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
  min-height: 300px;

  & h2 {
    color: $white;
    font-weight: 500;
  }

}
</style>
