# Hacktiv-8 LiveCode Phase 2

This program created for livecode phase 2 on Hacktiv-8

## User Endpoint

| Details        | Method           | Endpoint  |
| ------------- |:-------------:| -----:|
| Register User  | POST  | /api/user/register |
| Login User      | POST  | /api/user/login   |

## Article Endpoint
|Details | Method | Endpoint|
| -- |: --- : | ---: |
|Create Article | POST | /api/article|
|Read Articles | GET | /api/articles|
|Read one article | GET | /api/article/:id|
|Edit article | PUT | /api/article/:id|
|Delete article | DELETE | /api/article/:id|

## How to Install
```
cd client
npm install
npm start

cd ..
cd server
npm run dev

```

Client will run on http://localhost:8080
Server will run on http://localhost:3000
