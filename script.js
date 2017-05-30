var name = 'Megan'.toUpperCase();
console.log('Name: ' + name);
var career = 'Former teacher';
console.log('Career: ' + career);
var desc = 'Climber,  waterski-er, and reader';
console.log('Description: ' + desc);


var interests = ['reading', 'writing', 'arithmetic'];
console.log ("My interests: ")
console.log(interests[0]);
console.log(interests[1]);
console.log(interests[2]);


console.log("My previous experience: ")
function displayPosition (job, company, desc) {
    console.log(job + ' at ' + company + ' -' + desc)
}
displayPosition('head tech guru', 'Macbook Genius Bar', 'helped troubleshoot');
displayPosition('teacher', 'Covalence', 'taught newbies some code skills');
displayPosition('teacher', 'School somewhere', 'was patient and said things over and over');



console.log("My Skills: ")
function displaySkill (skill, isCool) {
    if (isCool) {
        console.log('BAM: ' + skill);
    } else {
        console.log(skill);
    };
}


displaySkill('farmer', true);
displaySkill('truant', false);
displaySkill('worryer', false);


