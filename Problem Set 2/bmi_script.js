function clear_form(form){

    form.weight.value = "";
    form.height.value = "";
    form.bmi.value = "";
    form.comment.value = "";

}

function bmi(weight, height) {

          bmindx=weight/eval(height*height);
          return bmindx;
}

function check_form(form) {

       if (form.weight.value==null||form.weight.value.length==0 || form.height.value==null||form.height.value.length==0){
            alert("Please complete the form first.");
            return false;
       }

       else if (parseFloat(form.height.value) <= 0||
                parseFloat(form.height.value) >=500||
                parseFloat(form.weight.value) <= 0||
                parseFloat(form.weight.value) >=500){
                alert("\nThe values are beyond human's limit. \nPlease input your actual values.");
                clear_form(form);
                return false;
       }
       return true;

}

function compute_form(form) {

       if (check_form(form)) {

       bmi_value=Math.round(bmi(form.weight.value, form.height.value/100));
       form.bmi.value=bmi_value;

       if (bmi_value >=30) {
          form.comment.value="You are obese, please consult your doctor or dietitian.";
       }

       else if (bmi_value >=25 && bmi_value <30) {
          form.comment.value="You are overweight, please make an attempt to keep fit.";
       }

       else if (bmi_value >18 && bmi_value <25) {
          form.comment.value="You are healthy!";
       }

       else if (bmi_value <=18) {
          form.comment.value="You are underweight, go and have more food.";
       }

       }
       return;
}
