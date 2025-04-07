# Portfolio

Hello there👋🏼👋🏼👋🏼  
This is my personal portfolio project, where I want to display all my projects, exercises, hobbies and more. Basically it is my blog but more formal.

It was developed in a way that I won't need to update the code if i want to add content, this is because all the content is fetched from a Gist on GitHub. The portfolio reads that information and displays it. Obviously, if i want to add more sections i will need to improve the project, but for adding posts, it won´t be necessary.

### Used Technologies:

**-React:** The JavaScript library that speeds up Frontend coding unifying HTML and JavaScript through its component format.

**-TypeScript:** A programming language extended from JavaScript, allowing for more control over variables and data types.

**-TailwindCSS:** A CSS framework that provides a combination of classes (like Bootstrap) and custom CSS properties, with the particularity that we can compile it to create a customized stylesheet with only the necessary styles, considerably decreasing our project's weight for its deployment/production.

## You want to try it?

### Get the repository to your local workspace

First of all you need to clone the repository :
```bash
$ git clone https://github.com/fgamester/portfolio.git
```
Then run the packages installation command:
```bash
$ npm install
```
Additionally you'll have to set an environment variable:
```
VITE_DATA_URL=https://gist.githubusercontent.com/fgamester/d7819ab8dcd914121e12f757d5af7a43/raw/data_example.json
```
This is an example gist that essentially has the model to the data that the project can handle. I'll try to develop a project that could update that file or maybe upload it to a database like MongoDB, I'll keep that in mind.

And finally run the server locally with the following command:
```bash
$ npm run dev
```
The project will be running at port 5173 by default, so you will need to type [`localhost:5173`](http://localhost:5173) on your web browser or click the marked link. If port 5173 is already in use, the command will use the next available port, such as 5174, and so on.

### Go and try deployed on Netlify

Just press this link and go there 👉🏻[Press Me](https://fgamester.netlify.app)👈🏻

### Try it with Docker

If you are a regular user of Docker or just want to try it with this awesome tool, here you have how to do it.

First of all, pull the image with one of these Docker commands:
```bash
$ docker pull fgamester/portfolio:dev1.0.0
```
```bash
$ docker pull fgamester/portfolio
```
>*The first one is a dev version, wich allows you to set an environment variable that specifies the URL from which we want to fetch the data. The second is the built version, which is easier to run because it already includes environment variable.*

Then run a container with the same image:
```bash
$ docker run --name container-name -p 5173:5173 -e VITE_DATA_URL=https://gist.githubusercontent.com/fgamester/d7819ab8dcd914121e12f757d5af7a43/raw/data_example.json -d fgamester/portfolio:dev1.0.0
```
```bash
$ docker run --name container-name -p 3000:3000 -d fgamester/portfolio
```
>*As before, you have two options: dev and built, remember to use the one you chose earlier.*
#### About this command:

`--name`: Allows us to set a custom name for our container, which is highly recommended for easier handling.

`container-name`: If you set `--name` as an option you'll have to write a name next to it, use one that you can easily remember.

`-p`: Required, we need it to allows us to specify a port that we'll be able to connect to our container.

`3000:3000 | 5173:5173`: (dev and built respectively) Required as same as `-p`. The first port is which we will be able to connect by localhost, wich number to use is optional, just make sure is available (not in use by another application). The second is the internal port of the container, it will be always the same, don't change it.

`-e`: This one is essentially optional. Allows us to set environment variables, the project is configured to use optionally one, in case you don't set a value to it, it will use the default information from the example.json contained in the project.

`VITE_DATA_URL=...`: If you choose to set an environment variable before you can set its value after the `=` symbol (without whitespaces). The value showed above is a public GitHub Gist with an example of the data structure. Not setting this variable will make the project to use the default data from the example.json file contained in the project.

`-d`: Optional, run the container in `detach` mode (background). In this mode the only way to stop the container is by the terminal command or at the Docker interface. Not using it will cause the container to stop when the terminal is closed.

`fgamester/portfolio:dev1.0.0 | fgamester/portfolio`: This is the image name we pulled earlier, don't change it.

After this the terminal will respond with a container ID. Now you can go to [`localhost:3000`](http://localhost:3000) or whatever were the port you specify to expose the container.

Whenever you want to stop the container just run the following command:
```bash
$ docker stop <container-name|container-id>
```
>*Here you can stop the container by typing its name or id, if you set a name before I recommend to use it.*