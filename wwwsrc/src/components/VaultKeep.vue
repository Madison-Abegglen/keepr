<template>
  <div>
     <!-- ADD KEEP TO VAULT DIALOG -->
      <v-dialog scrollable v-model="activeKeep.name" max-width="400">
        <v-card class="form">
          <v-card-title style="margin-top: .5rem;" class="upper">Select a vault:</v-card-title>

          <v-divider style="margin: 1rem;" color="#2ec4b6"></v-divider>

          <v-card-text style="height: 400px;">
            <v-radio-group column>
              <v-radio v-for="vault in vaults" :key="vault.id" :label="vault.name" :value="vault.id" @change="activeVault = vault"></v-radio>
            </v-radio-group>

            <v-divider color="#2ec4b6"></v-divider>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="activeKeep = {}">Cancel</v-btn>
            <v-btn @click="addKeep()">Add</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
  </div>
</template>

<script>
export default {
  props: ["activeKeep"],
  mounted() {
    this.$store.dispatch("getUserVaults");
  },
  data() {
    return {
      activeVault: {}
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    vaults() {
      return this.$store.state.userVaults;
    }
  },
  methods: {
    addKeep() {
      var vk = {
        vaultId: this.activeVault.id,
        keepId: this.activeKeep.id,
        userId: this.user.id
      };
      this.$store.dispatch("addKeepToVault", vk);
    }
  }
};
</script>

