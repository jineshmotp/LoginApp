import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { colors } from '../../Constants/colors';

interface SliderItem {
  id: string;
  uri: string;
}

interface ImageSliderProps {
  data: SliderItem[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ data }) => {
  const [activeSlide, setActiveSlide] = React.useState(0);

  const renderItem = ({ item, index }: { item: SliderItem, index: number }) => {
    const opacity = index === activeSlide ? 1 : 0.6; // Adjust the opacity values as needed

    return (
      <View style={[styles.slide, { opacity }]}>
        <Image source={item.uri} style={styles.image} resizeMode="cover" />
      </View>
    );
  };

  return (
    <View>
      <Carousel
        data={data}
        layout={'tinder'}
        renderItem={renderItem}
        sliderWidth={wp('100%')}
        itemWidth={wp('80%')}
        onSnapToItem={(index) => setActiveSlide(index)}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.paginationContainer}
        dotColor={colors.primary}
        inactiveDotColor={colors.lightGray}
        inactiveDotOpacity={0.6}
        inactiveDotScale={0.8}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    width: wp('80%'),
    height: hp('40%'), // You can adjust the height based on your design
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    width: '100%',
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
  },
});

export default ImageSlider;
