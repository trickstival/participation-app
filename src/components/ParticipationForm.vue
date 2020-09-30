<template>
  <section class="participation-form flex items-center">
    <q-input
      label="First Name"
      bg-color="white"
      outlined
    />
    <q-input
      label="Last Name"
      bg-color="white"
      outlined
    />
    <q-input
      label="Participation"
      bg-color="white"
      outlined
    />
    <q-btn
      label="Send"
      outline
    />
  </section>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.participation-form {
  & > * {
    margin-left: 30px;
  }
}
</style>
