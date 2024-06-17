import { StatusBar, StyleSheet, View,Image, Text, TextInput, TouchableOpacity ,FlatList,ScrollView,Dimensions, TouchableWithoutFeedback} from "react-native"
import Colors from "../utils/Color"
import BannerSlider from "../common/component/BannerSlider";
import { useNavigation } from "@react-navigation/native";
import { useCallback, useEffect, useRef, useState } from "react";

import BottomSheet, { BottomSheetView,BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';




const CartScreen = () =>{
    const navigation = useNavigation()
    const bottomSheetRef = useRef(null);
    const yourDataArray = [
        { id: 1, title: 'Snacks',image:require('../../assets/snacks.png') },
        { id: 2, title: 'Makeup',image:require('../../assets/makeup.png') },
        { id: 3, title: 'Ice-Creams',image:require('../../assets/ice.png') },
        { id: 4, title: 'Fruits',image:require('../../assets/fruit.png')},
        // Add more data items as needed
      ];

      const RatingList = [
        { id: 1, title: 'Snacks',image:require('../../assets/snacks.png') },
        { id: 2, title: 'Makeup',image:require('../../assets/makeup.png') },
        { id: 3, title: 'Ice-Creams',image:require('../../assets/ice.png') },
        { id: 4, title: 'Fruits',image:require('../../assets/fruit.png')},
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
        { id: 1, size: 'Small' },
        { id: 2, size: 'Medium' },
        { id: 3, size: 'Large' },
      ];
    
      useEffect(() => {
        // Fetch or set pack sizes data
      
       
    
        // Select the first pack size by default
        setSelectedPackSize(packSizes[0]?.id);
      }, []);

 

  const renderCategory = ({item})=>{
       
    return(
      <TouchableWithoutFeedback onPress={()=>{
          console.log(item)

      }}>
            <View style={{width:Dimensions.get('window').width,height:300,marginStart:10}}>
           
          

            <Image style={{ width: 300, height: 300,alignSelf:'center' }} source={item.image}></Image>

           
        
              
            </View>

          

      </TouchableWithoutFeedback>

    )
}

const renderPackSizeItem = ({ item }) => (
  <TouchableOpacity
    onPress={() => setSelectedPackSize(item.id === selectedPackSize ? null : item.id)}
    style={{
      borderColor: selectedPackSize === item.id ? Colors.light_green : Colors.grayview,
      borderWidth: 1,
      padding: 10,
      borderRadius: 10,
      margin: 5,
      alignItems: 'center',
      backgroundColor: selectedPackSize === item.id ? Colors.light_green : 'white',
    }}
  >
    <Text style={{ textAlign: 'center', color: selectedPackSize === item.id ? Colors.dark_green : 'black' }}>{item.size}</Text>
  </TouchableOpacity>
);
const renderCategoryHint = ({item})=>{
       
  return(
    <TouchableOpacity onPress={()=>{
        console.log(item)

    }}>
          <View style={{width:80,height:80,marginEnd:10,marginBottom:5,borderColor:Colors.dark_gray,borderWidth:1,borderRadius:10}}>
           
          <View style={{ width: 80, height: 70 ,paddingTop:'5%',alignItems:'center',justifyContent:'center'}}>

          <Image style={{ width: 50, height: 50 }} source={item.image}></Image>

          </View>
      
            
          </View>

        

    </TouchableOpacity>

  )
}

const renderProducts = ({item})=>{
       
  return(
    <TouchableWithoutFeedback onPress={()=>{
    //    navigation.navigate("FProductDetailScreen")

    }}>
          <View style={{width:'95%',height:80,marginEnd:10,marginBottom:15,backgroundColor:Colors.white,borderRadius:10,elevation:1,alignSelf:'center'}}>


          <View style={{flexDirection:'row',alignItems:'center',borderRadius:10,width:'100%',justifyContent:'space-between'}}>

              <View style={{flexDirection:'row',alignItems:'center'}}>
              <Image style={{width:20,height:20}}  source={require('../../assets/nonveg.png')}/>

<Text style={{color:Colors.black,fontFamily:'urbanistbold',marginStart:8}}>Chicken Biryani</Text>
              </View>
            
             <Text style={{color:Colors.black,fontFamily:'urbanistbold',justifyContent:'flex-end',marginEnd:10}}>₹ 33</Text>

         </View>


           <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
           <Text style={{padding:3,fontSize:14,color:Colors.textcolor,fontFamily:'urbanistbold'}}>₹ 33</Text>   

           
           <View style={{flexDirection:'row',alignItems:'center',alignSelf:'flex-end',marginEnd:10}}>
            <Text numColumns={2} style={{color:Colors.red,fontFamily:'urbanistbold',fontSize:10,backgroundColor:Colors.white,borderColor:Colors.red,borderWidth:1,alignSelf:'flex-end',textAlign:'center',color:Colors.red,padding:8}}>-</Text>
            <Text numColumns={2} style={{color:Colors.dark_gray,fontFamily:'urbanistbold',fontSize:10,backgroundColor:Colors.red,width:20,alignSelf:'flex-end',textAlign:'center',color:Colors.white,padding:8,borderWidth:1,borderColor:Colors.red}}>1</Text>
            <Text numColumns={2} style={{color:Colors.red,fontFamily:'urbanistbold',fontSize:10,backgroundColor:Colors.white,borderColor:Colors.red,borderWidth:1,width:20,alignSelf:'flex-end',textAlign:'center',color:Colors.red,padding:8}}>+</Text>

            </View>
            </View>         
          </View>
    </TouchableWithoutFeedback>

  )
}




    return <GestureHandlerRootView style={style.container}>

        <StatusBar backgroundColor={Colors.white}/>

        <View style={{height:'7%' ,backgroundColor:Colors.white}}>

          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>


            <View style={{flexDirection:'row',alignItems:'center',width:'80%',height:'100%',padding:'3'}}>

      

            <Image style={{width:30,height:20,marginStart:'4%',marginTop:'4%',tintColor:Colors.black}}  source={require('../../assets/arrow.png')}/>

            <Text numberOfLines={1} style={{marginStart:'2%',marginTop:'3%',fontFamily:'urbanistmedium',marginStart:'5%',fontSize:16,color:Colors.textcolor}}>Cart Review</Text>
            </View>

          
          
           

         </View>

       


      


        </View>

     
       
        <View style={{flexDirection:'row',alignItems:'center',borderRadius:10,backgroundColor:Colors.light_green,width:'94%',alignSelf:'center',padding:20,borderWidth:1,borderColor:Colors.dark_green}}>
         <Image style={{width:30,height:30}}  source={require('../../assets/confetti.png')}/>

             <Text style={{color:Colors.dark_green,marginStart:10,fontFamily:'urbanistbold'}}>You have saved ₹ 35 on this order</Text>

         </View>

       

         <View style={{marginStart:'2%',marginTop:'5%'}}>
            <FlatList
            data={RatingList}
            renderItem={renderProducts}
            keyExtractor={(item) => item.id.toString()}
          
            showsHorizontalScrollIndicator={false}
          />
        </View>


        <View style={{flexDirection:'row',alignItems:'center',borderRadius:10,backgroundColor:Colors.altra_gray,width:'94%',alignSelf:'center',padding:20}}>
          <Image style={{width:20,height:20}}  source={require('../../assets/clock.png')}/>

          <Text style={{color:Colors.textcolor,marginStart:10,fontFamily:'urbanistbold'}}>Delivery in 45 mins</Text>
         

         </View>
         <View style={{width:'94%',alignSelf:'center',height:1,borderTopColor:Colors.dark_gray,borderTopWidth:1,borderStyle:'dashed'}}>

          </View>
          <View style={{flexDirection:'row',alignItems:'center',borderRadius:10,backgroundColor:Colors.altra_gray,width:'94%',alignSelf:'center',padding:20}}>
                    <Image style={{width:20,height:20}}  source={require('../../assets/clock.png')}/>

          <Text style={{color:Colors.textcolor,marginStart:10,fontFamily:'urbanistmedium'}}>Total Bill <Text style={{marginStart:10,fontFamily:'urbanistbold'}}>    ₹ 3500</Text> <Text style={{color:Colors.dark_green}}>  saved  ₹ 35</Text>     </Text>
         
         <TouchableWithoutFeedback onPress={()=>{
            openBottomSheet()
         }}>
          <Text style={{color:Colors.red,marginStart:10,fontFamily:'urbanistextrabold',letterSpacing:2,borderBottomWidth:1,borderBottomColor:Colors.dark_gray,borderStyle:'dotted'}}>DETAILS </Text>

         </TouchableWithoutFeedback>
         
         </View>
         <Text style={{color:Colors.textcolor,marginStart:10,fontFamily:'urbanistmedium',width:'94%',alignSelf:'center',letterSpacing:2}}>Inclusive of all taxes</Text>


       


      


       










      

        <View style={{position:'absolute',width:'100%',bottom:0,height:70,backgroundColor:Colors.light_purple,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>

       

             <TouchableWithoutFeedback onPress={()=>{
                    navigation.navigate("FoodAddaddressScreen")
             }}>
              <Text numColumns={2} style={{color:Colors.white,fontFamily:'urbanistmedium',alignSelf:'center',fontSize:14,width:'90%',textAlign:'center',backgroundColor:Colors.red,padding:10,borderRadius:10}}>Select address at next step </Text>

             </TouchableWithoutFeedback>

         </View>
 
     
         <BottomSheet
        style={{ backgroundColor: Colors.altra_light_purple }}
        ref={bottomSheetRef}
        
        index={0}
       
        snapPoints={['1%','50%', '90%']}
        backdropComponent={renderBackdrop}
        onChange={handleSheetChanges}
      >
        <BottomSheetView style={{ backgroundColor: Colors.white, padding: 16 }}>
          

        <Text style={{padding:3,fontSize:16,color:Colors.dark_blue,fontFamily:'urbanistextrabold',letterSpacing:2,borderBottomWidth:1,borderBottomColor:Colors.dark_blue,borderStyle:'dotted'}}>BILLING OVERVIEW</Text>   

         <View style={{width:'97%',height:120,marginBottom:15,backgroundColor:Colors.white,borderRadius:10,alignSelf:'center',elevation:1,marginTop:20,padding:8}}> 


            <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>

                   <Text style={{padding:3,fontSize:14,color:Colors.textcolor,fontFamily:'urbanistregular',letterSpacing:2}}>Item Total</Text>   
                   <Text style={{padding:3,fontSize:16,color:Colors.textcolor,fontFamily:'urbanistextbold'}}>₹ 455</Text>   


          </View>
          <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>

<Text style={{padding:3,fontSize:14,color:Colors.textcolor,fontFamily:'urbanistregular',letterSpacing:2}}>GST and Restaurent Charges</Text>   
<Text style={{padding:3,fontSize:16,color:Colors.textcolor,fontFamily:'urbanistextbold'}}>₹ 65</Text>   


</View>
<View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>

<Text style={{padding:3,fontSize:14,color:Colors.textcolor,fontFamily:'urbanistregular',letterSpacing:2}}>Delivery partner fee</Text>   
<Text style={{padding:3,fontSize:16,color:Colors.textcolor,fontFamily:'urbanistextbold'}}>₹ 30</Text>   


</View>


<View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>

<Text style={{padding:3,fontSize:14,color:Colors.textcolor,fontFamily:'urbanistregular',letterSpacing:2}}>Platform Fee</Text>   
<Text style={{padding:3,fontSize:16,color:Colors.textcolor,fontFamily:'urbanistextbold'}}>₹ 30</Text>   


</View>
          </View>  
       
        
          <View style={{width:'95%',flexDirection:'row',alignItems:'center',justifyContent:'space-between',alignSelf:"center"}}>

<Text style={{padding:3,fontSize:14,color:Colors.red,fontFamily:'urbanistbold',letterSpacing:2}}>GRAND TOTAL</Text>   
<Text style={{padding:3,fontSize:16,color:Colors.textcolor,fontFamily:'urbanistextrabold'}}>₹ 3000</Text>   


</View>



       

        </BottomSheetView>
        </BottomSheet>
     


  
    </GestureHandlerRootView>
}



const style = StyleSheet.create({
   
    container:{
        flex:1,
        backgroundColor:Colors.white
    }


})

export default CartScreen 