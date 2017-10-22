import React from 'react';
import { View } from 'react-primitives';
import InputField from '../components/InputField';
import Heading from '../components/Heading';
import ButtonsDisplay from './ButtonsDisplay';

export const SimpleForm = () => (
    <View
        style={{
            padding: 20,
            border: '1px solid grey',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
        <Heading text='Contact form' />
        <View
            style={{
                flexDirection: 'column',
                padding: 20,
                justifyContent: 'space-between',
                alignItems: 'space-between',
                height: 200
            }}>
            <InputField width={300} placeholder='E-mail' />
            <InputField width={300} height={100} placeholder='Text your message here' />
        </View>
        <ButtonsDisplay />
    </View>
);

export default SimpleForm;
