const mongoose = require('mongoose');
// Use ES6 native promises. We are specifying a Promise library to avoid a depreciation warning in the console.
mongoose.Promise = global.Promise;

// First, we instantiate a namespace for our Schema constructor defined by mongoose.
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    title: String,
    unit: String
});

const StudentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    projects: [ProjectSchema]
});

const StudentModel = mongoose.model('Student', StudentSchema);
const ProjectModel = mongoose.model('Project', ProjectSchema);

module.exports = {
    StudentModel: StudentModel,
    ProjectModel: ProjectModel
};
