import { StatusBar, StyleSheet, View,Image, Text, TextInput, TouchableOpacity ,FlatList,ScrollView, TouchableWithoutFeedback, Animated, Easing, Dimensions} from "react-native"
import Colors from "../utils/Color"
import BannerSlider from "../common/component/BannerSlider";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";



const HomeScreen = () =>{
    const navigation = useNavigation()

    const scrollY = new Animated.Value(0);
    const diffClamp = Animated.diffClamp(scrollY, 0, 64);
    const translateY = diffClamp.interpolate({
      inputRange: [0, 64],
      outputRange: [0, 64],
    });
    const [navVisible, setNavVisible] = useState(true);
    const yourDataArray = [
        { id: 1, title: 'Biryani',image:require('../../assets/biryani.jpg') },
        { id: 2, title: 'Cakes',image:require('../../assets/pizza.png') },
        { id: 3, title: 'Thali',image:require('../../assets/thali.png') },
        { id: 4, title: 'Chiken Kadai',image:require('../../assets/pizza.png')},
        { id: 3, title: 'Chole & Bhature',image:require('../../assets/biryani.jpg') },
        { id: 5, title: 'Ice-Creams',image:require('../../assets/thali.png')},
        { id: 6, title: 'Pani Puri',image:require('../../assets/pizza.png') },
        { id: 7, title: 'Mutton Biryani',image:require('../../assets/biryani.jpg')},
        // Add more data items as needed
      ];

    
    
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
         

    

      const category = [
        { id: 1, title: 'Fruits & Vegetables',image:require('../../assets/item1.jpg') },
        { id: 2, title: 'Bakery, Cakes & Diary',image:require('../../assets/item2.jpg') },
        { id: 3, title: 'Masalas , Oils & Dry Fruits',image:require('../../assets/item3.jpg') },
        { id: 4, title: 'Aata Rice & Dals',image:require('../../assets/item2.jpg')},
        { id: 5, title: 'Fruits & Vegetables',image:require('../../assets/item3.jpg') },
        { id: 6, title: 'Bakery, Cakes & Diary',image:require('../../assets/item1.jpg') },
        { id: 7, title: 'Masalas , Oils & Dry Fruits',image:require('../../assets/item2.jpg') },
        { id: 8, title: 'Aata Rice & Dals',image:require('../../assets/item3.jpg')},
        
        // Add more data items as needed
      ];

      const bannerList = [
        { id: 1, image: '../../assets/fish03.jpg' },
        { id: 2, image: '../../assets/mutton04.jpg' }
      
        // Add more data items as needed
      ];

    const renderDemandedItems = ({item})=>{
       
        return(
          <TouchableWithoutFeedback onPress={()=>{
             
             navigation.navigate("FoodSearchScreen")
          }}>
                <View>
                <View style={{ width: 100, height: 100, marginStart: 10 ,backgroundColor:Colors.altra_light_purple,paddingTop:'5%',borderRadius:500,alignItems:'center',justifyContent:'center'}}>

                <Image style={{ width: 60, height: 60,borderRadius:100 }} source={item.image}></Image>

                </View>
                                    <Text numberOfLines={1} style={{ alignSelf: 'center' ,textAlign:'center',fontFamily:'urbanistbold'} }>{item.title}</Text>

                </View>

              

          </TouchableWithoutFeedback>
    
        )
  }

  const renderCategory = ({item})=>{
       
    return(
      <TouchableWithoutFeedback onPress={()=>{
        navigation.navigate("RestaurentDetails")

      }}>
            <View style={{width:Dimensions.get('window').width-20,height:345,marginTop:10,marginStart:10,marginEnd:10,marginBottom:1,backgroundColor:Colors.white,elevation:2,borderRadius:10}}>
             
          
            <Image style={{ width: '100%', height:230,resizeMode:'cover',alignSelf:'center',borderTopLeftRadius:10,borderTopRightRadius:10}} source={item.image}></Image>

            <View style={{width:'93%',flexDirection:'row',alignItems:'center',justifyContent:'space-between',alignSelf:'center'}}>
            <Text numberOfLines={1} style={{marginTop:'3%',fontFamily:'urbanistbold',fontSize:18,color:Colors.textcolor}}>Season Restaurent</Text>

            <View style={{flexDirection:'row',alignItems:'center',padding:3,backgroundColor:Colors.dark_green,justifyContent:'center',borderRadius:5}}>
              <Image style={{width:10,height:10,marginStart:'4%',marginTop:'2%',marginEnd:'4',marginEnd:'4%',tintColor:Colors.white}}  source={require('../../assets/star.png')}/>

            <Text numColumns={2} style={{color:Colors.white,fontFamily:'urbanistbold',fontSize:13,marginStart:3}}>4.5</Text>

              </View>
            </View>

             <View style={{width:'93%',alignSelf:'center'}}>
             <Text numberOfLines={1} style={{fontFamily:'urbanistregular',fontSize:14,color:Colors.navcolor}}>North Indian  • Chinese  • ₹ 200 for one</Text>
             <View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
             <Image style={{ width: 14, height: 14}} source={require('../../assets/clock.png')}></Image>
             <Text numColumns={2} style={{color:Colors.navcolor,fontFamily:'urbanistmedium',fontSize:10,marginStart:3}}>70 Mins  • 3 KM</Text>
          
             </View>
             <View style={{height:1,marginTop:6,width:'100%',borderTopColor:Colors.dark_gray,borderTopWidth:1,borderStyle:'dotted'}}>

</View>
<Text numberOfLines={1} style={{fontFamily:'urbanistbold',fontSize:14,color:Colors.dark_blue,marginTop:4}}>FLAT 20% OFF</Text>


             </View>
              
            </View>

          

      </TouchableWithoutFeedback>

    )
}


const renderRest = ({item})=>{
       
  return(
    <TouchableWithoutFeedback onPress={()=>{
      navigation.navigate("RestaurentDetails")

    }}>
          <View style={{width:180,height:300,marginTop:10,marginStart:10,marginEnd:10,marginBottom:1,backgroundColor:Colors.white,elevation:2,borderRadius:10}}>
           
        
          <Image style={{ width: '100%', height:180,resizeMode:'cover',alignSelf:'center',borderTopLeftRadius:10,borderTopRightRadius:10}} source={item.image}></Image>

          <View style={{width:180,flexDirection:'row',alignItems:'center',justifyContent:'space-between',alignSelf:'center',marginStart:3,marginEnd:3}}>
          <Text numberOfLines={2} style={{marginTop:'3%',fontFamily:'urbanistbold',fontSize:15,color:Colors.textcolor,width:120,marginStart:3}}>Fresh Chakki Aaata</Text>

          <View style={{flexDirection:'row',alignItems:'center',padding:3,backgroundColor:Colors.dark_green,justifyContent:'center',borderRadius:5,marginEnd:3}}>
            <Image style={{width:10,height:10,marginStart:'4%',marginTop:'2%',marginEnd:'4',marginEnd:'4%',tintColor:Colors.white}}  source={require('../../assets/star.png')}/>

          <Text numColumns={2} style={{color:Colors.white,fontFamily:'urbanistbold',fontSize:13,marginStart:3}}>4.5</Text>

            </View>
          </View>

           <View style={{width:'93%',alignSelf:'center'}}>
           <Text numberOfLines={1} style={{fontFamily:'urbanistregular',fontSize:14,color:Colors.navcolor}}>₹ 200 for one</Text>
           <View style={{flexDirection:'row',alignItems:'center',marginTop:4}}>
           <Image style={{ width: 14, height: 14}} source={require('../../assets/clock.png')}></Image>
           <Text numColumns={2} style={{color:Colors.navcolor,fontFamily:'urbanistmedium',fontSize:10,marginStart:3}}>70 Mins  • 3 KM</Text>
        
           </View>
           <View style={{height:1,marginTop:6,width:'100%',borderTopColor:Colors.dark_gray,borderTopWidth:1,borderStyle:'dotted'}}>

</View>
<Text numberOfLines={1} style={{fontFamily:'urbanistbold',fontSize:14,color:Colors.dark_blue,marginTop:4}}>FLAT 20% OFF</Text>


           </View>
            
          </View>

        

    </TouchableWithoutFeedback>

  )
}


const renderProducts = ({item})=>{
       
  return(
    <TouchableWithoutFeedback onPress={()=>{
      navigation.navigate("RestaurentDetails")

    }}>
          <View style={{width:160,height:100,marginEnd:10,marginStart:10,borderTopColor:Colors.gray,borderTopWidth:0.7,marginBottom:15,backgroundColor:Colors.white,borderRadius:10,elevation:1,alignSelf:'center'}}>


            <View style={{width:'100%',flexDirection:'row'}}>
            <Image style={{ width: 70, height: 100,borderTopLeftRadius:10,borderBottomLeftRadius:10,backgroundColor:'rgba(0,0,0,0.5)' }} source={item.image}></Image>

            <View style={{marginTop:'3%',marginStart:'4%'}}>
  

             <Text numberOfLines={2} style={{color:Colors.textcolor,fontFamily:'urbanistmedium',fontSize:15,width:80}}>{item.title}</Text>
             <Text numColumns={2} style={{color:Colors.navcolor,fontFamily:'urbanistmedium',fontSize:10}}>Nestle</Text>

             <View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
             <Image style={{ width: 16, height: 16}} source={require('../../assets/clock.png')}></Image>
             <Text numColumns={2} style={{color:Colors.navcolor,fontFamily:'urbanistmedium',fontSize:10,marginStart:3}}>70 Mins</Text>

             </View>
          
          
             </View>

        

            </View>


          
          
    
               
         

         





         

            
            
            
           
            

            

          </View>

        

    </TouchableWithoutFeedback>

  )
}




    return <View style={style.container}>

        <StatusBar backgroundColor={Colors.light_green}/>
       
            
      
        <View style={{height:'16%',backgroundColor:Colors.light_green}}>

          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>


          <View style={{alignSelf:'center',padding:10,marginTop:'3%',flexDirection:'row',alignItems:'center'}}>

            <Image style={{width:15,height:20,tintColor:Colors.red}}  source={require('../../assets/location_white.png')}/>
            <View>
            <Text style={{marginStart:'4%',fontFamily:'urbanistextrabold',fontSize:18,color:Colors.black}}>Nambkum Industrial Area</Text>

            <Text style={{fontFamily:'urbanistregular',fontSize:13,color:Colors.black,marginStart:'3%'}}>Location - Ranchi</Text>

            </View>

            


            </View>
          

            <TouchableWithoutFeedback  onPress={()=>{
              navigation.navigate("AccountScreen")
            }}>
            <Image style={{width:'7%',height:28,marginStart:'4%',marginTop:'2%',marginEnd:'4%',borderRadius:500,borderWidth:1,borderColor:Colors.black}}  source={require('../../assets/user.png')}/>

            </TouchableWithoutFeedback>


          </View>

          <TouchableWithoutFeedback onPress={()=>{
       navigation.navigate("FoodSearchScreen")
      }}>
 <View style={{marginTop:'3%',height:40,borderRadius:10,borderWidth:1,borderColor:Colors.grayview,width:'95%',alignSelf:'center',flexDirection:'row',alignItems:'center',marginBottom:10,backgroundColor:Colors.white}}>

 <Image style={{width:'4%',height:18,tintColor:Colors.red,marginStart:'3%'}}  source={require('../../assets/search.png')}/>

       <TextInput style={{marginStart:'3%',fontFamily:'urbanistregular'}} placeholder="Search items"/>


 </View></TouchableWithoutFeedback>
        


        </View>
        

       
  
         {navVisible && (
 <View>

      
 <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginStart:'3%',marginEnd:'3%'}}>

 <TouchableWithoutFeedback onPress={()=>{
       navigation.goBack()
    }}>
   <View style={{flexDirection:'row',alignItems:'center',backgroundColor:Colors.altra_light_purple,padding:10,width:'50%'}}>
   <Image style={{width:50,height:20}}  source={require('../../assets/logotwo.png')}/>
   <Text style={{marginStart:'4%',fontFamily:'urbanistbold'}}>GROCERY</Text>

   </View></TouchableWithoutFeedback>

   <View style={{flexDirection:'row',alignItems:'center',backgroundColor:Colors.light_purple,padding:10,width:'50%'}}>
   <Image style={{width:50,height:20}}  source={require('../../assets/logotwo.png')}/>
   <Text style={{marginStart:'4%',fontFamily:'urbanistbold'}}>FOODS</Text>

   </View>

 </View>

 

 </View>
         )}
    
        



        <FlatList
  data={[
    { type: 'header', id: 'header' },
    {type:'recommended',id:'recommended'},
    { type: 'mostDemandedItems', id: 'mostDemandedItems' },
    { type: 'bannerSlider', id: 'bannerSlider' },
    { type: 'shopByCategoryHeader', id: 'shopByCategoryHeader' },
    { type: 'categories', id: 'categories' },
    { type: 'home_essential', id: 'home_essential' },
    { type: 'customer_love', id: 'customer_love' },
    { type: 'custom1', id: 'custom1' },
    { type: 'nearby', id: 'nearby' },


  ]}
  renderItem={({ item }) => {
    switch (item.type) {
      case 'header':
        return (
          <View style={{ width: '95%', alignSelf: 'center', marginTop: '4%',flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
            <View style={{width:'20%',height:1,borderTopColor:Colors.dark_gray,borderTopWidth:2,borderStyle:"dotted"}}></View>
            <Text style={{ fontSize: 17, fontFamily: 'urbanistbold', color: Colors.textcolor,letterSpacing:3 }}>RECOMMENDED</Text>
            <View style={{width:'20%',height:1,borderTopColor:Colors.dark_gray,borderTopWidth:2,borderStyle:"dotted"}}></View>

          </View>
        );
      case 'recommended':
        return (

          <ScrollView
  horizontal
  showsHorizontalScrollIndicator={false}
  directionalLockEnabled={true}
  alwaysBounceVertical={false}
>
<View style={{ marginTop: '5%' }}>
             <FlatList
      data={recomneded}
      renderItem={renderProducts}
      keyExtractor={(item) => item.id}
      horizontal={false} // Set to false to display items vertically
      numColumns={Math.ceil(recomneded.length / 2)} // Adjust the number of columns dynamically
     
      style={{ flexGrow: 1 }} // Ensure the FlatList takes up the entire available space
    />
          </View>

</ScrollView>
         
        );
      case 'bannerSlider':
        return (
          <View style={{ width: '95%', alignSelf: 'center', marginTop: '4%' }}>
            <BannerSlider images={bannerList} navigation={navigation} />
          </View>
        );
      case 'shopByCategoryHeader':
        return (
          <View style={{ width: '95%', alignSelf: 'center', marginTop: '4%',flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
          <View style={{width:'20%',height:1,borderTopColor:Colors.dark_gray,borderTopWidth:2,borderStyle:"dotted"}}></View>
          <Text style={{ fontSize: 17, fontFamily: 'urbanistbold', color: Colors.textcolor,letterSpacing:3 }}>EXPLORE NOW</Text>
          <View style={{width:'20%',height:1,borderTopColor:Colors.dark_gray,borderTopWidth:2,borderStyle:"dotted"}}></View>

        </View>
        );
      case 'categories':
        return (
          <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          directionalLockEnabled={true}
          alwaysBounceVertical={false}
        >
        <View style={{ marginTop: '5%' }}>
                     <FlatList
              data={yourDataArray}
              renderItem={renderDemandedItems}
              keyExtractor={(item) => item.id}
              horizontal={false} // Set to false to display items vertically
              numColumns={Math.ceil(yourDataArray.length / 2)} // Adjust the number of columns dynamically
             
              style={{ flexGrow: 1 }} // Ensure the FlatList takes up the entire available space
            />
                  </View>
        
        </ScrollView>
        );

        case 'home_essential':
          return (
            <View style={{ width: '95%', alignSelf: 'center', marginTop: '8%' }}>
                
                <View style={{ width: '95%', alignSelf: 'center', marginTop: '4%',flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
            <View style={{width:'20%',height:1,borderTopColor:Colors.dark_gray,borderTopWidth:2,borderStyle:"dotted"}}></View>
            <Text style={{ fontSize: 17, fontFamily: 'urbanistbold', color: Colors.textcolor,letterSpacing:3 }}>ALL RESTAURANTS</Text>
            <View style={{width:'20%',height:1,borderTopColor:Colors.dark_gray,borderTopWidth:2,borderStyle:"dotted"}}></View>

          </View>

          <ScrollView style={{marginTop:10}} horizontal={true} showsHorizontalScrollIndicator={false}>
               <View style={{flexDirection:'row',height:30,alignItems:'center',backgroundColor:Colors.white,marginBottom:12,elevation:1,width:100,borderRadius:10,borderWidth:1,borderColor:Colors.dark_gray,justifyContent:'center'}}>
               <Image style={{width:15,height:15}}  source={require('../../assets/filter.png')}/>

               <Text style={{ fontSize: 14, fontFamily: 'urbanistbold', color: Colors.textcolor,marginStart:8 }}>Sort</Text>
               <Image style={{width:10,height:10,marginStart:8}}  source={require('../../assets/dropdown.png')}/>

               </View>

               <View style={{flexDirection:'row',marginStart:10,height:30,alignItems:'center',backgroundColor:Colors.white,marginBottom:12,elevation:1,width:100,borderRadius:10,borderWidth:1,borderColor:Colors.dark_gray,justifyContent:'center'}}>

               <Text style={{ fontSize: 14, fontFamily: 'urbanistbold', color: Colors.textcolor,marginStart:8 }}>Nearest</Text>

               </View>

               <View style={{flexDirection:'row',marginStart:10,height:30,alignItems:'center',backgroundColor:Colors.white,marginBottom:12,elevation:1,width:100,borderRadius:10,borderWidth:1,borderColor:Colors.dark_gray,justifyContent:'center'}}>

               <Text style={{ fontSize: 14, fontFamily: 'urbanistbold', color: Colors.textcolor,marginStart:8 }}>Offers</Text>

               </View>

               <View style={{flexDirection:'row',marginStart:10,height:30,alignItems:'center',backgroundColor:Colors.white,marginBottom:12,elevation:1,width:100,borderRadius:10,borderWidth:1,borderColor:Colors.dark_gray,justifyContent:'center'}}>

<Text style={{ fontSize: 14, fontFamily: 'urbanistbold', color: Colors.textcolor,marginStart:8 }}>Rating 4.0+</Text>

</View>

             
            
          </ScrollView>
             

              <View style={{ marginTop: '5%', alignItems: 'center' }}>
                <FlatList
                  data={category}
               
                  showsHorizontalScrollIndicator={false}
                  renderItem={renderCategory}
                  keyExtractor={(item) => item.id.toString()}
                />
             </View>






              
            </View>
          );

        case 'nearby':
          return (
            <View style={{ width: '95%', alignSelf: 'center', marginTop: '8%' }}>
                
                <View style={{ width: '95%', alignSelf: 'center', marginTop: '4%',flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
            <View style={{width:'20%',height:1,borderTopColor:Colors.dark_gray,borderTopWidth:2,borderStyle:"dotted"}}></View>
            <Text style={{ fontSize: 17, fontFamily: 'urbanistbold', color: Colors.textcolor,letterSpacing:3 }}>NEAR RESTAURANTS</Text>
            <View style={{width:'20%',height:1,borderTopColor:Colors.dark_gray,borderTopWidth:2,borderStyle:"dotted"}}></View>

          </View>

       

              <View style={{ marginTop: '5%', alignItems: 'center' }}>
                <FlatList
                  data={category}
               
                  showsHorizontalScrollIndicator={false}
                  renderItem={renderCategory}
                  keyExtractor={(item) => item.id.toString()}
                />
             </View>






              
            </View>
          );


        case 'customer_love':
            return (
              <View style={{ width: '95%', alignSelf: 'center', marginTop: '4%' }}>
                   <View style={{backgroundColor:Colors.light_green,width:'100%',height:150,position:'absolute',borderTopLeftRadius:10,borderTopRightRadius:10}}>
                  </View>
  
                 <View style={{width:'94%',flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:'4%',alignSelf:'center'}}>
                 <View>
                <Text style={{ fontSize: 17, fontFamily: 'urbanistbold', color: Colors.textcolor ,letterSpacing:3}}>LOVED BY CUSTOMER</Text>
                <Text style={{ fontSize: 13, fontFamily: 'urbanistmedium', color: Colors.textcolor,marginTop:'1%' }}>Most Rated</Text>
  
                  </View>
  
                 
               
                </View> 
  
                <View style={{ marginTop: '5%', alignItems: 'center' }}>
                  <FlatList
                    data={category}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={renderRest}
                    keyExtractor={(item) => item.id.toString()}
                  />
               </View>
  
  
  
  
  
  
                
              </View>
            );
        

        case 'custom1':
              return (
                <View style={{ width: '95%', alignSelf: 'center', marginTop: '7%' }}>
                     <View style={{backgroundColor:Colors.altra_gray,width:'100%',height:150,position:'absolute',borderTopLeftRadius:10,borderTopRightRadius:10}}>
                    </View>
    
                   <View style={{width:'94%',flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:'4%',alignSelf:'center'}}>
                   <View>
                  <Text style={{ fontSize: 17, fontFamily: 'urbanistbold', color: Colors.textcolor ,letterSpacing:3}}>CRICKET DHAMAKA OFFER</Text>
                  <Text style={{ fontSize: 13, fontFamily: 'urbanistmedium', color: Colors.textcolor,marginTop:'1%' }}>Play and get free delivery</Text>
    
                    </View>
    
                   
                 
                  </View> 
    
                  <View style={{ marginTop: '5%', alignItems: 'center' }}>
                    <FlatList
                      data={category}
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}
                      renderItem={renderRest}
                      keyExtractor={(item) => item.id.toString()}
                    />
                 </View>
    
    
    
    
    
    
                  
                </View>
              );
          

        case 'school':
              return (
                <View style={{ width: '95%', alignSelf: 'center', marginTop: '4%' }}>
                     <View style={{backgroundColor:Colors.light_green,width:'100%',height:150,position:'absolute'}}>
                    </View>
    
                   <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:'4%'}}>
                   <View>
                  <Text style={{ fontSize: 17, fontFamily: 'urbanistbold', color: Colors.textcolor }}>All School Esential</Text>
                  <Text style={{ fontSize: 13, fontFamily: 'urbanistmedium', color: Colors.textcolor,marginTop:'1%' }}>Scholastic Need For You</Text>
    
                    </View>
    
                    <Image style={{width:'5%',height:19,tintColor:Colors.black,marginStart:'3%',marginEnd:15}}  source={require('../../assets/next.png')}/>
    
                 
                  </View> 
    
                  <View style={{ marginTop: '5%', alignItems: 'center' }}>
                    <FlatList
                      data={category}
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}
                      renderItem={renderProducts}
                      keyExtractor={(item) => item.id.toString()}
                    />
                 </View>
    
    
    
    
    
    
                  
                </View>
              );
      
      default:
        return null;
    }
  }}
  keyExtractor={(item) => item.id}
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
 <View style={{width:'100%',position:'absolute',bottom:0,height:70,borderTopColor:Colors.gray,borderTopWidth:3,backgroundColor:Colors.white,justifyContent:'space-around',flexDirection:'row'}}>
 <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:Colors.white,width:50}}>
    <Image style={{width:23,height:23,tintColor:Colors.textcolor}}  source={require('../../assets/home.png')}/>
    <Text style={{fontFamily:'urbanistmedium',fontSize:12}}>Home</Text>
 </View>


 <TouchableWithoutFeedback onPress={()=>{
   navigation.navigate("RestaurentDetails")
 }}>
<View style={{flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:Colors.white,width:70,marginStart:10}}>
    <Image style={{width:25,height:25,tintColor:Colors.textcolor}}  source={require('../../assets/category.png')}/>
    <Text style={{fontFamily:'urbanistmedium',fontSize:12}}>Restaurants</Text>
 </View>
 </TouchableWithoutFeedback>


<TouchableWithoutFeedback onPress={()=>{
 navigation.navigate("FoodSearchScreen")
}}>
<View style={{flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:Colors.white,width:50,marginStart:10}}>
    <Image style={{width:27,height:27,tintColor:Colors.textcolor,backgroundColor:Colors.light_green,borderRadius:500}}  source={require('../../assets/search.png')}/>
    <Text style={{fontFamily:'urbanistmedium',fontSize:12}}>Search</Text>
 </View>
</TouchableWithoutFeedback>

<TouchableWithoutFeedback onPress={()=>{
   navigation.navigate("OrderHistoryScreen")
}}>
<View style={{flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:Colors.white,width:50,marginStart:10}}>
    <Image style={{width:27,height:27,tintColor:Colors.textcolor}}  source={require('../../assets/order.png')}/>
    <Text style={{fontFamily:'urbanistmedium',fontSize:12}}>Orders</Text>
 </View>

</TouchableWithoutFeedback>

 <TouchableWithoutFeedback onPress={()=>{
   navigation.navigate("CartScreen")
 }}>
<View style={{flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:Colors.white,width:50,marginStart:10}}>
    <Image style={{width:27,height:27,tintColor:Colors.textcolor}}  source={require('../../assets/cart.png')}/>
    <Text style={{fontFamily:'urbanistmedium',fontSize:12}}>Cart</Text>
 </View>
 </TouchableWithoutFeedback>


</View>
         )}
         </Animated.View>
        

    </View>



}



const style = StyleSheet.create({
   
    container:{
        flex:1,
        backgroundColor:Colors.white
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },


})

export default HomeScreen