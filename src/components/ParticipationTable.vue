<template>
  <q-table
    :columns="columns"
    :data="rows"
    row-key="id"
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
          field: 'index'
        },
        {
          name: 'firstName',
          label: 'First name',
          field: 'firstName'
        },
        {
          name: 'lastName',
          label: 'Last name',
          field: 'lastName'
        },
        {
          name: 'participation',
          label: 'Participation',
          field: 'participation'
        }
      ]
    }
  },
  computed: {
    rows () {
      return this.$store.state.participations.map((participation, index) => {
        return {
          ...participation,
          index
        }
      })
    }
  }
}
</script>

<style>

</style>
