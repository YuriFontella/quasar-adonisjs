<template>
  <q-page padding>
    <div class="row">
      <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-4 offset-lg-4">

        <q-card>
          <q-card-section>
            <q-form class="q-gutter-sm" @submit.prevent="post">
              <q-input v-model="tweet.title" autofocus></q-input>
              <q-input v-model="tweet.text" type="textarea"></q-input>

              <div>
                <q-btn type="submit" class="full-width" color="indigo" label="Enviar" />
              </div>
            </q-form>
          </q-card-section>
        </q-card>

        <q-separator spaced color="grey-2" />

        <q-card class="bg-white q-mb-xs" v-for="tweet in tweets" :key="tweet.id">
          <q-list class="q-py-sm">
            <q-item>
              <q-item-section top avatar>
                <q-avatar color="indigo" text-color="white" square>
                  {{ tweet.title.substring(1, 0) }}
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label>{{ tweet.title }}</q-item-label>
                <q-item-label caption lines="2">{{ tweet.text }}</q-item-label>
              </q-item-section>

              <q-item-section side top>
                <q-item-label caption>{{ tweet.created_at }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',

  data: () => ({

    tweet: {
      title: null,
      text: null
    }
  }),

  computed: {

    tweets () {

      return this.$store.state.query.tweets
    }

  },

  methods: {

    post () {

      this.$store.dispatch('query/post', { url: 'posts', data: this.tweet }).then(response => {
        this.tweet = {}
        this.get()
      })
    },

    get () {

      this.$store.dispatch('query/get', { url: 'posts' }).then(response => {
        this.$store.state.query.tweets = response.body
      })
    }
  },

  created () {

    this.get()
  }

}
</script>
