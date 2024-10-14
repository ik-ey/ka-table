import {
    ICellEditorProps,
    ICellProps,
    ICellTextProps,
    IDataRowProps,
    IEmptyCellProps,
    IFilterRowEditorProps,
    IGroupPanelCellProps,
    IGroupPanelProps,
    IGroupRowProps,
    IGroupSummaryCellProps,
    IGroupSummaryRowProps,
    IHeadCellProps,
    IHeadCellResizeProps,
    IHeadRowProps,
    IHeaderFilterButtonProps,
    IHeaderFilterPopupProps,
    ILoadingProps,
    INoDataRowProps,
    IPagingIndexProps,
    IPagingProps,
    IPagingSizeProps,
    IPopupContentItemProps,
    IPopupContentProps,
    IRowProps,
    ISortIconProps,
    ISummaryCellProps,
    ISummaryRowProps,
    ITableBodyProps,
    ITableFootProps,
    ITableHeadProps,
} from '../props';

import { ChildComponent } from './ChildComponent';
import { ITableProps } from '../';

export class ChildComponents<TData= any> {
    public cell?: ChildComponent<ICellProps<TData>>;
    public cellEditor?: ChildComponent<ICellEditorProps<TData>>;
    public cellEditorInput?: ChildComponent<ICellEditorProps<TData>>;
    public cellText?: ChildComponent<ICellTextProps<TData>>;
    public dataAndDetailsRows?: ChildComponent<IRowProps>;
    public dataRow?: ChildComponent<IDataRowProps<TData>>;
    public detailsCell?: ChildComponent<IDataRowProps<TData>>;
    public detailsRow?: ChildComponent<IDataRowProps<TData>>;
    public emptyCell?: ChildComponent<IEmptyCellProps>;
    public filterRowCell?: ChildComponent<IFilterRowEditorProps>;
    public filterRowCellInput?: ChildComponent<IFilterRowEditorProps>;
    public groupCell?: ChildComponent<IGroupRowProps<TData>>;
    public groupExpandButton?: ChildComponent<IGroupRowProps<TData>>;
    public groupPanel?: ChildComponent<IGroupPanelProps>;
    public groupPanelCell?: ChildComponent<IGroupPanelCellProps>;
    public groupRow?: ChildComponent<IGroupRowProps<TData>>;
    public groupSummaryCell?: ChildComponent<IGroupSummaryCellProps<TData>>;
    public groupSummaryRow?: ChildComponent<IGroupSummaryRowProps<TData>>;
    public headCell?: ChildComponent<IHeadCellProps>;
    public headCellContent?: ChildComponent<IHeadCellProps>;
    public headCellResize?: ChildComponent<IHeadCellResizeProps>;
    public headerFilterButton?: ChildComponent<IHeaderFilterButtonProps>;
    public headerFilterPopupContent?: ChildComponent<IPopupContentProps<TData>>;
    public headerFilterPopupRow?: ChildComponent<IDataRowProps>;
    public headerFilterPopupSearchInput?: ChildComponent<IFilterRowEditorProps>;
    public headerFilterPopupTextCell?: ChildComponent<ICellProps>;
    public headRow?: ChildComponent<IHeadRowProps>;
    public loading?: ChildComponent<ILoadingProps>;
    public noDataCell?: ChildComponent<INoDataRowProps>;
    public noDataRow?: ChildComponent<INoDataRowProps>;
    public paging?: ChildComponent<IPagingProps>;
    public pagingIndex?: ChildComponent<IPagingIndexProps>;
    public pagingPages?: ChildComponent<IPagingProps>;
    public pagingSize?: ChildComponent<IPagingSizeProps>;
    public pagingSizes?: ChildComponent<IPagingProps>;
    public rootDiv?: ChildComponent<ITableProps<TData>>;
    public sortIcon?: ChildComponent<ISortIconProps>;
    public summaryCell?: ChildComponent<ISummaryCellProps<TData>>;
    public summaryRow?: ChildComponent<ISummaryRowProps<TData>>;
    public table?: ChildComponent<ITableProps<TData>>;
    public tableBody?: ChildComponent<ITableBodyProps<TData>>;
    public tableFoot?: ChildComponent<ITableFootProps<TData>>;
    public tableHead?: ChildComponent<ITableHeadProps>;
    public tableWrapper?: ChildComponent<ITableProps<TData>>;
}
