import { DataType, EditingMode } from '../../enums';

import CellEditorDataType from './CellEditorDataType';
import { ICellEditorProps } from '../../props';
import React from 'react';
import { createRoot } from 'react-dom/client';

const props: ICellEditorProps = {
    column: {
        dataType: DataType.String,
        key: 'column',
        title: 'Field',
    },
    dispatch: () => {},
    editingMode: EditingMode.None,
    field: 'column',
    isSelectedRow: true,
    rowData: [{ column: 12, id: 1 }],
    rowKeyField: 'id',
    rowKeyValue: 1,
    value: 12,
} as any;

it('renders without crashing', () => {
    const testProps = { ...props };
    const element = document.createElement('td');
    const root = createRoot(element!);
    root.render(<CellEditorDataType {...testProps} />);
    root.unmount();
});

it('renders without crashing Boolean', () => {
    const testProps = {
        ...props,
        column: {
            dataType: DataType.Boolean,
            key: 'column',
            title: 'Field',
        },
        rowData: [{ column: true, id: 1 }],
        value: true,
    };
    const element = document.createElement('td');
    const root = createRoot(element!);
    root.render(<CellEditorDataType {...testProps} />);
    root.unmount();
});

it('renders without crashing Date', () => {
    const testProps = {
        ...props,
        column: {
            dataType: DataType.Date,
            key: 'column',
            title: 'Field',
        },
        rowData: [{ column: new Date(2021, 10, 10), id: 1 }],
        value: new Date(2021, 10, 10),
    };
    const element = document.createElement('td');
    const root = createRoot(element!);
    root.render(<CellEditorDataType {...testProps} />);
    root.unmount();
});
