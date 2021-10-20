// Third continue btn
btn2.addEventListener('click', function () {
    
    var selectEq = eqList.options[eqList.selectedIndex].value;
    if (selectEq == "AT&T ASE - ASR1001") {
        clearAllInputs();
        //form validation 
        if (validateInputs(aseAsrClasses) == false) {
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
        no config found
        `);
        }
    } else { console.log("Not AT&T ASE - ASR1001") }
});