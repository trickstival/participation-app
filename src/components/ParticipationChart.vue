<template>
  <div class="participation-chart q-my-xl">
    <apex-chart
      :options="chartOptions"
      :series="series"
      :width="$q.screen.lt.sm ? '250' : '400'"
      type="donut"
    />
  </div>
</template>

<script>
import ApexChart from 'vue-apexcharts'

export default {
  components: {
    ApexChart
  },
  data () {
    return {
    }
  },
  computed: {
    participationsPercentages () {
      const takenPercentage = this.$store.state.participations.reduce((acc, p) => acc + p.participation, 0)
      const notTakenPercentage = 100 - takenPercentage

      return [
        ...this.$store.state.participations,
        {
          firstName: 'Not',
          lastName: 'Taken',
          participation: notTakenPercentage
        }
      ]
    },
    chartOptions () {
      return {
        labels: this.participationsPercentages.map(
          participationData => participationData.firstName + ' ' + participationData.lastName
        ),
        legend: {
          show: false
        }
      }
    },
    series () {
      return this.participationsPercentages.map(participationData => participationData.participation)
    }
  }
}
</script>

<style>

</style>
