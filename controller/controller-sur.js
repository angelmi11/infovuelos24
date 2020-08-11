module.exports = {
    index: function (req, res) {
        res.render('SurAmerica/index')
    },
    getPaises: function (req, res) {
       
        const {
            pais = "paises", name
        } = req.params;
        res.render(`SurAmerica/${pais}/${name}`)
    },

    getAeropuertos: function (req, res) {
        const {
            aeropuertos = "aeropuertos", name
        } = req.params;
        res.render(`SurAmerica/${aeropuertos}/${name}`)
    },
}