# Use Node.js as base image
FROM node:latest

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package.json .
COPY package-lock.json .

# Install dependencies using npm
RUN npm install

# Copy all files from the current directory to the working directory
COPY . .

# Expose port 3000 (or the port your Vite server runs on)
EXPOSE 3000

# Command to start the application
CMD ["npm", "run", "dev"]
 