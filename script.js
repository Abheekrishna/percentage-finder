const subjectCount = document.getElementById('subjectCount');
const submitBtn = document.getElementById('submit');
const inputDiv = document.getElementById('inputs');


const scoresArray = [];
const totalArray = [];



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

            scoresArray.push(input);
            totalArray.push(totalScore);
        }
    } else {
        return;
    }

    const calculateBtn = document.createElement('input');
    calculateBtn.classList.add('calculateBtn');
    calculateBtn.type = 'button';
    calculateBtn.value = 'Calculate Score';
    inputDiv.appendChild(calculateBtn);
}


submitBtn.addEventListener('click', () => {
    createInputs(subjectCount.value);
    subjectCount.value = '';
});

const calculatePercentage = () => {
    scoresArray.forEach(arr => {

    })
}