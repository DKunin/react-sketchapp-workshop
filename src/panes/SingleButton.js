import React from 'react';
import { View } from 'react-primitives';
import Button from '../components/Button';
import InputField from '../components/InputField';
import Heading from '../components/Heading';
import Separator from '../components/Separator';
import { basicColors } from '../designVariables';

export const SingleButton = () => (
    <View
        style={{
            flexDirection: 'column',
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
        <Heading text='Обратная связь с космосом' style={{ paddingBottom: 20 }} />
        <InputField width={300} height={100} placeholder='Напишите сообщение' />
        <Separator />
        <Button
            text='Отправить'
            styleColor={basicColors.orange}
            colored />
    </View>
);

export default SingleButton;
