const subjectCount = document.getElementById('subjectCount');
const submitBtn = document.getElementById('submit');
const inputDiv = document.getElementById('inputs');
const calBtn = document.getElementById('calBtn');
const containerDiv = document.getElementById('inputFlex');
const year = document.getElementById('year');

calBtn.style.display = 'none';


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
            inputsDiv.classList.add('inputFlexDiv');

            inputsDiv.appendChild(input);
            inputsDiv.appendChild(totalScore);

            inputDiv.appendChild(inputsDiv);

            scoresArray.push(input);
            totalArray.push(totalScore);
            calBtn.style.display = 'block';
        }
    } else {
        return;
    }
    
}

submitBtn.addEventListener('click', () => {
    createInputs(subjectCount.value);
    subjectCount.value = '';
});



const calculatePercentage = () => {
    let scoreValue = 0;
    let totalValue = 0;

    scoresArray.forEach(arr => {
        scoreValue += Number(arr.value);
    })

    totalArray.forEach(arr => {
        totalValue += Number(arr.value);
    })
    const percentage = Number(scoreValue) / Number(totalValue) * 100;
    const formattedPercentage = percentage.toFixed(2);
    const titleDiv = document.createElement('div');

    titleDiv.innerHTML = `<p class="percentage">Here's your percentage: <span class="percentBold">${formattedPercentage}</span></p>`;
    containerDiv.appendChild(titleDiv)
    


    return percentage;
}


calBtn.addEventListener('click' , calculatePercentage);

const newYear = (new Date()).getFullYear();
year.innerText = newYear;