module.exports ={
    index:function(req,res){
        res.render('Europa/index')
    },
    getPaises:function(req,res){
        const {pais="paises",name} = req.params;
        res.render(`Europa/${pais}/${name}`)
    },

    getAeropuertos:function(req,res){
         const  { aeropuertos="aeropuertos",name} = req.params;
        res.render(`Europa/${aeropuertos}/${name}`)


    }
}
