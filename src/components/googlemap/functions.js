import Geocode from "react-geocode";
export const getLatLangArray = async (properties) => {
  Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAP_API_KEY);
  Geocode.setLanguage("en");
  Geocode.setLocationType("RANGE_INTERPOLATED");
  Geocode.enableDebug(false);
  var promises = [];
  var result = [];
  properties?.forEach((property) => {
    promises.push(
      Geocode.fromAddress(
        `apt${property.propertyLocation.apartment} ${property.propertyLocation.street} ${property.propertyLocation.city} ${property.propertyLocation.state} ${property.propertyLocation.country}`
      ).then((res) => result.push({ geo: res.results[0].geometry.location, property: property }))
    );
  });
  await Promise.all(promises);
  return result;
};
