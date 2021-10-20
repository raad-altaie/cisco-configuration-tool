
btn2.addEventListener('click', function () {
    
    var selectEq = eqList.options[eqList.selectedIndex].value;
    if (selectEq == "ASR1001 BVI - Out-of-Market circuit 350M and higher") {
        clearAllInputs();
        //form validation
        if (validateInputs(bviAsrClasses) == false) {
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
            hostname ${clientName.value}-BDI-rtr
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
            boot system flash bootflash:asr1001-universalk9.03.16.06.S.155-3.S6-ext.bin
            !
            ip nbar protocol-pack bootflash:pp-adv-asr1k-155-3.Sb4-23-32.0.0.pack
            !
            class-map match-any voip-control
             match protocol attribute traffic-class signaling
            class-map match-any voip-rtp
             match protocol attribute traffic-class voip-telephony
            !
            policy-map voip-qos
             class voip-rtp
              priority percent 70
              set dscp ef
             class voip-control
              bandwidth percent 5
              set dscp af31
             class class-default
              fair-queue
            !
            policy-map upload-qos-policy
             class class-default
              shape average ${uploadSpeed.value}
              service-policy voip-qos
            !
            policy-map download-qos-policy
             class class-default
              shape average ${downloadSpeedPolice.value}
              police cir ${downloadSpeedCir.value}
               exceed-action drop
               violate-action drop
              service-policy voip-qos
            !
            logging buffered 32768 debugging
            no logging console
            enable secret 50DKPMinus!
            !
            clock timezone PST -8
            clock summer-time PDT recurring
            no aaa new-model
            !
            no ip bootp server
            ip name-server ${primaryDns.value}
            ip name-server ${secondaryDns.value}
            ip name-server 208.67.222.222
            ip name-server 8.8.8.8
            !
            no ip finger
            !
            interface GigabitEthernet0/0/0
             description ISP Internet handoff
             no ip address
             no shutdown
             service-policy output upload-qos-policy
             service instance 1 ethernet
              encapsulation untagged
              bridge-domain 1
            !
            interface GigabitEthernet0/0/1
             description NLI Switch
             no ip address
             no shutdown
             service-policy output download-qos-policy
             service instance 1 ethernet
              encapsulation untagged
              bridge-domain 1
            !
            interface BDI1
             ip address ${ipAddressBVI.value} ${subnetMaskBVI.value}
             no shut
            !
            ip route 0.0.0.0 0.0.0.0 ${defaultGateway.value}
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
            ntp server 207.7.112.14
            ntp server 66.185.175.43
            ntp server 207.7.100.100
            !
            end
            `);
        }
    } else { console.log("Not ASR1001 BVI - Out-of-Market circuit 350M and higher") }
});