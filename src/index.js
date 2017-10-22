import React from 'react';
import { render } from 'react-sketchapp';

import SingleButton from './panes/SingleButton';

// export default context => {
//     render(<SingleButton />, context.document.currentPage());
// };

// ===================================

import SimpleForm from './panes/SimpleForm';

export default context => {
    render(<SimpleForm />, context.document.currentPage());
};

// ===================================

// import FullForm from './panes/FullForm';

// export default context => {
//     render(<FullForm />, context.document.currentPage());
// };

