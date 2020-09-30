<template>
  <q-form
    ref="form"
    class="participation-form"
    @submit.prevent="addParticipation"
  >
    <div class="row q-col-gutter-md">
      <div class="col-xs-12 col-md-3">
        <q-input
          v-model="participationData.firstName"
          :rules="[
            v => v.length > 1 || 'Please, enter a name with more than 1 character',
            v => v.length < 30 || 'Please, enter a name with less than 30 characters',
          ]"
          label="First Name"
          class="first-name-input"
          bg-color="white"
          outlined
          required
        />
      </div>
      <div class="col-xs-12 col-md-3">
        <q-input
          v-model="participationData.lastName"
          :rules="[
            v => v.length > 1 || 'Please, enter a name with more than 1 character',
            v => v.length < 30 || 'Please, enter a name with less than 30 characters',
          ]"
          label="Last Name"
          class="last-name-input"
          bg-color="white"
          outlined
          required
        />
      </div>
      <div class="col-xs-12 col-md-3">
        <q-input
          v-model.number="participationData.participation"
          :rules="[
            v => v < 100 || 'Please, enter a value less than 100',
            v => v > 0 || 'Please, enter a value greater than 0',
          ]"
          label="Participation (%)"
          class="participation-input"
          bg-color="white"
          type="number"
          min="0"
          max="100"
          outlined
          required
        />
      </div>
      <div class="col-xs-12 col-md-3 text-center">
        <q-btn
          class="send-button q-px-xl"
          label="Send"
          type="submit"
          size="lg"
          outline
        />
      </div>
    </div>
  </q-form>
</template>

<script>
export default {
  data () {
    return {
      participationData: {
        firstName: '',
        lastName: '',
        participation: ''
      }
    }
  },
  methods: {
    async addParticipation () {
      const isValid = await this.$refs.form.validate()
      if (!isValid) {
        return
      }
      try {
        const response = await this.$axios.post('/participation', this.participationData)
        this.$store.commit('addParticipation', {
          ...this.participationData,
          id: response.data.id
        })
        this.$q.notify({
          type: 'positive',
          message: 'Successfully added participation'
        })
      } catch (error) {
        this.$q.notify({
          type: 'negative',
          message: 'Could not add participation: ' + error.message
        })
      }
    }
  }
}
</script>

<style scoped lang="scss">
.participation-form {
  & > * {
    margin-left: 30px;
    flex: 1;
  }
}

@media screen and (max-width: $breakpoint-md-min) {
  .participation-form {
    & > * {
      margin-left: 0;
      margin-top: 10px;
    }
  }
}
</style>
