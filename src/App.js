import React from "react";
import {
  ThemeProvider,
  Table,
  Label,
  TableColumn,
  TableSelectionMode
} from "@ui5/webcomponents-react";
import { MemoizedRow } from "./MemoizedRow";

export default function App() {
  return (
    <ThemeProvider>
      <Table
        onRowClick={console.log}
        onSelectionChange={console.log}
        mode={TableSelectionMode.MultiSelect}
        columns={
          <>
            <TableColumn>
              <Label>Product</Label>
            </TableColumn>
            <TableColumn>
              <Label>Supplier</Label>
            </TableColumn>
            <TableColumn>
              <Label>Dimensions</Label>
            </TableColumn>
            <TableColumn>
              <Label>Weight</Label>
            </TableColumn>
            <TableColumn>
              <Label>Price</Label>
            </TableColumn>
          </>
        }
      >
        <MemoizedRow />
        <MemoizedRow />
        <MemoizedRow />
        <MemoizedRow />
      </Table>
    </ThemeProvider>
  );
}
