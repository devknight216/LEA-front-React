import React from "react";
import { LocationMarkerIcon } from "@heroicons/react/outline";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
const LocaleInput = (props) => {
  return (
    <div className={props.className}>
      <GooglePlacesAutocomplete
        onSelect={(e) => {
          props.onSelect(e);
        }}
        autocompletionRequest={{}}
        searchOptions={{ types: ["locality"] }}
        renderInput={(inputProps) => (
          <>
            <input className={`${props.inputClassName}`} {...inputProps} ref={props.inputRef} />
          </>
        )}
        loader={props.loader}
        renderSuggestions={(active, suggestions, onSelectSuggestion) => (
          <>
            {suggestions.length > 0 && (
              <div className={`${props.containerClassName}`}>
                {suggestions.map((suggestion) => (
                  <div
                    key={suggestion.place_id}
                    className={`${props.itemClassName} flex items-center`}
                    onClick={(event) => onSelectSuggestion(suggestion, event)}
                  >
                    <LocationMarkerIcon className="w-6 text-white fill-gray-600" />
                    <div primary={suggestion.description}>{suggestion.description}</div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      />
    </div>
  );
};
export default LocaleInput;
