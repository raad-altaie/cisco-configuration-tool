// Third continue btn
btn2.addEventListener('click', function () {
  
    var selectEq = eqList.options[eqList.selectedIndex].value;
    if (selectEq == "AT&T ASE - 2811") {
      clearAllInputs();
        //form validation
        if (validateInputs(ase2811Classes) == false) {
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
        no service pad
        no service config
        service tcp-keepalives-in
        service tcp-keepalives-out
        service timestamps debug datetime localtime
        service timestamps log datetime localtime
        service password-encryption
        !
        hostname ${clientName.value}-gw01
        !
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
         description Uplink to NLI ${circuitId.value}
         no ip address
         no ip redirects
         no ip unreachables
         no ip proxy-arp
         duplex auto
         speed auto
         no shutdown
        !
        interface FastEthernet0/0.${vlanInt.value}
         encapsulation dot1Q ${vlanEncap.value}
         ip address ${ipAddress0.value} ${subnetMask0.value}
         service-policy output qos-policy
        !
        interface FastEthernet0/1
         description To ${clientInfo.value}-sw01
         ip address ${ipAddress1.value} ${subnetMask1.value}
         no ip redirects
         no ip unreachables
         no ip proxy-arp
         no shutdown
         speed 100
         duplex full
        !
        !
        ip classless
        ip route 0.0.0.0 0.0.0.0 ${defaultGateway.value}
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
    } else { console.log("Not ASE 2811") }
});