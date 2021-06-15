import PropTypes from "prop-types";
import ListItem from "../ListItem/ListItem";

const TodosList = ({ items,  handleDelete }) => {
  return (
    <ul>
      {items.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          handleDelete={() => handleDelete(item.id)}
        />
      ))}
    </ul>
  );
};

TodosList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired }))
    .isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default TodosList;
