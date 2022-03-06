import { Fragment, memo } from "react";
import TableRow from "./tableRow";

const TableBody = ({ onDelete, user, movies }) => {
  console.log("TableBody rendering");

  return (
    movies &&
    movies.map((movie, index) => (
      <Fragment key={index}>
        <TableRow
          //   rowNumber={index + 1}
          fields={movie}
          user={user}
          onDelete={onDelete}
        />
      </Fragment>
    ))
  );
};

export default memo(TableBody);
