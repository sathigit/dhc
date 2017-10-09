var http = require('http'),
express = require('express'),
app = express(http),
path = require('path'),
bodyParser = require('body-parser');

var PORT = 8000;

app.use(express.static(path.join(__dirname)));
app.set('views', __dirname);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(bodyParser.urlencoded({
    extended: true
}));

// import dependencies
var loginRoutes = require('./server/routes/loginRegistrationRoutes.js'),
    LoginRoutes = new loginRoutes();

app.get(['/', '/register', '/home', '/doctorHome', '/doctorSuccess', '/doctorProfile', '/doctorDiagnosis', '/doctorCancelAppointments', '/doctorConfigAppointments','/doctorNotifications','/doctorPrescriptions','/doctorUpcomingAppointments','/doctorCompletedAppointments','/doctorCancelledAppointments'], function(req, res) {
    res.render('src/index.html');
});

app.post('/login', LoginRoutes.login);
app.post('/registration', LoginRoutes.registration);

app.listen(PORT, function() {
    console.log('Express server started at PORT : ' + PORT);
});