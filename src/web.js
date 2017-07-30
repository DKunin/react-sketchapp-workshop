import React from 'react';
import SingleButton from './panes/SingleButton';

const styles = {
    containerStyle: {
        display: 'flex',
        justifyContent: 'center'
    }
};

export default () => (
    <div>
        <div style={styles.containerStyle}>
            <SingleButton />
        </div>
    </div>
);
