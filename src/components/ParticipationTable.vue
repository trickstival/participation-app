<template>
  <q-table
    :columns="columns"
    :data="rows"
    row-key="id"
    hide-bottom
    class="participation-table"
  >

  </q-table>
</template>

<script>
export default {
  data () {
    return {
      columns: [
        {
          name: 'index',
          label: '',
          field: 'index',
          align: 'center'
        },
        {
          name: 'firstName',
          label: 'First name',
          field: 'firstName',
          align: 'left'
        },
        {
          name: 'lastName',
          label: 'Last name',
          field: 'lastName',
          align: 'left'
        },
        {
          name: 'participation',
          label: 'Participation',
          field: 'participation',
          align: 'center'
        }
      ]
    }
  },
  computed: {
    rows () {
      return this.$store.state.participations.map((participation, index) => {
        return {
          firstName: participation.firstName,
          lastName: participation.lastName,
          participation: participation.participation + ' %',
          index
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.participation-table {
  max-width: 100vw;
}
</style>
