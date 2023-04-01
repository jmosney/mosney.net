import { useState, ChangeEvent, FocusEvent } from 'react';
import styles from './Table.module.scss';
import Cell from '../cell';

export default function Table() {
  // Create and populate empty table.
  const columns = new Array(10);
  const cell = {
    value: '',
    isFormula: false,
  };

  for (let row = 0; row < columns.length; row++) {
    const rows = new Array(10);
    for (let cell = 0; cell < rows.length; cell++) {
      rows[cell] = Object.create({
        value: '',
        isFormula: false,
        formula: '',
      });
    }

    columns[row] = rows;
  }

  const [table, setTable] = useState(columns);
  let lettersArray = 'abcdefghijklmnop'.toUpperCase().split('');

  const getCellForAddress = (address: string, table: any) => {
    const [column, row] = address.split('-');
    const columnI = parseInt(column);
    const rowI = parseInt(row);
    return table[columnI][rowI];
  };

  const getValueFromReference = (reference: string): string => {
    const address = reference.replace(/\$/g, '').split('').join('-');
    const cell = getCellForAddress(address, table);
    return cell.value;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const newTable = table.slice();
    const cell = getCellForAddress(e.target.name, newTable);
    cell.value = value;
    cell.isFormula = value.startsWith('=');
    setTable(newTable);
  };


  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const newTable = table.slice();
    const cell = getCellForAddress(e.target.name, newTable);

    if (cell.isFormula) {
      let formulaToEval = value.substring(1);
      formulaToEval = formulaToEval.replace(/(\$[\w]){2}/g, ref => getValueFromReference(ref));

      const evaluation = eval(formulaToEval);
      cell.value = evaluation + '';
    }
    cell.isFormula = false;
    setTable(newTable);
  }

  function createCell(columnIndex: number, rowIndex: number) {
    return <Cell key={`${columnIndex}-${rowIndex}`}
      name={`${columnIndex}-${rowIndex}`}
      value={table[columnIndex][rowIndex].value}
      onChange={handleChange}
      onBlur={handleBlur}></Cell>
  }

  return (
    <>
      <div className={styles.tableRow}>
        {/* <div className={styles.cornerCell}></div> */}
        {table.map((column, columnIndex) => {
          return <div key={columnIndex} className={styles.headings}>{lettersArray[columnIndex]}</div>
        })}
      </div>

      {table.map((column, columnIndex) => {
        return (
          <div key={columnIndex} className={styles.tableRow}>
            {column.map((row: any, rowIndex: number) => {
              return createCell(columnIndex, rowIndex);
            })}
          </div>
        )
      })}
    </>
  )
}