#!/bin/bash

# Stop existing processes
# pm2 stop server

# Backup configuration files
# cp /path/to/your/config/config.json /path/to/backup/config.json.bak

# Remove temporary files
# rm -rf /path/to/your/app/temp
echo "Node.js version: $(node -v)"
echo "npm version: $(npm -v)"

# Install Node.js dependencies
cd /var/www/myapp


echo "path=>>>>: $(pwd)"
echo "path=>>>>: $(ls)"
npm install

