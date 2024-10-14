import { ActionType, DataType } from '../../enums';
import Enzyme, { mount } from 'enzyme';

import Adapter from '@cfaester/enzyme-adapter-react-18';
import CellEditorNumber from './CellEditorNumber';
import { ICellEditorProps } from '../../props';
import React from 'react';
import { createRoot } from 'react-dom/client';

Enzyme.configure({ adapter: new Adapter() });

let props: ICellEditorProps;

beforeEach(() => {
    props = {
        column: {
            dataType: DataType.String,
            key: 'fieldName',
            title: 'Field',
        },
        dispatch: jest.fn(),
        field: 'fieldName',
        isSelectedRow: true,
        rowData: { fieldName: 1, id: 1 },
        rowKeyField: 'id',
        rowKeyValue: 1,
    } as any;
});

describe('CellEditorNumber', () => {
    it('renders without crashing', () => {
        const element = document.createElement('td');
        const root = createRoot(element!);
        root.render(<CellEditorNumber {...props} />);
        root.unmount();
    });

    it('should fire RowDataChanged', () => {
        const newValue = 2;
        const wrapper = mount(<CellEditorNumber {...props} />);

        wrapper.find('input').props().onChange!({
            currentTarget: { value: newValue },
        } as any);
        expect(props.dispatch).toHaveBeenCalledTimes(1);
        expect(props.dispatch).toHaveBeenCalledWith({
            columnKey: 'fieldName',
            rowKeyValue: 1,
            type: ActionType.UpdateCellValue,
            value: newValue,
        });
    });

    it('should fire CloseEditor on blur', () => {
        const wrapper = mount(<CellEditorNumber {...props} />);
        wrapper.find('input').simulate('blur');

        expect(props.dispatch).toHaveBeenCalledTimes(1);
        expect(props.dispatch).toHaveBeenCalledWith({
            type: ActionType.CloseEditor,
            columnKey: 'fieldName',
            rowKeyValue: 1,
        });
    });
});
