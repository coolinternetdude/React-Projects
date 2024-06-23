import Property from "./Property";
import PropTypes from "prop-types";
import "./PropertyList.css";

function PropertyList({ properties }) {
  return (
    <div className="PropertyList">
      {properties.map((property) => (
        <Property key={property.id} {...property} />
      ))}
    </div>
  );
}

PropertyList.propTypes = {
  properties: PropTypes.arrayOf(PropTypes.object),
};

export default PropertyList;
