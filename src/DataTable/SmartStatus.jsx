import React, { useContext } from 'react';
import DataTableContext from './DataTableContext';
import FilterStatusDefault from './FilterStatus';
import RowStatusDefault from './RowStatus';
import SelectionStatusDefault from './selection/SelectionStatus';

const SMART_STATUS_CLASS = 'pgn__smart-status';

function SmartStatus() {
  const {
    state, selectedFlatRows, SelectionStatusComponent, FilterStatusComponent, RowStatusComponent, showFiltersInSidebar,
  } = useContext(DataTableContext);
  const numSelectedRows = selectedFlatRows?.length;
  const SelectionStatus = SelectionStatusComponent || SelectionStatusDefault;
  const FilterStatus = FilterStatusComponent || FilterStatusDefault;
  const RowStatus = RowStatusComponent || RowStatusDefault;

  if (selectedFlatRows && numSelectedRows > 0) {
    return (
      <SelectionStatus
        className={SMART_STATUS_CLASS}
      />
    );
  }
  if (state?.filters && state.filters.length > 0 && !showFiltersInSidebar) {
    return (
      <FilterStatus
        className={SMART_STATUS_CLASS}
      />
    );
  }
  return (
    <RowStatus
      className={SMART_STATUS_CLASS}
    />
  );
}

export default SmartStatus;
