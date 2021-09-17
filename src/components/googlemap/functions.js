import Geocode from "react-geocode";
export const getLatLangArray = async (addresses) => {
  Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAP_API_KEY);
  Geocode.setLanguage("en");
  Geocode.setLocationType("RANGE_INTERPOLATED");
  Geocode.enableDebug(false);
  var promises = [];
  var result = [];
  addresses.forEach((address) => {
    promises.push(
      Geocode.fromAddress(`apt${address.apartment} ${address.street} ${address.city} ${address.state} ${address.country}`).then(
        (res) => result.push(res.results[0].geometry.location)
      )
    );
  });
  await Promise.all(promises);
  return result;
};
