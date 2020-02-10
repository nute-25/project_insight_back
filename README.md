*IPSSI EISI-IT 21.1AW - Ines Jebli & Nolwenn Poilleux* 

# Project insight - nodeJS (back-end)

## Topic

Two types of users have acces to the platform.
* Students rate their teacher's modules.
* Administrators can create, read, update and delete sessions, modules or users. They can see the average sessions scores too.
</br></br>

## Clone the project using the terminal :
```
git clone git@github.com:nute-25/project_insight_back.git
```

## URL
```
127.0.0.1:3000
```

## Postman :
```
Import postman_collection.json to use prepared queries.
```

Postman acts as an interface. It allows to testing of API without having to use a front-end.

## Launch docker
```
docker-compose up
```
Note : An user’s dataset is generate when you run the docker’s container called project_node.

## Access to docker
```
docker exec -ti project_node bash
```

## Modify environment variables
Rename the **.env.sample** file to **.env**, and insert your values (JWT_KEY, DB_NAME).
