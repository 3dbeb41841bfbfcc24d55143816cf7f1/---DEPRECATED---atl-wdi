const express = require('express')
const router = express.Router({ mergeParams: true })
const Schema = require("../db/schema.js");

const StudentModel = Schema.StudentModel;

router.get('/', (request, response) => {

    const studentId = request.params.studentId

    StudentModel.findById(studentId)
        .then((student) => {
            response.render('projects/index', {
                student: student
            })
        })
        .catch((error) => {
            console.log(error)
        })


    response.send(`student id is: ${request.params.studentId}`)
})

module.exports = router