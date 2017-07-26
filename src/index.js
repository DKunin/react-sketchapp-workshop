import React from 'react';
import PropTypes from 'prop-types';
import { render, Artboard, Text, View } from 'react-sketchapp';
import Heading from './components/Heading';
import Button from './components/Button';
import InputField from './components/InputField';
import Separator from './components/Separator';
import { basicColors } from './designVariables';

const ButtonsDisplay = () => (
    <View
        style={{
            flexDirection: 'column',
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center'
        }}
    >
        <Button text="Buttons" styleColor={basicColors.gray} />
        <Separator />
        <Button text="Another button" styleColor={basicColors.orange} />
        <Separator />
        <Button
            text="Full color button"
            styleColor={basicColors.orange}
            colored
        />
    </View>
);

const SimpleForm = () => (
    <Artboard
        style={{
            padding: 20,
            justifyContent: 'center',
            alignItems: 'center'
        }}
    >
        <Heading text="Contact form" />
        <View>
            <InputField width={300} placeholder="E-mail" />
            <InputField width={300} height={100} placeholder="Text your message here" />
        </View>
        <ButtonsDisplay />
    </Artboard>
);

const FullForm = () => (
    <Artboard
        style={{
            padding: 20,
            width: 800,
            alignItems: 'center'
        }}
    >
        <Heading text="Contacts" style={{ paddingBottom: 20 }} />

        <View style={{
            width: 600,
            justifyContent: 'space-around',
            alignItems: 'flex-start',
            flexDirection: 'row'
        }}>
            <View>
                <InputField width={300} placeholder="E-mail" />
                <Separator />
                <InputField width={300} height={100} placeholder="Text your message here..." />
                <Separator />
                <Button
                    text="Submit"
                    styleColor={basicColors.orange}
                    colored
                />
            </View>
            <View>
                <Heading text="Basement company, New Your" size="small" />
                <Text style={{ color: basicColors.fontGray }}>
                    hello@basis.com
                </Text>
                <Text style={{ color: basicColors.fontGray }}>
                    + 7 993 124 14 12
                </Text>
                <Separator />
                <Heading text="Follow us" size="small" />
                <Text style={{ color: basicColors.fontGray }}>
                    twitter vk facebook
                </Text>

            </View>
        </View>
    </Artboard>
);

export default context => {
    render(<FullForm />, context.document.currentPage());
};