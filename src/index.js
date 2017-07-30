import React from 'react';
import { render } from 'react-sketchapp';
import SingleButton from './panes/SingleButton';

export default context => {
    render(<SingleButton />, context.document.currentPage());
};
