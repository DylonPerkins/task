import Api from '@/services/api'

export default {
    postJob (newPost){
        return Api().post('post', newPost)
    },

    getJob (){
        return Api().get('index')
    }
}