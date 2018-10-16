<template>
  <div>
    <h1>Keeps</h1>
    <div>
      <keeps :keeps="keeps" />
    </div>
  </div>
</template>


<script>
import Keeps from "../components/Keeps";
export default {
  name: "Home",
  computed: {
    user() {
      return this.$store.state.user;
    },
    keeps() {
      return this.$store.state.publicKeeps;
    }
  },
  components: { Keeps }
};
</script>
