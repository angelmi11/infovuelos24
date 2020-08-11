const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');
const router = require('./router/router-index');
const routerNorte =require('./router/router-norte');
const routerSur=require('./router/router-sur');
const routerCentro=require('./router/router-central');
const routerCaribe =require('./router/router-caribe');
const routerEuropa =require('./router/router-europa');
const routerOceania =require('./router/router-oceania');
const routerAsia =require('./router/router-asia');
const routerAfrica =require('./router/router-africa');

const app = express();


//config
app.set('port',process.env.PORT || 5000);
app.use(express.static(path.join(__dirname,'public')));
app.set('views',path.join(__dirname,'views'));

app.engine('.hbs', exphbs({
    defaultLayout:'clienteIndex',
    layoutsDir:path.join(app.get('views'), 'layouts'),
    partialsDir:path.join(app.get('views'), 'partials'),
    extname :'.hbs'

}));

app.set('view engine','.hbs')

app.use(morgan('dev'));
app.use('/',router);
app.use('/Norte-America',routerNorte);
app.use('/Sur-America',routerSur);
app.use('/Centro-America',routerCentro);
app.use('/Caribe',routerCaribe);
app.use('/Europa',routerEuropa);
app.use('/Oceania',routerOceania);
app.use('/Asia',routerAsia);
app.use('/Africa',routerAfrica);



app.listen(app.get('port'),function(){
    console.log('server on port ',app.get('port'));
});
