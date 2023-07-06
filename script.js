const subjectCount = document.getElementById('subjectCount');
const submitBtn = document.getElementById('submit');
const inputDiv = document.getElementById('inputs');



const createInputs = (count) => {
    if(count > 0) {
        for(let i = 0; i < count; i++) {
            const input = document.createElement('input');
            input.style.backgroundColor = 'red';
            inputDiv.appendChild(input);
        }
    } else {
        return;
    }
}


submitBtn.addEventListener('click', () => {
    console.log()
    createInputs(subjectCount.value)
})