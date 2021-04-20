
$(document).ready(function () {
    const mySkills = ['Web Developer', 'Artist', 'Lego Builder', 'Puzzle Master'];
    let skillIndex = 0;
    const skillDurationMs = 4000;
    const renderDurationMs = skillDurationMs / 2;

    let showNextSkill = function() {
        renderSkill(mySkills[skillIndex], renderDurationMs);
        skillIndex++;
        if (skillIndex >= mySkills.length) {
            skillIndex = 0;
        }
        setTimeout(showNextSkill, skillDurationMs);
    };

    showNextSkill();
});

function renderSkill(skillName, maxDurationMs) {
    let letters = 0;
    let renderSpeed = 100;
    if ((skillName.length * renderSpeed) > maxDurationMs) {
        renderSpeed = maxDurationMs / skillName.length;
    }

    let typewriterTimer = function() {
        letters++;
        let characters = skillName.substring(0, letters);
        $("#typewriter").html(characters);
        if (letters < skillName.length) {
            setTimeout(typewriterTimer, renderSpeed);
        }
    };
    typewriterTimer();

}