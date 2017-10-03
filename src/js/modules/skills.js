export default function skills() {
    const skillsList = document.querySelector('.skills-list');
	const circleSec = skillsList.getElementsByClassName('skills-row__circle-second');


    return {
        skillsAnim() {
            let delay = 0;
            if(skillsList.getBoundingClientRect().top < 600) {
                for (let i = 0; i < circleSec.length; i++) {
                    circleSec[i].setAttribute('data-skill', 'skills');
                    circleSec[i].style.animationDelay = `${delay}s`;                    
                    delay += 0.3;
                }
            }
        },
    }
}