# Use the official Node.js image as the base
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json 
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Build the project (for production)
RUN npm run build

# Expose the preview server port (default: 4173 for Vite)
EXPOSE 4173

# Start the preview server for the built project
CMD ["npm", "run", "preview"]
