import React from 'react';
import { ImageProps, TouchableOpacityProps, View, TouchableOpacity, Image, Text } from 'react-native';

import { styles } from './styles';

interface IProps extends TouchableOpacityProps {
  title: string;
  image: ImageProps;
}

export function Option({ image, title, ...rest }: IProps) {
  return (
    <TouchableOpacity 
      style={styles.container}
      {...rest}
    >
      <Image 
        source={image}
        style={styles.image}
      />

      <Text style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}