

module.exports = {
    index: function (req, res) {
        res.render('Caribe/index')
    },
    getPaises: function (req, res) {
       
        const {
            pais = "paises", name
        } = req.params;
        res.render(`Caribe/${pais}/${name}`)
    },

    getAeropuertos: function (req, res) {
        const {
            aeropuertos = "aeropuertos", name
        } = req.params;
        res.render(`Caribe/${aeropuertos}/${name}`)
    },
}