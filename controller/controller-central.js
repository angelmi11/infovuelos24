module.exports ={
    index: function (req, res) {
        res.render('AmericaCentral/index')
    },
    getPaises: function (req, res) {
       
        const {
            pais = "paises", name
        } = req.params;
        res.render(`AmericaCentral/${pais}/${name}`)
    },

    getAeropuertos: function (req, res) {
        const {
            aeropuertos = "aeropuertos", name
        } = req.params;
        res.render(`AmericaCentral/${aeropuertos}/${name}`)
    },
}
