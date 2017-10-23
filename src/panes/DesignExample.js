import React from 'react';
import { View, Text } from 'react-primitives';
import InputField from '../components/InputField';
import Heading from '../components/Heading';
import ButtonsDisplay from './ButtonsDisplay';

export const DesignExample = () => (
    <View>
        <View
            style={{
                    flexDirection: 'column',
                    padding: 20,
                    justifyContent: 'space-between',
                    alignItems: 'space-between',
                    height: 200
                }}>
            <Text>
                Heading
            </Text>
            <Heading text='Contact form' />
        </View>
        <View
            style={{
                padding: 20,
                height: 200
            }}>
            <InputField width={300} placeholder='Input Field' />
        </View>
        <ButtonsDisplay />
    </View>
);

export default DesignExample;
