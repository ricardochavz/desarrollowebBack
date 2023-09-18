import  express  from 'express';
import cors from 'cors';
//conexion db
import db from "./database/db.js";
// importar nuestro enrutador
import blogRoutes from './routes/routes.js'

const app = express();

app.use(cors());
app.use(express.json());
app.use('/blogs',blogRoutes);

try{
  await  db.authenticate()
    console.log('conexion exitosa a la DB')

}catch(error){
    console.log(`El error de conexion es: ${error}` )
}




app.listen(8000, () =>{
    console.log('server up running in http://localhost:8000/')
});
