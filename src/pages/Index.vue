<template>
  <q-page class="">

    <div class="flex items-center text-grey-9 column">
      <h3>
        DATA
      </h3>
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </div>
    </div>

    <div class="flex justify-center q-mt-xl">
      <div class="participation-data">
        <participation-table />
      </div>
    </div>

  </q-page>
</template>

<script>
import ParticipationTable from '../components/ParticipationTable'

export default {
  name: 'PageIndex',
  components: {
    ParticipationTable
  }
}
</script>

<style lang="scss" scoped>
.participation-data {
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
  max-width: 1000px;
}
</style>
