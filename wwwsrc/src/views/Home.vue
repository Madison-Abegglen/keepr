<template>
  <div> 
    <v-toolbar class="toolbar">
      <v-toolbar-title class="upper toolbar-title">keepr</v-toolbar-title>
      <v-spacer></v-spacer>
      <button class="upper logout" raised @click="logoutDialog = true">logout</button>
    </v-toolbar>

    <div class="page-wrapper">
      <section>
        <h1 class="upper heading">welcome to <br/> {{user.username}}'s dashboard</h1>
      </section>
    
      <v-divider></v-divider>
    
      <section class="dashboard">
        <div class="dashboard-vaults">
          <h4 class="upper">your vaults</h4>
          <button @click="newVaultDialog = true" class="fab">
            <v-icon color="#ffffff">add</v-icon>
          </button>
        </div>

        <v-divider></v-divider>

        <div class="dashboard-keeps">
          <h4 class="upper">your keeps</h4>
          <button @click="newKeepDialog = true" class="fab">
            <v-icon color="#ffffff">add</v-icon>
          </button>
        </div>

        <v-divider></v-divider>
      </section>

      <v-dialog v-model="newVaultDialog" width="800">
        <v-card class="form">
          <v-card-title class="upper text-bold">Create new vault</v-card-title>

          <v-divider></v-divider>

          <v-text-field label="Title" v-model="newVaultDialog.title"></v-text-field>
          <v-text-field label="Description" v-model="newVaultDialog.description"></v-text-field>

          <v-divider></v-divider>
        
          <v-card-actions>
            <button class="upper submit text-bold" type="submit" @click="newVault; newVaultDialog = false;">create vault</button>
          </v-card-actions>
        </v-card>
      </v-dialog>


      <v-dialog v-model="newKeepDialog" width="800">
        <v-card class="form">
          <v-card-title class="upper text-bold">Create new keep</v-card-title>

          <v-divider></v-divider>

          <v-text-field label="Title" v-model="newKeepDialog.title"></v-text-field>
          <v-text-field label="Web Link" v-model="newKeepDialog.link"></v-text-field>
          <v-text-field label="Description" v-model="newKeepDialog.description"></v-text-field>

          <v-divider></v-divider>

          <v-card-actions>
            <button class="upper submit" type="submit" @click="newKeep; newKeepDialog = false;">create keep</button>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog v-model="logoutDialog" width="800">
        <v-card>
          <v-card-title class="upper">Logout</v-card-title>

          <v-divider></v-divider>

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
      newVaultDialog: false,
      newVaultDialog: {
        title: "",
        description: ""
      },
      newKeepDialog: false,
      newKeepDialog: {
        title: "",
        link: "",
        description: ""
      },
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
      this.$store.dispatch("newVault", { ...this.newVaultDialog });
      this.newVaultDialog.title = "";
      this.newVaultDialog.description = "";
      this.newVaultDialog = false;
    },
    newKeep() {
      this.$store.dispatch("newKeep", { ...this.newKeepDialog });
      this.newKeepDialog.title = "";
      this.newKeepDialog.link = "";
      this.newKeepDialog.description = "";
      this.newKeepDialog = false;
    }
  }
};
</script>

<style lang="scss">
.page-wrapper {
  height: 100%;
  width: calc(100% - 2rem);
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
  // padding-bottom: 5rem;
  background-color: #e9f1e5;
  overflow-y: auto;
  position: relative;
  width: 100%;
  max-width: 100rem;
  margin: 0 auto;
  margin-top: 2rem;
  display: flex;
  flex: 1 0;
  flex-direction: column;
  padding-top: 64px;
  padding-bottom: 4rem;
  padding-left: 5rem;
  padding-right: 5rem;
}
.form {
  display: flex;
  flex-direction: column;
  padding: 0.75rem 1.25rem;
}
.form-button {
  height: 3rem;
  font-size: 1.15rem;
}
</style>

<style lang="scss" scoped>
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
.dashboard {
  display: flex;
  flex-direction: column;
}
.dashboard-vaults {
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  align-items: center;
}
.dashboard-keeps {
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  align-items: center;
}
.heading {
  margin-bottom: 2rem;
  font-size: 3rem;
  display: flex;
  flex-direction: start;
  text-align: left;
  color: #2ec4b6;
}
.toolbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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
.submit {
  border: solid 2px #2ec4b6;
  padding: 1rem;
  margin-top: 0.75rem;
  margin-left: 0.75rem;
  font-weight: bold;
}
</style>
