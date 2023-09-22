import {Sequelize} from 'sequelize'

const db = new Sequelize('new_schema','admin','Desarrollo',{
host:'database-2.co40ibmxerp8.us-east-2.rds.amazonaws.com',
dialect:'mysql'
})

export default db