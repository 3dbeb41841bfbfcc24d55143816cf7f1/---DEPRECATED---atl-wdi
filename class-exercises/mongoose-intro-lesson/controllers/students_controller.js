const express = require('express')
const router = express.Router()
const Schema = require("../db/schema.js");

const StudentModel = Schema.StudentModel;

// INDEX route
router.get('/', (request, response) => {

    // Find ALL of the students from the DB
    StudentModel.find({})
        .then((students) => {

            // THEN once we're done finding the students in the DB
            // use Handlebars to create a <div> for each student 
            response.render('students/index', {
                students: students
            })
        })
        .catch((error) => {
            console.log(error)
        })

});

// NEW route
router.get('/new', (request, response) => {

    // Display an empty form containing inputs for each student
    // attribute from our Schema
    response.render('students/new')
})


// SHOW route
router.get('/:id', (request, response) => {

    // Grab the ID from params
    const studentId = request.params.id

    // Find the student by ID from the database
    StudentModel.findById(studentId)
        .then((student) => {

            // THEN once the database has returned the single student's info
            // use Handlebars to create a <div> for the single student
            response.render('students/show', {
                student: student
            })
        })
        .catch((error) => {
            console.log(error)
        })

})

// EDIT route
router.get('/:id/edit', (request, response) => {

    // get the student ID from params
    const studentId = request.params.id

    // find the student from the DB using the ID
    StudentModel.findById(studentId)
        .then((student) => {

            // THEN once the student has been returned from the DB
            // use Handlebars to show a form pre-populated with the
            // info from the single student we are trying to edit

            // BE SURE to use Method Override to let the form submit 
            // a PUT request (instead of the default POST) to 
            // '/students/THE_STUDENT_ID' where THE_STUDENT_ID 
            // is the ID of the single student we are trying to update
            // (use student._id)
            response.render('students/edit', {
                student: student
            })
        })
        .catch((error) => {
            console.log(error)
        })

})

// DELETE route with a link
router.get('/:id/delete', (request, response) => {

    //get the student id for the params for 
    //the single student we are deleting 
    const studentId = request.params.id

    //use the studentModel to find the student document
    //by id that we want to delete then delete it 
    StudentModel.findByIdAndRemove(studentId)
        .then((student) => {
            
            //THEN redirect back to students index 
            response.redirect('/students')
        })
        .catch((error) => {
            console.log(error)
        })
})


// CREATE route
router.post('/', (request, response) => {

    // Grab the information the user entered in the form
    // by capturing the request body
    // NOTE: we need to have set up `body-parser` to give
    //       us this request body in a nice Javascript format
    const newStudent = request.body

    // Create a new student in the Database using the StudentModel
    StudentModel.create(newStudent)
        .then(() => {
            // THEN once the student has been saved in the database
            // redirect to the Students INDEX so that we can view
            // all students, INCLUDING the new one that we've created
            response.redirect('/students')
        })
        .catch((error) => {
            console.log(error)
        })
})

// UPDATE route
router.put('/:id', (request, response) => {

    // Get the student ID to identify which single student to update
    const studentIdToUpdate = request.params.id

    // Get all information from the form (just like on the POST route), 
    // including any updated information for the single student
    const updatedStudent = request.body

    // Use the StudentModel to find the student in the database 
    // and update any changed information
    // PARAMETERS:
    // first param = student ID to update
    // second param = student information as an object, including any updates
    // third param = boilerplate (always pass this)
    StudentModel.findByIdAndUpdate(studentIdToUpdate, updatedStudent, { new: true })
        .then(() => {

            // THEN once the single student has been successfully updated
            // in the database, REDIRECT to the single student's SHOW page
            response.redirect(`/students/${studentIdToUpdate}`)
        })
        .catch((error) => {
            console.log(error)
        })
})


module.exports = router