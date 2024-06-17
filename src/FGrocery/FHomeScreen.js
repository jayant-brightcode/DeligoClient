import {
  StatusBar,
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
  TouchableWithoutFeedback,
  Animated,
  Easing,
} from 'react-native';
import Colors from '../utils/Color';
import BannerSlider from '../common/component/BannerSlider';
import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';

const FHomeScreen = () => {
  const navigation = useNavigation();

  const scrollY = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(scrollY, 0, 64);
  const translateY = diffClamp.interpolate({
    inputRange: [0, 64],
    outputRange: [0, 64],
  });
  const [navVisible, setNavVisible] = useState(true);
  const yourDataArray = [
    {id: 1, title: 'Snacks', image: require('../../assets/snacks.png')},
    {id: 2, title: 'Makeup', image: require('../../assets/makeup.png')},
    {id: 3, title: 'Ice-Creams', image: require('../../assets/ice.png')},
    {id: 4, title: 'Fruits', image: require('../../assets/fruit.png')},
    // Add more data items as needed
  ];

  const category = [
    {
      id: 1,
      title: 'Fruits & Vegetables',
      image: require('../../assets/snacks.png'),
    },
    {
      id: 2,
      title: 'Bakery, Cakes & Diary',
      image: require('../../assets/makeup.png'),
    },
    {
      id: 3,
      title: 'Masalas , Oils & Dry Fruits',
      image: require('../../assets/ice.png'),
    },
    {
      id: 4,
      title: 'Aata Rice & Dals',
      image: require('../../assets/fruit.png'),
    },
    {
      id: 5,
      title: 'Fruits & Vegetables',
      image: require('../../assets/snacks.png'),
    },
    {
      id: 6,
      title: 'Bakery, Cakes & Diary',
      image: require('../../assets/makeup.png'),
    },
    {
      id: 7,
      title: 'Masalas , Oils & Dry Fruits',
      image: require('../../assets/ice.png'),
    },
    {
      id: 8,
      title: 'Aata Rice & Dals',
      image: require('../../assets/fruit.png'),
    },
    // Add more data items as needed
  ];

  const bannerList = [
    {id: 1, image: '../../assets/fish03.jpg'},
    {id: 2, image: '../../assets/mutton04.jpg'},

    // Add more data items as needed
  ];

  const renderDemandedItems = ({item}) => {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate('FProductListScreen');
        }}>
        <View>
          <View
            style={{
              width: 100,
              height: 100,
              marginStart: 10,
              backgroundColor: Colors.light_green,
              paddingTop: '5%',
              borderRadius: 500,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image style={{width: 60, height: 60}} source={item.image}></Image>
          </View>
          <Text
            numberOfLines={1}
            style={{
              alignSelf: 'center',
              textAlign: 'center',
              fontFamily: 'urbanistmedium',
            }}>
            {item.title}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  const renderCategory = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('FProductListScreen');
        }}>
        <View style={{width: 80, height: 115, marginEnd: 10, marginBottom: 15}}>
          <View
            style={{
              width: 80,
              height: 40,
              position: 'absolute',
              top: 0,
              backgroundColor: Colors.light_purple,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}></View>
          <View
            style={{
              width: 80,
              height: 70,
              paddingTop: '5%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image style={{width: 50, height: 50}} source={item.image}></Image>
          </View>
          <View>
            <Text
              style={{
                fontFamily: 'urbanistbold',
                fontSize: 12,
                textAlign: 'center',
                alignSelf: 'center',
              }}>
              {item.title}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderProducts = ({item}) => {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate('FProductDetailScreen');
        }}>
        <View
          style={{
            width: 140,
            height: 175,
            marginEnd: 10,
            marginBottom: 15,
            backgroundColor: Colors.white,
            borderRadius: 10,
            elevation: 1,
          }}>
          <Image
            style={{
              width: 90,
              height: 90,
              alignSelf: 'center',
              borderRadius: 10,
              borderColor: Colors.gray,
              borderWidth: 1,
            }}
            source={item.image}></Image>

          <Text
            style={{
              backgroundColor: Colors.dark_green,
              padding: 3,
              borderTopLeftRadius: 10,
              textAlign: 'center',
              fontSize: 10,
              color: Colors.white,
              borderBottomRightRadius: 10,
              width: '50%',
              fontFamily: 'urbanistmedium',
              position: 'absolute',
            }}>
            10% OFF
          </Text>
          <Text
            numColumns={2}
            style={{
              color: Colors.textcolor,
              fontFamily: 'urbanistmedium',
              fontSize: 12,
              textAlign: 'center',
              width: 80,
              alignSelf: 'center',
            }}>
            {item.title}
          </Text>

          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              numColumns={2}
              style={{
                color: Colors.textcolor,
                fontFamily: 'urbanistmedium',
                fontSize: 10,
                marginStart: 3,
                width: 80,
              }}>
              32 gm
            </Text>
            <Image
              style={{
                width: 13,
                height: 13,
                tintColor: Colors.dark_gray,
                marginStart: '3%',
                marginEnd: 10,
              }}
              source={require('../../assets/next.png')}
            />
          </View>
          <View
            style={{flexDirection: 'row', width: '100%', alignItems: 'center'}}>
            <Text
              numColumns={2}
              style={{
                color: Colors.black,
                fontFamily: 'urbanistbold',
                fontSize: 13,
                marginStart: 3,
              }}>
              ₹ 200
            </Text>
            <Text
              numColumns={2}
              style={{
                color: Colors.dark_gray,
                fontFamily: 'urbanistbold',
                fontSize: 13,
                marginStart: 3,
                marginStart: 10,
                textDecorationLine: 'line-through',
              }}>
              ₹ 300
            </Text>
          </View>

          <Text
            numColumns={2}
            style={{
              color: Colors.dark_gray,
              fontFamily: 'urbanistbold',
              fontSize: 13,
              backgroundColor: Colors.red,
              width: 30,
              alignSelf: 'flex-end',
              textAlign: 'center',
              color: Colors.white,
              borderRadius: 10,
              padding: 8,
            }}>
            +
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View style={style.container}>
      <StatusBar backgroundColor={Colors.light_green} />

      <View style={{height: '15%', backgroundColor: Colors.light_green}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '80%',
              height: '100%',
              padding: '3',
            }}>
            <Image
              style={{
                width: '36%',
                height: 45,
                marginStart: '4%',
                marginTop: '4%',
              }}
              source={require('../../assets/logotwo.png')}
            />

            <View
              style={{
                marginStart: '2%',
                marginTop: '3%',
                height: '50%',
                width: '0.5%',
                backgroundColor: Colors.green_light_2,
              }}></View>
            <Text
              style={{
                marginStart: '2%',
                marginTop: '1%',
                fontFamily: 'urbanistmedium',
              }}>
              Save Money {'\n'}with Deligo
            </Text>
          </View>

          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate('FAccountScreen');
            }}>
            <Image
              style={{
                width: '7%',
                height: 28,
                marginStart: '4%',
                marginTop: '2%',
                marginEnd: '4%',
                borderRadius: 500,
                borderWidth: 1,
                borderColor: Colors.black,
              }}
              source={require('../../assets/user.png')}
            />
          </TouchableWithoutFeedback>
        </View>

        <View
          style={{
            width: '95%',
            backgroundColor: Colors.green,
            height: '35%',
            alignSelf: 'center',
            padding: 10,
            marginTop: '3%',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            style={{width: '3%', height: 15, tintColor: Colors.dark_green}}
            source={require('../../assets/location_white.png')}
          />
          <Text style={{marginStart: '4%', fontFamily: 'urbanistmedium'}}>
            My Location - Ranchi 834001
          </Text>
        </View>
      </View>

      {navVisible && (
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginStart: '3%',
              marginEnd: '3%',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: Colors.light_purple,
                padding: 10,
                width: '50%',
              }}>
              <Image
                style={{width: 50, height: 20}}
                source={require('../../assets/logotwo.png')}
              />
              <Text style={{marginStart: '4%', fontFamily: 'urbanistbold'}}>
                GROCERY
              </Text>
            </View>

            <TouchableWithoutFeedback
              onPress={() => {
                navigation.navigate('HomeScreen');
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: Colors.altra_light_purple,
                  padding: 10,
                  width: '50%',
                }}>
                <Image
                  style={{width: 50, height: 20}}
                  source={require('../../assets/logotwo.png')}
                />
                <Text style={{marginStart: '4%', fontFamily: 'urbanistbold'}}>
                  FOODS
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>

          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate('FProductListScreen');
            }}>
            <View
              style={{
                marginTop: '3%',
                height: 40,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: Colors.grayview,
                width: '95%',
                alignSelf: 'center',
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 10,
              }}>
              <Image
                style={{
                  width: '4%',
                  height: 18,
                  tintColor: Colors.dark_green,
                  marginStart: '3%',
                }}
                source={require('../../assets/search.png')}
              />

              <TextInput
                style={{marginStart: '3%', fontFamily: 'urbanistregular'}}
                placeholder="Search items"
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
      )}

      <FlatList
        data={[
          {type: 'header', id: 'header'},
          {type: 'mostDemandedItems', id: 'mostDemandedItems'},
          {type: 'bannerSlider', id: 'bannerSlider'},
          {type: 'shopByCategoryHeader', id: 'shopByCategoryHeader'},
          {type: 'categories', id: 'categories'},
          {type: 'home_essential', id: 'home_essential'},
          {type: 'beauty', id: 'beauty'},
          {type: 'school', id: 'school'},
        ]}
        renderItem={({item}) => {
          switch (item.type) {
            case 'header':
              return (
                <View
                  style={{width: '95%', alignSelf: 'center', marginTop: '4%'}}>
                  <Text
                    style={{
                      fontSize: 17,
                      fontFamily: 'urbanistbold',
                      color: Colors.textcolor,
                    }}>
                    Most Demanded Items
                  </Text>
                  <Text
                    style={{
                      fontSize: 13,
                      fontFamily: 'urbanistmedium',
                      color: Colors.textcolor,
                      marginTop: '1%',
                    }}>
                    Shopping made easy
                  </Text>
                </View>
              );
            case 'mostDemandedItems':
              return (
                <View style={{marginTop: '5%'}}>
                  <FlatList
                    data={yourDataArray}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={renderDemandedItems}
                    keyExtractor={item => item.id.toString()}
                  />
                </View>
              );
            case 'bannerSlider':
              return (
                <View
                  style={{width: '95%', alignSelf: 'center', marginTop: '4%'}}>
                  <BannerSlider images={bannerList} navigation={navigation} />
                </View>
              );
            case 'shopByCategoryHeader':
              return (
                <View
                  style={{width: '95%', alignSelf: 'center', marginTop: '4%'}}>
                  <Text
                    style={{
                      fontSize: 17,
                      fontFamily: 'urbanistbold',
                      color: Colors.textcolor,
                    }}>
                    Shop By Category
                  </Text>
                </View>
              );
            case 'categories':
              return (
                <View style={{marginTop: '5%', alignItems: 'center'}}>
                  <FlatList
                    data={category}
                    numColumns={4}
                    showsHorizontalScrollIndicator={false}
                    renderItem={renderCategory}
                    keyExtractor={item => item.id.toString()}
                  />
                </View>
              );

            case 'home_essential':
              return (
                <View
                  style={{width: '95%', alignSelf: 'center', marginTop: '4%'}}>
                  <View
                    style={{
                      backgroundColor: Colors.light_green,
                      width: '100%',
                      height: 150,
                      position: 'absolute',
                    }}></View>

                  <View
                    style={{
                      width: '100%',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginTop: '4%',
                    }}>
                    <View>
                      <Text
                        style={{
                          fontSize: 17,
                          fontFamily: 'urbanistbold',
                          color: Colors.textcolor,
                        }}>
                        Home Essential
                      </Text>
                      <Text
                        style={{
                          fontSize: 13,
                          fontFamily: 'urbanistmedium',
                          color: Colors.textcolor,
                          marginTop: '1%',
                        }}>
                        Simplify Cleaning Tasks
                      </Text>
                    </View>

                    <Image
                      style={{
                        width: '5%',
                        height: 19,
                        tintColor: Colors.black,
                        marginStart: '3%',
                        marginEnd: 15,
                      }}
                      source={require('../../assets/next.png')}
                    />
                  </View>

                  <View style={{marginTop: '5%', alignItems: 'center'}}>
                    <FlatList
                      data={category}
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}
                      renderItem={renderProducts}
                      keyExtractor={item => item.id.toString()}
                    />
                  </View>
                </View>
              );

            case 'beauty':
              return (
                <View
                  style={{width: '95%', alignSelf: 'center', marginTop: '4%'}}>
                  <View
                    style={{
                      backgroundColor: Colors.light_green,
                      width: '100%',
                      height: 150,
                      position: 'absolute',
                    }}></View>

                  <View
                    style={{
                      width: '100%',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginTop: '4%',
                    }}>
                    <View>
                      <Text
                        style={{
                          fontSize: 17,
                          fontFamily: 'urbanistbold',
                          color: Colors.textcolor,
                        }}>
                        Beauty & Grooming
                      </Text>
                      <Text
                        style={{
                          fontSize: 13,
                          fontFamily: 'urbanistmedium',
                          color: Colors.textcolor,
                          marginTop: '1%',
                        }}>
                        Flawless base grow
                      </Text>
                    </View>

                    <Image
                      style={{
                        width: '5%',
                        height: 19,
                        tintColor: Colors.black,
                        marginStart: '3%',
                        marginEnd: 15,
                      }}
                      source={require('../../assets/next.png')}
                    />
                  </View>

                  <View style={{marginTop: '5%', alignItems: 'center'}}>
                    <FlatList
                      data={category}
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}
                      renderItem={renderProducts}
                      keyExtractor={item => item.id.toString()}
                    />
                  </View>
                </View>
              );

            case 'school':
              return (
                <View
                  style={{width: '95%', alignSelf: 'center', marginTop: '4%'}}>
                  <View
                    style={{
                      backgroundColor: Colors.light_green,
                      width: '100%',
                      height: 150,
                      position: 'absolute',
                    }}></View>

                  <View
                    style={{
                      width: '100%',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginTop: '4%',
                    }}>
                    <View>
                      <Text
                        style={{
                          fontSize: 17,
                          fontFamily: 'urbanistbold',
                          color: Colors.textcolor,
                        }}>
                        All School Esential
                      </Text>
                      <Text
                        style={{
                          fontSize: 13,
                          fontFamily: 'urbanistmedium',
                          color: Colors.textcolor,
                          marginTop: '1%',
                        }}>
                        Scholastic Need For You
                      </Text>
                    </View>

                    <Image
                      style={{
                        width: '5%',
                        height: 19,
                        tintColor: Colors.black,
                        marginStart: '3%',
                        marginEnd: 15,
                      }}
                      source={require('../../assets/next.png')}
                    />
                  </View>

                  <View style={{marginTop: '5%', alignItems: 'center'}}>
                    <FlatList
                      data={category}
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}
                      renderItem={renderProducts}
                      keyExtractor={item => item.id.toString()}
                    />
                  </View>
                </View>
              );

            default:
              return null;
          }
        }}
        keyExtractor={item => item.id}
        onScroll={e => {
          scrollY.setValue(e.nativeEvent.contentOffset.y);
        }}
        showsVerticalScrollIndicator={false}
      />

      {/* navigation */}

      <Animated.View
        style={{
          transform: [{translateY: translateY}],
        }}>
        {navVisible && (
          <View
            style={{
              width: '100%',
              position: 'absolute',
              bottom: 0,
              height: 70,
              borderTopColor: Colors.gray,
              borderTopWidth: 3,
              backgroundColor: Colors.white,
              justifyContent: 'space-around',
              flexDirection: 'row',
            }}>
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: Colors.white,
                width: 50,
              }}>
              <Image
                style={{width: 23, height: 23, tintColor: Colors.textcolor}}
                source={require('../../assets/home.png')}
              />
              <Text style={{fontFamily: 'urbanistmedium', fontSize: 12}}>
                Home
              </Text>
            </View>

            <TouchableWithoutFeedback
              onPress={() => {
                navigation.navigate('FCategoryScreen');
              }}>
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: Colors.white,
                  width: 70,
                  marginStart: 10,
                }}>
                <Image
                  style={{width: 25, height: 25, tintColor: Colors.textcolor}}
                  source={require('../../assets/category.png')}
                />
                <Text style={{fontFamily: 'urbanistmedium', fontSize: 12}}>
                  Categories
                </Text>
              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
              onPress={() => {
                navigation.navigate('FProductListScreen');
              }}>
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: Colors.white,
                  width: 50,
                  marginStart: 10,
                }}>
                <Image
                  style={{
                    width: 27,
                    height: 27,
                    tintColor: Colors.textcolor,
                    backgroundColor: Colors.light_green,
                    borderRadius: 500,
                  }}
                  source={require('../../assets/search.png')}
                />
                <Text style={{fontFamily: 'urbanistmedium', fontSize: 12}}>
                  Search
                </Text>
              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
              onPress={() => {
                navigation.navigate('FOrderHistoryScreen');
              }}>
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: Colors.white,
                  width: 50,
                  marginStart: 10,
                }}>
                <Image
                  style={{width: 27, height: 27, tintColor: Colors.textcolor}}
                  source={require('../../assets/order.png')}
                />
                <Text style={{fontFamily: 'urbanistmedium', fontSize: 12}}>
                  Orders
                </Text>
              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
              onPress={() => {
                navigation.navigate('FCartScreen');
              }}>
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: Colors.white,
                  width: 50,
                  marginStart: 10,
                }}>
                <Image
                  style={{width: 27, height: 27, tintColor: Colors.textcolor}}
                  source={require('../../assets/cart.png')}
                />
                <Text style={{fontFamily: 'urbanistmedium', fontSize: 12}}>
                  Basket
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        )}
      </Animated.View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});

export default FHomeScreen;
