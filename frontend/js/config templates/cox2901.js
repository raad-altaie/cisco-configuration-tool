// Third continue btn
btn2.addEventListener('click', function () {
    
    var selectEq = eqList.options[eqList.selectedIndex].value;
    if (selectEq == "Cox Metro-E - 2901") {
        clearAllInputs();
        //form validation
        if (validateInputs(cox2901Classes) == false) {
            return false;
        // } else if (subnetValidator(ip.value, ip2.value, subnet.value) == false) {
        //     ip.style.borderColor = "red";
        //     ip2.style.borderColor = "red";
        //     subnet.style.borderColor = "red";
        } else {
            //go to config page
            form.classList.add('hide');
            result.classList.remove('hide');
            //writing to the textarea
            document.getElementById("textArea").value = (`
            no config found!
        `);
        }
    } else { console.log("Not Cox Metro-E - 2901") }
});