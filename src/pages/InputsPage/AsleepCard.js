import PropTypes from "prop-types";
import TimeCard from "../../components/TimeCard/TimeCard";

const AsleepCard = (props) => {
  return <TimeCard title="asleep" sectionName="ASLEEP" />;
};

AsleepCard.propTypes = {
  title: PropTypes.string.isRequired,
};

export default AsleepCard;
