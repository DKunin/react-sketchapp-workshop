import React from 'react';
import { View, Artboard } from 'react-primitives';
import InputField from '../components/InputField';
import Heading from '../components/Heading';
import ButtonsDisplay from './ButtonsDisplay';
import { basicColors } from '../designVariables';

export const SimpleForm = () => (
    <View
        style={{
            padding: 20,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
        <Heading text='Contact form' />
        <View>
            <InputField width={300} placeholder='E-mail' />
            <InputField width={300} height={100} placeholder='Text your message here' />
        </View>
        <ButtonsDisplay />
    </View>
);

export default SimpleForm;
