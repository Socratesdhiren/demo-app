import React, {
  createContext,
  useState,
  useMemo,
  useContext,
  memo,
} from "react";

const TableDataContext = createContext({
  selectedTableColumn: [],
  setSelectedTableColumn: () => null,
  searchValue: "",
  setSearchValue: () => null,
});

export const useTableList = () => {
  const {
    selectedTableColumn,
    setSelectedTableColumn,
    searchValue,
    setSearchValue,
  } = useContext(TableDataContext);
  return useMemo(
    () => ({
      selectedTableColumn,
      setSelectedTableColumn,
      searchValue,
      setSearchValue,
    }),
    [selectedTableColumn, setSelectedTableColumn, searchValue, setSearchValue]
  );
};

export const TableProvider = memo(({ children }) => {
  const [selectedTableColumn, setSelectedTableColumn] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const TablesContext = useMemo(
    () => ({
      selectedTableColumn,
      setSelectedTableColumn,
      searchValue,
      setSearchValue,
    }),
    [selectedTableColumn, setSelectedTableColumn, searchValue, setSearchValue]
  );

  return (
    <TableDataContext.Provider value={TablesContext}>
      {children}
    </TableDataContext.Provider>
  );
});
