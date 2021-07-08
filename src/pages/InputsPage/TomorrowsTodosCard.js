import TodosCard from "../../components/TodosCard/TodosCard";

const TomorrowsTodoCard = (props) => {
  return (
    <TodosCard
      title="tomorrow morn'n"
      sectionName="TOMORROWS_TODOS"
      type="tomorrow"
      startTime={true}
      startTimeLabel="wake up"
    />
  );
};

TomorrowsTodoCard.propTypes = {};

export default TomorrowsTodoCard;
