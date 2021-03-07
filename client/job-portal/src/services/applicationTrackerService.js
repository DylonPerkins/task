import Api from '@/services/api'

export default {
    applyTracker (){
        return Api().get('applyGet')
    },

    apply (tracking){
        return Api().post('apply', tracking)
    }
}