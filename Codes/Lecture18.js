// Destructring of Objects ( Destructring happens in arrays as well )

const course = {
    courseName : "Js in hindi",
    coursePrice : "999",
    courseInstructor : "Animesh",
}

// console.log(course.courseInstructor);
const {courseInstructor : instructor} = course;
console.log(instructor);
// Bascially used as syntatical sugar but in react used for imp stuff 


// in old times values used to come in xml structure which used to be complex , now values comes in json ( javascript object notation )format 



/* this is how json looks like 
{
    "name" : "animesh",
    "course" : "btech cse",

}
*/

// Somethimes we get apis in array format ( objects inside array )

/*
[
    {
    }
    {
    }
]
*/

// to check out randomuserme website and json formatter

