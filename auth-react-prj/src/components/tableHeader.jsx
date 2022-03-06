import { memo } from "react";

const TableHeader = ({ headerFields, user }) => {
  console.log("TableHeader rendering");
  return headerFields.map((key, index) =>
    (key === "operation" && user) || key !== "operation" ? (
      <th scope="col" key={index}>
        {key.toUpperCase()}
      </th>
    ) : null
  );
};

function areEqual(prevProps, nextProps) {
  if (JSON.stringify(prevProps) === JSON.stringify(nextProps)) return true;

  return false;
}
export default memo(TableHeader, areEqual);
