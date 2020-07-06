process.env.NODE_ENV = 'test';

const db = require("../db");
const User = require("../model/User")
db.connect(function(res){
    console.log(res)
})
const correctUser = {
    name: "chaitali",
    email: "chaitalimaske56@yahoo.com"
};
// const incorrectUser = {
//     email:"ssbarde@gmail.com"
// };
describe("Database test",function(){
    beforeAll(function(done){
        db.connect().then(function(res){
            console.log(res)
            done();
        })
    });

    test("should create new user",function(done){
        User.create(correctUser).then(function(document){
            console.log(document)
            expect(document).toBeDefined();
            done();
        })
        .catch(function(err){
            done(err.message);
        })
    });
    // test("should not create new user",function(done){
    //     User.create(incorrectUser).then(function(document){
    //         done();
    //     }).catch(function(err){
    //         expect(err).toBeDefined();
    //         done();
    //     });
    // })


    // afterAll(function(done){
    //     db.disconnect().then(function() {
    //         done();
    //     });
    // });
});