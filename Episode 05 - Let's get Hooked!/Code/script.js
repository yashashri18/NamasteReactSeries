import React from "react"
import ReactDOM  from "react-dom/client"

const Title = () => {
    return(
        <a href="/">
        <img className="logo" src="data:image/png;base64,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" alt="Description of the image" />
        </a>
    )
}

const Header = () => {
    return(
        //inline styling
        <div style={{ border:"1px solid black"} }className="header">
            <Title/>  
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const restaurantList = [
        {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "3854",
        "name": "Uncle's Chinese",
        "uuid": "b526bcfa-20f4-4fe9-b0a6-3192b80c135d",
        "city": "6",
        "area": "Kondhwa",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "t1mywsh2jzerwiofwj8q",
        "cuisines": [
        "Chinese",
        "Thai",
        "Indonesian",
        "Beverages",
        "Desserts"
        ],
        "tags": [],
        "costForTwo": 45000,
        "costForTwoString": "₹450 FOR TWO",
        "deliveryTime": 40,
        "minDeliveryTime": 40,
        "maxDeliveryTime": 40,
        "slaString": "40 MINS",
        "lastMileTravel": 6.5,
        "slugs": {
        "restaurant": "china-toss-kalyani-nagar",
        "city": "pune"
        },
        "cityState": "6",
        "address": "Mohit Towers, Sahaney Sujan Park, Lullanagar, Bibvewadi, Pune 411040",
        "locality": "Kondhwa",
        "parentId": 219488,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "ribbon": [
        {
        "type": "PROMOTED"
        }
        ],
        "chain": [],
        "feeDetails": {
        "fees": [
        {
        "name": "distance",
        "fee": 5600,
        "message": ""
        },
        {
        "name": "time",
        "fee": 0,
        "message": ""
        },
        {
        "name": "special",
        "fee": 0,
        "message": ""
        }
        ],
        "totalFees": 5600,
        "message": "",
        "title": "Delivery Charge",
        "amount": "5600",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6628401~p=1~eid=00000188-6718-9c8f-7f66-3eea00a60174",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "6.5 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹499",
        "discountTag": "FLAT DEAL",
        "headerTypeV2": 0
        },
        "sla": {
        "restaurantId": "3854",
        "deliveryTime": 40,
        "minDeliveryTime": 40,
        "maxDeliveryTime": 40,
        "lastMileTravel": 6.5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.2",
        "totalRatings": 10000,
        "new": false
        },
        "subtype": "basic"
        },
        {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "25486",
        "name": "MH 12 Pav Bhaji",
        "uuid": "bd5c545b-4088-4cdc-90d6-12ae59e3b84c",
        "city": "6",
        "area": "Rasta Peth",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "cgf7qsoqsvfwletamxt4",
        "cuisines": [
        "Snacks",
        "Pizzas",
        "Beverages",
        "Street Food"
        ],
        "tags": [],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 25,
        "minDeliveryTime": 25,
        "maxDeliveryTime": 25,
        "slaString": "25 MINS",
        "lastMileTravel": 1.2000000476837158,
        "slugs": {
        "restaurant": "mh-12-pav-bhaji-rasta-peth-swargate",
        "city": "pune"
        },
        "cityState": "6",
        "address": "326, Near Laxmi Sugandhalay, Rasta Peth, Pune",
        "locality": "",
        "parentId": 8970,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "chain": [],
        "feeDetails": {
        "fees": [
        {
        "name": "distance",
        "fee": 3200,
        "message": ""
        },
        {
        "name": "time",
        "fee": 0,
        "message": ""
        },
        {
        "name": "special",
        "fee": 0,
        "message": ""
        }
        ],
        "totalFees": 3200,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3200",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "1.2 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
        "header": "10% OFF",
        "subHeader": "UPTO ₹40",
        "discountTag": "",
        "headerTypeV2": 0
        },
        "sla": {
        "restaurantId": "25486",
        "deliveryTime": 25,
        "minDeliveryTime": 25,
        "maxDeliveryTime": 25,
        "lastMileTravel": 1.2000000476837158,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.1",
        "totalRatings": 10000,
        "new": false
        },
        "subtype": "basic"
        },
        {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "25396",
        "name": "Oven Story Pizza",
        "uuid": "e80fa0ae-d702-4ac7-adc4-76590e2409ab",
        "city": "6",
        "area": "Narayan Peth",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "ab979bffbd658e74de650a15ca0092a3",
        "cuisines": [
        "Pizzas",
        "Pastas",
        "Italian",
        "Desserts",
        "Beverages"
        ],
        "tags": [],
        "costForTwo": 40000,
        "costForTwoString": "₹400 FOR TWO",
        "deliveryTime": 35,
        "minDeliveryTime": 30,
        "maxDeliveryTime": 40,
        "slaString": "30-40 MINS",
        "lastMileTravel": 0.4000000059604645,
        "slugs": {
        "restaurant": "ovenstory-pizza-model-colony-swargate",
        "city": "pune"
        },
        "cityState": "6",
        "address": "S.no 457, Near V S Waikar & Sons Jewellers, Shaniwar Peth ,Pune 411030",
        "locality": "Shaniwar Peth",
        "parentId": 3534,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "chain": [],
        "feeDetails": {
        "fees": [
        {
        "name": "distance",
        "fee": 3200,
        "message": ""
        },
        {
        "name": "time",
        "fee": 0,
        "message": ""
        },
        {
        "name": "special",
        "fee": 0,
        "message": ""
        }
        ],
        "totalFees": 3200,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3200",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "0.4 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120",
        "discountTag": "",
        "headerTypeV2": 0
        },
        "sla": {
        "restaurantId": "25396",
        "deliveryTime": 35,
        "minDeliveryTime": 30,
        "maxDeliveryTime": 40,
        "lastMileTravel": 0.4000000059604645,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.3",
        "totalRatings": 1000,
        "new": false
        },
        "subtype": "basic"
        },
        {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "576559",
        "name": "Third Wave Coffee",
        "uuid": "bba7640f-6b0c-493b-a260-3a05986a07ee",
        "city": "6",
        "area": "Karve Nagar",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "0dca660dbdf2e04f9b861c4426ffd41e",
        "cuisines": [
        "Beverages",
        "Fast Food",
        "Snacks"
        ],
        "tags": [],
        "costForTwo": 40000,
        "costForTwoString": "₹400 FOR TWO",
        "deliveryTime": 35,
        "minDeliveryTime": 35,
        "maxDeliveryTime": 35,
        "slaString": "35 MINS",
        "lastMileTravel": 4.699999809265137,
        "slugs": {
        "restaurant": "third-wave-coffee-kothrud-kothrud",
        "city": "pune"
        },
        "cityState": "6",
        "address": "SHOWROOM NO 1, GR FLOOR (MEZZANINE + BASEMENT) ,CASABLANCA APARTMENTS CONDOMINIUM, SY NO 16, NEAR KARISHMA COMPLEX ROAD, KOTHRUD, PUNE, Pune, Maharashtra-411029",
        "locality": "Late GA Kulkarni Path",
        "parentId": 274773,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "ribbon": [
        {
        "type": "PROMOTED"
        }
        ],
        "chain": [],
        "feeDetails": {
        "fees": [
        {
        "name": "distance",
        "fee": 4400,
        "message": ""
        },
        {
        "name": "time",
        "fee": 0,
        "message": ""
        },
        {
        "name": "special",
        "fee": 0,
        "message": ""
        }
        ],
        "totalFees": 4400,
        "message": "",
        "title": "Delivery Charge",
        "amount": "4400",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6622124~p=4~eid=00000188-6718-9c8f-7f66-3eeb00a60448",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "4.6 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
        "header": "30% OFF",
        "subHeader": "UPTO ₹75",
        "discountTag": "",
        "headerTypeV2": 0
        },
        "sla": {
        "restaurantId": "576559",
        "deliveryTime": 35,
        "minDeliveryTime": 35,
        "maxDeliveryTime": 35,
        "lastMileTravel": 4.699999809265137,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.5",
        "totalRatings": 100,
        "new": false
        },
        "subtype": "basic"
        },
        {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "6239",
        "name": "Chaitanya Paranthas",
        "uuid": "4d77127d-9e97-4f7b-b854-6785ee75e8a7",
        "city": "6",
        "area": "Shivajinagar",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "xofljpukrkkbftsjospa",
        "cuisines": [
        "North Indian",
        "Punjabi",
        "Chinese",
        "Thalis",
        "Beverages",
        "Desserts"
        ],
        "tags": [],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 29,
        "minDeliveryTime": 29,
        "maxDeliveryTime": 29,
        "slaString": "29 MINS",
        "lastMileTravel": 1.899999976158142,
        "slugs": {
        "restaurant": "chaitanya-paranthas-fc-road-shivaji-nagar",
        "city": "pune"
        },
        "cityState": "6",
        "address": "Opposite Fergusson College gate 3, Tukaram Paduka Chowk, FC Road, Pune",
        "locality": "FC Road",
        "parentId": 236,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "chain": [],
        "feeDetails": {
        "fees": [
        {
        "name": "distance",
        "fee": 3200,
        "message": ""
        },
        {
        "name": "time",
        "fee": 0,
        "message": ""
        },
        {
        "name": "special",
        "fee": 0,
        "message": ""
        }
        ],
        "totalFees": 3200,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3200",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "1.8 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80",
        "discountTag": "",
        "headerTypeV2": 0
        },
        "sla": {
        "restaurantId": "6239",
        "deliveryTime": 29,
        "minDeliveryTime": 29,
        "maxDeliveryTime": 29,
        "lastMileTravel": 1.899999976158142,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.1",
        "totalRatings": 10000,
        "new": false
        },
        "subtype": "basic"
        },
        {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "16847",
        "name": "Behrouz Biryani",
        "uuid": "8a69f582-fcda-45c7-a3ba-0951cfecb1ab",
        "city": "6",
        "area": "Shaniwar Peth",
        "totalRatingsString": "5000+ ratings",
        "cloudinaryImageId": "vxf5oi05sinexpmo3pgn",
        "cuisines": [
        "Biryani",
        "Mughlai",
        "Lucknowi",
        "Hyderabadi",
        "Kebabs",
        "North Indian",
        "Desserts",
        "Beverages"
        ],
        "tags": [],
        "costForTwo": 50000,
        "costForTwoString": "₹500 FOR TWO",
        "deliveryTime": 34,
        "minDeliveryTime": 34,
        "maxDeliveryTime": 34,
        "slaString": "34 MINS",
        "lastMileTravel": 0.5,
        "slugs": {
        "restaurant": "behrouz-biryani-senapati-bapat-road-shivaji-nagar",
        "city": "pune"
        },
        "cityState": "6",
        "address": "S.no 457 shaniwar peth ,Pune 411030",
        "locality": "Senapati Bapat Road",
        "parentId": 1803,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "chain": [],
        "feeDetails": {
        "fees": [
        {
        "name": "distance",
        "fee": 3200,
        "message": ""
        },
        {
        "name": "time",
        "fee": 0,
        "message": ""
        },
        {
        "name": "special",
        "fee": 0,
        "message": ""
        }
        ],
        "totalFees": 3200,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3200",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "0.5 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100",
        "discountTag": "",
        "headerTypeV2": 0
        },
        "sla": {
        "restaurantId": "16847",
        "deliveryTime": 34,
        "minDeliveryTime": 34,
        "maxDeliveryTime": 34,
        "lastMileTravel": 0.5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.3",
        "totalRatings": 5000,
        "new": false
        },
        "subtype": "basic"
        },
        {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "243625",
        "name": "KFC",
        "uuid": "150d920f-9d03-4e83-9cbc-934e15d0a161",
        "city": "6",
        "area": "JM Road",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
        "cuisines": [
        "Burgers",
        "Biryani",
        "American",
        "Snacks",
        "Fast Food"
        ],
        "tags": [],
        "costForTwo": 40000,
        "costForTwoString": "₹400 FOR TWO",
        "deliveryTime": 32,
        "minDeliveryTime": 32,
        "maxDeliveryTime": 32,
        "slaString": "32 MINS",
        "lastMileTravel": 2,
        "slugs": {
        "restaurant": "kfc-shop-no-1-to-4-gf-deccan-mall-jm-marg-opposite-to-deccan-pmt-bus-stand-shivaji-nagar",
        "city": "pune"
        },
        "cityState": "6",
        "address": "Shop No 1 to 4, GF, Deccan Mall JM Marg Opposite To Deccan PMT Bus stand, Maharashtra 411004",
        "locality": "R Deccan Mall",
        "parentId": 547,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "ribbon": [
        {
        "type": "PROMOTED"
        }
        ],
        "chain": [],
        "feeDetails": {
        "fees": [
        {
        "name": "distance",
        "fee": 3200,
        "message": ""
        },
        {
        "name": "time",
        "fee": 0,
        "message": ""
        },
        {
        "name": "special",
        "fee": 0,
        "message": ""
        }
        ],
        "totalFees": 3200,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3200",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6808153~p=7~eid=00000188-6718-9c8f-7f66-3eec00a6073f",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "2 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
        "header": "30% OFF",
        "subHeader": "UPTO ₹75",
        "discountTag": "",
        "headerTypeV2": 0
        },
        "sla": {
        "restaurantId": "243625",
        "deliveryTime": 32,
        "minDeliveryTime": 32,
        "maxDeliveryTime": 32,
        "lastMileTravel": 2,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.0",
        "totalRatings": 1000,
        "new": false
        },
        "subtype": "basic"
        },
        {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "56514",
        "name": "Neha's Yummy Cafe",
        "uuid": "d905f4aa-83fc-420b-bbf2-76bdb86b6420",
        "city": "6",
        "area": "Shaniwar Peth",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "ciycaw241uwy7xbvdxzi",
        "cuisines": [
        "Fast Food"
        ],
        "tags": [],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 30,
        "minDeliveryTime": 30,
        "maxDeliveryTime": 30,
        "slaString": "30 MINS",
        "lastMileTravel": 0.20000000298023224,
        "slugs": {
        "restaurant": "nehas-yummy-cafe-shaniwar-peth-swargate",
        "city": "pune"
        },
        "cityState": "6",
        "address": "Opposite Shaniwar Wada, Shaniwar Peth, Pune",
        "locality": "Bajirav Road",
        "parentId": 145470,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "chain": [],
        "feeDetails": {
        "fees": [
        {
        "name": "distance",
        "fee": 3200,
        "message": ""
        },
        {
        "name": "time",
        "fee": 0,
        "message": ""
        },
        {
        "name": "special",
        "fee": 0,
        "message": ""
        }
        ],
        "totalFees": 3200,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3200",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "0.2 kms",
        "hasSurge": false,
        "sla": {
        "restaurantId": "56514",
        "deliveryTime": 30,
        "minDeliveryTime": 30,
        "maxDeliveryTime": 30,
        "lastMileTravel": 0.20000000298023224,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.7",
        "totalRatings": 100,
        "new": false
        },
        "subtype": "basic"
        },
        {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "18808",
        "name": "Faasos - Wraps & Rolls",
        "uuid": "e4e6312a-96fd-4e7c-b924-e109cf7df89a",
        "city": "6",
        "area": "Shaniwar Peth",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "85c20ed30425350ac5ee96f10d5d1329",
        "cuisines": [
        "Kebabs",
        "Fast Food",
        "Snacks",
        "North Indian",
        "American",
        "Healthy Food",
        "Desserts",
        "Beverages"
        ],
        "tags": [],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 31,
        "minDeliveryTime": 31,
        "maxDeliveryTime": 31,
        "slaString": "31 MINS",
        "lastMileTravel": 0.5,
        "slugs": {
        "restaurant": "fassos-subhamangal-housing-society-shivaji-nagar",
        "city": "pune"
        },
        "cityState": "6",
        "address": "S.no 457 shaniwar peth ,Pune 411030",
        "locality": "Shaniwar Peth FC",
        "parentId": 21809,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "chain": [],
        "feeDetails": {
        "fees": [
        {
        "name": "distance",
        "fee": 3200,
        "message": ""
        },
        {
        "name": "time",
        "fee": 0,
        "message": ""
        },
        {
        "name": "special",
        "fee": 0,
        "message": ""
        }
        ],
        "totalFees": 3200,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3200",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "0.5 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹299",
        "discountTag": "FLAT DEAL",
        "headerTypeV2": 0
        },
        "sla": {
        "restaurantId": "18808",
        "deliveryTime": 31,
        "minDeliveryTime": 31,
        "maxDeliveryTime": 31,
        "lastMileTravel": 0.5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.3",
        "totalRatings": 10000,
        "new": false
        },
        "subtype": "basic"
        },
        {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "491702",
        "name": "NAADBRAMHA IDLI",
        "uuid": "cb7035f8-ee39-4707-8e8a-1ac65c32af1d",
        "city": "6",
        "area": "Swargate",
        "totalRatingsString": "50+ ratings",
        "cloudinaryImageId": "ydrbvdsobyfzyapbkdmj",
        "cuisines": [
        "South Indian"
        ],
        "tags": [],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 31,
        "minDeliveryTime": 31,
        "maxDeliveryTime": 31,
        "slaString": "31 MINS",
        "lastMileTravel": 0.30000001192092896,
        "slugs": {
        "restaurant": "naadbramha-idli-swargate-swargate",
        "city": "pune"
        },
        "cityState": "6",
        "address": "Shop No.3 ,Ground floor H.No.184 A/MP 2, Shivaji road,Kasba peth,pune-411011",
        "locality": "Rasta Peth",
        "parentId": 251339,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "chain": [],
        "feeDetails": {
        "fees": [
        {
        "name": "distance",
        "fee": 3200,
        "message": ""
        },
        {
        "name": "time",
        "fee": 0,
        "message": ""
        },
        {
        "name": "special",
        "fee": 0,
        "message": ""
        }
        ],
        "totalFees": 3200,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3200",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "0.3 kms",
        "hasSurge": false,
        "sla": {
        "restaurantId": "491702",
        "deliveryTime": 31,
        "minDeliveryTime": 31,
        "maxDeliveryTime": 31,
        "lastMileTravel": 0.30000001192092896,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.6",
        "totalRatings": 50,
        "new": false
        },
        "subtype": "basic"
        },
        {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "62934",
        "name": "LunchBox - Meals and Thalis",
        "uuid": "adc8ae31-eff6-406f-b5ab-541eb74f4e3d",
        "city": "6",
        "area": "Narayan Peth",
        "totalRatingsString": "5000+ ratings",
        "cloudinaryImageId": "chs0jbyj2osyqumr1wiu",
        "cuisines": [
        "Biryani",
        "North Indian",
        "Punjabi",
        "Healthy Food",
        "Desserts",
        "Beverages"
        ],
        "tags": [],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 35,
        "minDeliveryTime": 35,
        "maxDeliveryTime": 35,
        "slaString": "35 MINS",
        "lastMileTravel": 0.4000000059604645,
        "slugs": {
        "restaurant": "lunchbox-shaniwar-peth-swargate",
        "city": "pune"
        },
        "cityState": "6",
        "address": "S.no 457 shaniwar peth ,Pune 411030",
        "locality": "Shaniwar Peth",
        "parentId": 4925,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "chain": [],
        "feeDetails": {
        "fees": [
        {
        "name": "distance",
        "fee": 3200,
        "message": ""
        },
        {
        "name": "time",
        "fee": 0,
        "message": ""
        },
        {
        "name": "special",
        "fee": 0,
        "message": ""
        }
        ],
        "totalFees": 3200,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3200",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "0.4 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹499",
        "discountTag": "FLAT DEAL",
        "headerTypeV2": 0
        },
        "sla": {
        "restaurantId": "62934",
        "deliveryTime": 35,
        "minDeliveryTime": 35,
        "maxDeliveryTime": 35,
        "lastMileTravel": 0.4000000059604645,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.1",
        "totalRatings": 5000,
        "new": false
        },
        "subtype": "basic"
        },
        {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "32682",
        "name": "Hotel Al Zaika",
        "uuid": "1315d564-efc6-4963-bfe1-1c59a3f03d56",
        "city": "6",
        "area": "Karve Nagar",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "iuclbhllcu0efjn85wrd",
        "cuisines": [
        "North Indian",
        "Biryani",
        "Chinese"
        ],
        "tags": [],
        "costForTwo": 50000,
        "costForTwoString": "₹500 FOR TWO",
        "deliveryTime": 39,
        "minDeliveryTime": 39,
        "maxDeliveryTime": 39,
        "slaString": "39 MINS",
        "lastMileTravel": 7.099999904632568,
        "slugs": {
        "restaurant": "hotel-al-zaika-karve-nagar-kothrud",
        "city": "pune"
        },
        "cityState": "6",
        "address": "Shop 2, Shitole Tower Pashankar Honda, Karve Nagar, Pune",
        "locality": "Hingane Home Colony",
        "parentId": 97829,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "ribbon": [
        {
        "type": "PROMOTED"
        }
        ],
        "chain": [],
        "feeDetails": {
        "fees": [
        {
        "name": "distance",
        "fee": 6200,
        "message": ""
        },
        {
        "name": "time",
        "fee": 0,
        "message": ""
        },
        {
        "name": "special",
        "fee": 0,
        "message": ""
        }
        ],
        "totalFees": 6200,
        "message": "",
        "title": "Delivery Charge",
        "amount": "6200",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6666402~p=13~eid=00000188-6718-9c8f-7f66-3eee00a60d46",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "7 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "",
        "discountTag": "FLAT DEAL",
        "headerTypeV2": 0
        },
        "sla": {
        "restaurantId": "32682",
        "deliveryTime": 39,
        "minDeliveryTime": 39,
        "maxDeliveryTime": 39,
        "lastMileTravel": 7.099999904632568,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "3.9",
        "totalRatings": 10000,
        "new": false
        },
        "subtype": "basic"
        },
        {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "23719",
        "name": "McDonald's",
        "uuid": "da5839a2-0cee-48b0-b369-f30b824f7786",
        "city": "6",
        "area": "Shivajinagar",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "ee5f8e06b300efc07c9fe3f4df40dfc4",
        "cuisines": [
        "Burgers",
        "Beverages",
        "Cafe",
        "Desserts"
        ],
        "tags": [],
        "costForTwo": 40000,
        "costForTwoString": "₹400 FOR TWO",
        "deliveryTime": 28,
        "minDeliveryTime": 28,
        "maxDeliveryTime": 28,
        "slaString": "28 MINS",
        "lastMileTravel": 2.200000047683716,
        "slugs": {
        "restaurant": "mc-donalds-shivaji-nagar-shivaji-nagar-2",
        "city": "pune"
        },
        "cityState": "6",
        "address": "Suyog Plaza, Plot No. 1278, Jangli Maharaj Road, Shivaji Nagar, Pune 411004.",
        "locality": "JM Road",
        "parentId": 630,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "chain": [],
        "feeDetails": {
        "fees": [
        {
        "name": "distance",
        "fee": 3200,
        "message": ""
        },
        {
        "name": "time",
        "fee": 0,
        "message": ""
        },
        {
        "name": "special",
        "fee": 0,
        "message": ""
        }
        ],
        "totalFees": 3200,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3200",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "2.2 kms",
        "hasSurge": false,
        "sla": {
        "restaurantId": "23719",
        "deliveryTime": 28,
        "minDeliveryTime": 28,
        "maxDeliveryTime": 28,
        "lastMileTravel": 2.200000047683716,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.3",
        "totalRatings": 10000,
        "new": false
        },
        "subtype": "basic"
        },
        {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "155434",
        "name": "The Good Bowl",
        "uuid": "d414eee0-75ed-462c-8229-64d283101fe9",
        "city": "6",
        "area": "Shaniwar Peth",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "uvegdomfw2is591or42u",
        "cuisines": [
        "Biryani",
        "North Indian",
        "Pastas",
        "Punjabi",
        "Desserts",
        "Beverages"
        ],
        "tags": [],
        "costForTwo": 40000,
        "costForTwoString": "₹400 FOR TWO",
        "deliveryTime": 29,
        "minDeliveryTime": 29,
        "maxDeliveryTime": 29,
        "slaString": "29 MINS",
        "lastMileTravel": 0.5,
        "slugs": {
        "restaurant": "the-good-bowl-shanivarpeth-swargate",
        "city": "pune"
        },
        "cityState": "6",
        "address": "Ground Floor, subhmangal Housing society,senapati bapat road,shivaji nagar,pune, 411016",
        "locality": "Shanivarpeth",
        "parentId": 7918,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "chain": [],
        "feeDetails": {
        "fees": [
        {
        "name": "distance",
        "fee": 3200,
        "message": ""
        },
        {
        "name": "time",
        "fee": 0,
        "message": ""
        },
        {
        "name": "special",
        "fee": 0,
        "message": ""
        }
        ],
        "totalFees": 3200,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3200",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "0.5 kms",
        "hasSurge": false,
        "sla": {
        "restaurantId": "155434",
        "deliveryTime": 29,
        "minDeliveryTime": 29,
        "maxDeliveryTime": 29,
        "lastMileTravel": 0.5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.2",
        "totalRatings": 1000,
        "new": false
        },
        "subtype": "basic"
        },
        {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "4087",
        "name": "Aroma's Hyderabad House",
        "uuid": "ac41fdd8-424a-498e-82c9-cd9d03cc16bc",
        "city": "6",
        "area": "Erandwane",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "syu9rjepkqsw5agjbbd9",
        "cuisines": [
        "Biryani",
        "Mughlai",
        "North Indian",
        "Chinese"
        ],
        "tags": [],
        "costForTwo": 50000,
        "costForTwoString": "₹500 FOR TWO",
        "deliveryTime": 27,
        "minDeliveryTime": 27,
        "maxDeliveryTime": 27,
        "slaString": "27 MINS",
        "lastMileTravel": 3.9000000953674316,
        "slugs": {
        "restaurant": "hyderabad-spice-kothrud",
        "city": "pune"
        },
        "cityState": "6",
        "address": "11/4, Butte Bhavan, Opposite Kasat Saree Centre, Karve Road, Nal Stop, Erandwane, Pune",
        "locality": "Erandwane",
        "parentId": 71,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "ribbon": [
        {
        "type": "PROMOTED"
        }
        ],
        "chain": [],
        "feeDetails": {
        "fees": [
        {
        "name": "distance",
        "fee": 3800,
        "message": ""
        },
        {
        "name": "time",
        "fee": 0,
        "message": ""
        },
        {
        "name": "special",
        "fee": 0,
        "message": ""
        }
        ],
        "totalFees": 3800,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3800",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6628314~p=16~eid=00000188-6718-9c8f-7f66-3eef00a61031",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "3.9 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80",
        "discountTag": "",
        "headerTypeV2": 0
        },
        "sla": {
        "restaurantId": "4087",
        "deliveryTime": 27,
        "minDeliveryTime": 27,
        "maxDeliveryTime": 27,
        "lastMileTravel": 3.9000000953674316,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.2",
        "totalRatings": 10000,
        "new": false
        },
        "subtype": "basic"
        }
]

const RestroCard = ({cloudinaryImageId,name,cuisines,avgRating}) => {
    return(
        <div className="card">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"
            +cloudinaryImageId}/>
            <h2>{name}</h2> 
            <h3>{cuisines.join(", ")}</h3> 
            <h4>{avgRating} stars</h4> 
        </div>  
    )
}

const Body = () => {
    return(
        <div className="restaurant-list">
            {
                restaurantList.map((restaurant)=>{
                    return <RestroCard key={...restaurant.data.id} {...restaurant.data}/>
                })
            }            
        </div>
    )
}

const styleObj = {
    border:"1px solid black",
    textAlign:"center",
    padding:"10px"
}

const Footer = () => {
    return(
        // Inline styling using js obj
        <h4 style={styleObj}>Made By Yashashri</h4>
    )
}

const AppLayout = () => {
    return (
        <>
            <Header/>
            <Body/>
            <Footer/>
        </>
        
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);