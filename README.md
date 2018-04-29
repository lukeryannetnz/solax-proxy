# solax-proxy
A proxy that intercepts traffic from Solax power inverters. 

## what does this do?
Listens to all traffic, intercepts http calls that solax power inverters make to send sensor data back to the solax portal. After interrogating intercepted calls, proxies them on to the solax-portal.com domain transparently.

Currently it only logs UploadSensor data to the console, but could easily be adapted to call out to your own smart home system.

## how do I use it?
- clone this repo
- install [node js 8.11.1](https://nodejs.org/en/download/)
- run the following commands from the terminal
  * `npm i`
  * `npm run app.js`
- point DNS for solax-portal.com to the ip address of the machine running this app for the network where your solax power inverter is running
