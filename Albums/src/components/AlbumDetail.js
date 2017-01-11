import React from 'react';
import { Image, Linking, Text, View } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
  const {
    artist,
    image,
    url,
    title,
    thumbnail_image } = album;
  const {
    headerTextStyle,
    headerContentStyle,
    imageStyle,
    thumbnailContainerStyle,
    thumbnailStyle } = styles;
  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image
          style={imageStyle}
          source={{ uri: image }}
        />
      </CardSection>
      <CardSection>
        <Button onPress={() => Linking.openURL(url)} >
          Buy Now
        </Button>
      </CardSection>
    </Card>
  );
};
const styles = {
  headerTextStyle: {
    fontSize: 18,
  },
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null,
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  thumbnailStyle: {
    width: 50,
    height: 50,
  }
};

export default AlbumDetail;
