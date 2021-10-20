// Third continue btn
btn2.addEventListener('click', function () {
    
    var selectEq = eqList.options[eqList.selectedIndex].value;
    if (selectEq == "2901 BVI") {
        clearAllInputs();
        //form validation
        if (validateInputs(bvi2901Classes) == false) {
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
            hostname ${clientName.value}-BVI-rtr
            !
            !
            no service pad
            no service config
            service tcp-keepalives-in
            service tcp-keepalives-out
            service timestamps debug datetime localtime
            service timestamps log datetime localtime
            service password-encryption
            !
            bridge irb
            bridge 1 protocol ieee
            bridge 1 route ip
            !
            ip access-list extended voip-control-list
            permit udp any any eq 5060
            ip access-list extended voip-rtp-list
            permit udp any any range 16384 32767
            permit udp any range 16384 32767 any
            !
            class-map match-any voip-remark
            match ip dscp ef
            match ip dscp cs3
            match ip dscp af31
            class-map match-any voip-control
            match access-group name voip-control-list
            class-map match-any voip-rtp
            match access-group name voip-rtp-list
            match protocol rtp audio
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
            !
            policy-map upload-qos-policy
            class class-default
            shape average ${uploadSpeed.value}
            service-policy qos-voip-policy
            !
            policy-map download-qos-policy
            class class-default
            random-detect
            shape average ${downloadSpeedPolice.value}
            police cir ${downloadSpeedCir.value}
            exceed-action drop 
            violate-action drop 
            service-policy qos-voip-policy   
            !
            logging buffered 32768 debugging
            no logging console
            enable secret 50DKPMinus!
            !
            clock timezone PST -8
            clock summer-time PDT recurring
            no aaa new-model
            ip subnet-zero
            ip cef
            !
            no ip bootp server
            ip name-server ${primaryDns.value}
            ip name-server ${secondaryDns.value}
            ip name-server 208.67.222.222
            ip name-server 8.8.8.8
            !
            no ip finger
            !
            interface GigabitEthernet0/0
            description ISP Internet handoff
            no ip address
            duplex auto
            speed auto
            bridge-group 1
            service-policy output upload-qos-policy
            no shut
            !
            interface GigabitEthernet0/1
            description NLI Switch
            no ip address
            duplex full
            speed 100
            bridge-group 1
            service-policy output download-qos-policy
            no shut
            !
            interface BVI1
            ip address ${ipAddressBVI.value} ${subnetMaskBVI.value}
            no shut
            !
            ip classless
            ip route 0.0.0.0 0.0.0.0 ${defaultGateway.value}
            no ip http server
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
            access-list 10 permit ${netAddress.value} ${inverseMask.value}
            !
            banner exec &
            
            =============================  Router Information  =============================
            
                            Provider: ${vendorName.value}
            
                            Circuit type: Non-NLI Internet Connection
                            
                            Bandwidth Down/Up: ${bandwidth.value} Mbps
    
                            Z-loc: ${zLoc.value}
            
                            Voice: Yes
            
            ================================================================================
            
            &
            banner motd &
            ********************************************************************************
            
                            Company Name -- Where you want to be!
                            For Support, call 800-500-0000
            
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
            login
            length 48
            transport input telnet ssh
            !
            scheduler allocate
            !
            ntp server 207.7.112.14
            ntp server 66.185.175.43
            ntp server 207.7.100.100
            !
            end
            `);
        }
    } else { console.log("Not 2901 BVI") }
});