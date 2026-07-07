# Use the official lightweight Node.js image
FROM node:alpine

# Set the working directory
WORKDIR /app

# Copy dependency files
COPY  package.json  ./

# Install project dependencies
RUN npm install

# Copy the application source code
COPY . .

# Expose the backend API port
EXPOSE 5000 

# Start the Express application
CMD ["node","server.js"]


