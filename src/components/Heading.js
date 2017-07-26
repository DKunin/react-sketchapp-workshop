import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-sketchapp';

import { headingSizes } from '../designVariables';

export default ({ text, style, size }) => (
    <View>
        <Text style={{
            fontSize: headingSizes[size || 'default'],
            fontFamily: size === 'small' ? 'Lato' : 'Lato-Black',
            ...style
        }}>
            {text}
        </Text>
    </View>
);