import Api from '@/services/api'

export default {
    upload (fd){
        return Api().post('profile', fd)
    },

    getImage (imagePath){
        return Api().post('file', imagePath)
    }
}