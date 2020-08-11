module.exports ={
    index:function(req,res){
        res.render('NorteAmerica/index')
    },
    getPaises:function(req,res){
        const {pais="paises",name} = req.params;
        res.render(`NorteAmerica/${pais}/${name}`)
    },

    getAeropuertos:function(req,res){
         const  { aeropuertos="aeropuertos",name} = req.params;
        res.render(`NorteAmerica/${aeropuertos}/${name}`)
    },

}

