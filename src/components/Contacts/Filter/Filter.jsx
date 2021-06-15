import PropTypes from "prop-types";

const TodosFilter = ({ handleChange, filter }) => {
  return (
    <div className="filterStyle">
      <label htmlFor="filter">Find contacts by name</label>
      <input
        id="filter"
        name="filter"
        type="text"
        className="px-4 py-3 rounded-md"
        onChange={handleChange}
        value={filter}
      />
    </div>
  );
};

TodosFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default TodosFilter;