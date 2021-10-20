import time
import os
import sys
import paramiko



# method one * take commands from string * 
string_cmds = '''enable
conf t
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
hostname raad-sw-test-sw01
line con 0 
exec-timeout 3
line vty 0 15
exec-timeout 3
end
exit'''


config_cmds = string_cmds.split('\n')

# method two *take commands from external file* 
config_cmds2 = open(r"cmds.txt")

ip = "10.10.55.55"
port= "2011"
username = "h"
password = ""


# connect via SSH
def connect_ssh():
    try:

        ssh = paramiko.SSHClient()
        ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
        ssh.connect(ip, port=port, username=username, password=password)
        remote = ssh.invoke_shell()
        time.sleep(2)
        print("we are connected")

        #This for loop for each commands from config cmds (from the webapp )
        for command in config_cmds2:
            remote.send(' %s \n' % command)
            time.sleep(1)
            print(command)
            #feedback we can use it to send it back to webapp
            # buf = remote.recv(65000)
            # print (buf)
            # f = open(r'sshlog.txt', 'w')
            # f.write(buf)
            # f.close()
        ssh.close()
    except:
        e = sys.exc_info()
        print(e)

connect_ssh()
