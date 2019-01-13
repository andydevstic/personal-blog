module.exports = {
    JWTKey: 'dunghoipassnua901', // not safe! put in environment variables when in production.
    hashRounds: 10,
    databaseConfig: {
        ip: 'localhost',
        port: 5432,
        databaseName: 'personal_blog',
        username: 'postgres',
        password: 'postgres'
    }
}