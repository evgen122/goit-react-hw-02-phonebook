export const ItemContact = ({ item: { id, name, number }, onDelete }) => {
  return (
    <div>
      {name}: {number}
      <button
        onClick={() => {
          onDelete(id);
        }}
        type="button"
      >
        Delete
      </button>
    </div>
  );
};
