import { memo } from "react";

const TableRow = ({
  onDelete,
  fields: { id, title, director, rate },
  user,
}) => {
  console.log("TableRow rendering");

  return (
    <tr key={id}>
      {/* <td>{rowNumber}</td> */}
      <td>{title}</td>
      <td>{director}</td>
      <td>{rate}</td>
      {user && (
        <td>
          <button className="button" onClick={() => onDelete(id)}>
            Delete
          </button>
        </td>
      )}
    </tr>
  );
};

// const areEqual = (prevProps, nextProps) => {
//   console.log({ prevProps }, { nextProps });
//   if (JSON.stringify(prevProps) == JSON.stringify(nextProps)) return true;

//   return false;
// };
// export default memo(TableRow, areEqual);
export default memo(TableRow);
