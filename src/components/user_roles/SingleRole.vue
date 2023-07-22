<template>
  <div class="card">
    <div class="card-body">
      <div v-if="!role.active" class="status-ribbon">
        <p>INACTIVE</p>
      </div>
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
    <div v-if="!role.editable" class="card-footer d-flex justify-content-between align-items-center">
      <div>
        Date created: {{ formatDate(role.created_on) }}
      </div>
      <div>
        <span class="material-icons">lock</span>
      </div>
    </div>
    <div v-else class="card-footer d-flex justify-content-between align-items-center">
      <div>
        Last update: {{ formatDate(role.modified_on) }}
      </div>
      <div class="action-buttons d-flex justify-content-between">
        <button type="button" class="edit-btn" @click="editRole">Edit</button>
        <button type="button" class="delete-btn">Delete</button>
      </div>
    </div>
  </div>
</template>
<script>
import moment from 'moment'

export default {
  name: 'SingleRole',
  props: ['role'],
  methods: {
    editRole() {
      this.$router.push(`/roles/${this.role.id}`)
    },
    formatDate(date) {
      // Use moment to format the date
      return moment(date).format('MM/DD/YYYY');
    },
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/base/colors";

.card {
  padding: 30px 15px;
  border: 2px solid #EBEBEB;
  position: relative;
  min-height: 300px;

  & .status-ribbon {
    background: #FA3C30;
    color: #fff;
    position: absolute;
    right: 20px;
    top: 20px;
    padding: 10px 10px;
    border-radius: 5px;

    & p {
      color: #fff;
      font-weight: bold;
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

  & .card-footer {
    padding: 20px;
    position: absolute;
    width: 100%;
    box-sizing: border-box;
    background: #EBEBEB;
    bottom: 0;
    left: 0;
    & .action-buttons {
      gap: 20px;
      button {
        background: transparent;
        border: none;
        font-size: 18px;
        &.delete-btn {
          color: #FA3C30;
        }
      }
    }
  }
}

</style>

