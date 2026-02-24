var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "mmday-2",
  "level": "1",
  "url": "mmday-2.html",
  "type": "Front Matter",
  "number": "",
  "title": "Front Matter",
  "body": "  UMW College of Business   Welcome to our sessions! Choose your academic interest on the left to see your customized schedule.  "
},
{
  "id": "section-cpsc",
  "level": "1",
  "url": "section-cpsc.html",
  "type": "Section",
  "number": "1",
  "title": "Computer Science &amp; Cybersecurity",
  "body": " Computer Science & Cybersecurity     12:00-12:45: Lunch  Woodard Red Room    1:00-1:50: Class visits  Where    2:00-2:45: Opportunities Beyond the Classroom  Where    2:45-3:15: Meet the Faculty  Where    3:15-4:00: Student Panel: Getting Involved with Clubs, Internships, and More  Where    4:00-4:30: Pick-up and Day Eve Celebration  Where     "
},
{
  "id": "section-1",
  "level": "1",
  "url": "section-1.html",
  "type": "Section",
  "number": "2",
  "title": "Mathematics",
  "body": " Mathematics     12:00-12:45: Lunch  Woodard Red Room    1:00-1:50: Class visits  Where    2:00-2:45: Opportunities Beyond the Classroom  Where    2:45-3:15: Meet the Faculty  Where    3:15-4:00: Student Panel: Getting Involved with Clubs, Internships, and More  Where    4:00-4:30: Pick-up and Day Eve Celebration  Where     "
},
{
  "id": "section-2",
  "level": "1",
  "url": "section-2.html",
  "type": "Section",
  "number": "3",
  "title": "Marketing",
  "body": " Marketing     12:00-12:45: Lunch  Woodard Red Room    1:00-1:50: Class visits  Where    2:00-2:45: Opportunities Beyond the Classroom  Where    2:45-3:15: Meet the Faculty  Where    3:15-4:00: Student Panel: Getting Involved with Clubs, Internships, and More  Where    4:00-4:30: Pick-up and Day Eve Celebration  Where     "
},
{
  "id": "section-3",
  "level": "1",
  "url": "section-3.html",
  "type": "Section",
  "number": "4",
  "title": "Parents and Supporters",
  "body": " Parents and Supporters     3:15-4:00: Q & A with Dr. Randall Helmstutler,  Director of Undergraduate Programs  Woodard 249    4:00-4:30: Pick-up and Day Eve Celebration  Where     "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
