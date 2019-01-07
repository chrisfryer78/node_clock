# node_clock

JavaScript clock app for Raspberry Pi. When to Pi boots it spins up a very simple nodejs / express webserver then boots up Chromium in kiosk mode and connects to it displaying time and date. An extremely simple program and probably a waste of a good Pi.

Installation

sudo apt update && sudo apt upgrade -y

sudo apt install git nodejs npm

git clone https://github.com/chrisfryer78/node_clock.git

cd node_clock

mv kiosk.desktop /home/pi/.config/autostart/

chmod +x kiosk.sh

npm install

sudo reboot
