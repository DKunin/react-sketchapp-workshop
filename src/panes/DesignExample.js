import React from 'react';
import { View, Text } from 'react-primitives';
import InputField from '../components/InputField';
import Heading from '../components/Heading';
import Button from '../components/Button';
import { basicColors } from '../designVariables';

const mainGrayTextStyle = { padding: 20 };

export const DesignExample = () => (
    <View>
        <View style={mainGrayTextStyle}>
            <Text>Heading example:</Text>
            <Heading text='Contact form' />
        </View>

        <View style={mainGrayTextStyle}>
            <Text>Input field example:</Text>
            <InputField width={300} placeholder='Email' />
        </View>

        <View style={mainGrayTextStyle}>
            <Text>Button Main:</Text>
            <Button text='Send' colored styleColor={basicColors.orange} />

            <Text>Button Light:</Text>
            <Button text='Send' styleColor={basicColors.gray} />
        </View>


    </View>
);

export default DesignExample;
