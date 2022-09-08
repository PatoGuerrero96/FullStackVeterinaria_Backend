import express from 'express';
import conectarDB from './config/db.js';
import dotenv from 'dotenv';
import cors from 'cors';
import veterinarioRoutes from './routes/veterinarioRoutes.js'
import pacienteRoutes from './routes/pacienteRoutes.js'
const app = express();
app.use(express.json());
dotenv.config()
conectarDB();
const dominiosPermitidos = [process.env.FRONTEND]

const corsOptions = {
    origin: function(origin, callback){
    if(dominiosPermitidos.indexOf(origin)!== -1){
        //el origen del  sitio que solicita la api si esta permitido
        callback(null,true) //El null representa el error osea que es nulo y true para validar el acceso
        } else{
            callback (new Error('No esta permitido por CORS'))
        }
}
}

app.use(cors(corsOptions));

app.use("/api/veterinarios", veterinarioRoutes );
app.use("/api/pacientes", pacienteRoutes );
var port_number = server.listen(process.env.PORT || 5000);
app.listen(port_number);
