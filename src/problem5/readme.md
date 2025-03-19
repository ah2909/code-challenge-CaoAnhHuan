## Running the Backend Server  
Follow these steps to configure and run the application using the provided commands: 
1. **Clone the repository:** 
   
   ```git clone <repository-url> ``` 

   Replace `<repository-url>` with the actual URL of the GitHub repository. 
2. **Navigate to the project directory:** 
   
   ```cd <project-directory> ``` 
    
3. **Start the Docker containers:** 
   
   ```docker-compose up --build ``` 

   This command builds the Docker images and starts the containers defined in the `docker-compose.yml` file.
4. **Apply database migrations:** 
   
   Open a new terminal window and run: 

   ```docker exec -it backend-server npx prisma migrate dev ```
   
   This command executes the Prisma migration inside the running `backend-server` container to set up the database schema.