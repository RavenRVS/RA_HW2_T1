
export default function Toolbar(props) {
    const { filters, selected, onSelectFilter } = props;
  
    return (
      <ul className="toolbar-list">
        {filters.map((filter, index) =>
          <li key={index}
            className={`toolbar-item${selected === filter ? ' toolbar-item__selected' : ''}`}
            onClick={() => onSelectFilter(filter)}>
            <span className="toDoListItem-title">{filter}</span>
          </li>
        )}
      </ul>
    );
  }