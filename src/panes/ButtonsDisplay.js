import React from 'react';
import { View } from 'react-primitives';
import Button from '../components/Button';
import Separator from '../components/Separator';
import { basicColors } from '../designVariables';

export const ButtonsDisplay = () => (
    <View
        style={{
            flexDirection: 'column',
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
        <Button text='Buttons' styleColor={basicColors.gray} />
        <Separator />
        <Button text='Another button' styleColor={basicColors.orange} />
        <Separator />
        <Button
            text='Full color button'
            styleColor={basicColors.orange}
            colored />
    </View>
);

export default ButtonsDisplay;
