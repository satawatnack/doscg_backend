# doscg_backend

> Assignment for Web developer (Internship Program) back-end

## Build Setup

1. Installing Redis
- On Windows -> download at <https://github.com/dmajkic/redis/downloads>
- On Mac
``` bash
brew install redis
```
2. Install dependencies
``` bash
npm install
```
3. Start the Redis server
- On Windows -> double-clicking on the redis-server
- On Mac
``` bash
redis-server
```
4. serve with hot reload at localhost:3000
``` bash
npm run dev
```
---

## DOSCG Service

#### finding XYZ ( หาค่า X, Y และ Z จากสมการ X, Y, 5, 9, 15, 23, Z )
- GET /1

#### finding BC ( หาค่า B และ C  จากสมการ A = 21, A + B = 23, A + C = -21 )
- GET /2

#### finding distance ( ค้นหาวิธีที่ดีที่สุดในการไป Central World จาก SCG Bangsue )
- GET /3
