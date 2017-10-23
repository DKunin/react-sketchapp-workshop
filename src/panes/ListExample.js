import React from 'react';
import { View, Text, Image } from 'react-primitives';
import InputField from '../components/InputField';
import Heading from '../components/Heading';
import Button from '../components/Button';
import { basicColors } from '../designVariables';

const mainGrayTextStyle = { padding: 20 };

export const ListExample = ({ data }) => (
    <View>
        {(data.data || []).map(v => (
            <View>
                <Text key={v.id} {...v}>{v.first_name}</Text>
            </View>
        )
        )}
    </View>
);

export default ListExample;
