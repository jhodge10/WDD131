// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [{ sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
        { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}]
  };



function setCourseInfo(course) {
    const courseNameEl = document.querySelector("#courseName");
    const courseCodeEl = document.querySelector("#courseCode");
    courseNameEl.textContent = course.name;
    courseCodeEl.textContent = course.code;
}

function sectionTemplate(section) {
    return `<tr>
            <td>${section.sectionNum}</td>
            <td>${section.roomNum}</td>
            <td>${section.enrolled}</td>
            <td>${section.days}</td>
            <td>${section.instructor}</td>
            </tr`
}

function renderSections(sections) {
    const sectionlistEl = document.querySelector('#sections');
    
}



setCourseInfo(aCourse);
renderSections(aCourse.sections);