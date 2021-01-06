import { QuestionBase } from "@modules/auth/components/QuestionBase";

  export  const authForms: any[] = [	
        {
            key: "firstName",
            label: "First name",
            value: "",
            required: true,
            order: 1
        },
        {
            key: "middleName",
            label: "Middle name",
            value: "",
            required: true,
            order: 2
        },
        {
            key: "lastName",
            label: "Last name",
            value: "",
            required: true,
            order: 3
        },
        {
            key: "cityName",
            label: "City Name",
            value: "",
            required: true,
            order: 4
        },
        {
            key: "postalCode",
            label: "PostalCode",
            value: "",
            required: true,
            order: 5
        },
        {
            key: "street",
            label: "street",
            value: "",
            required: true,
            order: 6
        },
        {
            key: "state",
            label: "state",
            value: "",
            required: true,
            order: 7
        },
        
        {
            key: "weight",
            label: "weight in kg",
            value: "",
            required: true,
            order: 8
        },
        {
            key: "height",
            label: "Height in cm",
            value: "",
            required: true,
            order: 9
        },
        {
            key: "hairColor",
            label: "Hair Color",
            options: [
                {key: "blond",  value: "Blond"},
                {key: "black",  value: "Black"},
                {key: "brown",   value: "Brown"},
                {key: "auburn", value: "Auburn"},
                {key: "red", value: "Red"},
                {key: "gray", value: "Gray"},
                {key: "white", value: "white"}
            ],
            required: true,
            order: 10
        },
        {
            key: "eyesColor",
            label: "Eyes Color",
            options: [
                {key: "amber",  value: "Amber"},
                {key: "blue",  value: "Blue"},
                {key: "brown",   value: "Brown"},
                {key: "gray", value: "Gray"},
                {key: "green", value: "Green"},
                {key: "hazel", value: "Hazel"},
                {key: "red", value: "Red"}
            ],
            required: true,
            order: 11
        },
        {
            key: "skinColor",
            label: "Skin Color",
            options: [
                {key: "extremelyfair",  value: "Extremely fair"},
                {key: "fair",  value: "Fair"},
                {key: "medium",   value: "Medium"},
                {key: "olive", value: "Olive"},
                {key: "moderately-pigmented-brown", value: "Moderately pigmented brown"},
                {key: "markedly-pigmented-black", value: "Markedly pigmented black"}
                
            ],
            required: true,
            order: 12
        },
        {
            key: "countryName",
            label: "Country Name",
            value: "",
            required: true,
            order: 13
        },
        {
            key: "homeEmail",
            label: "Home Email",
            value: "",
            required: true,
            order: 14
        },
        {
            key: "workEmail",
            label: "Work Email",
            value: "",
            required: true,
            order: 15
        },
        {
            key: "workPhone",
            label: "Work Phone Number",
            value: "",
            required: true,
            order: 16
        },
        {
            key: "homePhone",
            label: "Home Phone Number",
            value: "",
            required: true,
            order: 17
        },
        {
            key: "gender",
            label: "Gender",
            options: [
                {key: "male",  value: "Male"},
                {key: "femele",  value: "Femele"}            
            ],
            required: true,
            order: 18
        },

        {
            key: "handicapType",
            label: "Handicap Type",
            options: [
                {key: "vision",  value: "Vision"},
                {key: "deaf",  value: "Deaf"},
                {key: "mental",   value: "Mental"},
                {key: "intellectual", value: "Intellectual"},
                {key: "autism", value: "Autism Spectrum Disorder"},
                {key: "physical", value: "Physical Disability"}
                
            ],
            order: 19
        },
        
        {
            key: "pseudo",
            label: "Pseudo",
            value: "",
            required: true,
            order: 20
        },
        {
            key: "birthDate",
            label: "Birth Date",
            value: "",
            required: true,
            order: 21
        },

        {
            key: "maritalStatus",
            label: "Marital Status",
            options: [
                {key: "single",  value: "Single"},
                {key: "married",  value: "married"},
                {key: "widowed",   value: "Widowed"},
                {key: "divorced", value: "Divorced"},
                {key: "separated", value: "separated"}      
            ],
            required: true,
            order: 22
        },
        {
            key: "regime",
            label: "Regime",
            options: [
                {key: "poligamy",  value: "Poligamy"},
                {key: "monogamy",  value: "Monogamy"}    
            ],
            required: true,
            order: 23
        },
        {
            key: "birthDate",
            label: "Birth Date",
            value: "",
            required: true,
            order: 24
        },
        {
            key: "title",
            label: "Title",
            value: "",
            required: true,
            order: 25
        },
        {
            key: "tagniOrMagni",
            label: "TAGNI Or TAGNI Or NONE",
            value: "",
            required: true,
            order: 26
        },
        {
            key: "firstChildName",
            label: "First Child Name",
            value: "",
            required: true,
            order: 27
        },
        {
            key: "firstChildGender",
            label: "First Child Gender",
            value: "",
            required: true,
            order: 28
        },
        {
            key: "firstChildBirthDate",
            label: "First Child Birth Date",
            value: "",
            required: true,
            order: 29
        },
        {
            key: "firstChildBirthAt",
            label: "First Child Birth At",
            value: "",
            required: true,
            order: 30
        },
        {
            key: "lastChildName",
            label: "last Child Name",
            value: "",
            required: true,
            order: 31
        },
        {
            key: "lastChildGender",
            label: "Last Child Gender",
            value: "",
            required: true,
            order: 32
        },
        {
            key: "lastChildBirthDate",
            label: "last Child Birth Date",
            value: "",
            required: true,
            order: 33
        },
        {
            key: "lastChildBirthAt",
            label: "last Child Birth At",
            value: "",
            required: true,
            order: 34
        },
        {
            key: "partnerName",
            label: "Partner Name",
            value: "",
            required: true,
            "conditions": [
                {key: "maritalStatus", value: "married"},
                {key: "regime", value: "monogamy"}
            ],
            order: 35
        },
        {
            key: "marriedOn",
            label: "Married On",
            value: "",
            required: true,
            "conditions": [
                {key: "maritalStatus", value: "married"},
                {key: "regime", value: "monogamy"}
            ],
            order: 36
        },
        {
            key: "marriedAt",
            label: "Married At",
            value: "",
            required: true,
            "conditions": [
                {key: "maritalStatus", value: "married"},
                {key: "regime", value: "monogamy"}
            ],
            order: 37
        },
        {
            key: "firstWifeName",
            label: "First Wife Name",
            value: "",
            required: true,
            "conditions": [
                {key: "gender", value: "male"},
                {key: "maritalStatus", value: "married"},
                {key: "regime", value: "poligamy"}
            ],
            order: 38
        },
        {
            key: "firstMarriedOn",
            label: "First Married On",
            value: "",
            required: true,
            "conditions": [
                {key: "gender", value: "male"},
                {key: "maritalStatus", value: "married"},
                {key: "regime", value: "poligamy"}
            ],
            order: 39
        },
        {
            key: "firstMarriedAt",
            label: "First Married At",
            value: "",
            required: true,
            "conditions": [
                {key: "gender", value: "male"},
                {key: "maritalStatus", value: "married"},
                {key: "regime", value: "poligamy"}
            ],
            order: 40
        },
        {
            key: "lastWifeName",
            label: "Last Wife Name",
            value: "",
            required: true,
            "conditions": [
                {key: "gender", value: "male"},
                {key: "maritalStatus", value: "married"},
                {key: "regime", value: "poligamy"}
            ],
            order: 41
        },
        {
            key: "lastMarriedOn",
            label: "Last Married On",
            value: "",
            required: true,
            "conditions": [
                {key: "gender", value: "male"},
                {key: "maritalStatus", value: "married"},
                {key: "regime", value: "poligamy"}
            ],
            order: 42
        },
        {
            key: "lastMarriedAt",
            label: "Last Married At",
            value: "",
            required: true,
            "conditions": [
                {key: "gender", value: "male"},
                {key: "maritalStatus", value: "married"},
                {key: "regime", value: "poligamy"}
            ],
            order: 43
        },

        {
            key: "religionName",
            label: "Religion Name",
            value: "",
            required: true,
            order: 44
        },
        {
            key: "religionName",
            label: "Religion Name",
            value: "",
            required: true,
            order: 45
        },
        {
            key: "religionPlace",
            label: "Religion Place",
            value: "",
            required: true,
            order: 46
        },
        {
            key: "friendName",
            label: "Friend Name",
            value: "",
            required: true,
            order: 47
        },
        {
            key: "bestFriendCity",
            label: "Best Friend city",
            value: "",
            required: true,
            order: 48
        },
        {
            key: "nationalID",
            label: "National Identity Number",
            value: "",
            required: true,
            order: 49
        },
        {
            key: "passportID",
            label: "Passport Code",
            value: "",
            required: true,
            order: 50
        },
        {
            key: "drivingLicense",
            label: "Driving Licence Code",
            value: "",
            required: true,
            order: 51
        },
        {
            key: "fovoriteColor",
            label: "Favorite Color",
            value: "",
            required: true,
            order: 52
        },
        {
            key: "favoriteHairStyle",
            label: "Favorite Hair Style",
            value: "",
            required: true,
            order: 53
        },
        {
            key: "favoriteHobbyName",
            label: "Favorite Hobby Name",
            value: "",
            required: true,
            order: 54
        },
        {
            key: "secondHobbyName",
            label: "second Hobby Name",
            value: "",
            required: true,
            order: 55
        },
        {
            key: "favoriteSewingStyle",
            label: "Favorite Sewing Style",
            value: "",
            required: true,
            order: 56
        },
        {
            key: "favoriteSewingStyle",
            label: "Favorite Sewing Style",
            value: "",
            required: true,
            order: 57
        },
        {
            key: "favoriteSewingSalon",
            label: "Favorite Sewing Salon",
            value: "",
            required: true,
            order: 58
        },
        {
            key: "favoriteRestaurant",
            label: "Favorite Restaurant",
            value: "",
            required: true,
            order: 59
        },
        {
            key: "favoriteFood",
            label: "Favorite Food",
            value: "",
            required: true,
            order: 60
        },
        {
            key: "favoriteSuperMarket",
            label: "Favorite Super Market",
            value: "",
            required: true,
            order: 61
        },
        {
            key: "recentPlaceVisited",
            label: "Recent Place Visited",
            value: "",
            required: true,
            order: 62
        },
        {
            key: "recentPlaceVisited",
            label: "Recent Place Visited",
            value: "",
            required: true,
            order: 63
        },
        {
            key: "firstBankProviderName",
            label: "First Bank Provider",
            value: "",
            required: true,
            order: 64
        },
        {
            key: "firstBankCode",
            label: "First Bank Code",
            value: "",
            required: true,
            order: 65
        },
        {
            key: "secondBankProviderName",
            label: "First Bank Provider",
            value: "",
            required: true,
            order: 66
        },
        {
            key: "secondBankCode",
            label: "Second Bank Code",
            value: "",
            required: true,
            order: 67
        },
        {
            key: "firstBienImmobilierName",
            label: "First Bien Immobilier Name",
            value: "",
            required: true,
            order: 68
        },
        {
            key: "firstBienImmobilierOn",
            label: "First Bien Immobilier Date",
            value: "",
            required: true,
            order: 69
        },
        {
            key: "firstBienImmobilierAt",
            label: "First Bien Immobilier Place",
            value: "",
            required: true,
            order: 70
        },
        {
            key: "firstBienImmobilierPrice",
            label: "First Bien Immobilier Price",
            value: "",
            required: true,
            order: 71
        },
        {
            key: "secondBienImmobilierName",
            label: "Second Bien Immobilier Name",
            value: "",
            required: true,
            order: 72
        },
        {
            key: "secondBienImmobilierOn",
            label: "Second Bien Immobilier Date",
            value: "",
            required: true,
            order: 73
        },
        {
            key: "secondBienImmobilierAt",
            label: "Second Bien Immobilier Place",
            value: "",
            required: true,
            order: 74
        },
        {
            key: "secondBienImmobilierPrice",
            label: "Second Bien Immobilier Price",
            value: "",
            required: true,
            order: 75
        },
        {
            key: "firstDeviceType",
            label: "First Device Type",
            value: "",
            required: true,
            order: 76
        },
        {
            key: "firstDeviceName",
            label: "First Device Name",
            value: "",
            required: true,
            order: 77
        },
        {
            key: "firstDevicePrice",
            label: "First Device Price",
            value: "",
            required: true,
            order: 78
        },
        {
            key: "firstDeviceBuyManufacturer",
            label: "First Device Manufacturer",
            value: "",
            required: true,
            order: 79
        },
        {
            key: "firstDeviceBuyOn",
            label: "First Device Buy On",
            value: "",
            required: true,
            order: 80
        },
        {
            key: "secondDeviceType",
            label: "second Device Type",
            value: "",
            required: true,
            order: 81
        },
        {
            key: "secondDeviceName",
            label: "First Device Name",
            value: "",
            required: true,
            order: 82
        },
        {
            key: "secondDevicePrice",
            label: "First Device Price",
            value: "",
            required: true,
            order: 83
        },
        {
            key: "secondDeviceBuyManufacturer",
            label: "First Device Manufacturer",
            value: "",
            required: true,
            order: 84
        },
        {
            key: "secondDeviceBuyOn",
            label: "First Device Buy On",
            value: "",
            required: true,
            order: 85
        },
        {
            key: "firstDeviceRepairerName",
            label: "First Device Repairer Name",
            value: "",
            required: true,
            order: 86
        },
        {
            key: "firstDeviceModel",
            label: "First Device Model",
            value: "",
            required: true,
            order: 87
        },
        {
            key: "firstDeviceSerialNumber",
            label: "First Device SerialNumber",
            value: "",
            required: true,
            order: 88
        },
        {
            key: "secondDeviceModel",
            label: "First Device Model",
            value: "",
            required: true,
            order: 89
        },
        {
            key: "secondDeviceSerialNumber",
            label: "second Device SerialNumber",
            value: "",
            required: true,
            order: 90
        },
        {
            key: "firstDeviceRepairerPhoneType",
            label: "First Device Repairer Phone Type",
            value: "",
            required: true,
            order: 91
        },
        {
            key: "firstDeviceRepairerPhoneNumber",
            label: "First Device Repairer Phone Number",
            value: "",
            required: true,
            order: 92
        },
        {
            key: "secondDeviceRepairerPhoneType",
            label: "Second Device Repairer Phone Type",
            value: "",
            required: true,
            order: 93
        },
        {
            key: "secondDeviceRepairerPhoneNumber",
            label: "Second Device Repairer Phone Number",
            value: "",
            required: true,
            order: 94
        },
        {
            key: "firstDeviceRepairerEmail",
            label: "Second Device Repairer Email",
            value: "",
            required: true,
            order: 95
        },
        {
            key: "secondDeviceRepairerEmail",
            label: "Second Device Repairer Email",
            value: "",
            required: true,
            order: 96
        },
        {
            key: "firstVehicleType",
            label: "First Vehicule Type",
            value: "",
            required: true,
            order: 97
        },
        {
            key: "secondVehicleType",
            label: "Second Vehicle Type",
            value: "",
            required: true,
            order: 98
        },
        {
            key: "firstVehicleNumberOfWheels",
            label: "First Vehicle Number Of Wheels",
            value: "",
            required: true,
            order: 99
        },
        {
            key: "secondVehicleNumberOfWheels",
            label: "Second Vehicle Number Of Wheels",
            value: "",
            required: true,
            order: 100
        },
        {
            key: "firstVehicleBuyOn",
            label: "First Vehicle Buy On",
            value: "",
            required: true,
            order: 101
        },
        {
            key: "firstVehicleAt",
            label: "First Vehicle Buy At",
            value: "",
            required: true,
            order: 102
        },
        {
            key: "secondVehicleManufacturer",
            label: "Second Vehicle Manufacturer",
            value: "",
            required: true,
            order: 103
        },
        {
            key: "firstVehicleManufacturer",
            label: "First Vehicle Manufacturer",
            value: "",
            required: true,
            order: 104
        },
        {
            key: "secondVehicleManufacturerUrl",
            label: "Second Vehicle Manufacturer Url",
            value: "",
            required: true,
            order: 105
        },
        {
            key: "firstVehicleManufacturerUrl",
            label: "First Vehicle Manufacturer Url",
            value: "",
            required: true,
            order: 106
        },
        {
            key: "firstVehicleMark",
            label: "First Vehicle Mark",
            value: "",
            required: true,
            order: 107
        },
        {
            key: "firstVehicleModel",
            label: "First Vehicle Model",
            value: "",
            required: true,
            order: 108
        },
        {
            key: "firstVehicleRegistrationNumber",
            label: "First Vehicle registration Number",
            value: "",
            required: true,
            order: 109
        },
        {
            key: "secondVehicleRegistrationNumber",
            label: "Second Vehicle registration Number",
            value: "",
            required: true,
            order: 110
        },
        {
            key: "secondVehiclePrice",
            label: "Second Vehicle Price",
            value: "",
            required: true,
            order: 111
        },
        {
            key: "firstVehiclePrice",
            label: "First Vehicle Price",
            value: "",
            required: true,
            order: 112
        },
        {
            key: "secondVehicleBuyOn",
            label: "Second Vehicle Buy On",
            value: "",
            required: true,
            order: 113
        },
        {
            key: "secondVehicleAt",
            label: "Second Vehicle Buy At",
            value: "",
            required: true,
            order: 114
        },
        {
            key: "secondVehicleMark",
            label: "Second Vehicle Mark",
            value: "",
            required: true,
            order: 115
        },
        {
            key: "secondVehicleModel",
            label: "Second Vehicle Model",
            value: "",
            required: true,
            order: 116
        },

        {
            key: "driverName",
            label: "Driver Name",
            value: "",
            required: true,
            order: 117
        },
        {
            key: "driverPhoneType",
            label: "Driver Phone Type",
            value: "",
            required: true,
            order: 118
        },
        {
            key: "driverPhoneNumber",
            label: "Driver Phone Number",
            value: "",
            required: true,
            order: 118
        },
        {
            key: "driverEmail",
            label: "Driver Email",
            value: "",
            required: true,
            order: 119
        },
        {
            key: "driverLivingPlace",
            label: "Driver Living Place",
            value: "",
            required: true,
            order: 120
        }
        







        ]
