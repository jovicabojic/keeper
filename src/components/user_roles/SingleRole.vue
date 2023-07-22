<template>
  <div class="card">
<!--    <router-link tag="a"-->
<!--                 :to="`/roles/${role.id}`"-->
<!--                 class="read-more">-->
<!--      <div class="featured-role-image m-b-1">-->
<!--        <img src="../../assets/img/single-role.jpeg"-->
<!--             alt="role image">-->
<!--        <div class="mask"></div>-->
<!--      </div>-->
      <div class="card-body">
        <h3 class="card-title m-b-3">
          {{ role.name && role.name }}
        </h3>
        <p class="m-b-2">Administrator Role</p>
        <p class="card-text">
          {{ role.description && role.description }}
        </p>
        <div v-if="role.users.length" class="users-list d-flex">
          <div v-for="(user, index) in role.users" :key="index">
                  <img :src="user.photo_url"
                       alt="user image">
          </div>
        </div>
      </div>
      <div class="card-footer"></div>
<!--    </router-link>-->
  </div>
</template>
<script>

export default {
  name: 'SingleRole',
  props: ['role']
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/base/colors";

.card {
  padding: 30px 15px;
  border: 2px solid #EBEBEB;
  & .read-more {
    text-decoration: none;
  }

  .featured-role-image {
    transition-duration: 0.7s;
    position: relative;
    overflow: hidden;

    & img {
      width: 100%;
      max-width: 100%;
      height: 250px;
      object-fit: cover;
      transition-duration: 0.7s;
    }

    & .mask {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.3);
      transition-duration: 0.7s;
    }

    &:hover {
      & img {
        transform: scale(1.3);
        cursor: pointer;
        transition-duration: 0.7s;
      }
    }
  }

  & .card-body {
    padding: 5px 15px 15px 15px;

    & .card-title {
      font-weight: bold;
      line-height: 22px;
      text-transform: capitalize;
      color: $dark;
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

    & .card-text {
      color: $dark;
    }
  }
}

</style>

