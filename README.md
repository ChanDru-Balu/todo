
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

16-02-2025: (Put into live with ghpages)
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

25-02-2025 Built-in-control-flow :
1. built-in-control-flow component created
2. component added into the routing from homes

01-03-2025:
1. Built in control flow characters integrated
    1. @if , @else
    2. @for
2. For the ng-build find the method to push into the gh-pages (sometimes unnecessary , useful only 16-02-2025 failed)
    On Angular 17, you could just run ng build because by default, the ng build command uses the production configuration

    That would generate dist/[projectname]/browser which i noticed contains all the assets for the project. So what I did was

        1. Before ng build, on index.html modify < base href="/" > and remove the /

        2. Run ng build

        3. Move the contents of dist/[projectname]/browser to dist/[projectname]

        4. cd dist/[projectname] and run http-server -p [portnumber]

        5. you'll land on index of, refresh the page and it should show up

        Edit: You can keep the /, just cd to dist/[projectname]/browser

3. Deferable Changes added :
    For :
    Optimized Performance: The list won't be rendered until necessary.
    Improved UX: Provides loading and empty state handling.
    Reduces Initial Load Time: Helps avoid rendering an empty list.
    
    Key Characteristics are:
    1. @defer(when...){}
    2. @loading(){}
    3. @placeholder(){}


03-02-2025 :
1. Angular signal - new changes
2. Interface and Enum

03-02-2025 :
New branch is created for the Forms , Services and Subjects in it 
1. init the branch with built-in control flow ,
2. add interfaces and ENUMs