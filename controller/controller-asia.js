module.exports ={
    index: function (req, res) {
        res.render('Asia/index')
    },
    getPaises: function (req, res) {
       
        const {
            pais = "paises", name
        } = req.params;
        res.render(`Asia/${pais}/${name}`)
    },

    getAeropuertos: function (req, res) {
        const {
            aeropuertos = "aeropuertos", name
        } = req.params;
        res.render(`Asia/${aeropuertos}/${name}`)
    },
}
