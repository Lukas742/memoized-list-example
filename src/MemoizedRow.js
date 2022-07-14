import React from "react";
import {
  TableCell,
  TableRow,
  Label,
  TableRowType
} from "@ui5/webcomponents-react";

export const MemoizedRow = React.memo((props) => {
  const { applicant, columnAccessors, index } = props;
  return (
    <TableRow type={TableRowType.Active}>
      <TableCell>
        <Label>Notebook Basic</Label>
      </TableCell>
      <TableCell>
        <Label>Very Best Screens</Label>
      </TableCell>
      <TableCell>
        <Label>30 x 18 x 3cm</Label>
      </TableCell>
      <TableCell>
        <Label>4.2KG</Label>
      </TableCell>
      <TableCell>
        <Label>956EUR</Label>
      </TableCell>
    </TableRow>
  );
});
MemoizedRow.displayName = "MemoizedRow";
