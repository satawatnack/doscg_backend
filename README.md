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

##### finding XYZ ( หาค่า X, Y และ Z จากสมการ X, Y, 5, 9, 15, 23, Z )
- GET localhost:3000/1
- return ex.
```json
{
    "x": 3,
    "y": 3,
    "z": 33
}
```


##### finding BC ( หาค่า B และ C  จากสมการ A = 21, A + B = 23, A + C = -21 )
- GET localhost:3000/2
- return ex.
```json
{
    "a": 21,
    "b": 2,
    "c": -42
}
```
##### finding distance ( ค้นหาวิธีที่ดีที่สุดในการไป Central World จาก SCG Bangsue )
- GET localhost:3000/3
- return ex.
```json
{
    "geocoded_waypoints": [
        {
            "geocoder_status": "OK",
            "place_id": "ChIJe5WIpnOc4jARoEQ-IqXo9HA",
            "types": [
                "establishment",
                "point_of_interest"
            ]
        },
        {
            "geocoder_status": "OK",
            "place_id": "ChIJ4VX0ws-e4jARBGaQ2IACrcQ",
            "types": [
                "establishment",
                "point_of_interest",
                "shopping_mall"
            ]
        }
    ],
    "routes": [
        {
            "bounds": {
                "northeast": {
                    "lat": 13.8067442,
                    "lng": 100.5410566
                },
                "southwest": {
                    "lat": 13.7464548,
                    "lng": 100.5205816
                }
            },
            
                ...
```
