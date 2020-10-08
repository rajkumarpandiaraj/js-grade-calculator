const prog = document.querySelector('.sub-1');
const maths = document.querySelector('.sub-2');
const physics= document.querySelector('.sub-3');
const chemistry= document.querySelector('.sub-4');
const form = document.querySelector('.form');
const result = document.querySelector('.result');
const mark = document.querySelector('.mark');
const grade = document.querySelector('.grade');
const percent = document.querySelector('.percent');


const checkGrade = (percent) =>{
    if(percent >= 80){
        return 'A'
    }

    if(percent >= 60){
        return 'B'
    }

    if(percent >= 40){
        return 'C'
    }

    if(percent < 40){
        return 'RA'
    }
}
form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const progValue = prog.value;
    const mathsValue = maths.value;
    const physicsValue = physics.value;
    const chemistryValue = chemistry.value;
    if(progValue && mathsValue && physicsValue && chemistryValue){
        let markValue = 0;
        let gradeValue = '';
        let percentValue = 0;

        markValue = +progValue + +mathsValue + +physicsValue + +chemistryValue;
        percentValue = markValue / 4;
        gradeValue = checkGrade(percentValue);

        result.style.display = 'block'
        mark.textContent = markValue;
        percent.textContent = percentValue;
        grade.textContent = gradeValue;
    } else{
        alert('Please fill the required field')
    }
})