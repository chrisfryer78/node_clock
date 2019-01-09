# node_clock

JavaScript clock app for Raspberry Pi. When the Pi boots it spins up a very simple nodejs / express webserver then boots up Chromium in kiosk mode and connects to it displaying time and date. An extremely simple program and probably a waste of a good Pi.

Installation

sudo apt update && sudo apt upgrade -y

sudo apt install git nodejs npm

git clone https://github.com/chrisfryer78/node_clock.git

cd node_clock

mv kiosk.desktop /home/pi/.config/autostart/

chmod +x kiosk.sh

npm install

sudo reboot

It's advised that you disable screen blanking:

sudo nano /etc/lightdm/lightdm.conf

And add the following at the bottom.

  [SeatDefaults]
  
  xserver-command=X -s 0 -dpms

Sit back and enjoy your new clock that never needs to be reset again.
