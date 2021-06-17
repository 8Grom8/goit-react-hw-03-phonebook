import PropTypes from "prop-types";
import ListItem from "../ListItem/ListItem";

const ContactsList = ({ items, handleDelete }) => {
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

ContactsList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired }))
    .isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ContactsList;
