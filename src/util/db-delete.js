const dbtest = require('./db');

const reviewOne = {
    name: 'Solo',
    location: ''
}

const newValue = 'Not Coffee';

const db = require('./db')
const sqlTest = `DELETE FROM Category WHERE category_name=?`

db.execute(sqlTest, [newValue])
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.error(err);
    })

