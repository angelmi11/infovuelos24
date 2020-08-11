module.exports ={
    index: function (req, res) {
        res.render('Africa/index')
    },
    getPaises: function (req, res) {
       
        const {
            pais = "paises", name
        } = req.params;
        res.render(`Africa/${pais}/${name}`)
    },

    getAeropuertos: function (req, res) {
        const {
            aeropuertos = "aeropuertos", name
        } = req.params;
        res.render(`Africa/${aeropuertos}/${name}`)

}
}

