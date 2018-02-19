var dropList = document.querySelector('.dropList');
var form = document.querySelector('.form');
var result = document.querySelector('.result ');
var btn1 = document.querySelector('#btn1');
var btn2 = document.querySelector('#btn2');
var back1 = document.querySelector('#back1');
var back2 = document.querySelector('#back2');
var eqList = document.querySelector('.eqList');
var deviceName = document.querySelector('.deviceName');
var errorMessage = document.querySelector('.errorMessage');
var copy = document.querySelector('#copy');
var notification = document.querySelector('.notification');



//Classes group
var gwClasses = document.querySelectorAll('.hostName, .password, .lineSpeed, .CircuitId, .VlanInt, .VlanEncap, .ipAddress0, .subnetMask0, .ClientInt, .ipAddress1, .subnetMask1, .ipRoute, .bandwidth, .zLoc, voice');
var fwClasses = document.querySelectorAll('.hostName, .password,.ipAddress0, .subnetMask0, .ipRoute');
var swClasses = document.querySelectorAll('.hostName, .password,.ipAddressVlan10, .subnetMaskVlan10, .ipDefault, .poe, .stack, .redundantGW, .redundantFW');

//inputs

var hostName = document.querySelector('#hostName');
var password = document.querySelector('#password ');
var lineSpeed = document.querySelector('#lineSpeed ');
var CircuitId = document.querySelector('#CircuitId');
var VlanInt = document.querySelector('#VlanInt');
var VlanEncap = document.querySelector('#VlanEncap');
var ipAddress0 = document.querySelector('#ipAddress0');
var subnetMask0 = document.querySelector('#subnetMask0');
var ClientInt = document.querySelector('#ClientInt');
var ipAddress1 = document.querySelector('#ipAddress1');
var subnetMask1 = document.querySelector('#subnetMask1');
var ipRoute = document.querySelector('#ipRoute');
var bandwidth = document.querySelector('#bandwidth');
var zLoc = document.querySelector('#zLoc');
var voice = document.querySelector('#voice');
//SW values 
var ipAddressVlan10 = document.querySelector('#ipAddressVlan10');
var subnetMaskVlan10 = document.querySelector('#subnetMaskVlan10');
var ipDefault = document.querySelector('#ipDefault');
var poe = document.querySelector('#poe');
var stack = document.querySelector('#stack');
var redundantGW = document.querySelector('#redundantGW');
var redundantFW = document.querySelector('#redundantFW');

//validate IP/Subnet
var ipPatt = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

//continue btn
btn1.addEventListener('click', function () {
    dropList.classList.add('hide');
    form.classList.remove('hide');
    //checking the model

    var selectEq = eqList.options[eqList.selectedIndex].value;
    if (selectEq == "ASE Client - 2800 for 75M and lower") {
        deviceName.innerHTML = "ASE Client - 2800 for 75M and lower";
        // clean the form for each device 
        for (i = 0; i < swClasses.length; i++) {
            swClasses[i].classList.add('hide');
        };
        for (i = 0; i < fwClasses.length; i++) {
            fwClasses[i].classList.add('hide');
        };
        for (i = 0; i < gwClasses.length; i++) {
            gwClasses[i].classList.remove('hide');
        };

    } else if (selectEq == "ASA 5510 9.1 standalone") {
        deviceName.innerHTML = "ASA 5510 9.1 standalone";
        // clean the form for each device 
        for (i = 0; i < gwClasses.length; i++) {
            gwClasses[i].classList.add('hide');
        };
        for (i = 0; i < swClasses.length; i++) {
            swClasses[i].classList.add('hide');
        };
        for (i = 0; i < fwClasses.length; i++) {
            fwClasses[i].classList.remove('hide');
        };

    } else if (selectEq == "Catalyst 3750-PoE") {
        deviceName.innerHTML = "Catalyst 3750-PoE";
        // clean the form for each device 
        for (i = 0; i < gwClasses.length; i++) {
            gwClasses[i].classList.add('hide');
        };
        for (i = 0; i < fwClasses.length; i++) {
            fwClasses[i].classList.add('hide');
        };
        for (i = 0; i < swClasses.length; i++) {
            swClasses[i].classList.remove('hide');
        };
    }
});


back1.addEventListener('click', function () {
    dropList.classList.remove('hide');
    form.classList.add('hide');
    result.classList.add('hide');

});


back2.addEventListener('click', function () {
    form.classList.remove('hide');
    dropList.classList.add('hide');
    result.classList.add('hide');

});

//copy function 
copy.addEventListener('click', function () {

    textArea.select();
    document.execCommand('copy');
    copy.innerHTML = 'Copied';

});




btn2.addEventListener('click', function () {

    var selectEq = eqList.options[eqList.selectedIndex].value;
    if (selectEq == "ASE Client - 2800 for 75M and lower") {
        //form validation
        if (!hostName.value) {
            hostName.setCustomValidity('Please submit the hostname');
            errorMessage.innerHTML = 'Please submit the hostname';
            hostName.style.borderColor = "red";
            return false;
        } else if (!password.value) {
            password.setCustomValidity('Please submit password');
            errorMessage.innerHTML = 'Please submit password';
            password.style.borderColor = "red";
            return false;
        } else if (!lineSpeed.value) {
            lineSpeed.setCustomValidity('Please submit Line Speed');
            errorMessage.innerHTML = 'Please submit Line Speed';
            lineSpeed.style.borderColor = "red";
            return false;
        } else if (!CircuitId.value) {
            CircuitId.setCustomValidity('Please submit a circuit ID');
            errorMessage.innerHTML = 'Please submit a circuit ID';
            CircuitId.style.borderColor = "red";
            return false;
        } else if (!VlanInt.value) {
            VlanInt.setCustomValidity('Please submit a Vlan Int');
            errorMessage.innerHTML = 'Please submit a Vlan Int';
            VlanInt.style.borderColor = "red";
            return false;
        } else if (!VlanEncap.value) {
            VlanEncap.setCustomValidity('Please submit a Vlan Encap');
            errorMessage.innerHTML = 'Please submit a Vlan Encap';
            VlanEncap.style.borderColor = "red";
            return false;
        } else if ((!ipAddress0.value) || (ipAddress0.value.match(ipPatt) == null)) {
            ipAddress0.setCustomValidity('Please submit a valid IP address');
            errorMessage.innerHTML = 'Please submit a valid IP address';
            ipAddress0.style.borderColor = "red";
            return false;
        } else if ((!subnetMask0.value) || (subnetMask0.value.match(ipPatt) == null)) {
            subnetMask0.setCustomValidity('Please submit a valid Subnet Mask');
            errorMessage.innerHTML = 'Please submit a valid Subnet Mask';
            subnetMask0.style.borderColor = "red";
            return false;
        } else if (!ClientInt.value) {
            ClientInt.setCustomValidity('Please submit a Client ID');
            errorMessage.innerHTML = 'Please submit a Client ID';
            ClientInt.style.borderColor = "red";
            return false;
        } else if ((!ipAddress1.value) || (ipAddress1.value.match(ipPatt) == null)) {
            ipAddress1.setCustomValidity('Please submit a valid IP address');
            errorMessage.innerHTML = 'Please submit a valid IP address';
            ipAddress1.style.borderColor = "red";
            return false;
        } else if ((!subnetMask1.value) || (subnetMask1.value.match(ipPatt) == null)) {
            subnetMask1.setCustomValidity('Please submit a valid Subnet Mask');
            errorMessage.innerHTML = 'Please submit a valid Subnet Mask';
            subnetMask1.style.borderColor = "red";
            return false;
        } else if ((!ipRoute.value) || (ipRoute.value.match(ipPatt) == null)) {
            ipRoute.setCustomValidity('Please submit a valid IP address');
            errorMessage.innerHTML = 'Please submit a valid IP address';
            ipRoute.style.borderColor = "red";
            return false;
        } else if (!bandwidth.value) {
            bandwidth.setCustomValidity('Please submit bandwidth');
            errorMessage.innerHTML = 'Please submit bandwidth';
            bandwidth.style.borderColor = "red";
            return false;
        } else if (!zLoc.value) {
            zLoc.setCustomValidity('Please submit Z-loc');
            errorMessage.innerHTML = 'Please submit Z-loc';
            zLoc.style.borderColor = "red";
            return false;
        } else if (!voice.value) {
            voice.setCustomValidity('Please submit voice answer');
            errorMessage.innerHTML = 'Please submit voice answer';
            voice.style.borderColor = "red";
            return false;
        } else {
            //go to config page
            form.classList.add('hide');
            result.classList.remove('hide');
            //writing to the textarea
            document.getElementById("textArea").value = (`
        !
        no service pad
        no service config
        service tcp-keepalives-in
        service tcp-keepalives-out
        service timestamps debug datetime localtime
        service timestamps log datetime localtime
        service password-encryption
        !
        hostname ${hostName.value}-gw01
        !
        !
        logging buffered 32768 debugging
        no logging console
        enable secret ${password.value}
        !
        clock timezone PST -8
        clock summer-time PDT recurring
        no aaa new-model
        ip subnet-zero
        ip cef
        !
        !
        !
        no ip bootp server
        ip name-server 207.7.100.100
        ip name-server 66.171.145.146
        ip name-server 66.185.175.43
        ip name-server 207.7.112.14
        !
        !
        !
        no ip finger
        !
        class-map match-any voip-remark
          match ip dscp ef
          match ip dscp cs3
          match ip dscp af31
        class-map match-any voip-control
          match access-group name voip-control-list
        class-map match-all voip-rtp
          match access-group name voip-rtp-list
          match protocol rtp audio
        !
        !
        policy-map qos-voip-policy
          class voip-rtp
           priority percent 70
           set dscp ef
          class voip-control
           bandwidth percent 5
           set dscp af31
          class voip-remark
           set dscp default
          class class-default
           fair-queue
        policy-map qos-policy
          class class-default
           shape average ${lineSpeed.value}
           service-policy qos-voip-policy
        !
        !
        interface FastEthernet0/0
         description Uplink to NLI ${CircuitId.value}
         no ip address
         no ip redirects
         no ip unreachables
         no ip proxy-arp
         duplex auto
         speed auto
         no shutdown
        !
        interface FastEthernet0/0.${VlanInt.value}
         encapsulation dot1Q ${VlanEncap.value}
         ip address ${ipAddress0.value} ${subnetMask0.value}
         service-policy output qos-policy
        !
        interface FastEthernet0/1
         description To ${ClientInt.value}-sw01
         ip address ${ipAddress1.value} ${subnetMask1.value}
         no ip redirects
         no ip unreachables
         no ip proxy-arp
         no shutdown
        ! use auto/auto if it is a client switch
        ! use 100/full if it is an NLI switch
         speed 100
         duplex full
        !
        !
        ip classless
        ip route 0.0.0.0 0.0.0.0 ${ipRoute.value}
        no ip http server
        !
        ip access-list extended voip-control-list
         permit udp any any eq 5060
        ip access-list extended voip-rtp-list
         permit udp any any range 16384 32767
        !
        access-list 10 permit 63.210.161.0 0.0.0.127
        access-list 10 permit 63.210.162.0 0.0.1.255
        access-list 10 permit 63.214.180.0 0.0.1.255
        access-list 10 permit 63.215.252.0 0.0.3.255
        access-list 10 permit 64.154.92.0 0.0.3.255
        access-list 10 permit 64.156.197.128 0.0.0.127
        access-list 10 permit 64.156.199.0 0.0.0.255
        access-list 10 permit 66.171.144.0 0.0.15.255
        access-list 10 permit 66.185.160.0 0.0.15.255
        access-list 10 permit 166.90.14.0 0.0.1.255
        access-list 10 permit 207.7.96.0 0.0.31.255
        !
        banner exec &
        
        =============================  Router Information  =============================
        
                        Provider: ATT
        
                        Circuit type: Metro-E (ASE)
        
                        Bandwidth: ${bandwidth.value} Mbps
        
                        Z-loc: ${zLoc.value}
        
                        Core router: SD-WAN-2
        
                        Voice: ${voice.value}
        
        ================================================================================
        
        &
        banner motd &
        
        ********************************************************************************
        
                        Internet Company -- Where you want to be!
                        For Support, call 800-000-0000
        
        ********************************************************************************
        
        &
        !
        line con 0
         exec-timeout 15 0
         password GotNLI!!
         logging synchronous
         login
         length 48
        line vty 0 4
         access-class 10 in
         exec-timeout 15 0
         password GotNLI!!
         login
         length 48
        !
        scheduler allocate
        !
        ntp server 207.7.112.14
        ntp server 66.185.175.43
        ntp server 207.7.100.100
        !
        end`);
        }
    } else if (selectEq == "ASA 5510 9.1 standalone") {

        //go to config page
        form.classList.add('hide');
        result.classList.remove('hide');
        //writing to the textarea
        document.getElementById("textArea").value = (`
        username pix password password
        enable password password
        aaa authentication ssh console LOCAL 
        clear config call-home
        !
        hostname asa-${hostName.value}
        !
        interface Ethernet0/0
         nameif outside
         security-level 0
         ip address ${ipAddress0.value} ${subnetMask0.value}
         speed 100
         duplex full
         no shutdown
        !
        route outside 0.0.0.0 0.0.0.0 ${ipRoute.value}
        !
        interface Ethernet0/1
         nameif inside
         security-level 100
         ip address 192.168.25.1 255.255.255.0
         speed 100
         duplex full
         no shutdown
        !
        domain-name nextlevelinternet.com
        !
        object network NAT-INSIDE
        subnet 192.168.25.0 255.255.255.0
        nat (inside,outside) dynamic interface
        !
        access-list OUTSIDE-INBOUND extended permit icmp any any echo-reply
        access-list OUTSIDE-INBOUND extended permit icmp any any time-exceeded
        access-list OUTSIDE-INBOUND extended permit icmp any any unreachable
        access-list OUTSIDE-INBOUND extended permit icmp any any echo
        !
        access-group OUTSIDE-INBOUND in interface outside
        !
        dns domain-lookup outside
        dns server-group DefaultDNS
         name-server 207.7.100.100
         name-server 66.171.145.146
         name-server 66.175.175.43
         name-server 207.7.112.14
        !
        dhcpd lease 86400
        dhcpd domain mynlv.com
        dhcpd address 192.168.25.10-192.168.25.250 inside
        dhcpd dns 207.7.100.100 66.171.145.146
        dhcpd enable inside
        !
        telnet timeout 15
        console timeout 15
        ssh timeout 15
        ssh version 2
        `);
    } else if (selectEq == "Catalyst 3750-PoE") {

        //go to config page
        form.classList.add('hide');
        result.classList.remove('hide');
        //writing to the textarea
        document.getElementById("textArea").value = (`
        !
        vlan 10
         name public
        vlan 20
         name phone
        vlan 30
         name client-LAN
        !
        no service pad
        no service config
        service tcp-keepalives-in
        service tcp-keepalives-out
        service timestamps debug datetime localtime
        service timestamps log datetime localtime
        service password-encryption
        !
        hostname ${hostName.value}-sw01
        !
        logging buffered 16384 debugging
        !
        enable secret 50DKPMinus!
        !
        boot-start-marker
        boot-end-marker
        !
        !
        clock timezone PST -8
        clock summer-time PST recurring
        !
        !
        no aaa new-model
        system mtu routing 1500
        !
        ip subnet-zero
        no ip finger
        ip name-server 66.171.145.146
        ip name-server 207.7.100.100
        ip name-server 66.185.175.43
        ip name-server 207.7.112.14
        !         
        !
        network-policy profile 1
         voice vlan 20
        !
        lldp run
        !
        !
        !
        spanning-tree mode pvst
        spanning-tree extend system-id
        !
        vlan internal allocation policy ascending
        !
        !
        !
        interface FastEthernet1/0/1
         description NLI router
         duplex full
         speed 100
         switchport access vlan 10
         power inline never
        !
        interface FastEthernet1/0/2
         description NLI firewall outside
         duplex full
         speed 100
         switchport access vlan 10
         power inline never
        !
        interface FastEthernet1/0/3
         description NLI firewall inside
         duplex full
         speed 100
         switchport access vlan 20
         power inline never
        !
        interface FastEthernet1/0/4
         description Client firewall outside
         switchport access vlan 10
         power inline never
        !
        interface FastEthernet1/0/5
         description Client firewall inside
         switchport access vlan 30
         power inline never
        !
        interface range FastEthernet1/0/6 - 48
         description Phone access port
         switchport access vlan 30
         switchport mode access
         network-policy 1
         exit
        !
        interface range GigabitEthernet1/0/1 - 4
         description SFP port
         shutdown
        !
        interface VLAN1
         no ip address
         no ip directed-broadcast
         no ip route-cache
         shutdown
        !
        interface VLAN 10
         ip address ${ipAddressVlan10.value} ${subnetMaskVlan10.value}
         no ip directed-broadcast
         no ip route-cache
         no shutdown
        !
        ip default-gateway ${ipDefault.value}
        no ip http server
        no ip http secure-server
        access-list 10 permit 63.210.161.0 0.0.0.127
        access-list 10 permit 63.210.162.0 0.0.1.255
        access-list 10 permit 63.214.180.0 0.0.1.255
        access-list 10 permit 63.215.252.0 0.0.3.255
        access-list 10 permit 64.154.92.0 0.0.3.255
        access-list 10 permit 64.156.197.128 0.0.0.127
        access-list 10 permit 64.156.199.0 0.0.0.255
        access-list 10 permit 66.171.144.0 0.0.15.255
        access-list 10 permit 66.185.160.0 0.0.15.255
        access-list 10 permit 166.90.14.0 0.0.1.255
        access-list 10 permit 207.7.96.0 0.0.31.255
        !
        banner exec &
        =============================  Switch Information  =============================
        !
        !               PoE: ${poe.value}
        !
        !               Stack: ${stack.value}
        !
        !               Redundant Routers: ${redundantGW.value}
        !
        !               Redundant Firewalls: ${redundantFW.value}
        !
        ================================================================================
        &
        banner motd &
        ********************************************************************************
        !
        !              Internet Compnay -- Where you want to be!
        !
        !              For Support, call 800-000-0000
        !
        ********************************************************************************
        &
        !
        line con 0
         exec-timeout 15 0
         password GotNLI!!
         logging synchronous
         login
         length 48
        line vty 0 4
         access-class 10 in
         exec-timeout 15 0
         password GotNLI!!
         logging synchronous
         login
         length 48
        line vty 5 15
         access-class 10 in
         exec-timeout 15 0
         password GotNLI!!
         logging synchronous
         login
         length 48
        !
        ntp server 66.185.175.43
        ntp server 207.7.112.14
        ntp server 207.7.100.100
        end`);

    }


});

function Clear(Vars) {
    for (let i = 0; i < Vars.length; i++) {
        function Clr() {
            Vars[i].setCustomValidity('');
            Vars[i].style.removeProperty('border');
            errorMessage.innerHTML = '';
        }
        Vars[i].addEventListener("click", Clr, false);
        Vars[i].addEventListener("oninput", Clr, false);
    }

};

Clear([hostName, password, lineSpeed, CircuitId, VlanInt, VlanEncap, ipAddress0, subnetMask0, ClientInt, ipAddress1, subnetMask1, ipRoute, bandwidth, zLoc, voice]);