import React, { ReactNode } from "react";

// Props for Table
interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  children: ReactNode;
  className?: string;
}

// Props for TableHeader
interface TableHeaderProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: ReactNode;
  className?: string;
}

// Props for TableBody
interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: ReactNode;
  className?: string;
}

// Props for TableRow
interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  children: ReactNode;
  className?: string;
}

// Props for TableCell
interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  children: ReactNode;
  isHeader?: boolean;
  className?: string;
}

// Table Component
const Table: React.FC<TableProps> = ({ children, className, ...rest }) => {
  return <table className={`min-w-full ${className}`} {...rest}>{children}</table>;
};

// TableHeader Component
const TableHeader: React.FC<TableHeaderProps> = ({ children, className, ...rest }) => {
  return <thead className={className} {...rest}>{children}</thead>;
};

// TableBody Component
const TableBody: React.FC<TableBodyProps> = ({ children, className, ...rest }) => {
  return <tbody className={className} {...rest}>{children}</tbody>;
};

// TableRow Component
const TableRow: React.FC<TableRowProps> = ({ children, className, ...rest }) => {
  return <tr className={className} {...rest}>{children}</tr>;
};

// TableCell Component
const TableCell: React.FC<TableCellProps> = ({
  children,
  isHeader = false,
  className,
  ...rest
}) => {
  const CellTag = isHeader ? "th" : "td";
  return <CellTag className={className} {...rest}>{children}</CellTag>;
};

export { Table, TableHeader, TableBody, TableRow, TableCell };
