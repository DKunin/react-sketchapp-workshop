import React from 'react';
import { Text, View } from 'react-primitives';

import { headingSizes } from '../designVariables';

export default ({ text, size, style }) => (
    <View>
        <Text
            style={{
                fontSize: headingSizes[size || 'default'],
                fontFamily: 'Helvetica',
                ...style
            }}>
            {text}
        </Text>
    </View>
);
