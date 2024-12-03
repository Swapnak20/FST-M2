# Specify Base Image
FROM docker.io/node:18-alpine
 
# Work Directory
WORKDIR /usr/app
 
#copying dev files into the container
COPY ./ ./

# Install Dependencies
RUN npm install
 
# Startup Command
CMD ["npm", "start"]
