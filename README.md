
## TODO

# simple todo list in Single component

12-02-2025
1. add edit option for the added todo

13-02-2025
1. Clear the caches of the todos in input while add todo , 
    clear the caches of the todo enable boolean , todo text , todo id while edit
2. Add checkbox to the todo while click that the status will changed to completed,
3. then the task title will be striked out for the completed todo ,

14-02-2025
1. New component added 
2. Changes for the simple todo move to that component
3. UI changes
4. Dynamic component list  

15-02-2025
1. Build and deployed in gh-pages
2. npm package added - angular-cli-ghpages 

16-02-2025:
1. ng build --output-path=dist/todo-one --base-href "/todo/"
2. npx angular-cli-ghpages --dir=dist/todo-one/browser

17-02-2025: Docker changes:
1. Dockerfile - before build do ng build
2. build as docker : docker build -t todo-app .
3. run from docker : docker run -p 8080:80 todo-app
4. The above 3rd command will be run the image in https://localhost:8080
5. Build the Docker Image - docker build -t todo-app .
6. Save the Image as a Tar File - docker save -o todo-app.tar todo-app
7. the above command will be create the docker image file with .tar extension 
8. we can share the .tar file to another systme with docker
9. Load the Image on the Other System - docker load -i todo-app.tar
10. Verify the Image on the New System - docker images
11. Run the Container on the Other System - docker run -p 8080:80 todo-app

25-02-2025 Git Merge commands: 
1. git checkout main
2. git merge your-branch
3. git push origin main
