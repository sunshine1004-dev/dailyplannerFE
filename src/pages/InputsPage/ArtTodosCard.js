import TodosCard from "../../components/TodosCard/TodosCard";

const ArtTodosCard = (props) => {
  return (
    <TodosCard
      title="art/learn todo"
      sectionName="ART_TODOS"
      type="art"
      startTime={true}
      endTime={true}
    />
  );
};

ArtTodosCard.propTypes = {};

export default ArtTodosCard;
