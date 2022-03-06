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

const areEqual = (prevProps, nextProps) => {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
};
export default memo(TableHeader, areEqual);
