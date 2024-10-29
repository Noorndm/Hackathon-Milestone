const toggleButton = document.getElementById('toggle-skill') as HTMLButtonElement
const Skill = document.getElementById('skills') as HTMLElement

toggleButton.addEventListener('click', ()=>{
    if(Skill.style.display === 'none') {
        Skill.style.display = 'block'
    }
    else    {
        Skill.style.display = 'none'
    }
});