import {Sequelize} from 'sequelize'

const db = new Sequelize('blogs','root','1597',{
host:'localhost',
dialect:'mysql'
})

export default db