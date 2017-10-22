export default function skills() {
  const mainList = document.querySelector('.skills-list');
  const mainListItem = mainList.getElementsByClassName('skills-list__item');
  const circleSec = mainList.getElementsByClassName('skills-row__circle-second');
  const listName = ['Frontend', 'Backend', 'Workflow'];
  const skills = [];
  let count = 0;

  function getSkills() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'api/getSkills', false);
    xhr.send();

    if (xhr.status !== 200) {
      console.log(`${xhr.status} : ${xhr.statusText}`);                               
    } else {
      const data = JSON.parse(xhr.responseText);
      for (let i = 0; i < data.length; i++) {
        let createElem = {
          nameSkill: data[i].name,
          percent: data[i].percents,
          typeSkill: data[i].type - 1,
        };
        skills.push(createElem);
      }
    }
  }

  function createCircle (arrayitem, text, circleListArray) {
    const circleClass = ['circle__first', 'circle__second'];
    const skillItem = document.createElement('li');
    const firstCircle = '<circle r="45" cx="50%" cy="50%" fill="none" class="skills-row__circle-first" />';
    const secondCircle = `<circle r="45" cx="50%" cy="50%" transform="rotate(-90 55 55)" class="skills-row__circle-second" data-name="${text}">`;
    const svgText = `<div class="skills-row__text">${text}`;

    skillItem.classList.add('skills-row__item');
    skillItem.innerHTML = `<svg class="skills-row__circle" viewBox="0 0 110 110">${firstCircle}" "${secondCircle}" "${svgText}</svg>`;
    arrayitem.appendChild(circleListArray);
    circleListArray.appendChild(skillItem);
  }

  function createElem() {
    const skillItems = [];
    let index = 0;
    const circleListArray = [];

    for (let i = 0; i < mainListItem.length; i++) {
      const skillTitle = document.createElement('div'); 
      skillTitle.classList.add('skills-row__title');
      skillTitle.textContent = listName[i];
      mainListItem[i].appendChild(skillTitle); // create list-title

      mainListItem[i].classList.add(listName[i]); // create list
      const circleList = document.createElement('ul');
      circleList.classList.add('skills-row__list');
      circleListArray.push(circleList);
      
      const createheloObj = { id: index, val: mainListItem[i] };
      skillItems.push(createheloObj);
      index++;
    }
    for (let i = 0; i < skills.length; i++) {
      for (let j = 0; j < skillItems.length; j++) {
        if (skills[i].typeSkill === skillItems[j].id) {
          createCircle(skillItems[j].val, skills[i].nameSkill, circleListArray[j]);
        }
      }
    }
  }

  function skillsAnim() {
    let delay = 0;
    if (mainList.getBoundingClientRect().top < 600) {
      for (let i = 0; i < circleSec.length; i++) {
        circleSec[i].style.animationDelay = `${delay}s`; 
        for (let j = 0; j < skills.length; j++) {
          if (circleSec[i].getAttribute('data-name') === skills[j].nameSkill) {
            circleSec[i].classList.add(`animate-${skills[j].percent}`);
          }
          delay += 0.03;
        }
      }
    }
  }

  return {
    skillsAnimateInit() {
      getSkills();
      createElem();
      window.addEventListener('scroll', skillsAnim);
    },
  };
}
