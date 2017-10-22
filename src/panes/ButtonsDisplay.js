import React from 'react';
import { View } from 'react-primitives';
import Button from '../components/Button';
import { basicColors } from '../designVariables';

export const ButtonsDisplay = () => (
    <View
        style={{
            flexDirection: 'row',
            padding: 20
        }}>
        <Button
            text='Full color button'
            styleColor={basicColors.orange}
            colored />
        <Button text='Отмена' styleColor={basicColors.gray} />
    </View>
);

export default ButtonsDisplay;
