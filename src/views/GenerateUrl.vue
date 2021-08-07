<template>
  <div>
    <p>Redirect Url: <input v-model="redirect" /></p>
    <p>Webhook Url: <input v-model="webhook" /></p>
    <p>
      Webhook Method:
      <select v-model="method">
        <option>post</option>
        <option>get</option>
        <option>put</option>
      </select>
    </p>
    <p>Source: <input v-model="source" /></p>
    <p>Info: <input v-model="info" /></p>
    <p><button @click="generate()">Generate URL</button></p>
    <textarea v-if="url" disabled v-model="url" style="width:100%" />
  </div>
</template>

<script>
export default {
  data: () => ({
    redirect: "http://codex.academy",
    webhook: "https://enyh8w2aolbhpay.m.pipedream.net",
    method: "post",
    source: "",
    info: "",
    url: "",
  }),
  methods: {
    generate() {
      const payload = {
        redirect: this.redirect,
        webhook: this.webhook,
        method: this.method,
        info: this.info,
      };
      const encodedPayload = btoa(JSON.stringify(payload));
      console.log(window.location.pathname);
      const url = `${window.location}${this.source}/r?p=${encodedPayload}`;
      this.url = url;
    },
  },
};
</script>

<style></style>
