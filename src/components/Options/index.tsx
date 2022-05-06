import React from 'react';
import { View, Text}  from 'react-native';
import { feedbackTypes } from '../../utils/feedbackTypes';

import { Copyright } from '../Copyright';
import { Option } from '../Option';
import { FeedbackType } from '../Widget';

import { styles } from './styles';

interface Props {
  setFeedbackType: (feedbackType: FeedbackType) => void;
}

export function Options({ setFeedbackType }: Props) {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Deixe seu feedback
      </Text>


      <View style={styles.options}>
        {
          Object
            .entries(feedbackTypes)
            .map(([key, value]) => (
              <Option 
                key={key} 
                title={value.title} 
                image={value.image}
                onPress={() => setFeedbackType(key as FeedbackType)}
              />
            ))
        }
      </View>

      <Copyright />
    </View>
  );
}