import React from 'react';
import { Artboard, Text, View } from 'react-primitives';
import Heading from '../components/Heading';
import Button from '../components/Button';
import InputField from '../components/InputField';
import Separator from '../components/Separator';
import { basicColors } from '../designVariables';

export const FullForm = () => (
    <View
        style={{
            padding: 20,
            width: 800,
            alignItems: 'center'
        }} >
        <Heading text='Contacts' style={{ paddingBottom: 20 }} />

        <View style={{
            width: 600,
            justifyContent: 'space-around',
            alignItems: 'flex-start',
            flexDirection: 'row'
        }}>
            <View>
                <InputField width={300} placeholder='E-mail' />
                <Separator />
                <InputField width={300} height={100} placeholder='Text your message here...' />
                <Separator />
                <Button
                    text='Submit'
                    styleColor={basicColors.orange}
                    colored />
            </View>
            <View>
                <Heading text='Basement company, New Your' size='small' />
                <Text style={{ color: basicColors.fontGray }}>
                    hello@basis.com
                </Text>
                <Text style={{ color: basicColors.fontGray }}>
                    + 7 993 124 14 12
                </Text>
                <Separator />
                <Separator />
                <Heading text='Follow us2' size='small' />
                <Text style={{ color: basicColors.fontGray }}>
                    twitter vk facebook
                </Text>
            </View>
        </View>
    </View>
);

export default FullForm;
