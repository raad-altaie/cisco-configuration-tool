// Third continue btn
btn2.addEventListener('click', function () {
    
    var selectEq = eqList.options[eqList.selectedIndex].value;
    if (selectEq == "Adtran 908 4G Failover") {
        clearAllInputs();
        //form validation
        if (validateInputs(adtranFailoverClasses) == false) {
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
            hostname ${clientName.value}-Adtran-4GFailover
            enable password encrypted 4249f7a58843e8d75c65227db7dd7ca0a167
            !
            clock timezone -8
            !
            ip subnet-zero
            ip classless
            ip routing
            !
            !
            domain-name "example.com"
            name-server 66.185.175.43 66.171.145.146 207.7.112.14 207.7.100.100 
            !       
            !
            no auto-config
            !
            event-history on
            no logging forwarding
            no logging console
            no logging email
            !
            service password-encryption
            !
            username "test" password encrypted "171f91673f42bdacb4068c2154f6ae69bcb2" 
            username "test1" password encrypted "382860c8755f39e623fad55b16812ce60ac2" 
    
            !
            banner motd #
            ********************************************************************************
    
            *             For Support, call 800-500-0000
    
            *             Company Name -- Expect more... We do!!
    
            ********************************************************************************
    
            #
            !
            !
            no ip firewall alg msn
            no ip firewall alg mszone
            no ip firewall alg h323
            !
            !
            !
            !
            !
            no dot11ap access-point-control
            !
            !
            !
            probe WAN1 icmp-echo
            destination ${nextHop.value}
            period 3
            tolerance consecutive fail 5 pass 5
            no shutdown
            !
            track WAN1
            test if probe WAN1 
            no shutdown
            !
            !
            !
            !
            !
            !
            !
            !
            !
            !
            !
            !
            interface eth 0/1
            description Trunk Connection to ${clientName.value}
            encapsulation 802.1q
            no shutdown
            !
            !
            interface eth 0/1.10
            description Primary Connection (NLI)
            vlan-id 10
            ip address ${ipAddress0.value} ${subnetMask0.value}
            media-gateway ip primary
            no shutdown 
            !
            interface eth 0/1.40
            description 4G Failover Connection
            vlan-id 40
            ip address dhcp 250
            media-gateway ip primary
            no shutdown 
            !
            !
            !
            interface t1 0/1
            shutdown
            !
            interface t1 0/2
            tdm-group 1 timeslots 1-24 speed 64
            no shutdown
            !
            !
            interface pri 1
            description pri 1
            isdn name-delivery setup
            connect t1 0/2 tdm-group 1
            no shutdown
            !
            !
            interface fxs 0/1
            no shutdown
            !
            interface fxs 0/2
            no shutdown
            !
            interface fxs 0/3
            no shutdown
            ! 647953
            interface fxs 0/4
            no shutdown
            !
            interface fxs 0/5
            no shutdown
            !
            interface fxs 0/6
            no shutdown
            !       
            interface fxs 0/7
            no shutdown
            !
            interface fxs 0/8
            no shutdown
            !
            !
            isdn-group 1
            connect pri 1
            !
            !
            !
            !
            timing-source internal
            !
            timing-source internal secondary
            !
            !
            !
            ip access-list standard deny-ntp
            remark use to secure NTP
            !
            ip access-list standard permit-sip-nms
            remark Only Allow SIP packets from NMS servers
            permit host 66.185.167.133
            permit host 66.171.145.244
            !
            ip access-list standard SSH
            permit 63.210.161.0 0.0.0.127
            permit 63.210.162.0 0.0.1.255
            permit 63.214.180.0 0.0.1.255
            permit 64.154.92.0 0.0.3.255
            permit 64.156.197.128 0.0.0.127
            permit 64.156.199.0 0.0.0.255
            permit 66.171.144.0 0.0.15.255
            permit 66.185.160.0 0.0.15.255
            permit 166.90.14.0 0.0.1.255
            permit 207.7.96.0 0.0.31.255
            !
            !
            !
            !
            ip route 0.0.0.0 0.0.0.0 ${defaultGateway.value} track WAN1
            ip route ${nextHop.value} 255.255.255.255 ${defaultGateway.value}
            !
            no tftp server
            no tftp server overwrite
            no http server
            no http secure-server
            no snmp agent
            no ip ftp server
            no ip scp server
            no ip sntp server
            !
            !
            !
            !
            !
            !
            !
            !
            sip
            sip udp 5060
            no sip tcp
            !
            !
            !
            voice feature-mode network
            voice forward-mode network
            !
            !
            !
            !
            !
            !
            !
            !
            !
            !
            !
            !
            voice codec-list nms-codec-list
            default 
            codec g729
            codec g711ulaw
            !
            !
            !
            voice trunk T01 type sip
            description "Company SIP Trunk"
            reject-external
            caller-id-override emergency-outbound ${tenDigitNumber.value} 
            match dnis "NXX-XXXX" substitute "1${areaCode.value}NXX-XXXX"
            match dnis "NXX-NXX-XXXX" substitute "1NXX-NXX-XXXX"
            match dnis "933" replace ani "${tenDigitNumber.value}"
            sip-server primary nms.test.com
            sip-server rollover service-unavailable-or-timeout
            sip-server validation register
            registrar threshold absolute 5
            domain "testdomain.test.com"
            register ${clientName.value}-Adtran-4GFailover auth-name "${clientName.value}-Adtran-4GFailover" password "${nmsAuth.value}"
            codec-list nms-codec-list both
            grammar from host domain
            !
            voice trunk T02 type isdn
            description "PRI"
            resource-selection linear ascending
            connect isdn-group 1
            rtp delay-mode adaptive
            codec-list nms-codec-list
            !
            !
            voice grouped-trunk T01
            description "Company Trunk Group"
            trunk T01
            accept $ cost 0
            !
            !
            voice grouped-trunk PRI
            description "PRI to test PBX"
            trunk T02
            accept $ cost 0
            !
            !
            !
            !
            !
            !
            !
            !
            !
            !
            sip access-class ip "permit-sip-nms" in
            !
            !
            no sip registrar authenticate
            sip registrar min-expires 1800
            sip registrar max-expires 7200
            sip registrar realm domain
            !
            !
            !
            !
            !
            !
            !
            !
            !
            !
            sip grammar from host local
            !
            !
            !
            !
            !
            !
            !
            line con 0
            login local-userlist
            !       
            line telnet 0 4
            login
            shutdown
            line ssh 0 4
            login local-userlist
            no shutdown
            ip access-class SSH in
            !
            !
            ntp ip access-class deny-ntp in
            ntp peer ntp1.test.com
            ntp peer ntp2.test.com
            ntp peer ntp3.test.com
            !
            !
            !
            end`);
        }
    } else { console.log("Not Adtran 908 4G Failover") }
});