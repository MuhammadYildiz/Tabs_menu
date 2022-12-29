
const container = document.querySelector('.container');
const content= document.querySelector('.content');

const btn = document.querySelector('.btn');
const buttons = document.querySelector('.buttons');


const historyBtn = document.querySelector('.historyBtn');
const history = document.querySelector('.history');

const visionBtn = document.querySelector('.visionBtn');
const vision = document.querySelector('.vision');

const allBtn = document.querySelector('.allBtn');
const all = document.querySelector('.all');

const projectsBtn = document.querySelector('.projectsBtn');
const projects = document.querySelector('.projects');

const goalBtn = document.querySelector('.goalBtn');
const goal = document.querySelector('.goal');

allBtn.classList.add('active')
historyBtn.classList.remove('active')
visionBtn.classList.remove('active')
projectsBtn.classList.remove('active')
goalBtn.classList.remove('active')
history.style.display = 'block'
vision.style.display = 'block'
goal.style.display = 'block'
projects.style.display = 'block'
all.style.display = 'none'


btn.addEventListener('click',()=>{
    buttons.classList.toggle('flex')
})

historyBtn.addEventListener('click',()=>{
    
    historyBtn.classList.add('active')
    visionBtn.classList.remove('active')
    goalBtn.classList.remove('active')
    allBtn.classList.remove('active')
    projectsBtn.classList.remove('active')

    history.style.display = 'block'
    vision.style.display = 'none'
    goal.style.display = 'none'
    all.style.display = 'none'
    projects.style.display = 'none'

})
visionBtn.addEventListener('click',()=>{
    visionBtn.classList.add('active')
    historyBtn.classList.remove('active')
    goalBtn.classList.remove('active')
    allBtn.classList.remove('active')
    projectsBtn.classList.remove('active')

    
    vision.style.display = 'block'
    history.style.display = 'none'
    goal.style.display = 'none'
    all.style.display = 'none'
    projects.style.display = 'none'
})
goalBtn.addEventListener('click',()=>{
    goalBtn.classList.add('active')
    historyBtn.classList.remove('active')
    visionBtn.classList.remove('active')
    allBtn.classList.remove('active')
    projectsBtn.classList.remove('active')

    goal.style.display = 'block'
    history.style.display = 'none'
    vision.style.display = 'none'
    all.style.display = 'none'
    projects.style.display = 'none'
    
})
projectsBtn.addEventListener('click',()=>{
    projectsBtn.classList.add('active')
    historyBtn.classList.remove('active')
    visionBtn.classList.remove('active')
    allBtn.classList.remove('active')
    goalBtn.classList.remove('active')

    projects.style.display = 'block'
    history.style.display = 'none'
    vision.style.display = 'none'
    all.style.display = 'none'
    goal.style.display = 'none'
    
})
allBtn.addEventListener('click',()=>{
    allBtn.classList.add('active')
    historyBtn.classList.remove('active')
    visionBtn.classList.remove('active')
    projectsBtn.classList.remove('active')
    goalBtn.classList.remove('active')

    history.style.display = 'block'
    vision.style.display = 'block'
    goal.style.display = 'block'
    projects.style.display = 'block'
    all.style.display = 'none'
})