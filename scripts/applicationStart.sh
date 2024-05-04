#!/bin/bash

# Change to your application directory
cd /home/ubuntu/app/

# Install dependencies (if needed)
npm install

# Start your Node.js application with PM2
pm2 reload ./build/server.js

# Save the current PM2 process list so it can be resurrected on server restart
pm2 save

# Optionally, generate an ecosystem file for PM2 (ecosystem.config.js)
pm2 ecosystem
