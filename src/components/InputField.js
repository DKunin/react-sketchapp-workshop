import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-primitives';
import chroma from 'chroma-js';

import { basicColors } from '../designVariables';

export default ({ placeholder, width, height }) => (
    <View style={{
        backgroundColor: basicColors.gray,
        width,
        height
    }}>
        <Text style={{
            padding: 10,
            color: chroma(basicColors.gray).darken().hex()
        }}>
            {placeholder}
        </Text>
    </View>
);