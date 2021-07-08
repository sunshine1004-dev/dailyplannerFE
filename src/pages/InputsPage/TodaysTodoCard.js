import TodosCard from "../../components/TodosCard/TodosCard";

const TodaysTodoCard = (props) => {
  return (
    <TodosCard title="today's todo" sectionName="TODAYS_TODOS" type="today" />
  );
};

TodaysTodoCard.propTypes = {};

export default TodaysTodoCard;
