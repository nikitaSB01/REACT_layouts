import PropTypes from "prop-types";

function IconSwitch({ icon, onSwitch }) {
  return (
    <span
      className="material-icons"
      onClick={onSwitch}
      style={{ cursor: "pointer" }}
    >
      {icon}
    </span>
  );
}

IconSwitch.propTypes = {
  icon: PropTypes.string.isRequired,
  onSwitch: PropTypes.func.isRequired,
};

export default IconSwitch;
