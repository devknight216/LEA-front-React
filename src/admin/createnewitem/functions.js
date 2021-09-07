import { amenities, lastOffer } from './constant'
export const formatReqestData = ( data ) => {
    const amenities = formatAmentities(data);
    const propertyDescribe = formatArray(data, lastOffer.first);
    let imageArray = [];
    
    const requestbody = {
        propertyName:  data.propertyName,
        nightlyRate: data.nightlyRate,
        propertyDescription: data.propertyDescription,
        imageURLs:imageArray,
        hostInfo: {
            name: data.hostedByName,
            userId: JSON.parse(localStorage.getItem('user')).userID,
            email: data.hostedByNameEmail,
        },
        propertyLocation: {
            apartment: data.apartment,
            street: data.street,
            city: data.city,
            state: data.state,
            country: data.country,
            zip: data.zip
        },
        propertyType: data.propertyType,
        propertySpaceFeature: data.propertySpaceFeature,
        guestNum: data.guestNum,
        bedsNum: data.bedsNum,
        bedroomNum: data.bathroomNum,
        bathroomNum: data.bathroomNum,
        amenities: amenities,
        propertyDescribe: propertyDescribe,
        propertyspecialFeature: [],
        depositFee: data.depositFee,
        petAllowFee: { 
            number: 0,
            fee: data.petFee
        },
        stagingFee: { 
            hours: 0,
            rate: data.stagingRate
        },
        manageType: 'LEA'
    }
    return requestbody;
}

const formatAmentities = ( data ) => {
    let buffer = [];
    Object.keys(amenities).map(( category ) => {
        amenities[category].lists.map((item) => {
            data[item.variableName] == true && buffer.push( item.label);
        })
    })
    return buffer;
}
const formatArray = ( data, temp ) => {
    let buffer = [];
    temp.map((item) => {
        data[item.variableName] == true && buffer.push( item.lable)
    });
    return buffer;
}
