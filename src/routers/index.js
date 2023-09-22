const davaomatRouter = require('./davomat.route');
const groupRouter = require('./group.route');
const paymentRouter = require('./payment.route');
const pupilRouter = require('./pupils.route');
const subjectRouter = require('./subject.route');
const teacherRouter = require('./teacher.route');


module.exports = [
    davaomatRouter,
    groupRouter,
    paymentRouter,
    pupilRouter,
    subjectRouter,
    teacherRouter
]
