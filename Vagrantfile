Vagrant.configure(2) do |config|

  config.vm.box = "geerlingguy/ubuntu1804"
  config.vm.box_check_update = false
  config.ssh.insert_key = false
  config.ssh.password = "vagrant"
  
  config.vm.network "forwarded_port", guest: 8000, host: 8000, id: "gatsby"
  
  config.ssh.insert_key = false
  config.ssh.password = "vagrant"
  
  config.vm.provider "virtualbox" do |vb|
    vb.memory = "2048"
    vb.cpus = 1
    vb.name = "malakes-odigoi"
    vb.linked_clone = true
  end

  config.vm.provision "shell", inline: <<-SHELL
    echo vagrant:vagrant | /usr/sbin/chpasswd
    apt-get update
    apt-get install git
    curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
    apt-get install nodejs
    npm install -g npx
  SHELL
  
end
