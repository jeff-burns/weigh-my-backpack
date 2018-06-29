import React, { Component } from 'react';
import { Image, Text, View, Linking } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

export default class AlbumDetail extends Component {
    render() {
        const {
            album: { title, artist, thumbnail_image, image, url }
        } = this.props;
        return (
            <Card>
                <CardSection>
                    <View>
                        <Image
                            style={styles.thumbnailStyle}
                            source={{ uri: thumbnail_image }}
                        />
                    </View>
                    <View style={styles.headerContentStyle}>
                        <Text>{title}</Text>
                        <Text>{artist}</Text>
                    </View>
                </CardSection>

                <CardSection>
                    <Image style={styles.imageStyle} source={{ uri: image }} />
                </CardSection>

                <CardSection>
                    <Button onPress={() => Linking.openURL(url)}>
                        Buy Now
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: { fontSize: 18 },
    headerArtistStyle: {},
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    }
};
