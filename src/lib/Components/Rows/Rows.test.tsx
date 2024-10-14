import Enzyme, { mount } from 'enzyme';
import Rows, { IRowsProps } from './Rows';

import Adapter from '@cfaester/enzyme-adapter-react-18';
import { EditingMode } from '../../enums';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { getGroupMark } from '../../Utils/GroupUtils';

Enzyme.configure({ adapter: new Adapter() });

const props: IRowsProps = {
    childComponents: {},
    columns: [
        { key: 'column', title: 'Column 1' },
        { key: 'column2', title: 'Column 2' },
    ],
    data: [
        { column: 1, column2: 2, id: 1 },
        { column: 12, column2: 22, id: 2 },
        { key: [1], groupMark: getGroupMark(), value: 1 },
    ],
    dispatch: () => {},
    format: ({ value }: any) => `formatted: ${value}`,
    editableCells: [],
    editingMode: EditingMode.None,
    groupColumnsCount: 1,
    groupedColumns: [{ key: 'column', title: 'Column 1' }],
    groups: [{ columnKey: 'column' }],
    onFirstRowRendered: () => {},
    rowKeyField: 'id',
    selectedRows: [],
} as any;

describe('Rows', () => {
    it('renders without crashing', () => {
        const element = document.createElement('tbody');
        const root = createRoot(element!);
        root.render(<Rows {...props} />);
        root.unmount();
    });

    it('formats group cell', () => {
        const wrapper = mount(<Rows {...props} />, {
            attachTo: document.createElement('tbody'),
        });
        expect(wrapper.find('.ka-group-text').text()).toBe('formatted: 1');
    });

    it('does not add ka-tree-cell classes', () => {
        const wrapper = mount(<Rows {...props} />, {
            attachTo: document.createElement('tbody'),
        });
        expect(wrapper.find('.ka-tree-cell').length).toBe(0);
        expect(wrapper.find('.ka-tree-empty-space').length).toBe(0);
        expect(wrapper.find('.ka-icon-tree-arrow').length).toBe(0);
    });
});
