<template>
  <identity @gotEmail="redirect" />
</template>

<script>
import Identity from "@/components/identity.vue";

export default {
  components: {
    Identity,
  },
  methods: {
    async redirect(email) {
      const payloadEncoded = this.$route.query.p;
      if (!payloadEncoded) return;

      const payloadJson = atob(payloadEncoded);
      const payload = JSON.parse(payloadJson);

      const webhookPayload = {
        email,
        source: this.$route.params.source,
        info: payload.info,
      };
      await this.$http[payload.method.toLowerCase()](
        payload.webhook,
        webhookPayload
      );

      window.location = payload.redirect;
    },
  },
};
</script>

<style></style>
