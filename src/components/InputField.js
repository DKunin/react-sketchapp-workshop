import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-primitives';
import chroma from 'chroma-js';

import { basicColors } from '../designVariables';

export const InputField = ({ placeholder, width, height }) => (
    <View
        style={{
            backgroundColor: basicColors.gray,
            width,
            height
        }}>
        <Text
            style={{
                padding: 10,
                color: chroma(basicColors.gray)
                    .darken()
                    .hex()
            }}>
            {placeholder}
        </Text>
    </View>
);

export default InputField;

InputField.propTypes = {
    placeholder: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number
};
