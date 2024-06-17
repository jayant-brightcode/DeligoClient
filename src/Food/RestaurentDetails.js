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
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import Colors from '../utils/Color';
import BannerSlider from '../common/component/BannerSlider';
import {useNavigation} from '@react-navigation/native';
import {useCallback, useEffect, useRef, useState} from 'react';

import BottomSheet, { BottomSheetView,BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const RestaurentDetails = () => {
  const navigation = useNavigation();
  const bottomSheetRef = useRef(null);

  const recomneded = [
    { id: 1, title: 'Fruits & Vegetables',image:require('../../assets/item3.jpg') },
    { id: 2, title: 'Bakery, Cakes & Diary',image:require('../../assets/item3.jpg') },
    { id: 3, title: 'Masalas , Oils & Dry Fruits',image:require('../../assets/item3.jpg') },
    { id: 4, title: 'Aata Rice & Dals',image:require('../../assets/item3.jpg')},
    { id: 5, title: 'Fruits & Vegetables',image:require('../../assets/item3.jpg') },
    { id: 6, title: 'Bakery, Cakes & Diary',image:require('../../assets/item3.jpg') },
    { id: 7, title: 'Masalas , Oils & Dry Fruits',image:require('../../assets/item3.jpg') },
    { id: 8, title: 'Aata Rice & Dals',image:require('../../assets/item3.jpg')},
    // Add more data items as needed
  ];
  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
    if(index==0){
      StatusBar.setBackgroundColor(Colors.light_green); 
    }
  }, []);
  const openBottomSheet = () => {
    StatusBar.setBackgroundColor('rgba(0, 0, 0, 0.8)'); 
    bottomSheetRef.current.expand();
  };



  const closeBottomSheet = () => {
    bottomSheetRef.current.collapse();
  };

  const renderPackSizeItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => setSelectedPackSize(item.id === selectedPackSize ? null : item.id)}
      style={{
        borderColor: selectedPackSize === item.id ? Colors.dark_green : Colors.grayview,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        margin: 5,
      
        backgroundColor: selectedPackSize === item.id ? Colors.light_green : 'white',
      }}
    >
       <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
        <View>
        <Text style={{  color: selectedPackSize === item.id ? Colors.black : 'black',fontFamily:'urbanistbold' }}>{item.size}</Text>
  
        <View style={{flexDirection:'row',width:'100%',alignItems:'center',marginTop:7}}>
               <Text numColumns={2} style={{color:Colors.black,fontFamily:'urbanistbold',fontSize:13,marginStart:3}}>₹ 200</Text>
               
  
  
               </View>
        </View>
  
        {/* <View style={{flexDirection:'row',alignItems:'center',alignSelf:'flex-end',marginEnd:10,marginStart:'3%'}}>
              <Text numColumns={2} style={{color:Colors.red,fontFamily:'urbanistbold',fontSize:13,backgroundColor:Colors.white,borderColor:Colors.red,borderWidth:1,width:30,alignSelf:'flex-end',textAlign:'center',color:Colors.red,padding:8}}>-</Text>
              <Text numColumns={2} style={{color:Colors.dark_gray,fontFamily:'urbanistbold',fontSize:13,backgroundColor:Colors.red,width:30,alignSelf:'flex-end',textAlign:'center',color:Colors.white,padding:8,borderWidth:1,borderColor:Colors.red}}>1</Text>
              <Text numColumns={2} style={{color:Colors.red,fontFamily:'urbanistbold',fontSize:13,backgroundColor:Colors.white,borderColor:Colors.red,borderWidth:1,width:30,alignSelf:'flex-end',textAlign:'center',color:Colors.red,padding:8}}>+</Text>
  
  
              </View> */}
      
           
       </View>
  
  
    </TouchableOpacity>
  );

  const renderPackSizeItem2 = ({ item }) => (
    <TouchableOpacity
      onPress={() => setSelectedPackSize(item.id === selectedPackSize ? null : item.id)}
      style={{
        borderColor: selectedPackSize === item.id ? Colors.dark_green : Colors.grayview,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        margin: 5,
      
        backgroundColor: selectedPackSize === item.id ? Colors.light_green : 'white',
      }}
    >
       <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
        <View>

         <View style={{flexDirection:'row',alignItems:'center'}}>
         <Image style={{ width: 16, height: 16}} source={require('../../assets/nonveg.png')}></Image>
         <Text style={{  color: selectedPackSize === item.id ? Colors.black : 'black',fontFamily:'urbanistbold' ,marginStart:10}}>{item.size}</Text>

          </View> 
  
        <View style={{flexDirection:'row',width:'100%',alignItems:'center',marginTop:7}}>
               <Text numColumns={2} style={{color:Colors.black,fontFamily:'urbanistbold',fontSize:13,marginStart:3}}>₹ 200</Text>
               
  
  
               </View>
        </View>
  
      
           
       </View>
  
  
    </TouchableOpacity>
  );

  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        opacity={0.8}
        style={{ backgroundColor: 'transparent' }}
        onPress={() => console.log('pressed')}
        {...props}
      />
    ),
    [],
  )
  const [selectedPackSize, setSelectedPackSize] = useState(null);

  const packSizes = [
    {id: 1, size: 'Small'},
    {id: 2, size: 'Medium'},
    {id: 3, size: 'Large'},
  ];

  const packSizes2 = [
    {id: 1, size: 'Gulab Jamun'},
    {id: 2, size: 'Double Ka Meetha'},
    {id: 3, size: 'Ice cream'},
  ];

  useEffect(() => {
    // Fetch or set pack sizes data

    // Select the first pack size by default
    setSelectedPackSize(packSizes[0]?.id);
  }, []);



  const renderProducts = ({item})=>{
       
    return(
      <TouchableWithoutFeedback onPress={()=>{
      //    navigation.navigate("FProductDetailScreen")
  
      }}>
            <View style={{width:Dimensions.get('window').width-20,height:170,marginEnd:10,marginStart:10,marginEnd:10,borderTopColor:Colors.gray,borderTopWidth:0.7,marginBottom:15,backgroundColor:Colors.white,borderRadius:10,elevation:1,alignSelf:'center'}}>
  
  
              <View style={{width:'100%',flexDirection:'row'}}>
              <Image style={{ width: 120, height: 170,borderTopLeftRadius:10,borderBottomLeftRadius:10,backgroundColor:'rgba(0,0,0,0.5)' }} source={item.image}></Image>
              <TouchableWithoutFeedback onPress={()=>{
                  openBottomSheet()
              }}>
              <Text style={{position:'absolute',bottom:0,backgroundColor:Colors.red,color:Colors.white,fontFamily:'urbanistextrabold',padding:10,letterSpacing:3}}>ADD</Text>

              </TouchableWithoutFeedback>
              <View style={{marginTop:'3%',marginStart:'4%',alignItems:'flex-start'}}>



                
              <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',backgroundColor:Colors.altra_gray}}>
              <Image style={{ width: 16, height: 16}} source={require('../../assets/nonveg.png')}></Image>

                 <Text style={{ fontSize: 8, fontFamily: 'urbanistregular', color: Colors.textcolor,backgroundColor:Colors.yellow,borderRadius:4,padding:2 }}>BESTSELLER</Text>
  
              </View>
    
               <Text numberOfLines={2} style={{color:Colors.textcolor,fontFamily:'urbanistbold',fontSize:15}}>{item.title}</Text>
               <View style={{flexDirection: 'row', alignItems: 'center',marginTop:5}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              padding: 3,
              backgroundColor: Colors.dark_green,
              justifyContent: 'center',
              borderRadius: 5,
              marginEnd: 3,
            }}>
            <Image
              style={{
                width: 10,
                height: 10,
                marginStart: '4%',
                marginTop: '2%',
                marginEnd: '4',
                marginEnd: '4%',
                tintColor: Colors.white,
              }}
              source={require('../../assets/star.png')}
            />

            <Text
              numColumns={2}
              style={{
                color: Colors.white,
                fontFamily: 'urbanistbold',
                fontSize: 13,
                marginStart: 3,
              }}>
              4.5
            </Text>
          </View>

          <View>
          <Text
          style={{
            fontSize: 14,
            fontFamily: 'urbanistmedium',
            color: Colors.textcolor,
           
          }}>
          18.2K ratings
        </Text>
          </View>
        </View>  
               <View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
               <Text numColumns={2} style={{color:Colors.black,fontFamily:'urbanistbold',fontSize:15,marginStart:3}}>₹ 200</Text>
  
               </View>
                <Text numberOfLines={3} style={{fontFamily:'urbanistregular',width:230,color:Colors.textcolor,fontSize:12}}>[Serves with Raita] signature chicken biryani with tastefully marinated and succulent prices of chicken cooked in a rick mix of</Text>
            
               </View>
  
          
  
              </View>
  
  
            
            
      
                 
           
  
           
  
  
  
  
  
           
  
              
              
              
             
              
  
              
  
            </View>
  
          
  
      </TouchableWithoutFeedback>
  
    )
  }

  return (
    <GestureHandlerRootView style={style.container}>
      <StatusBar backgroundColor={Colors.white} />

      <View style={{height: '7%', backgroundColor: Colors.white}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Image
            style={{width: 30, height: 20, marginStart: '4%'}}
            source={require('../../assets/arrow.png')}
          />

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '88%',
              height: '100%',
              padding: '3',
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
                backgroundColor: Colors.white,
              }}>
              <Image
                style={{
                  width: 20,
                  height: 18,
                  tintColor: Colors.red,
                  marginStart: '3%',
                }}
                source={require('../../assets/search.png')}
              />

              <TextInput
                style={{marginStart: '3%', fontFamily: 'urbanistregular'}}
                placeholder="Search in KFC"
              />
            </View>
          </View>
        </View>
      </View>

      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 13}}>
        <Text
          style={{
            fontSize: 17,
            fontFamily: 'urbanistbold',
            color: Colors.textcolor,
            letterSpacing: 3,
          }}>
          SEASON RESTAURANTS
        </Text>
        <Text
          numColumns={2}
          style={{
            color: Colors.navcolor,
            fontFamily: 'urbanistmedium',
            fontSize: 12,
            marginStart: 3,
            marginTop: 7,
          }}>
          BURGER • FAST FOOD • BIRYANI
        </Text>

        <View style={{flexDirection: 'row', alignItems: 'center',marginTop:5}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              padding: 3,
              backgroundColor: Colors.dark_green,
              justifyContent: 'center',
              borderRadius: 5,
              marginEnd: 3,
            }}>
            <Image
              style={{
                width: 10,
                height: 10,
                marginStart: '4%',
                marginTop: '2%',
                marginEnd: '4',
                marginEnd: '4%',
                tintColor: Colors.white,
              }}
              source={require('../../assets/star.png')}
            />

            <Text
              numColumns={2}
              style={{
                color: Colors.white,
                fontFamily: 'urbanistbold',
                fontSize: 13,
                marginStart: 3,
              }}>
              4.5
            </Text>
          </View>

          <View>
          <Text
          style={{
            fontSize: 14,
            fontFamily: 'urbanistmedium',
            color: Colors.textcolor,
           
          }}>
          18.2K ratings
        </Text>
          </View>
        </View>
        <Text
          numColumns={2}
          style={{
            color: Colors.navcolor,
            fontFamily: 'urbanistbold',
            backgroundColor:Colors.altra_gray,
            fontSize: 12,
            padding:10,
            borderRadius:8,
            marginStart: 3,
            marginTop: 10,
          }}>
          27 mins  •  4 KM  •  KANKA
        </Text>
      </View>

      <View>
        
      <ScrollView style={{flex:null,marginTop:20,marginStart:10,marginEnd:10,height:50}} horizontal={true} showsHorizontalScrollIndicator={false}>
        
        <View style={{flexDirection:'row',height:30,alignItems:'center',backgroundColor:Colors.white,marginBottom:12,elevation:1,width:100,borderRadius:10,borderWidth:1,borderColor:Colors.dark_gray,justifyContent:'center'}}>
                 <Image style={{width:15,height:15}}  source={require('../../assets/filter.png')}/>
  
                 <Text style={{ fontSize: 14, fontFamily: 'urbanistbold', color: Colors.textcolor,marginStart:8 }}>Filter</Text>
                 <Image style={{width:10,height:10,marginStart:8}}  source={require('../../assets/dropdown.png')}/>
  
                 </View>
  
                 <View style={{flexDirection:'row',marginStart:10,height:30,alignItems:'center',backgroundColor:Colors.white,marginBottom:12,elevation:1,width:100,borderRadius:10,borderWidth:1,borderColor:Colors.dark_gray,justifyContent:'center'}}>
                 <Image style={{width:15,height:15}}  source={require('../../assets/veg.png')}/>
  
                 <Text style={{ fontSize: 14, fontFamily: 'urbanistbold', color: Colors.textcolor,marginStart:8 }}>Veg</Text>
  
                 </View>
  
                 <View style={{flexDirection:'row',marginStart:10,height:30,alignItems:'center',backgroundColor:Colors.white,marginBottom:12,elevation:1,width:100,borderRadius:10,borderWidth:1,borderColor:Colors.dark_gray,justifyContent:'center'}}>
                 <Image style={{width:15,height:15}}  source={require('../../assets/nonveg.png')}/>
  
                 <Text style={{ fontSize: 14, fontFamily: 'urbanistbold', color: Colors.textcolor,marginStart:8 }}>Nonveg</Text>
  
                 </View>
  
                 <View style={{flexDirection:'row',marginStart:10,height:30,alignItems:'center',backgroundColor:Colors.white,marginBottom:12,elevation:1,width:100,borderRadius:10,borderWidth:1,borderColor:Colors.dark_gray,justifyContent:'center'}}>
                 <Image style={{width:15,height:15}}  source={require('../../assets/bestseller.png')}/>
  
            <Text style={{ fontSize: 14, fontFamily: 'urbanistbold', color: Colors.textcolor,marginStart:8 }}>Bestseller</Text>
  
            </View>
               
              
        </ScrollView>

        <View
        style={{justifyContent: 'space-between',marginStart:10, marginTop: 13,flexDirection:'row',alignItems:'center'}}>
        <Text
          style={{
            fontSize: 17,
            fontFamily: 'urbanistbold',
            color: Colors.textcolor,
            letterSpacing: 3,
          }}>
          MAIN MENU
        </Text>
        
        <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              padding: 3,
              backgroundColor: Colors.black,
              justifyContent: 'center',
              borderRadius: 5,
              marginEnd: 10,
            }}>
            <Image
              style={{
                width: 10,
                height: 10,
                marginStart: '4%',
                marginTop: '2%',
                marginEnd: '4',
                marginEnd: '4%',
                tintColor: Colors.white,
              }}
              source={require('../../assets/menus.png')}
            />

            <Text
              numColumns={2}
              style={{
                color: Colors.white,
                fontFamily: 'urbanistbold',
                fontSize: 13,
                marginStart: 3,
              }}>
              Menu
            </Text>
          </View>

        </View>  
  
      </View>
      <View style={{ alignItems: 'center',marginTop:14,flex:1 }}>
                    <FlatList
                      data={recomneded}
                      showsHorizontalScrollIndicator={false}
                      renderItem={renderProducts}
                      keyExtractor={(item) => item.id.toString()}
                    />
                 </View>



                 <BottomSheet
        style={{ backgroundColor: 'white' }}
        ref={bottomSheetRef}
        
        index={0}
       
        snapPoints={['1%','50%', '90%']}
        backdropComponent={renderBackdrop}
        onChange={handleSheetChanges}
      >
        <BottomSheetView style={{ backgroundColor: Colors.altra_light_purple, padding: 16,height:'100%' }}>
          



         <View style={{width:'95%',height:90,marginEnd:10,marginBottom:15,backgroundColor:Colors.white,borderRadius:10,alignSelf:'center'}}> 


            <View style={{width:'100%',flexDirection:'row'}}>
            <Image style={{ width: 60, height: 60 ,marginStart:8,marginTop:8,borderRadius:10,borderColor:Colors.gray,borderWidth:1}} source={require('../../assets/item2.jpg')}></Image>

            <View style={{marginTop:'3%',marginStart:'4%'}}> 

             <Text numberOfLines={2} style={{color:Colors.textcolor,fontFamily:'urbanistextrabold',fontSize:19,width:230}}>Kolkata Chicken Biryani</Text>
             <Text numberOfLines={2} style={{color:Colors.textcolor,fontFamily:'urbanistmedium',fontSize:14,width:230}}>Season Restaurent</Text>


         
           </View> 
          </View>
          </View>  
       
           <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginEnd:'4%'}}>
               <View>
               <Text numColumns={2} style={{color:Colors.textcolor,fontFamily:'urbanistbold',fontSize:13,marginStart:5}}>Quantity</Text>
          <Text numColumns={2} style={{color:Colors.textcolor,fontFamily:'urbanistmedium',fontSize:13,marginStart:5}}>Select any 1 option</Text>

               </View>
               <Text numColumns={2} style={{color:Colors.white,fontFamily:'urbanistmedium',fontSize:9,backgroundColor:Colors.red,padding:4,borderRadius:5}}>REQUIRED</Text>

               
           </View>
        
        




          <View style={{marginTop:4}}>
            <FlatList
            data={packSizes}
            renderItem={renderPackSizeItem}
            keyExtractor={(item) => item.id.toString()}
           
            showsHorizontalScrollIndicator={false}
          />
        </View>



        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginEnd:'4%',marginTop:20}}>
               <View>
               <Text numColumns={2} style={{color:Colors.textcolor,fontFamily:'urbanistbold',fontSize:13,marginStart:5}}>Add Best Selling Deserts</Text>

               </View>
               <Text numColumns={2} style={{color:Colors.white,fontFamily:'urbanistmedium',fontSize:9,backgroundColor:Colors.red,padding:4,borderRadius:3}}>ADDONS</Text>

               
           </View>
           <View style={{marginTop:4}}>
            <FlatList
            data={packSizes2}
            renderItem={renderPackSizeItem2}
            keyExtractor={(item) => item.id.toString()}
           
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={{position:'absolute',bottom:20,flexDirection:'row',justifyContent:'space-between',marginStart:'4%',marginEnd:'4%',width:'100%'}}>
               <View style={{flexDirection:'row',alignItems:'center',alignSelf:'flex-end',marginEnd:10,marginStart:'3%'}}>
              <Text numColumns={2} style={{color:Colors.red,fontFamily:'urbanistbold',fontSize:13,backgroundColor:Colors.white,borderColor:Colors.red,borderWidth:1,width:30,alignSelf:'flex-end',textAlign:'center',color:Colors.red,padding:8}}>-</Text>
              <Text numColumns={2} style={{color:Colors.dark_gray,fontFamily:'urbanistbold',fontSize:13,backgroundColor:Colors.red,width:30,alignSelf:'flex-end',textAlign:'center',color:Colors.white,padding:8,borderWidth:1,borderColor:Colors.red}}>1</Text>
              <Text numColumns={2} style={{color:Colors.red,fontFamily:'urbanistbold',fontSize:13,backgroundColor:Colors.white,borderColor:Colors.red,borderWidth:1,width:30,alignSelf:'flex-end',textAlign:'center',color:Colors.red,padding:8}}>+</Text>
  
  
              </View> 


              <TouchableWithoutFeedback onPress={()=>{
                  navigation.navigate("CartScreen")
              }}>
              <Text style={{backgroundColor:Colors.red,padding:10,borderRadius:10,color:Colors.white,fontFamily:'urbanistbold',letterSpacing:2}}>Add Item ₹583</Text>

              </TouchableWithoutFeedback>


        </View>
        


        </BottomSheetView>


        </BottomSheet>
     
             
    </GestureHandlerRootView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});

export default RestaurentDetails;
