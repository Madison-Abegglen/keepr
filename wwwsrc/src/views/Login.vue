<template>
  <div>
  <!-- TOOLBAR SECTION -->

    <v-toolbar app>
      <v-toolbar-title class="upper toolbar-title">keep*r</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-card class="searchbar">
        <v-text-field label="Search Keepr" prepend prepend-icon="search">
        </v-text-field>
      </v-card>
    </v-toolbar>

    <div class="page-wrapper">
      
    <!-- SIGNUP OR LOGIN SECTION -->
      
      <section>
        <v-card class="join">
          <v-container>
            <v-container>
              <v-card-title class="upper">
                <v-text class="join-title">Login or Register to see more of Keepr</v-text>
              </v-card-title>
            </v-container>

            <v-divider color="#2ec4b6"></v-divider>

            <v-form v-if="loginForm">
              <v-text class="form-title">Use a free account to access more features</v-text>
              <v-text-field type="email" v-model="creds.email" label="Email Address"></v-text-field>
              <v-text-field type="password" v-model="creds.password" label="Password"></v-text-field>
              <v-btn class="mb1" @click="login">Login</v-btn> 
            </v-form>

            <v-form v-else>
              <v-text class="form-title">Use a free account to access more features</v-text>
              <v-text-field type="text" v-model="newUser.username" label="Name"></v-text-field>
              <v-text-field type="email" v-model="newUser.email" label="Email Address"></v-text-field>
              <v-text-field type="password" v-model="newUser.password" label="Password"></v-text-field>
              <v-btn class="mb1" @click="register">Create Account</v-btn>
            </v-form>


            <!-- CHANGE FORM LOGIN/REGISTER -->

            <v-divider color="#2ec4b6"></v-divider>

            <div class="mt1">
              <div v-if="loginForm" >
                <v-text>No account? Click to register</v-text>
                <div>
                  <v-btn class="mt1"  @click="loginForm = !loginForm">Register</v-btn>
                </div>
              </div>
              <div v-else>
                <v-text>Already have an account? Click to login</v-text>
                <div>
                  <v-btn class="mt1"  @click="loginForm = !loginForm">Login</v-btn>
                </div>
              </div>
            </div>
          </v-container>
        </v-card>
      </section>
    </div>
    <!-- <div class="page-wrapper">
      <form v-if="loginForm" @submit.prevent="loginUser">
        <input type="email" v-model="creds.email" placeholder="email">
        <input type="password" v-model="creds.password" placeholder="password">
        <button type="submit">Login</button>
      </form>
      <form v-else @submit.prevent="register">
        <input type="text" v-model="newUser.username" placeholder="name">
        <input type="email" v-model="newUser.email" placeholder="email">
        <input type="password" v-model="newUser.password" placeholder="password">
        <button type="submit">Create Account</button>
      </form>
      <div @click="loginForm = !loginForm">
        <p v-if="loginForm">No account Click to Register</p>
        <p v-else>Already have an account click to Login</p>
      </div>
    </div> -->

  </div>
</template>

<script>
export default {
  name: "login",
  mounted() {
    //checks for valid session
    this.$store.dispatch("authenticate");
  },
  data() {
    return {
      loginForm: true,
      creds: {
        email: "",
        password: ""
      },
      newUser: {
        email: "",
        password: "",
        username: ""
      }
    };
  },
  methods: {
    register() {
      this.$store.dispatch("register", newUser);
    },
    loginUser() {
      this.$store.dispatch("login", creds);
    }
  }
};
</script>

<style lang="scss">
</style>

<style lang="scss" scoped>
.page-wrapper {
  height: 100%;
  width: calc(100% - 2rem);
  max-width: 100rem;
  margin: auto;
  margin-top: 2rem;
  padding-top: 64px;
  padding-bottom: 4rem;
  padding-left: 5rem;
  padding-right: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #d6d6d6;
  overflow-y: auto;
  position: relative;
}
.upper {
  text-transform: uppercase !important;
  font-weight: bold;
}
.searchbar {
  height: 4rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.25rem;
  width: 30%;
}
.toolbar-title {
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 3rem;
  display: flex;
  flex-direction: start;
  font-weight: bold;
  color: #e71d36;
}
.join {
  width: 35rem;
  margin-top: 5rem;
  margin-bottom: 5rem;
}
.join-title {
  display: flex;
  flex-direction: row;
  justify-content: start;
  color: #2ec4b6;
  font-size: 1.5rem;
}
.form-title {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  margin-top: 1rem;
}
.mb1 {
  margin-bottom: 1.5rem;
}
.mt1 {
  margin-top: 1.5rem;
}
</style>
