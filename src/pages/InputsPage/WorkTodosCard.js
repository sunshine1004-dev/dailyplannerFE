import TodosCard from "../../components/TodosCard/TodosCard";

const WorkTodosCard = (props) => {
  return (
    <TodosCard
      title="work/office todo"
      sectionName="WORK_TODOS"
      type="work"
      startTime={true}
      endTime={true}
    />
  );
};

WorkTodosCard.propTypes = {};

export default WorkTodosCard;
