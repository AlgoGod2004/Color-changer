const form=document.querySelector("form")
form.addEventListener("submit",function(e){
    e.preventDefault();

    const height=parseInt(document.querySelector("#height").value);
    const weight=parseInt(document.querySelector("#weight").value);
    const result=document.querySelector(".result");


    if(height===""||height<0|| isNaN(height)){
        result.innerHTML="please give a valid height";
        result.style.color="red";
    }
    else if(weight===""||weight<0|| isNaN(weight)){

        result.innerHTML="please give a valid weight";
        result.style.color="red";
    }else{
        const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
        result.innerHTML=bmi;
        if (bmi < 18.6) {
            result.innerHTML = `BMI= ${bmi} You are Underweight.`;
            result.style.color = "blue";
        } else if (bmi >= 18.6 && bmi < 24.9) {
            result.innerHTML = `BMI= ${bmi} You are within the Normal range.`;
            result.style.color = "green";
        } else {
            result.innerHTML = ` BMI= ${bmi} You are Overweight.`;
            result.style.color = "orange";
        }
    
    }
});