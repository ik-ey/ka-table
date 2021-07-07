import * as React from 'react';

import { updateSortDirection, updateHeaderFilterPopupState } from '../../actionCreators';
import defaultOptions from '../../defaultOptions';
import { FilteringMode, SortDirection } from '../../enums';
import { IHeadCellProps } from '../../props';
import { getElementCustomization } from '../../Utils/ComponentUtils';
import { isSortingEnabled } from '../../Utils/SortUtils';

const HeadCellContent: React.FunctionComponent<IHeadCellProps> = (props) => {
  const {
    column,
    dispatch,
    sortingMode,
    filteringMode,
    childComponents: { headCellContent }
  } = props;
  const sortingEnabled = isSortingEnabled(sortingMode);
  const onClick = sortingEnabled ? () => {
    dispatch(updateSortDirection(column.key));
  } : undefined;

  const { elementAttributes, content } = getElementCustomization({
    className: `${defaultOptions.css.theadCellContent} ${sortingEnabled ? 'ka-pointer' : ''}`,
    onClick
  }, props, headCellContent);

  const onClickFilterPopup = () => {
    dispatch(updateHeaderFilterPopupState(column.key, !column.isHeaderFilterPopupShown))
  }

  return (
    <>
      <div {...elementAttributes}>
        {content || <span>{column.title}</span>}
        {filteringMode === FilteringMode.HeaderFilter && <span
          onClick={onClickFilterPopup}
          className={defaultOptions.css.iconHeaderFilter}><svg width="14" height="17" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.1772 10.3188L17.8065 2.38931C18.014 2.13844 18.0587 1.78819 17.9208 1.49217C17.7838 1.18674 17.4804 0.993308 17.1493 1.00018H1.86154C1.53036 0.993308 1.22697 1.1868 1.09002 1.49223C0.944145 1.78276 0.977563 2.13251 1.17572 2.38931L6.71931 10.3188C6.87776 10.5793 6.95728 10.8812 6.94793 11.1871V20.1295C6.95772 20.4295 7.11978 20.7031 7.37657 20.853C7.52758 20.9573 7.7084 21.0082 7.89092 20.9977C8.00819 21.0072 8.12594 20.9874 8.2338 20.9398L11.3199 19.7243C11.6392 19.6069 11.8391 19.2852 11.8057 18.9429V11.1871C11.8361 10.8652 11.9661 10.5614 12.1772 10.3188ZM11.2342 9.62432C10.895 10.0764 10.6961 10.6203 10.6627 11.1871V18.7114L8.09094 19.7243V11.1871C8.11637 10.6378 7.95497 10.0964 7.63375 9.65323L2.40444 2.15783H16.6063L11.2342 9.62432Z" fill="#353C44" stroke="#353C44" strokeWidth="0.6" />
          </svg></span>}
        {column.sortDirection && sortingEnabled && (
          <span
            className={
              column.sortDirection === SortDirection.Ascend
                ? defaultOptions.css.iconSortArrowUp
                : defaultOptions.css.iconSortArrowDown
            }
          >{column.sortIndex}</span>
        )}
        {column.isHeaderFilterPopupShown &&
          <div style={{
            backgroundColor: 'white',
            border: '1px solid #ddd',
            borderRadius: 6,
            boxSizing: 'border-box',
            boxShadow: '0 6px 12px rgb(0 0 0 / 18%)',
            // display: 'flex',
            // justifyContent: 'center',
            // alignItems: 'center',
            padding: '3em',
            position: 'absolute',
            textAlign: 'center',
            width: 245,
            height: 325,
            zIndex: 10
          }}>
            Popup for {column.title}
          </div>
          // <FilterCell
          //   key={column.key}
          //   column={column}
          //   childComponents={props.childComponents}
          //   dispatch={dispatch}
          // />
        }
      </div>
    </>
  );
};

export default HeadCellContent;
