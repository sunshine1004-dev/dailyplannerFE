import TodosCard from "../../components/TodosCard/TodosCard";

const MenuCard = (props) => {
  return (
    <TodosCard title="today's todo" sectionName="TODAYS_TODOS" type="today" />
  );
};

MenuCard.propTypes = {};

export default MenuCard;