const subjectCount = document.getElementById('subjectCount');
const submitBtn = document.getElementById('submit');
const inputDiv = document.getElementById('inputs');



const createInputs = (count) => {
    if(count > 0) {

        //Creates inputs according to the user's input

        for(let i = 0; i < count; i++) {
            const inputsDiv = document.createElement('div');

            const input = document.createElement('input');
            const totalScore = document.createElement('input');


            input.placeholder = 'Score';
            input.type = 'number';
            totalScore.placeholder = 'Total';
            totalScore.type = 'number';


            input.classList.add('input');
            totalScore.classList.add('inputTotal');

            inputsDiv.appendChild(input);
            inputsDiv.appendChild(totalScore);

            inputDiv.appendChild(inputsDiv);
        }
    } else {
        return;
    }
}


submitBtn.addEventListener('click', () => {
    createInputs(subjectCount.value);
    subjectCount.value = ''
})