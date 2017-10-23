import React from 'react';
import { render } from 'react-sketchapp';
import fetch from 'sketch-module-fetch-polyfill';

import ListExample from './panes/ListExample';

export default context => {
    // render(<ListExample />, context.document.currentPage());
    fetch('https://reqres.in/api/users').then(res => res.json()).then(result => {
        render(<ListExample data={{ data: result.data }} />, context.document.currentPage());
    });
};

// ===================================

// import DesignExample from './panes/DesignExample';

// export default context => {
//     render(<DesignExample />, context.document.currentPage());
// };

// ===================================

// import SingleButton from './panes/SingleButton';

// export default context => {
//     render(<SingleButton />, context.document.currentPage());
// };

// ===================================

// import SimpleForm from './panes/SimpleForm';

// export default context => {
//     render(<SimpleForm />, context.document.currentPage());
// };

// ===================================

// import FullForm from './panes/FullForm';

// export default context => {
//     render(<FullForm />, context.document.currentPage());
// };

