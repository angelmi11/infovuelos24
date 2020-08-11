module.exports ={

    index:function(req,res){
        res.render('Oceania/index')
    },
    getPaises:function(req,res){
        const {pais="paises",name} = req.params;
        res.render(`Oceania/${pais}/${name}`)
    },

    getAeropuertos:function(req,res){
         const  { aeropuertos="aeropuertos",name} = req.params;
        res.render(`Oceania/${aeropuertos}/${name}`)
    },

};
