# Hngx stage 2 backend task

### The task
You are to build a simple REST API capable of CRUD operations on a "person" resource, interfacing with any database of your choice. Your API should dynamically handle parameters, such as adding or retrieving a person by name. Accompany the development with UML diagrams to represent your system's design and database structure.  Host your entire project on GitHub, and provide a well-structured documentation in the repository that outlines request/response formats, setup instructions, and sample API us

## SETUP

To run locally, first clone the repo to your local computer

```bash
git clone https://github.com/jojothomas1515/hngx-stage2.git
```

go into the folder and install the the required node packages

```bash
cd hngx-stage2
npm install
```

you need to have database server running either locally or online

you can create a free online postgress database on [render](https://render.com/)

if you choose to use another database please make sure your install the database driver, but if you're using postgres the needed driver is already included in the package.json dependecies

Your database information need to be in this uri form

```dialect://username:password@host/database_name```

export a DBURL environmental variable as this is needed for the server to connect to the database, like so:

```bash
export DBURL=postgres://dummyuname:password@localhost/hng
```

Finally run the server

```bash
npm start
```
