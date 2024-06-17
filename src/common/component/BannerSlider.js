import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Image, Dimensions, Text,TouchableWithoutFeedback } from 'react-native';

import Swiper from 'react-native-swiper';
import { Remote } from '../Utils/Remote';

const BannerSlider = ({ images ,navigation}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const swiperRef = useRef(null);

    useEffect(() => {
        const autoSlide = setInterval(() => {
            if (currentIndex < images.length - 1) {
                swiperRef.current.scrollBy(1);
            } else {
                swiperRef.current.scrollTo(0);
            }
        }, 3000); // Adjust the interval as needed

        return () => clearInterval(autoSlide);
    }, [currentIndex, images.length]);

    const handleIndexChanged = (index) => {
        setCurrentIndex(index);
    };

    return (
        <View style={styles.container}>
            <Swiper
                ref={swiperRef}
                loop={true}
                autoplay={true}

                onIndexChanged={handleIndexChanged}
                showsPagination={true} // Disable built-in pagination
                removeClippedSubviews={false}
            >
                {images.map((image, index) => (
                    <View key={index} style={styles.slide}>
                        <TouchableWithoutFeedback onPress={()=>{
                          //navigation.navigate("TestSeriesDetailScreen",{data:image.test_series_id})
                        }}>
<Image source={require('../../../assets/1.png')} style={styles.image} />
                         

                        </TouchableWithoutFeedback>
                    </View>
                ))}
            </Swiper>
            <View style={styles.paginationContainer}>
                {images.map((_, index) => (
                    <Text
                        key={index}
                        style={[
                            styles.paginationText,
                            { opacity: index === currentIndex ? 1 : 0.3 },
                        ]}
                    >
                        &bull;
                    </Text>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 190,
        position: 'relative',
    },
    slide: {
        borderRadius:10,
       
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width:'100%',
        height: '100%',
       
        borderRadius:10
    },
    paginationContainer: {
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    paginationText: {
        fontSize: 20,
        marginHorizontal: 5,
    },
});

export default BannerSlider;
