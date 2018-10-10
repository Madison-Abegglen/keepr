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

      <v-btn class="upper logout" raised @click="logoutDialog = true">logout</v-btn>
    </v-toolbar>


      <!-- DASHBOARD SECTION -->


    <div class="page-wrapper">

      <!-- HEADER -->

      <section>
        <h1 class="upper heading">welcome to <br/> {{user.username}}'s dashboard</h1>
      </section>
    
      <v-divider color="#2ec4b6"></v-divider>

      <!-- USER VAULTS & KEEPS -->
        
      <section>
        <v-card class="dashboard-vaults">
          <v-container row wrap>
            <v-flex xs12>
              <v-card-title class="upper card-heading">
                <v-text>Your vaults</v-text>
                <v-spacer></v-spacer>
                <v-btn color="#2ec4b6" @click="newVaultDialog = true" fab>
                  <v-icon color="#ffffff">add</v-icon>
                </v-btn>
              </v-card-title>

              <v-divider color="#2ec4b6"></v-divider>
              <div class="no-vaults">
                <v-text class="upper">You currently don't have any vaults</v-text>              
              </div>
            </v-flex>
          </v-container>
        </v-card>

        <v-divider color="#2ec4b6"></v-divider>

        <v-card class="dashboard-keeps">
          <v-container row wrap>
            <v-flex xs12>
              <v-card-title class="upper card-heading">
                <v-text>Your keeps</v-text>
                <v-spacer></v-spacer>
                <v-btn color="#2ec4b6" @click="newKeepDialog = true" fab>
                  <v-icon color="#ffffff">add</v-icon>
                </v-btn>
              </v-card-title>

              <v-divider color="#2ec4b6"></v-divider>
              <div class="no-keeps">
                <v-text class="upper">You currently don't have any keeps</v-text>              
              </div>
            </v-flex>
          </v-container>
        </v-card>

        <v-divider color="#2ec4b6"></v-divider>
      </section>


      <!-- DIALOG SECTION -->


      <!-- VAULT DIALOG -->
      <v-dialog v-model="newVaultDialog" width="800">
        <v-card class="form">
          <v-card-title class="upper text-bold">Create new vault</v-card-title>

          <v-divider color="#2ec4b6"></v-divider>

          <v-text-field label="Title" v-model="newVaultDialog.title"></v-text-field>
          <v-text-field label="Description" v-model="newVaultDialog.description"></v-text-field>

          <v-card-actions>
            <v-btn type="submit" @click="newVault; newVaultDialog = false;" class="upper">create vault</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <!-- KEEP DIALOG -->
      <v-dialog v-model="newKeepDialog" width="800">
        <v-card class="form">
          <v-card-title class="upper">Create new keep</v-card-title>

          <v-divider color="#2ec4b6"></v-divider>

          <v-text-field label="Title" v-model="newKeepDialog.title"></v-text-field>
          <v-text-field label="Web Link" v-model="newKeepDialog.link"></v-text-field>
          <v-text-field label="Description" v-model="newKeepDialog.description"></v-text-field>

          <v-card-actions>
            <v-btn type="submit" @click="newKeep; newKeepDialog = false;" class="upper">create keep</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <!-- LOGOUT DIALOG -->
      <v-dialog v-model="logoutDialog" width="800">
        <v-card class="form">
          <v-card-title class="upper">Logout</v-card-title>

          <v-divider color="#2ec4b6"></v-divider>

          <v-card-text class="upper">are you sure you want to logout?</v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="upper" @click="logoutDialog = false">cancel</v-btn>
            <v-btn class="upper" @click="logout">logout</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      newVaultDialog: {
        title: "",
        description: ""
      },
      newVaultDialog: false,
      newKeepDialog: {
        title: "",
        link: "",
        description: ""
      },
      newKeepDialog: false,
      logoutDialog: false
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  mounted() {
    //blocks users not logged in
    if (!this.$store.state.user.id) {
      this.$router.push({ name: "login" });
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
    newVault() {
      this.$store.dispatch("newVault", newVaultDialog);
      this.newVaultDialog.title = "";
      this.newVaultDialog.description = "";
    },
    newKeep() {
      this.$store.dispatch("newKeep", newKeepDialog);
      this.newKeepDialog.title = "";
      this.newKeepDialog.link = "";
      this.newKeepDialog.description = "";
    }
  }
};
</script>

<style lang="scss">
</style>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  padding: 0.75rem 1.25rem;
}
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
  flex-direction: column;
  background-color: #d6d6d6;
  overflow-y: auto;
  position: relative;
}
.upper {
  text-transform: uppercase !important;
  font-weight: bold;
}
.fab {
  background-color: #2ec4b6;
  font-family: Roboto;
  border-radius: 2rem;
  border: solid 1px #2ec4b6;
  height: 2.4rem;
  padding-left: 0.28rem;
  padding-right: 0.28rem;
  display: flex;
  align-items: center;
  margin-right: 1rem;
}
.dashboard-vaults {
  margin: 1rem;
}
.dashboard-keeps {
  margin: 1rem;
}
.heading {
  margin-bottom: 2rem;
  font-size: 3rem;
  display: flex;
  flex-direction: start;
  text-align: left;
  color: #565656;
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
.searchbar {
  height: 4rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.25rem;
  width: 30%;
}
.card-heading {
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  color: #2ec4b6;
}
.no-vaults {
  margin: 5rem;
  color: #7f7f7f;
}
.no-keeps {
  margin: 5rem;
  color: #7f7f7f;
}
</style>
