import React, { Fragment, FunctionComponent } from 'react';

import { Table as BtTable, TableProps } from 'react-bootstrap';

export interface TableDataset {
  columnLabels: string[];
  rows: (string | number | React.FunctionComponent<any>)[][];
}

interface OwnProps extends TableProps {
  dataset: TableDataset;
  actions?: any;
}

type Props = OwnProps;

const Table: FunctionComponent<Props> = (props) => {
  const {
    dataset: { columnLabels, rows },
    actions,
  } = props;

  return (
    columnLabels &&
    rows && (
      <BtTable {...props} striped bordered hover variant="dark">
        <thead>
          <tr>
            {columnLabels.map((label, i) => (
              <th key={i}>{label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => {
            return (
              <Fragment key={rowIndex}>
                <tr>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                  {actions && <td>{actions()}</td>}
                </tr>
              </Fragment>
            );
          })}
        </tbody>
      </BtTable>
    )
  );
};

export default Table;
