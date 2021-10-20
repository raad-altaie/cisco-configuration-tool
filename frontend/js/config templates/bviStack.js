
btn2.addEventListener('click', function () {
    
    var selectEq = eqList.options[eqList.selectedIndex].value;
    if (selectEq == "BVI Cisco 3750-PoE-stack") {
        clearAllInputs();
        //form validation
        if (validateInputs(bviStackClasses) == false) {
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
            hostname ${clientName.value}-sw01
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
            ip name-server ${primaryDns.value}
            ip name-server ${secondaryDns.value}
            ip name-server 208.67.222.222
            ip name-server 8.8.8.8
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
            description Voice or Data access port
            switchport access vlan 30
            switchport mode access
            network-policy 1
            exit
            !
            interface range GigabitEthernet1/0/1 - 4
            description SFP port
            shutdown
            !
            interface FastEthernet2/0/1
            description Spare Port - NLI router
            duplex full
            speed 100
            switchport access vlan 10
            power inline never
            !
            interface FastEthernet2/0/2
            description Spare Port - NLI FW outside
            duplex full
            speed 100
            switchport access vlan 10
            power inline never
            !
            interface FastEthernet2/0/3
            description Spare Port - NLI FW inside
            duplex full
            speed 100
            switchport access vlan 20
            power inline never
            !
            interface FastEthernet2/0/4
            description Spare port - Client FW outside
            switchport access vlan 10
            power inline never
            !
            interface FastEthernet2/0/5
            description Spare port - Client FW inside
            switchport access vlan 30
            power inline never
            !
            interface range FastEthernet2/0/6 - 48
            description Phone access port
            switchport access vlan 30
            switchport mode access
            network-policy 1
            exit
            !
            interface range GigabitEthernet2/0/1 - 4
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
            ip default-gateway ${defaultGateway10.value}
            !
            !
            !
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
            access-list 10 permit ${netAddress.value} ${inverseMask.value}
            !
            banner exec &
            =============================  Switch Information  =============================
            !
            !               PoE: Yes
            !
            !               Stack: Yes
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
            !              Company Name -- Where you want to be!
            !
            !              For Support, call 800-500-0000
            !
            ********************************************************************************
            &
            !
            line con 0
            exec-timeout 15 0
            password secretpassword
            logging synchronous
            login
            length 48
            line vty 0 4
            access-class 10 in
            exec-timeout 15 0
            password secretpassword
            logging synchronous
            login
            length 48
            line vty 5 15
            access-class 10 in
            exec-timeout 15 0
            password secretpassword
            logging synchronous
            login
            length 48
            !
            ntp server 66.185.175.43
            ntp server 207.7.112.14
            ntp server 207.7.100.100
            end
            `);
        }
    } else { console.log("Not BVI Cisco 3750-PoE-stack") }
});