const index = require(`./index`);
const supertest = require(`supertest`);
const app = require(`../app`);
const underTest = supertest(app);

describe(`GET /`, () => {
    test(`should return an HTTP code of 302`, () => {
        underTest.get(`/`).expect(302)
        .end((err, res) => {
            if (err){
                return done(err);
            }
            done();  
        })
    })
})