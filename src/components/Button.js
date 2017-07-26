import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-sketchapp';

import chroma from 'chroma-js';

export default ({ text, styleColor, colored }) => (
    <View
        name="Button"
        style={{
            justifyContent: 'center',
            alignItems: 'center',
            boxSizing: 'border-box',
            display: 'inline-block',
            lineHeight: 0,
            borderWidth: 1,
            borderRadius: 30,
            display: 'inline',
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 30,
            paddingRight: 30,
            borderStyle: 'solid',
            borderColor: styleColor,
            backgroundColor: colored ? styleColor : null
        }}
    >
        <Text
            name="ButtonText"
            style={{
                color: colored
                    ? 'white'
                    : chroma(styleColor).luminance() > 0.50
                          ? chroma(styleColor).darken(5).hex()
                          : styleColor,
                fontFamily: 'Lato'
            }}
        >
            {text}
        </Text>
    </View>
);