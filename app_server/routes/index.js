var express = require('express');
var router = express.Router();
var ctrlAssignments = require('../controllers/assignments');
var ctrlOthers = require('../controllers/others');

/* Locations */
router.get('/', ctrlAssignments.homeList);
router.get('/course', ctrlAssignments.courseInfo);
router.get('/course/assignment/new', ctrlAssignments.addAssignment);

/* Others */
router.get('/about', ctrlOthers.about);

module.exports = router;
