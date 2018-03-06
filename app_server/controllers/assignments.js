/* GET home page */
module.exports.homeList = function(req, res){
    res.render('courses-list', {
      title: 'Course Organizer',
      pageHeader: {
        title: 'Course Organizer',
        strapline: 'Keeping your life organized'
      },
      courses: [{
        courseId: 'CSCI-446',
        name: 'Web Applications',
        instructor: 'C.Rader',
        room: 'ONLINE',
      },{
        courseId: 'CSCI-404',
        name: 'Artificial Intelligence',
        instructor: 'H. Wang',
        room: 'BB W210',
      },{
        courseId: 'CSCI-440',
        name: 'Parallel Computing',
        instructor: 'B. Wu',
        room: 'MZ 226',
      },{
        courseId: 'CSCI 498A',
        name: 'Robot Planning and Manipulation',
        instructor: 'N. Dantam',
        room: 'CK 150',
      },{
        courseId: 'PAGN 257',
        name: 'Rock Climbing',
        instructor: 'K. Langlois',
        room: 'RC WALL',
      }]
    });
};

/* GET course info page */
module.exports.courseInfo = function(req, res){
    res.render('course-info', {
      courseId: 'CSCI-446',
      name: 'Web Applications',
      instructor: 'C. Rader',
      credits: 3.0,
      room: 'ONLINE',
      assignments: [{
        name: 'Unit 1 - HTML and CSS',
        due: '2018-01-15 11:59pm',
        points: 55,
        status: 'Complete',
      },{
        name: 'Unit 2 - HTML5 and CSS3',
        due: '2018-01-22 11:59pm',
        points: 62,
        status: 'Not started',
      }]
    });
};

/* GET add assignment page */
module.exports.addAssignment = function(req, res){
    res.render('add-assignment', {
      courseId: 'CSCI-440'
    });
};

