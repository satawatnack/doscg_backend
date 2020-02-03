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
            "copyrights": "Map data ©2020 Google",
            "legs": [
                {
                    "distance": {
                        "text": "8.9 กม.",
                        "value": 8929
                    },
                    "duration": {
                        "text": "26 นาที",
                        "value": 1535
                    },
                    "end_address": "999/9 ถนน พระรามที่ ๑ แขวง ปทุมวัน เขตปทุมวัน กรุงเทพมหานคร 10330 ประเทศไทย",
                    "end_location": {
                        "lat": 13.7464548,
                        "lng": 100.5405057
                    },
                    "start_address": "1 ซอย ปูนซีเมนต์ไทย แขวง บางซื่อ เขตบางซื่อ กรุงเทพมหานคร 10800 ประเทศไทย",
                    "start_location": {
                        "lat": 13.8062878,
                        "lng": 100.5375215
                    },
                    "steps": [
                        {
                            "distance": {
                                "text": "58 ม.",
                                "value": 58
                            },
                            "duration": {
                                "text": "1 นาที",
                                "value": 39
                            },
                            "end_location": {
                                "lat": 13.8067442,
                                "lng": 100.5377721
                            },
                            "html_instructions": "มุ่งหน้าทาง<b>ตะวันออกเฉียงเหนือ</b><div style=\"font-size:0.9em\">ถนนที่จำกัดการใช้งาน</div>",
                            "polyline": {
                                "points": "ipgsAofsdRICu@_@YM"
                            },
                            "start_location": {
                                "lat": 13.8062878,
                                "lng": 100.5375215
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "0.3 กม.",
                                "value": 309
                            },
                            "duration": {
                                "text": "2 นาที",
                                "value": 130
                            },
                            "end_location": {
                                "lat": 13.8055697,
                                "lng": 100.5403551
                            },
                            "html_instructions": "เลี้ยว<b>ขวา</b><div style=\"font-size:0.9em\">ถนนที่จำกัดการใช้งาน</div>",
                            "maneuver": "turn-right",
                            "polyline": {
                                "points": "csgsAahsdRNc@Pg@v@cCd@qABMRm@v@_CFSPS"
                            },
                            "start_location": {
                                "lat": 13.8067442,
                                "lng": 100.5377721
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "0.3 กม.",
                                "value": 314
                            },
                            "duration": {
                                "text": "1 นาที",
                                "value": 65
                            },
                            "end_location": {
                                "lat": 13.8030411,
                                "lng": 100.5390916
                            },
                            "html_instructions": "เลี้ยว<b>ขวา</b> เข้าสู่ <b>ถนนรถไฟ 1</b>",
                            "maneuver": "turn-right",
                            "polyline": {
                                "points": "ykgsAgxsdR|BrAXLRHFBFBPFfCdAHB@?VFZHF@P@TFXHJFLF"
                            },
                            "start_location": {
                                "lat": 13.8055697,
                                "lng": 100.5403551
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "0.6 กม.",
                                "value": 623
                            },
                            "duration": {
                                "text": "1 นาที",
                                "value": 70
                            },
                            "end_location": {
                                "lat": 13.7978406,
                                "lng": 100.5372656
                            },
                            "html_instructions": "เลี้ยว<b>ซ้าย</b> เข้าสู่ <b>ถนน เทอดดำริห์</b>",
                            "maneuver": "turn-left",
                            "polyline": {
                                "points": "_|fsAipsdRFMBC@ABABAFAB?B?B?B@D?@@F@PFjBf@jF~AZH\\L`IzBbAZfD~@"
                            },
                            "start_location": {
                                "lat": 13.8030411,
                                "lng": 100.5390916
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "2.6 กม.",
                                "value": 2601
                            },
                            "duration": {
                                "text": "6 นาที",
                                "value": 346
                            },
                            "end_location": {
                                "lat": 13.776158,
                                "lng": 100.5284465
                            },
                            "html_instructions": "ขับต่อไปยัง <b>ถนน เทอดดำริ</b><div style=\"font-size:0.9em\">ผ่าน La Cantine (อีก 1.3&nbsp;กม. ทางขวา)</div>",
                            "polyline": {
                                "points": "o{esA}dsdRj@TNF@?LFbA^`@XVPb@TdBl@fCt@vCdAzAf@jCx@|A`@xAXXA`@LJD`@RJFLHZLVJv@RPHRHXHTDj@Lt@RhDdAdIdCx@PD@^JD@~@\\xAd@JD|@VzBn@`EpA~DpA^J^Jj@Nj@Np@NVFVFB@|A`@rA^NBNDVHf@NXHRFBBRFPF~@ZxAf@j@^fA\\P@H@B@N?l@B\\BJ@l@PnA^\\Jz@VbCx@PBPBl@Pn@TLDHBF@"
                            },
                            "start_location": {
                                "lat": 13.7978406,
                                "lng": 100.5372656
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "2.3 กม.",
                                "value": 2255
                            },
                            "duration": {
                                "text": "6 นาที",
                                "value": 363
                            },
                            "end_location": {
                                "lat": 13.757397,
                                "lng": 100.5205816
                            },
                            "html_instructions": "ขับต่อไปยัง <b>ถนน สวรรคโลก</b>",
                            "polyline": {
                                "points": "_tasAymqdRPHPHHDHBPJTPFBDDHF@?DBZJbA\\RFZHNF@?PDRH\\Jb@Lb@Nd@Nd@NRHVNXHXJNDd@NJD^J~@VPFjA\\vAb@D@~@Zd@NJBDBJBJDPDNDFBF@NDRFD@RFjCv@lCv@|Bp@dXbI|C|@b@LZJPF~C`AhA\\hA\\nA`@nA^FBF@jA\\hA\\`Bf@xAd@H@zAd@B@XHhAb@RHPHVN"
                            },
                            "start_location": {
                                "lat": 13.776158,
                                "lng": 100.5284465
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "1.0 กม.",
                                "value": 1047
                            },
                            "duration": {
                                "text": "3 นาที",
                                "value": 191
                            },
                            "end_location": {
                                "lat": 13.7540264,
                                "lng": 100.5295897
                            },
                            "html_instructions": "เลี้ยว<b>ซ้าย</b> ที่ <b>แยก ยมราช</b> เข้าสู่ <b>ถนน เพชรบุรี</b>",
                            "maneuver": "turn-left",
                            "polyline": {
                                "points": "w~}rAs|odRP[P]@CBE?C@C@ABGDMDKDSBIBIPs@Ja@La@J_@R_ABGPu@BGBM@CFEFW@ABMJ]H]FU@I@??A@GDM@G@O@C?A?A@IV[Je@Je@J_@J_@@GBGFSPq@FSJa@DMBMVcAT_ADK\\sADSFQn@gCR{@DODUFUDQBIBKZmAJa@Le@Nk@BOJa@"
                            },
                            "start_location": {
                                "lat": 13.757397,
                                "lng": 100.5205816
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "1.1 กม.",
                                "value": 1052
                            },
                            "duration": {
                                "text": "2 นาที",
                                "value": 140
                            },
                            "end_location": {
                                "lat": 13.7507675,
                                "lng": 100.5387288
                            },
                            "html_instructions": "ชิด<b>ขวา</b> เพื่อวิ่งบน <b>ถนน เพชรบุรี</b>",
                            "maneuver": "keep-right",
                            "polyline": {
                                "points": "ui}rA}tqdRdB}GBMDMPu@Tw@FYFUZgADO@EBKlAaFBE?CNi@TaABMPo@@IH_@Lm@J]DQ@CH[H]T{@RcAV_AV}@Ni@Li@FQFU@GDOFUJYFY@CRq@DQFSDM@G@ADQBM@ADS"
                            },
                            "start_location": {
                                "lat": 13.7540264,
                                "lng": 100.5295897
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "0.3 กม.",
                                "value": 266
                            },
                            "duration": {
                                "text": "1 นาที",
                                "value": 79
                            },
                            "end_location": {
                                "lat": 13.7500359,
                                "lng": 100.5410566
                            },
                            "html_instructions": "เลี้ยว<b>ซ้าย</b>เล็กน้อย เพื่อวิ่งบน <b>ถนน เพชรบุรี</b>",
                            "maneuver": "turn-slight-left",
                            "polyline": {
                                "points": "iu|rAansdRAM?I?E?CH_@FUBMn@iCBKDMDSH_@FSFWDM@E@E@A@G@GRu@?E"
                            },
                            "start_location": {
                                "lat": 13.7507675,
                                "lng": 100.5387288
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "0.4 กม.",
                                "value": 404
                            },
                            "duration": {
                                "text": "2 นาที",
                                "value": 112
                            },
                            "end_location": {
                                "lat": 13.7464548,
                                "lng": 100.5405057
                            },
                            "html_instructions": "เลี้ยว<b>ขวา</b> ที่ <b>แยก ประตูน้ำ</b> เข้าสู่ <b>ถนน ราชดำริ</b><div style=\"font-size:0.9em\">ปลายทางจะอยู่ทางขวา</div>",
                            "maneuver": "turn-right",
                            "polyline": {
                                "points": "wp|rAs|sdRN@P@PAj@?R@RBD?@?JBl@DhAHJ@J?l@JTDJ@J@R@@?N@`AFvAXH?@@f@D\\BD?TBVB"
                            },
                            "start_location": {
                                "lat": 13.7500359,
                                "lng": 100.5410566
                            },
                            "travel_mode": "DRIVING"
                        }
                    ],
                    "traffic_speed_entry": [],
                    "via_waypoint": []
                }
            ],
            "overview_polyline": {
                "points": "ipgsAofsdR_Ac@YMNc@hAkDd@qAvAoEPS|BrAl@VhDtA~@TXBn@PXNJQPGN@`@JrJpCjQdFjAd@bA^`@Xz@f@dBl@fCt@rFlBjCx@|A`@xAXXAl@Rl@Zh@VnA^d@Rn@N`B`@nNjEdB`@bF`B|O~EzHnBjCr@xAd@~DrAj@^fA\\ZB~AHfD~@~DpAb@FtBp@t@Zx@d@VPnCz@bEpAx@Xp@XzAf@`KzCvi@`Pn`@pL~Af@bBl@d@RVNP[Ra@BIFMdAyDt@}CFUHIXeAT}@Lu@?A@IV[VkAV_A^uA\\qAbDmMhAsEnDsNzCsLjDyNdBqGdAsDH[DODSAM?OHc@~@yDn@gCXgA?EN@P@|@Af@DRBnCPzATfBJ`BXh@FpAJ"
            },
            "summary": "ถนน เทอดดำริ, ถนน สวรรคโลก และ ถนน เพชรบุรี",
            "warnings": [],
            "waypoint_order": []
        }
    ],
    "status": "OK"
}
```
