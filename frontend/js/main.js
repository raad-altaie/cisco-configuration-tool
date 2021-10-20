//General variables
const vendor = document.querySelector('.vendor');
const dropList = document.querySelector('.dropList');
const form = document.querySelector('.form');
const result = document.querySelector('.result ');
const btn0 = document.querySelector('#btn0');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const back0 = document.querySelector('#back0');
const back1 = document.querySelector('#back1');
const back2 = document.querySelector('#back2');
const circuitType = document.querySelector('.circuitType');
const eqList = document.querySelector('.eqList');
const deviceName = document.querySelector('.deviceName');
const deviceMessage = document.querySelector('.deviceMessage');
const errorMessage = document.querySelector('.errorMessage');
const copy = document.querySelector('#copy');
const copyMessage = document.querySelector('.copyMessage');


//Classes group
var adtranFailoverClasses = document.querySelectorAll('.clientName, .nextHop, .ipAddress0, .subnetMask0, .defaultGateway, .tenDigitNumber, .areaCode, .nmsAuth');
var asa5510Classes = document.querySelectorAll('.clientName, .ipAddress0, .subnetMask0, .defaultGateway');
var asaFailoverClasses = document.querySelectorAll('.clientName, .ipAddress0, .subnetMask0, .defaultGateway');
var ase2811Classes = document.querySelectorAll('.clientName, .lineSpeed, .circuitId, .vlanInt, .vlanEncap, .ipAddress0, .subnetMask0, .clientInfo, .ipAddress1, .subnetMask1, .coreside0, .bandwidth, .zLoc, .voice, .whichWan');
var ase2901Classes = document.querySelectorAll('.clientName, .lineSpeed, .circuitId, .vlanInt, .vlanEncap, .ipAddress0, .subnetMask0, .clientInfo, .ipAddress1, .subnetMask1, .coreside0, .bandwidth, .zLoc, .voice, .whichWan');
var aseAsrClasses = document.querySelectorAll('.clientName, .lineSpeed, .circuitId, .ipAddress0, .subnetMask0, .clientInfo, .ipAddress1, .subnetMask1, .coreside0, .bandwidth, .zLoc, .voice, .whichWan');
var asrCoxClasses = document.querySelectorAll('.clientName, .ipAddress0, .subnetMask0, .defaultGateway, .nextHop');
var bvi2811Classes = document.querySelectorAll('.clientName, .nextHop, .clientInfo, .ipAddress0, .subnetMask0, .defaultGateway, .tenDigitNumber, .areaCode, .nmsAuth');
var bvi2901Classes = document.querySelectorAll('.clientName, .nextHop, .clientInfo, .ipAddress0, .subnetMask0, .defaultGateway, .tenDigitNumber, .areaCode, .nmsAuth');
var bviASA5510Classes = document.querySelectorAll('.clientName, .downloadSpeedPolice, .downloadSpeedCir, .uploadSpeed, .primaryDNS, .secondaryDNS, .ipAddressBVI, .subnetMaskBVI, .defaultGateway, .netAddress, .inverseMask, .vendorName, .bandwidth, .zLoc');
var bviAsrClasses = document.querySelectorAll('.clientName, .ipAddressBVI, .subnetMaskBVI, .defaultGateway, .priSecDnsFW, .netAddress');
var bviStackClasses = document.querySelectorAll('.clientName, .primaryDNS, .secondaryDNS, .ipAddressBVI, .subnetMaskBVI, .defaultGateway, .netAddress, .inverseMask, .redundantGW, .redundantFW');
var bviSwitchClasses = document.querySelectorAll('.clientName, .primaryDNS, .secondaryDNS, .ipAddressBVI, .subnetMaskBVI, .defaultGateway, .netAddress, .inverseMask, .redundantGW, .redundantFW');
var cox2901Classes = document.querySelectorAll('.clientName, .primaryDNS, .secondaryDNS, .ipAddressBVI, .subnetMaskBVI, .defaultGateway, .netAddress, .inverseMask, .redundantGW, .redundantFW');
var stack3750Classes = document.querySelectorAll('.clientName, .ipAddressVlan10, .subnetMaskVlan10, .defaultGateway10, .redundantGW, .redundantFW');
var switch3750Classes = document.querySelectorAll('.clientName, .ipAddressVlan10, .subnetMaskVlan10, .defaultGateway10, .redundantGW, .redundantFW');
var allDevicesClasses = document.querySelectorAll('.clientName, .lineSpeed, .circuitId, .vlanInt, .vlanEncap, .ipAddress0, .subnetMask0, .clientInfo, .ipAddress1, .subnetMask1, .bandwidth, .zLoc, .voice, .defaultGateway, .ipAddressVlan10, .subnetMaskVlan10, .defaultGateway10, .nmsAuth, .redundantGW, .redundantFW, .uploadSpeed, .downloadSpeedPolice, .downloadSpeedCir, .primaryDns, .secondaryDns, .ipAddressBVI, .subnetMaskBVI, .netAddress, .inverseMask, .vendorName, .priSecDnsFW, .nextHop, .tenDigitNumber, .areaCode, .coreside0, .whichWan')


//Inputs
var clientName = document.querySelector('#clientName');
var lineSpeed = document.querySelector('#lineSpeed');
var circuitId = document.querySelector('#circuitId');
var vlanInt = document.querySelector('#vlanInt');
var vlanEncap = document.querySelector('#vlanEncap');
var ipAddress0 = document.querySelector('#ipAddress0');
var subnetMask0 = document.querySelector('#subnetMask0');
var clientInfo = document.querySelector('#clientInfo');
var ipAddress1 = document.querySelector('#ipAddress1');
var subnetMask1 = document.querySelector('#subnetMask1');
var bandwidth = document.querySelector('#bandwidth');
var zLoc = document.querySelector('#zLoc');
var voice = document.querySelector('#voice');
var defaultGateway = document.querySelector('#defaultGateway');
var ipAddressVlan10 = document.querySelector('#ipAddressVlan10');
var subnetMaskVlan10 = document.querySelector('#subnetMaskVlan10');
var defaultGateway10 = document.querySelector('#defaultGateway10');
var nmsAuth = document.querySelector('#nmsAuth');
var redundantGW = document.querySelector('#redundantGW');
var redundantFW = document.querySelector('#redundantFW');
var uploadSpeed = document.querySelector('#uploadSpeed');
var downloadSpeedPolice = document.querySelector('#downloadSpeedPolice');
var downloadSpeedCir = document.querySelector('#downloadSpeedCir');
var primaryDns = document.querySelector('#primaryDns');
var secondaryDns = document.querySelector('#secondaryDns');
var ipAddressBVI = document.querySelector('#ipAddressBVI');
var subnetMaskBVI = document.querySelector('#subnetMaskBVI');
var netAddress = document.querySelector('#netAddress');
var inverseMask = document.querySelector('#inverseMask');
var vendorName = document.querySelector('#vendorName');
var priSecDnsFW = document.querySelector('#priSecDnsFW');
var nextHop = document.querySelector('#nextHop');
var tenDigitNumber = document.querySelector('#tenDigitNumber');
var areaCode = document.querySelector('#areaCode');


//Validate IP/Subnet
var ipPatt = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
var subnetPatt = /^(((255\.){3}(255|254|252|248|240|224|192|128|0+))|((255\.){2}(255|254|252|248|240|224|192|128|0+)\.0)|((255\.)(255|254|252|248|240|224|192|128|0+)(\.0+){2})|((255|254|252|248|240|224|192|128|0+)(\.0+){3}))$/;


//Validating Function (validate all inputs/ip address/subnet)
function validateInputs(input) {
    for (i = 0; i < input.length; i++) {
        //check the second child (the input) of class 
        if (input[i].children[1].value == "") {
            input[i].children[1].style.borderColor = "red";
            errorMessage.classList.remove('hide');
            errorMessage.innerHTML = '<a href="#!" class="close" onclick="this.parentElement.classList.add(\'hide\');">&times;</a>'
                + '<strong>Alert!</strong> Please submit a value for ' + input[i].innerText;
            return false;
            // validate ip address/subnet
        } else if (input[i].children[1].hasAttribute("ip") && input[i].children[1].value.match(ipPatt) == null) {
            errorMessage.innerHTML = '<a href="#!" class="close" onclick="this.parentElement.classList.add(\'hide\');">&times;</a>'
                + '<strong>Alert!</strong> Please submit a valid IP address for ' + input[i].innerText;
            errorMessage.classList.remove('hide');
            input[i].children[1].style.borderColor = "red";
            return false;
        } else if (input[i].children[1].hasAttribute("subnet") && input[i].children[1].value.match(subnetPatt) == null) {
            errorMessage.innerHTML = '<a href="#!" class="close" onclick="this.parentElement.classList.add(\'hide\');">&times;</a>'
                + '<strong>Alert!</strong> Please submit a valid subnet for ' + input[i].innerText;
            errorMessage.classList.remove('hide');
            input[i].children[1].style.borderColor = "red";
            return false;
        }
    }
}


//Subnet Validator 
function subnetValidator(ip, ipRange, subnet) {
    var addr = ipaddr.parse(ip);
    var range = ipaddr.parse(ipRange);
    if (addr.match(range, ipaddr.IPv4.parse(subnet).prefixLengthFromSubnetMask())) {
        return true;
    } else {
        errorMessage.innerHTML = '<a href="#!" class="close" onclick="this.parentElement.classList.add(\'hide\');">&times;</a>'
            + "<strong>Alert!</strong> IP addresses don't belong to this Subnet";
        errorMessage.classList.remove('hide');
        return false;
    }
}

//Clearing AllInputs Function
function clearAllInputs() {
    for (i = 0; i < allDevicesClasses.length; i++) {
        allDevicesClasses[i].children[1].style.removeProperty('border');
        errorMessage.innerHTML = '';
        errorMessage.classList.add('hide');
    }
}

//Clearing inputs Function
function clearInputs(vars) {
    for (let i = 0; i < vars.length; i++) {
        function clr() {
            vars[i].children[1].style.removeProperty('border');
            errorMessage.innerHTML = '';
            errorMessage.classList.add('hide');
        }
        vars[i].children[1].addEventListener("click", clr, false);
        vars[i].children[1].addEventListener("oninput", clr, false);
    }
};
clearInputs(allDevicesClasses);

//Copying function 
copy.addEventListener('click', function () {
    textArea.select();
    document.execCommand('copy');
    copyMessage.innerHTML = '<a href="#!" class="close" onclick="this.parentElement.classList.add(\'hide\');">&times;</a>'
        + "<strong>Success!</strong> You have successfully copied the config file";
    copyMessage.classList.remove('hide');
});




//First continue btn
btn0.addEventListener('click', function () {
    //go to the next page
    vendor.classList.add('hide');
    dropList.classList.remove('hide');

    //Filtering the devices according to circuit type
    var selectedCircuit = circuitType.options[circuitType.selectedIndex].value;
    if (selectedCircuit == "Out of Market Circuit (BVI config)") {
        var bviAsr = document.getElementById("bviAsr");
        var bvi2901 = document.getElementById("bvi2901");
        var bvi2811 = document.getElementById("bvi2811");
        var bviASA5510 = document.getElementById("bviASA5510");
        var bviSwitch = document.getElementById("bviSwitch");
        var bviStack = document.getElementById("bviStack");

        bviAsr.classList.remove('hide');
        bvi2901.classList.remove('hide');
        bvi2811.classList.remove('hide');
        bviASA5510.classList.remove('hide');
        bviSwitch.classList.remove('hide');
        bviStack.classList.remove('hide');


    } else if (selectedCircuit == "AT&T Metro-E (ASE Config)") {

        var aseAsr = document.getElementById("aseAsr");
        var ase2901 = document.getElementById("ase2901");
        var ase2811 = document.getElementById("ase2811");
        var switch3750 = document.getElementById("switch3750");
        var asa5510 = document.getElementById("asa5510");
        var stack3750 = document.getElementById("stack3750");

        aseAsr.classList.remove('hide');
        ase2901.classList.remove('hide');
        ase2811.classList.remove('hide');
        switch3750.classList.remove('hide');
        stack3750.classList.remove('hide');
        asa5510.classList.remove('hide');

    } else if (selectedCircuit == "Cox Metro-E/HFC") {
        var cox2901 = document.getElementById("cox2901");
        var asa5510 = document.getElementById("asa5510");
        var switch3750 = document.getElementById("switch3750");
        var stack3750 = document.getElementById("stack3750");

        cox2901.classList.remove('hide');
        asa5510.classList.remove('hide');
        switch3750.classList.remove('hide');
        stack3750.classList.remove('hide');


    } else if (selectedCircuit == "4G or Dual-ISP Failover") {

        var asaFailover = document.getElementById("asaFailover");
        var adtranFailover = document.getElementById("adtranFailover");

        asaFailover.classList.remove('hide');
        adtranFailover.classList.remove('hide');

    }
});


//First back btn
back0.addEventListener('click', function () {
    window.location.reload(true);
});

//Second continue btn
btn1.addEventListener('click', function () {
    var selectEq = eqList.options[eqList.selectedIndex].value;

    if (!selectEq) {
        deviceMessage.innerHTML = '<a href="#" class="close" data-dismiss="alert" aria-label="close" onclick="this.parentElement.classList.add(\'hide\');">&times;</a>'
            + '<strong>Warning!</strong> Please select a device from the list';
        deviceMessage.classList.remove('hide');

    } else {
        dropList.classList.add('hide');
        form.classList.remove('hide');

        //checking the model and showing inputs for each device
        if (selectEq == "AT&T ASE - 2811") {
            deviceName.innerHTML = "AT&T ASE - 2811";
            // clean the form for each device
            for (i = 0; i < allDevicesClasses.length; i++) {
                allDevicesClasses[i].classList.add('hide');
            };
            for (i = 0; i < ase2811Classes.length; i++) {
                ase2811Classes[i].classList.remove('hide');
            };

        } else if (selectEq == "ASR1001 BVI - Out-of-Market circuit 350M and higher") {
            deviceName.innerHTML = "ASR1001 BVI - Out-of-Market circuit 350M and higher";
            // clean the form for each device
            for (i = 0; i < allDevicesClasses.length; i++) {
                allDevicesClasses[i].classList.add('hide');
            };
            for (i = 0; i < bviAsrClasses.length; i++) {
                bviAsrClasses[i].classList.remove('hide');
            };

        } else if (selectEq == "AT&T ASE - ASR1001") {
            deviceName.innerHTML = "AT&T ASE - ASR1001";
            // clean the form for each device
            for (i = 0; i < allDevicesClasses.length; i++) {
                allDevicesClasses[i].classList.add('hide');
            };
            for (i = 0; i < aseAsrClasses.length; i++) {
                aseAsrClasses[i].classList.remove('hide');
            };

        } else if (selectEq == "Cox Metro-E - ASR1001") {
            deviceName.innerHTML = "Cox Metro-E - ASR1001";
            // clean the form for each device
            for (i = 0; i < allDevicesClasses.length; i++) {
                allDevicesClasses[i].classList.add('hide');
            };
            for (i = 0; i < asrCoxClasses.length; i++) {
                asrCoxClasses[i].classList.remove('hide');
            };

        } else if (selectEq == "2901 BVI") {
            deviceName.innerHTML = "2901 BVI";
            // clean the form for each device
            for (i = 0; i < allDevicesClasses.length; i++) {
                allDevicesClasses[i].classList.add('hide');
            };
            for (i = 0; i < bvi2901Classes.length; i++) {
                bvi2901Classes[i].classList.remove('hide');
            };

        } else if (selectEq == "AT&T ASE - 2901") {
            deviceName.innerHTML = "AT&T ASE - 2901";
            // clean the form for each device
            for (i = 0; i < allDevicesClasses.length; i++) {
                allDevicesClasses[i].classList.add('hide');
            };
            for (i = 0; i < ase2901Classes.length; i++) {
                ase2901Classes[i].classList.remove('hide');
            };

        } else if (selectEq == "Cox Metro-E - 2901") {
            deviceName.innerHTML = "Cox Metro-E - 2901";
            // clean the form for each device
            for (i = 0; i < allDevicesClasses.length; i++) {
                allDevicesClasses[i].classList.add('hide');
            };
            for (i = 0; i < cox2901Classes.length; i++) {
                cox2901Classes[i].classList.remove('hide');
            };

        } else if (selectEq == "2811 BVI") {
            deviceName.innerHTML = "2811 BVI";
            // clean the form for each device
            for (i = 0; i < allDevicesClasses.length; i++) {
                allDevicesClasses[i].classList.add('hide');
            };
            for (i = 0; i < bvi2811Classes.length; i++) {
                bvi2811Classes[i].classList.remove('hide');
            };

        } else if (selectEq == "ASA 5510 9.1 BVI") {
            deviceName.innerHTML = "ASA 5510 9.1 BVI";
            // clean the form for each device
            for (i = 0; i < allDevicesClasses.length; i++) {
                allDevicesClasses[i].classList.add('hide');
            };
            for (i = 0; i < bviASA5510Classes.length; i++) {
                bviASA5510Classes[i].classList.remove('hide');
            };

        } else if (selectEq == "ASA 5510 9.1") {
            deviceName.innerHTML = "ASA 5510 9.1";
            // clean the form for each device
            for (i = 0; i < allDevicesClasses.length; i++) {
                allDevicesClasses[i].classList.add('hide');
            };
            for (i = 0; i < asa5510Classes.length; i++) {
                asa5510Classes[i].classList.remove('hide');
            };

        } else if (selectEq == "ASA 5510 9.1 4G Failover") {
            deviceName.innerHTML = "ASA 5510 9.1 4G Failover";
            // clean the form for each device
            for (i = 0; i < allDevicesClasses.length; i++) {
                allDevicesClasses[i].classList.add('hide');
            };
            for (i = 0; i < asaFailoverClasses.length; i++) {
                asaFailoverClasses[i].classList.remove('hide');
            };

        } else if (selectEq == "Adtran 908 4G Failover") {
            deviceName.innerHTML = "Adtran 908 4G Failover";
            // clean the form for each device
            for (i = 0; i < allDevicesClasses.length; i++) {
                allDevicesClasses[i].classList.add('hide');
            };
            for (i = 0; i < adtranFailoverClasses.length; i++) {
                adtranFailoverClasses[i].classList.remove('hide');
            };

        } else if (selectEq == "BVI Cisco 3750-PoE") {
            deviceName.innerHTML = "BVI Cisco 3750-PoE";
            // clean the form for each device
            for (i = 0; i < allDevicesClasses.length; i++) {
                allDevicesClasses[i].classList.add('hide');
            };
            for (i = 0; i < bviSwitchClasses.length; i++) {
                bviSwitchClasses[i].classList.remove('hide');
            };

        } else if (selectEq == "BVI Cisco 3750-PoE-stack") {
            deviceName.innerHTML = "BVI Cisco 3750-PoE-stack";
            // clean the form for each device
            for (i = 0; i < allDevicesClasses.length; i++) {
                allDevicesClasses[i].classList.add('hide');
            };
            for (i = 0; i < bviStackClasses.length; i++) {
                bviStackClasses[i].classList.remove('hide');
            };

        } else if (selectEq == "Cisco 3750-PoE") {
            deviceName.innerHTML = "Cisco 3750-PoE";
            // clean the form for each device
            for (i = 0; i < allDevicesClasses.length; i++) {
                allDevicesClasses[i].classList.add('hide');
            };
            for (i = 0; i < switch3750Classes.length; i++) {
                switch3750Classes[i].classList.remove('hide');
            };

        } else if (selectEq == "Cisco 3750-PoE-stack") {
            deviceName.innerHTML = "Cisco 3750-PoE-stack";
            // clean the form for each device
            for (i = 0; i < allDevicesClasses.length; i++) {
                allDevicesClasses[i].classList.add('hide');
            };
            for (i = 0; i < stack3750Classes.length; i++) {
                stack3750Classes[i].classList.remove('hide');
            };
        }
    }
});

//Second back btn
back1.addEventListener('click', function () {
    clearAllInputs();
    dropList.classList.remove('hide');
    form.classList.add('hide');
    result.classList.add('hide');
    deviceMessage.classList.add('hide');

});

//Third back btn
back2.addEventListener('click', function () {
    clearAllInputs();
    form.classList.remove('hide');
    dropList.classList.add('hide');
    result.classList.add('hide');
    copyMessage.classList.add('hide');

});
