import React from 'react';
import { TableFoot } from './TableFoot';
import { createRoot } from 'react-dom/client';

const props: any = {
    childComponents: {},
    columns: [
        { key: 'column', name: 'Column 1' },
        { key: 'column2', name: 'Column 2' },
    ],
    data: [
        { column: 1, column2: 2, id: 1 },
        { column: 12, column2: 22, id: 2 },
    ],
    rowKeyField: 'id',
};

it('renders without crashing', () => {
    const div = document.createElement('table');
    const root = createRoot(div!);
    root.render(<TableFoot {...props} />);
    root.unmount();
});
