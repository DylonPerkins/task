const {PostJob} = require('../models')

module.exports = {
    async index(req,res) {
        try {
            const post = await PostJob.findAll({
                limit: 10
            })
            res.send(post)
        }catch (err) {
            res.status(500).send({
            error: 'no posts exist'
            })
        }
    },

    async PostJob(req,res) {
      try {
        console.log(PostJob)
        console.log(req.body)
          const posts = await PostJob.create(req.body)
          console.log(posts)
          res.send(posts)
      }catch (err){
          res.status(400).send({
              error:'This post already exists'
          })
      }
    }
}