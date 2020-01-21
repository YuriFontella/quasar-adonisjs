import Vue from 'vue'

export const get = (context, req) => {

  return new Promise(async (resolve) => {
    resolve(await Vue.http.get(req.url, { params: req.params }))
  })

}

export const post = (context, req) => {

  return new Promise(async (resolve) => {
    resolve(await Vue.http.post(req.url, req.data))
  })

}
