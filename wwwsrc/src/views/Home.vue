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
                <p>Your vaults</p>
                <v-spacer></v-spacer>
                <v-btn color="#2ec4b6" @click="newVaultDialogVal = true" fab>
                  <v-icon color="#ffffff">add</v-icon>
                </v-btn>
              </v-card-title>

              <v-divider color="#2ec4b6"></v-divider>
              <div class="no-vaults">
                <p class="upper">You currently don't have any vaults</p>              
              </div>
            </v-flex>
          </v-container>
        </v-card>

        <v-divider color="#2ec4b6"></v-divider>

        <v-card class="dashboard-keeps">
          <v-container row wrap>
            <v-flex xs12>
              <v-card-title class="upper card-heading">
                <p>Your keeps</p>
                <v-spacer></v-spacer>
                <v-btn color="#2ec4b6" @click="newKeepDialogVal = true" fab>
                  <v-icon color="#ffffff">add</v-icon>
                </v-btn>
              </v-card-title>

              <v-divider color="#2ec4b6"></v-divider>
              <div v-if="userKeeps.length > 0">
                <v-card v-for="keep in userKeeps" :key="keep.id">
                  <v-container>
                    <v-flex xs12>
                      <v-img src="keep.img" aspect-ratio="2.75"></v-img>
                      <v-card-title></v-card-title>
                    </v-flex>
                  </v-container>
                </v-card>
              </div>

              <div v-else class="no-keeps">
                <p class="upper">You currently don't have any keeps</p>              
              </div>

            </v-flex>
          </v-container>
        </v-card>

        <v-divider color="#2ec4b6"></v-divider>
      </section>


      <!-- DIALOG SECTION -->


      <!-- VAULT DIALOG -->
      <v-dialog v-model="newVaultDialogVal" width="800">
        <v-card class="form">
          <v-card-title class="upper text-bold">Create new vault</v-card-title>

          <v-divider color="#2ec4b6"></v-divider>

          <v-text-field label="Title" v-model="newVaultDialog.name"></v-text-field>
          <v-text-field label="Description" v-model="newVaultDialog.description"></v-text-field>

          <v-card-actions>
            <v-btn type="submit" @click="newVault; newVaultDialogVal = false;" class="upper">create vault</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <!-- KEEP DIALOG -->
      <v-dialog v-model="newKeepDialogVal" width="800">
        <v-card class="form">
          <v-card-title class="upper">Create new keep</v-card-title>

          <v-divider color="#2ec4b6"></v-divider>

          <v-text-field label="Title" v-model="newKeepDialog.name"></v-text-field>
          <v-text-field label="Img Link" v-model="newKeepDialog.img"></v-text-field>
          <v-text-field label="Description" v-model="newKeepDialog.description"></v-text-field>
          <v-checkbox label="Make Keep Private" v-model="newKeepDialog.isPrivate"></v-checkbox>

          <v-card-actions>
            <v-btn type="submit" @click="newKeep(); newKeepDialogVal = false;" class="upper">create keep</v-btn>
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
        name: "",
        description: ""
      },
      newVaultDialogVal: false,
      newKeepDialog: {
        name: "",
        img: "",
        description: "",
        isPrivate: false
      },
      newKeepDialogVal: false,
      logoutDialog: false
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    userKeeps() {
      return this.$store.state.userKeeps;
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
      this.$store.dispatch("newVault", this.newVaultDialog);
      this.newVaultDialog.name = "";
      this.newVaultDialog.description = "";
    },
    newKeep() {
      this.newKeepDialog.isPrivate = this.newKeepDialog.isPrivate ? 1 : 0;
      this.$store.dispatch("newKeep", this.newKeepDialog);
      this.newKeepDialog.name = "";
      this.newKeepDialog.img = "";
      this.newKeepDialog.description = "";
      this.newKeepDialog.isPrivate = false;
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
