import { amenities, lastOffer } from './constant'
export const formatReqestData = ( data, imageData ) => {
    
    const amenities = formatAmentities(data);
    const propertyDescribe = formatArray(data, lastOffer.first);
    const propertyspecialFeature = formatArray(data, lastOffer.second);
    let imageArray = [];
    Object.keys(imageData).map(key => {
        imageArray.push({
            filename:imageData[key].name,
            url:imageData[key].url
        });
    })

    const requestbody = {
        propertyName:  data.propertyName,
        nightlyRate: data.nightlyRate,
        propertyDescription: data.propertyDescription,
        imageURLs:imageArray,
        hostInfo: {
            name: data.hostedByName,
            userId:"9203923823932823423",
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
        propertyspecialFeature: propertyspecialFeature
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
