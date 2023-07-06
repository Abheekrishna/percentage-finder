const subjectCount = document.getElementById('subjectCount');
const submitBtn = document.getElementById('submit');
const inputDiv = document.getElementById('inputs');



const createInputs = (count) => {
    if(count > 0) {
        for(let i = 0; i < count; i++) {
            const input = document.createElement('input');
            const totalScore = document.createElement('input');
            input.placeholder = 'Score';
            input.type = 'number';
            totalScore.placeholder = 'Total';
            totalScore.type = 'number';
            input.classList.add('input');
            totalScore.classList.add('inputTotal');
            inputDiv.appendChild(input);
            inputDiv.appendChild(totalScore);
        }
    } else {
        return;
    }
}


submitBtn.addEventListener('click', () => {
    console.log()
    createInputs(subjectCount.value)
})