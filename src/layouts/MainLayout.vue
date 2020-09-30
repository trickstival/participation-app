<template>
  <q-layout view="lhh Lpr lFf">
    <q-header class="header flex flex-center" elevated>
      <participation-form class="participation-form" />
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import ParticipationForm from '../components/ParticipationForm'

export default {
  name: 'MainLayout',
  components: {
    ParticipationForm
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  height: 150px;
  background-color: #00b8e2;
}
.participation-form {
  width: 70%;
  max-width: 1200px;
}

@media screen and (max-width: $breakpoint-md-min) {
  .header {
    height: 450px;
  }
}
</style>
