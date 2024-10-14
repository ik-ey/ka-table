import HeaderFilterPopupContent from './HeaderFilterPopupContent';
import React from 'react';
import { createRoot } from 'react-dom/client';

const props: any = {
    column: {key: 'field'},
    childComponents: {},
    dispatch: () => {},
    data: [{ feild: 1 }]
};

it('renders without crashing', () => {
    const div = document.createElement('div');
    const root = createRoot(div!);
    root.render(<HeaderFilterPopupContent {...props} />);
    root.unmount();
});
