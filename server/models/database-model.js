const {Pool} = require('pg')

const env = require('../environments/environments')
const {getDataFormatInString} = require('../components/shared/methods')
const pool = new Pool({
  host: env.databaseConfig.ip,
  port: env.databaseConfig.port,
  database: env.databaseConfig.databaseName,
  user: env.databaseConfig.username,
  password: env.databaseConfig.password,
});

pool.on('error', function (err) {
  console.log(err);
})

function connectAndGetClient() {
  return new Promise((resolve, reject) => {
    pool.connect()
      .then(client => {
        if(client) {
          resolve(client);
        } else {
          throw new Error('Cannot get database client!')
        }
      })
      .catch(error => {
        reject(error);
      })
  })
}

function query(sql, queryData) {
  return new Promise((resolve, reject) => {
    connectAndGetClient()
      .then(client => {
        client.query(sql, queryData, (err, data) => {
          if (err) {
            reject(err);
          } else {
            client.release();
            resolve(data);
          }
        })
      })
      .catch(error => {
        reject(error);
      })
  })
  
}

function insert(tableName, value, columns = []) {
  return new Promise((resolve, reject) => {
    connectAndGetClient()
      .then(client => {
        const SQL = `
            INSERT INTO ${tableName} ${columns.length > 0 ? `(${columns.join(', ')})` : ''}
            VALUES (${value.map(i => getDataFormatInString(i)).join(', ')})
          `
        client.query(SQL, (err, data) => {
          if (err) {
            reject(err);
          } else {
            client.release();
            resolve(data);
          }
        })
      })
      .catch(error => {
        reject(error);
      })
  })
}

function insertMany(tableName, value, columns = []) {
  return new Promise((resolve, reject) => {
    connectAndGetClient()
      .then(client => {
        let SQL = `
        INSERT INTO ${tableName} ${columns.length > 0 ? `(${columns.join(', ')})` : ''}
        VALUES
      `
        value.forEach(eachRow => {
          SQL += ` (${eachRow.map(i => getDataFormatInString(i)).join(', ')})`
        })
        client.query(SQL, (err, data) => {
          if (err) {
            reject(err);
          } else {
            client.release();
            resolve(data);
          }
        })
      })
      .catch(error => {
        reject(error);
      })
  })
}

function update(tableName, newSet, condition) {
  return new Promise((resolve, reject) => {
    connectAndGetClient()
      .then(client => {
        let updateValue
        let SQL

        if (typeof newSet === 'string') updateValue = newSet
        else if (typeof newSet === 'object' && !Array.isArray(newSet)) {
          const columnsToBeUpdated = Object.keys(newSet)
          columnsToBeUpdated.forEach(colName => {
            updateValue = [].push(`${colname} = ${getDataFormatInString(newSet[colName])}`)
          })
          return updateValue.join(', ')
        } else throw new Error('Invalid update value')

        SQL = `
          UPDATE ${tableName} SET ${updateValue} WHERE ${condition};
        `
        client.query(SQL, (err, data) => {
          if (err) {
            reject(err);
          } else {
            client.release();
            resolve(data);
          }
        })
      })
      .catch(error => {
        reject(error);
      })
  })
}

function deleteWithCondition(tableName, condition) {
  return new Promise((resolve, reject) => {
    connectAndGetClient()
      .then(client => {
        let SQL = `
          DELETE FROM ${tableName} WHERE ${condition}
        `
        client.query(SQL, (err, data) => {
          if (err) {
            reject(err);
          } else {
            client.release();
            resolve(data);
          }
        })
      })
      .catch(error => {
        reject(error);
      })
  })
}

module.exports = {
  query,
  insert,
  insertMany,
  update,
  deleteWithCondition
}