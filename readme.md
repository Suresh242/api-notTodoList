# RESTFUL API for not to do list
this api is created from reaCT NOT TO DO FRONTEND Application, here is the repo for tje frontend `...`
## How to run 
1. open your terminal at your development folder
2.Run`git clone...`
3.Run`cd ...`
4.Run `npm install`

Now your server is running at `http//localhost:8000`
## Api details
This server applies the rest full principle to provide API.
all the apoi will follow `<rooturl>/v1/<resources end point>`
### Task API
All the task related transaction of api will ne request through `<rrot url>/v1/task`
|#|PATH|METHOD|IS PRIVATE|DESCRIPTION|
|---|----|-------|--------|-----------|
|1. |'/' | GET   | NO     |This endpoint will return all the task from database|
|2. |'/' | POST  | NO     |Receives an object from the client and stores in the dasbase|
|3. |'/' | PATCH  | NO     |Receives an `_id `of specific object and the data to update|
|4. |'/' |  PUT | NO     |Receives an `_id` and deletes it from database|

