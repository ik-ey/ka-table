import React from 'react';

import { IRowProps } from '../../props';
import DataRow from '../DataRow/DataRow';
import DetailsRow from '../DetailsRow/DetailsRow';
import { getElementCustomization } from '../../Utils/ComponentUtils';

const DataAndDetailsRows: React.FunctionComponent<IRowProps> = (props) => {
  const { isDetailsRowShown } = props;
  const {
    childComponents : { dataAndDetailsRows },
  } = props;

  const { content } = getElementCustomization({}, props, dataAndDetailsRows);

  return (
    content
      ? <>{content}</>
      : (
        <>
          <DataRow {...props}/>
          {isDetailsRowShown && <DetailsRow {...props}/>}
        </>
      )
  );
};

export default DataAndDetailsRows;
