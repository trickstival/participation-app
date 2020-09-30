<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="header flex flex-center" elevated>
      <participation-form />
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
</style>
