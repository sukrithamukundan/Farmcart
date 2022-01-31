<template>
  <div class="container">
    <div class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center profile-header">
      <div class="container-fluid">
        <!-- Mask -->
        <!-- Header container -->
        <div class=" container-fluid d-flex align-items-center p-4">
          <div class="row">
            <div class="col-lg-7 col-md-10">
              <h1 class="display-2 ">Hello Jesse</h1>
              <p class=" mt-0 mb-5">This is your profile page. You can see the progress you've made with your
                work and manage your projects or assigned tasks</p>
              <a href="#!" class="btn btn-info ">Edit profile</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid mt--6">
      <div class="row">
        <div class="col-xl-4 order-xl-2 mb-5">
          <user-card></user-card>
        </div>
        <div class="col-xl-8 order-xl-1">
          <edit-profile-form></edit-profile-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import EditProfileForm from './UserProfile/EditProfileForm.vue';
  import UserCard from './UserProfile/UserCard.vue';

  export default {
    components: {
      EditProfileForm,
      UserCard
    }
  };
</script>
<style>
</style>
