// Third continue btn
btn2.addEventListener('click', function () {
    
    var selectEq = eqList.options[eqList.selectedIndex].value;
    if (selectEq == "ASA 5510 9.1 BVI") {
        clearAllInputs();
        //form validation
        if (validateInputs(bviASA5510Classes) == false) {
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
            !
            username pix password secretpassword
            enable password 50DKPMinus!
            aaa authentication ssh console LOCAL 
            clear config call-home
            !
            hostname asa-${clientName.value}
            !
            interface Ethernet0/0
            nameif outside
            security-level 0
            ip address ${ipAddressBVI.value} ${subnetMaskBVI.value}
            speed 100
            duplex full
            no shutdown
            !
            route outside 0.0.0.0 0.0.0.0 ${defaultGateway.value}
            !
            interface Ethernet0/1
            nameif inside
            security-level 100
            ip address 192.168.25.1 255.255.255.0
            speed 100
            duplex full
            no shutdown
            !
            domain-name example.com
            !
            object network NAT-INSIDE
            subnet 192.168.25.0 255.255.255.0
            nat (inside,outside) dynamic interface
            !
            access-list OUTSIDE-INBOUND extended permit icmp any any echo-reply
            access-list OUTSIDE-INBOUND extended permit icmp any any time-exceeded
            access-list OUTSIDE-INBOUND ex
            tended permit icmp any any unreachable
            access-list OUTSIDE-INBOUND extended permit icmp any any echo
            !
            access-group OUTSIDE-INBOUND in interface outside
            !
            dns domain-lookup outside
            
            dns server-group DefaultDNS
            name-server 8.8.8.8
            name-server 208.67.222.222
            name-server 8.8.4.4
            name-server 208.67.220.220
            
            !
            dhcpd lease 86400
            dhcpd domain test.com
            dhcpd address 192.168.25.10-192.168.25.250 inside
            dhcpd dns ${priSecDnsFW.value}
            dhcpd enable inside
            !
            telnet timeout 15
            console timeout 15
            ssh timeout 15
            ssh version 2
            ssh key-exchange group dh-group14-sha1
            ssh 63.210.161.0 255.255.255.128 outside
            ssh 63.210.162.0 255.255.254.0 outside
            ssh 63.214.180.0 255.255.254.0 outside
            ssh 63.215.252.0 255.255.252.0 outside
            ssh 64.154.92.0 255.255.252.0 outside
            ssh 64.156.197.128 255.255.255.128 outside
            ssh 64.156.199.0 255.255.255.0 outside
            ssh 66.171.144.0 255.255.240.0 outside
            ssh 66.185.160.0 255.255.240.0 outside
            ssh 166.90.14.0 255.255.254.0 outside
            ssh 207.7.96.0 255.255.224.0 outside
            ssh 192.168.25.0 255.255.255.0 inside
            ssh ${netAddress.value} ${subnetMaskBVI.value} outside
            !
            ntp server 66.185.175.43 source outside prefer
            ntp server 207.7.112.14 source outside
            ntp server 207.7.100.100 source outside
            clock timezone PST -8
            clock summer-time PDT recurring
            !
            no http server enable
            
            asdm image flash:/asdm-792.bin
            !
            crypto key generate rsa general-keys modulus 2048
            `);
        }
    } else { console.log("Not ASA 5510 9.1 BVI") }
});