import React from 'react';
import { render } from 'react-sketchapp';
import FullForm from './panes/FullForm';

export default context => {
    render(<FullForm />, context.document.currentPage());
};
