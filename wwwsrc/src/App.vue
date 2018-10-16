<template>
  <v-app id="app">
    <router-view />
  </v-app>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("authenticate");
    this.$store.dispatch("getPublicKeeps");
  }
};
</script>


<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

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
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-size: 3rem;
  display: flex;
  flex-direction: start;
  text-align: left;
  color: #e71d36;
}
.toolbar-title {
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: start;
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
  color: #565656;
}
.no-vaults {
  margin: 5rem;
  color: #7f7f7f;
}
.no-keeps {
  margin: 5rem;
  color: #7f7f7f;
}
.keep-card {
  margin-top: 2rem;
  margin-bottom: 2rem;
  margin-right: 2.5rem;
  margin-left: 2.5rem;
  width: 22rem;
  &:hover .keep-card-actions {
    opacity: 1;
  }
}
.vault-card {
  margin-top: 2rem;
  margin-bottom: 2rem;
  margin-right: 2.5rem;
  margin-left: 2.5rem;
  width: 22rem;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #cccccc;
  }
  &:hover .vault-card-actions {
    opacity: 1;
  }
}
.keep-name {
  font-size: 2rem;
  color: #2ec4b6;
  display: flex;
  justify-content: start;
}
.vault-name {
  font-size: 2rem;
  color: #2ec4b6;
  display: flex;
  justify-content: start;
}
.keep-description {
  font-size: 1.2rem;
  color: #565656;
  display: flex;
  justify-content: start;
}
.vault-description {
  font-size: 1.2rem;
  color: #565656;
  display: flex;
  justify-content: center;
}
.keeps-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.vaults-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.keep-card-actions {
  opacity: 0;
  transition: opacity 200ms;
}
.vault-card-actions {
  opacity: 0;
  transition: opacity 200ms;
}
.v-card-btn {
  position: absolute;
  bottom: 0;
  right: 0;
}
.view-keep-card {
  padding: 1.5rem;
}
.activeKeep-title {
  display: flex;
  justify-content: space-between;
}
.activeKeep-name {
  font-size: 2rem;
  color: #2ec4b6;
  display: flex;
  justify-content: start;
}
.activeKeep-description {
  font-size: 1.2rem;
  color: #565656;
  display: flex;
  justify-content: start;
}
.activeKeep-views {
  font-size: 1.2rem;
  color: #565656;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 1rem;
  margin-top: 1rem;
}
.view-icon {
  margin-right: 0.5rem;
  margin-left: 0.5rem;
}
.delete-keep-warning {
  font-size: 1.2rem;
}
.vault-creds {
  display: flex;
  justify-content: center;
}
</style>