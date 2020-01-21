'use strict'

const Post = use('App/Models/Post')

class PostController {

  async index () {

    return await Post.all()
  }

  async store ({ request }) {

    return await Post.create(request.post())
  }
}

module.exports = PostController
