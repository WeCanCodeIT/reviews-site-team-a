const dbtest = require('./db');

const reviewOne = {
    name: 'Solo',
    category: ''
}

const newValue = 'Tea';

const db = require('./db')
const sqlTest = `INSERT INTO \`Tag\` (\`tag_id\`, \`tag_name\`) VALUES (DEFAULT,?)`

db.execute(sqlTest, [newValue])
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.error(err);
    })

