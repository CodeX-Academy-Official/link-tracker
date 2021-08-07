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
      let url = payload.webhook;
      if (payload.method === "get") {
        const query = Object.keys(webhookPayload)
          .map((x) => `${x}=${encodeURI(webhookPayload[x])}`)
          .join("&");
        url = `${url}?${query}`;
      }
      try {
        await this.$http[payload.method.toLowerCase()](url, webhookPayload);
      } catch (err) {
        console.log(err);
      }

      window.location = payload.redirect;
    },
  },
};
</script>

<style></style>
