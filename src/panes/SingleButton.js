import React from 'react';
import { View, Artboard } from 'react-primitives';
import Button from '../components/Button';
import InputField from '../components/InputField';
import Heading from '../components/Heading';
import Separator from '../components/Separator';
import { basicColors } from '../designVariables';

export const SingleButton = () => (
    <View>
        <Button
            text='Отправить'
            styleColor={basicColors.orange}
            colored />
    </View>
);

export default SingleButton;
