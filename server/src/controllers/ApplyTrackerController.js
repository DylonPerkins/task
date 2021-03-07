const {ApplyTracker} = require('../models')

module.exports = {
    async Apply (req,res) {
        try {
            const applied = await ApplyTracker.create(req.body)   
            res.send(applied)     
            }catch(err){
            res.status(400).send({
                error:'Apply Tracker failed to link user'
            })
        }
    },

    async ApplyCheck(req,res) {
        try {
                //const {JobId} = req.body
                const applied = await ApplyTracker.findAll(
                    {
                        
                    }

                )
                res.send(applied)
        }catch (err) {
            res.status(500).send({
            error: 'Apply Tracker failed to check'
            })
        }
    }
            
                
            
        //     if (!applied){
        //         res.status(403).send({
        //             error:'The Login Failed1'
        //         })
        //     }
        //     const isApplied = PostID === applied.PostID
        //     if(!isApplied) {
        //         res.status(500).send({
        //             error:'Cannot apply to the same Job'
        //         })
        //     }

        
    

}
