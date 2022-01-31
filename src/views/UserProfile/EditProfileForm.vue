<template>
  <div class="card">
    <div class="card-body">
      <div class="row" align-v="center" slot="header">
        <div class="col" cols="8">
          <h3 class="mb-0">Edit profile</h3>
        </div>
        <div cols="4" class="col text-right">
          <a href="#!" class="btn btn-sm btn-primary">Settings</a>
        </div>
      </div>

      <form @submit.prevent="updateProfile">
        <h6 class="heading-small text-muted mb-4">User information</h6>

        <div class="pl-lg-4">
          <div class="row">
            <div class="form-group col-lg-6">
              <input
                type="text"
                class="form-control"
                v-model="user.username"
                placeholder="name@example.com"
              />
            </div>
            <div class="form-group col-lg-6">
              <input
                type="email"
                class="form-control"
                label="Email address"
                placeholder="mike@email.com"
                v-model="user.email"
              />
            </div>
          </div>
          <div class="row">
            <div class="form-group col-lg-6">
              <input
                type="text"
                class="form-control"
                label="First Name"
                placeholder="First Name"
                v-model="user.firstName"
              />
            </div>
            <div class="form-group col-lg-6">
              <input
                type="text"
                class="form-control"
                label="Last Name"
                placeholder="Last Name"
                v-model="user.lastName"
              />
            </div>
          </div>
        </div>
        <hr class="my-4" />

        <!-- Address -->
        <h6 class="heading-small text-muted mb-4">Contact information</h6>

        <div class="pl-lg-4">
          <div class="row">
            <div class="form-group col-md-12">
              <input
                type="text"
                class="form-control"
                label="Address"
                placeholder="Home Address"
                v-model="user.address"
              />
            </div>
          </div>
          <div class="row">
            <div class="form-group col-lg-4">
              <input
                type="text"
                class="form-control"
                label="City"
                placeholder="City"
                v-model="user.city"
              />
            </div>
            <div class="form-group col-lg-4">
              <input
                type="text"
                class="form-control"
                label="Country"
                placeholder="Country"
                v-model="user.country"
              />
            </div>
            <div class="form-group col-lg-4">
              <input
              type="text"
                label="Postal Code"
                class="form-control"
                placeholder="ZIP Code"
                v-model="user.postalCode"
              />
              
            </div>
          </div>
        </div>

        <hr class="my-4" />
        <!-- Description -->
        <div class="form-group">
          <label for="exampleFormControlTextarea1">About me</label>
          <textarea class="form-control" id="about-form-textaria" rows="3" placeholder="A few words about you ..."></textarea>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        company: "Creative Code Inc.",
        username: "michael23",
        email: "",
        firstName: "Mike",
        lastName: "Andrew",
        address: "Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09",
        city: "New York",
        country: "USA",
        postalCode: "",
        aboutMe: `Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.`,
      },
    };
  },
  methods: {
    updateProfile() {
      alert("Your data: " + JSON.stringify(this.user));
    },
  },
};
</script>
<style></style>
