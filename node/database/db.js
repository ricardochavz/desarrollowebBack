import {Sequelize} from 'sequelize'

const db = new Sequelize('new_schema','root','1597',{
host:'localhost',
dialect:'mysql'
})

export default db