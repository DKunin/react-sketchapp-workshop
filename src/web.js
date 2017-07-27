import React from 'react';
import FullForm from './panes/FullForm';

const styles = {
    containerStyle: {
        display: 'flex',
        justifyContent: 'center'
    }
};

export default () => (
    <div>
        <div style={styles.containerStyle}>
            <FullForm />
        </div>
    </div>
);
