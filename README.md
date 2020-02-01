*IPSSI EISI-IT 21.1AW - Ines Jebli & Nolwenn Poilleux* 

# Project insight - nodeJS (back-end)

## Topic

Two types of users have acces to the platform.
* Students rate their teacher's modules.
* Administrators can create, read, update and delete sessions, modules or users. They can see the average sessions scores too.
</br></br>

## URL
```
127.0.0.1:3000
```

## Launch docker
```
docker-compose up
```

## Access to docker
```
docker exec -ti project_node bash
```

## Modify environment variables
Rename the **.env.sample** file to **.env**, and insert your values (JWT_KEY, DB_NAME).
