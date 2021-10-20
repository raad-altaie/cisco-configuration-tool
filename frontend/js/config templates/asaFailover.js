
btn2.addEventListener('click', function () {
    
    var selectEq = eqList.options[eqList.selectedIndex].value;
    if (selectEq == "ASA 5510 9.1 4G Failover") {
        clearAllInputs();
        //form validation
        if (validateInputs(asaFailoverClasses) == false) {
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
            hostname asa-${clientName.value}-4GFailover
            domain-name example.com
            enable password y8AT9RgfnMZfgK3lrM encrypted
            !
            interface Ethernet0/0
            description Primary Connection (NLI)
            speed 100
            duplex full
            nameif primary-isp
            security-level 0
            ip address ${ipAddress0.value} ${subnetMask0.value}
            !
            interface Ethernet0/1
            speed 100
            duplex full
            nameif inside
            security-level 100
            ip address 192.168.25.1 255.255.255.0 
            !
            interface Ethernet0/2
            description Secondary Connection to 4G Failover
            speed 100
            duplex full
            nameif secondary-isp
            security-level 0
            dhcp client route distance 250
            ip address dhcp setroute 
            !
            interface Ethernet0/3
            shutdown
            no nameif
            no security-level
            no ip address
            !             
            interface Management0/0
            shutdown
            no nameif
            no security-level
            no ip address
            !
            ftp mode passive
            dns domain-lookup primary-isp
            dns domain-lookup secondary-isp
            dns server-group DefaultDNS
            name-server 207.7.100.100
            name-server 8.8.8.8
            name-server 66.171.145.146
            name-server 8.8.4.4
            domain-name example.com
            object network voice-primary-isp
            subnet 192.168.25.0 255.255.255.0
            object network voice-secondary-isp
            subnet 192.168.25.0 255.255.255.0
            access-list OUTSIDE-INBOUND extended permit icmp any any echo-reply 
            access-list OUTSIDE-INBOUND extended permit icmp any any time-exceeded 
            access-list OUTSIDE-INBOUND extended permit icmp any any unreachable 
            access-list OUTSIDE-INBOUND extended permit icmp any any echo 
            pager lines 24
            mtu primary-isp 1500
            mtu inside 1500
            mtu secondary-isp 1500
            no failover
            icmp unreachable rate-limit 1 burst-size 1
            no asdm history enable
            arp timeout 14400
            no arp permit-nonconnected
            !
            object network voice-primary-isp
            nat (inside,primary-isp) dynamic interface
            object network voice-secondary-isp
            nat (inside,secondary-isp) dynamic interface
            access-group OUTSIDE-INBOUND in interface primary-isp
            access-group OUTSIDE-INBOUND in interface secondary-isp
            route primary-isp 0.0.0.0 0.0.0.0 ${defaultGateway.value} 1 track 1
            timeout xlate 3:00:00
            timeout pat-xlate 0:00:30
            timeout conn 1:00:00 half-closed 0:10:00 udp 0:02:00 icmp 0:00:02
            timeout sunrpc 0:10:00 h323 0:05:00 h225 1:00:00 mgcp 0:05:00 mgcp-pat 0:05:00
            timeout sip 0:30:00 sip_media 0:02:00 sip-invite 0:03:00 sip-disconnect 0:02:00
            timeout sip-provisional-media 0:02:00 uauth 0:05:00 absolute
            timeout tcp-proxy-reassembly 0:01:00
            timeout floating-conn 0:00:30
            dynamic-access-policy-record DfltAccessPolicy
            user-identity default-domain LOCAL
            aaa authentication ssh console LOCAL 
            no snmp-server location
            no snmp-server contact
            sla monitor 100
            type echo protocol ipIcmpEcho ${nextHop.value} interface primary-isp
            num-packets 3
            frequency 10
            sla monitor schedule 100 life forever start-time now
            crypto ipsec security-association pmtu-aging infinite
            crypto ca trustpool policy
            !
            track 1 rtr 100 reachability
            telnet timeout 5
            ssh stricthostkeycheck
            ssh timeout 5
            ssh key-exchange group dh-group1-sha1
            console timeout 0
            dhcpd dns 207.7.100.100 66.171.145.146
            dhcpd domain test.com
            !
            dhcpd address 192.168.25.10-192.168.25.250 inside
            dhcpd auto_config secondary-isp interface inside
            dhcpd enable inside
            !
            threat-detection basic-threat
            threat-detection statistics access-list
            no threat-detection statistics tcp-intercept
            username pix password .U6no61ercXarQ48 encrypted
            !
            class-map inspection_default
            match default-inspection-traffic
            !
            !
            policy-map type inspect dns preset_dns_map
            parameters
            message-length maximum client auto
            message-length maximum 512
            policy-map global_policy
            class inspection_default
            inspect dns preset_dns_map 
            inspect ftp 
            inspect h323 h225 
            inspect h323 ras 
            inspect ip-options 
            inspect netbios 
            inspect rsh 
            inspect rtsp 
            inspect skinny  
            inspect esmtp 
            inspect sqlnet 
            inspect sunrpc 
            inspect tftp 
            inspect sip  
            inspect xdmcp 
            !
            service-policy global_policy global
            prompt hostname context 
            no call-home reporting anonymous
            crypto key generate rsa modulus 2048
            !
            end 
            `);
        }
    } else { console.log("Not ASA 5510 9.1 4G Failover") }
});