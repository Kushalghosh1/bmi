const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = document.querySelector('#height').value;
    const weight = document.querySelector('#weight').value;
    const results = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)){
        results.textContent = 'Please fill valid weight';
    }

    else if (weight === '' || weight < 0 || isNaN(weight)){
        results.textContent = 'Please fill valid weight';
    }

    else{
        const bmi = (weight / ((height * height) / 1000)).toFixed(2);
        if (bmi < 18.6){
            results.textContent = `Your BMI is ${bmi}, You are Underweight
            `;
        }

        else if (bmi < 25){
            results.textContent = `Your BMI is ${bmi}, You are Normal
            `;
        }
        else if (bmi < 30){
            results.textContent = `Your BMI is ${bmi}, You are Overweight
            `;
        }
        else {
            results.textContent = `Your BMI is ${bmi}, You are Obese
            `;
        }
    }
})