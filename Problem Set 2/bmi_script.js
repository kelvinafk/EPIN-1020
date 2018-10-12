function clear_form(form){

    form.weight.value = "";
    form.height.value = "";
    form.bmi.value = "";
    form.comment.value = "";
}

function check_form(form) {

       if (form.weight.value.length==0 || form.height.value.length==0){
            alert("Please complete the form first.");
            return false;
       }

       else if (parseFloat(form.height.value) <= 0||
                parseFloat(form.height.value) >=500||
                parseFloat(form.weight.value) <= 0||
                parseFloat(form.weight.value) >=500){
                alert("The values are beyond human's limit. Please input your actual values.");
                clear_form(form);
                return false;
       }
       return true;
}

function compute_form(form) {

       if (check_form(form)) {
         var weight = Number(document.getElementById("weight").value);
         var height = Number(document.getElementById("height").value);
         var bmi = weight / Math.pow(height,2)* 10000;

        form.bmi.value = parseInt(bmi)

       if (form.bmi.value >=30) {
          form.comment.value="You are obese, please consult your doctor or dietitian.";
       }

       if (bmi >=25 && bmi <30) {
          form.comment.value="You are overweight, please make an attempt to keep fit.";
       }

       if (bmi >18 && bmi <25) {
          form.comment.value="You are healthy!";
       }

       if (bmi <=18) {
          form.comment.value="You are underweight, go and have more food.";
       }

       }
       return;
}
