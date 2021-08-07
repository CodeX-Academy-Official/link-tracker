<template>
  <div>
    <form @submit="saveIdentity" v-if="isNew">
      <p>Email: <input v-model="email" type="email" required /></p>
      <button type="submit">Submit</button>
    </form>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
export default {
  data: () => ({
    isNew: true,
    email: "",
  }),
  methods: {
    saveIdentity(e) {
      e.preventDefault();
      this.$cookies.set("email", this.email);
      this.isNew = false;
      this.$emit("gotEmail", this.email);
    },
  },
  mounted() {
    const email = this.$cookies.get("email");
    if (email) {
      this.isNew = false;
      this.$emit("gotEmail", email);
    }
  },
};
</script>

<style></style>
