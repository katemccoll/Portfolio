
$(document).ready(function () {
    const mySkills = ['Web Developer', 'Artist', 'Lego Builder', 'Puzzle Master'];
    let newSkill = 1;
    renderSkill(mySkills[0]);
    setInterval(function() {

        renderSkill(mySkills[newSkill]);
        newSkill++;
        if (newSkill >= mySkills.length) {
            newSkill = 0;
        }

    }, 4000);

});





function renderSkill(skillName) {
    let letters = 0;
    let typewriterTimer = setInterval(function() {
        letters++;
        let characters = skillName.substring(0, letters);
        $("#typewriter").html(characters);
        if (letters >= skillName.length) {
            clearInterval(typewriterTimer);
        }
    }, 100);


}




// when page loads, I want to bring up first index in the array, after one second, change to the next array


