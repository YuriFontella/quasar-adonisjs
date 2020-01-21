// import something here
import VueResource from 'vue-resource'

// "async" is optional
export default async ({ app, router, Vue }) => {
  // something to do

  Vue.use(VueResource)
  Vue.http.options.root = 'http://127.0.0.1:3333'
}
