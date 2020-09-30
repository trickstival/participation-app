<template>
  <q-page>
    <div class="flex items-center text-grey-9 column">
      <h3 class="q-mb-md">
        DATA
      </h3>
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </div>
    </div>

    <div class="flex justify-center q-mt-xl q-px-sm">
      <div class="participation-data">
        <participation-table class="full-width" />
        <participation-chart />
      </div>
    </div>

  </q-page>
</template>

<script>
import ParticipationTable from '../components/ParticipationTable'
import ParticipationChart from '../components/ParticipationChart'

export default {
  name: 'PageIndex',
  components: {
    ParticipationTable,
    ParticipationChart
  },
  methods: {
    getParticipations () {
      this.$axios.get('/participation')
        .then((res) => {
          const participations = res.data
          this.$store.commit('setParticipations', participations)
        })
        .catch(error => {
          console.error(error)
          this.$q.notify({
            type: 'negative',
            message: 'Could not fetch participation'
          })
        })
    }
  },
  created () {
    this.getParticipations()
  }
}
</script>

<style lang="scss" scoped>
.participation-data {
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
  column-gap: 100px;
  width: 70%;
  max-width: 1300px;
}

@media screen and (max-width: $breakpoint-md-min) {
  .participation-data {
    grid-template-columns: 1fr;
  }
}
</style>
