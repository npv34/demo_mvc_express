const {DataSource} = require("typeorm")
const AppDataSource = new DataSource({
    type: "mysql",
    host: "127.0.0.1",
    port: 3306,
    username: "root",
    password: "123456@Abc",
    database: "eshop-app",
    synchronize: false,
    logging: true,
    entities: [
        require("./entities/user")
    ],
    subscribers: [],
    migrations: [],
})

module.exports = AppDataSource
