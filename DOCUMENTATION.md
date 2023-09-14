# api request and response

## ENDPOINTS

`POST` localhost:5000/api

* create a new person in database

### Data

 json playload

 ```json
 {
  "name" : "example",
}
```

### Response

  ```json
  {
    "id": "0daa6434-99cf-4911-b3ce-548c8452ab33",
    "name": "example",
    "updatedAt": "2023-09-14T09:48:45.038Z",
    "createdAt": "2023-09-14T09:48:45.038Z"
}


  ```

  if `name` field isn't in the payload

```json
{ "error": "invalid format" }
```

---

`GET` localhost:5000/api/0daa6434-99cf-4911-b3ce-548c8452ab33

* Get the person if it exists

### Response

* if found

   ```json
    {
    "id": "0daa6434-99cf-4911-b3ce-548c8452ab33",
    "name": "example",
    "updatedAt": "2023-09-14T09:48:45.038Z",
    "createdAt": "2023-09-14T09:48:45.038Z"
  }
  ```

* not found

  ```json
    { "error": "Person not found" }
  ```

---

`PUT` localhost:5000/api/0daa6434-99cf-4911-b3ce-548c8452ab33

* Update the person info if it exists
*

### Data

 json playload

 ```json
 {
  "name" : "new name",
}
```

### Response

* if found

   ```json
    {
    "id": "0daa6434-99cf-4911-b3ce-548c8452ab33",
    "name": "new name",
    "updatedAt": "2023-09-14T09:48:45.038Z",
    "createdAt": "2023-09-14T09:48:45.038Z"
  }
  ```

* not found

  ```json
    { "error": "Person not found" }
  ```

* no `name` field in payload

  ```json
    { "error": "invalid format" }
  ```

---

`DELETE` localhost:5000/api/0daa6434-99cf-4911-b3ce-548c8452ab33

* Delete the person if it exists

### Response

* if found

  ```json
  { "info": "Person deleted successfully" }
  ```

* not found

  ```json
    { "error": "Person not found" }
  ```

---

## Bonus endpoint

`GET` localhost:5000/api

* Get all persons in the database

### Response

```json
[
  {
    "id": "0daa6434-99cf-4911-b3ce-548c8452ab33",
    "name": "example user",
    "updatedAt": "2023-09-14T09:48:45.038Z",
    "createdAt": "2023-09-14T09:48:45.038Z"
},
{
    "id": "0daa6434-99cf-4911-b3ce-548c8452ab24",
    "name": "dummy user",
    "updatedAt": "2023-09-14T09:48:45.038Z",
    "createdAt": "2023-09-14T09:48:45.038Z"
},
...
]
```
