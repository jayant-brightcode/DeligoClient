import { StatusBar, StyleSheet, View,Image, Text, TextInput, TouchableOpacity ,FlatList,ScrollView,Dimensions, TouchableWithoutFeedback} from "react-native"
import Colors from "../utils/Color"
import { useNavigation } from "@react-navigation/native";
import { useCallback, useEffect, useRef, useState } from "react";
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';



const FDeliveryOption = () =>{
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
      }, []);
     
      const [selectedPackSize, setSelectedPackSize] = useState(null);

      const packSizes = [
        { id: 1, size: '7:00 AM - 10:00 AM' },
        { id: 2, size: '10:00 AM - 12:00 AM' },
        { id: 3, size: '3:00PM - 5:00 PM' },
      ];
    
      useEffect(() => {
        // Fetch or set pack sizes data
      
       
    
        // Select the first pack size by default
        setSelectedPackSize(packSizes[0]?.id);
      }, []);

      const openBottomSheet = () => {
        bottomSheetRef.current.expand();
      };
    
      const closeBottomSheet = () => {
        bottomSheetRef.current.collapse();
      };

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

const renderRating = ({item})=>{
       
  return(
    <TouchableOpacity onPress={()=>{
        console.log(item)

    }}>
          <View style={{width:'100%',marginBottom:5,borderBottomColor:Colors.grayview,borderBottomWidth:1,marginBottom:13}}>
         
          <View style={{flexDirection:'row',alignItems:'center',padding:3,backgroundColor:Colors.light_green,justifyContent:'center',width:40}}>
              <Image style={{width:10,height:10,marginStart:'4%',marginTop:'2%',marginEnd:'4%',tintColor:Colors.dark_green}}  source={require('../../assets/star.png')}/>

             <Text numColumns={1} style={{color:Colors.dark_green,fontFamily:'urbanistbold',fontSize:13,marginStart:3}}>4.5</Text>

          </View>
          <Text numberOfLines={4} style={{fontFamily:'urbanistregular',fontSize:12,marginTop:'3%',marginEnd:'4%',marginBottom:10}}>Nice Product by Good day as always .Nice Product by Good day as alwaysNice Product by Good day as always Nice Product by Good day as always </Text>
          
          <Text numberOfLines={4} style={{fontFamily:'urbanistbold',fontSize:12,marginTop:'3%',marginEnd:'4%',marginBottom:10}}>Mohan Roy (22 sep 2023) </Text>

          </View>

        

    </TouchableOpacity>

  )
}



    return <GestureHandlerRootView  style={style.container}>

        <StatusBar backgroundColor={Colors.light_green}/>

        <View style={{height:'7%' ,backgroundColor:Colors.light_green}}>

          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>


            <View style={{flexDirection:'row',alignItems:'center',width:'80%',height:'100%',padding:'3'}}>

      

            <Image style={{width:30,height:20,marginStart:'4%',marginTop:'4%'}}  source={require('../../assets/arrow.png')}/>

            <View style={{marginStart:'2%',marginTop:'4%',height:'58%',width:'0.5%',backgroundColor:Colors.green_light_2}}></View>
            <Text numberOfLines={1} style={{marginStart:'2%',marginTop:'3%',fontFamily:'urbanistmedium',marginStart:'5%',fontSize:16,color:Colors.textcolor}}>Delivery Options</Text>
            </View>

        

          </View>


      


        </View>




     
        <View style={{width:'100%',backgroundColor:Colors.altra_light_purple,height:'8%'}}>
        <View style={{flexDirection:'row',alignItems:'center',backgroundColor:Colors.altra_light_purple,marginTop:'2%',alignContent:'center',justifyContent:'space-between'}}>
       
       
          <View>

          
         <View style={{flexDirection:'row'}}>
         <Image style={{width:15,height:20,marginStart:'4%',marginEnd:'4',marginEnd:'4%',tintColor:Colors.textcolor}}  source={require('../../assets/location_white.png')}/>
            <Text numberOfLines={1} style={{marginStart:'2%',fontFamily:'urbanistbold',fontSize:15,color:Colors.textcolor}}>Ranchi Lowadih</Text>

         </View>

         <Text numberOfLines={1} style={{marginStart:'4%',marginTop:'5%',fontFamily:'urbanistregular',fontSize:13,color:Colors.textcolor}}>Ranchi Lowadih</Text>

         </View>


         <TouchableWithoutFeedback>
          <Text numberOfLines={1} style={{marginStart:'4%',marginTop:'3%',fontFamily:'urbanistregular',fontSize:13,color:Colors.white,marginEnd:'5%',backgroundColor:Colors.dark_green,borderRadius:10,padding:10}}>Change</Text>

          </TouchableWithoutFeedback>

       
        </View>

         

        </View>

       

        <View style={{width:'100%',backgroundColor:Colors.altra_gray,height:'8%',marginTop:'5%'}}>
        <View style={{flexDirection:'row',alignItems:'center',marginTop:'2%',alignContent:'center',justifyContent:'space-between'}}>
       
       
          <View>

          
         <View style={{flexDirection:'row'}}>
            <Text numberOfLines={1} style={{marginStart:'4%',fontFamily:'urbanistmedium',fontSize:15,color:Colors.textcolor}}>1 Shipment</Text>

         </View>

         <Text numberOfLines={1} style={{marginStart:'4%',marginTop:'5%',fontFamily:'urbanistregular',fontSize:13,color:Colors.textcolor}}>Delivery Charge  <Text style={{color:Colors.dark_green,fontWeight:'600'}}>: Free</Text></Text>

         </View>


         <TouchableWithoutFeedback>
          <Text numberOfLines={1} style={{marginStart:'4%',marginTop:'3%',fontFamily:'urbanistmedium',fontSize:13,color:Colors.textcolor,marginEnd:'5%',borderRadius:10,padding:10}}>Delivery Options</Text>

          </TouchableWithoutFeedback>

       
        </View>

         

        </View>
       
        <View style={{width:'100%',backgroundColor:Colors.altra_gray,height:'14%',marginTop:'1%'}}>
        <View style={{flexDirection:'row',alignItems:'center',marginTop:'2%',alignContent:'center',justifyContent:'space-between'}}>
       
       
          <View>

          
         <View style={{flexDirection:'row'}}>
            <Text numberOfLines={1} style={{marginStart:'4%',fontFamily:'urbanistmedium',fontSize:15,color:Colors.textcolor}}>Shipment 1 Standard Delivery</Text>

         </View>


         </View>


         <TouchableWithoutFeedback>
          <Text numberOfLines={1} style={{marginStart:'4%',marginTop:'3%',fontFamily:'urbanistmedium',backgroundColor:Colors.purple,fontSize:13,color:Colors.white,marginEnd:'5%',borderRadius:10,padding:10,fontSize:12}}>View 2 Items</Text>

          </TouchableWithoutFeedback>

       
        </View>


          <TouchableWithoutFeedback   onPress={()=>{
               openBottomSheet()
          }}>
          <Text style={{marginStart:10,marginEnd:'5%',marginTop:10,padding:10,borderWidth:0.5,borderColor:Colors.black}}>21 april sunday 7:00 AM - 10:00 AM</Text>

          </TouchableWithoutFeedback>


         

        </View>
       



    
           <TouchableWithoutFeedback onPress={()=>{
                 
             }}>
              <Text numColumns={2} style={{position:'absolute',alignSelf:'center',bottom:'5%',color:Colors.white,fontFamily:'urbanistmedium',fontSize:14,width:'90%',textAlign:'center',marginStart:3,backgroundColor:Colors.red,padding:10,marginEnd:'3%',borderRadius:10}}>Continue Payment</Text>

             </TouchableWithoutFeedback>





 

      <BottomSheet
        style={{ backgroundColor: 'white' }}
        ref={bottomSheetRef}
        
        index={0}
       
        snapPoints={['1%','50%', '90%']}
        onChange={handleSheetChanges}
      >
        <BottomSheetView style={{ backgroundColor: 'white', padding: 16 }}>
          <View>
          <Text numberOfLines={1} style={{marginStart:'2%',fontFamily:'urbanistmedium',marginStart:'5%',fontSize:16,color:Colors.textcolor}}>Select Delivey Time</Text>


        </View>

        <View style={{marginStart:'3%',marginTop:4}}>
            <FlatList
            data={packSizes}
            renderItem={renderPackSizeItem}
            keyExtractor={(item) => item.id.toString()}
           
            showsHorizontalScrollIndicator={false}
          />
        </View>
        </BottomSheetView>
      </BottomSheet>
     



  
    </GestureHandlerRootView >



}



const style = StyleSheet.create({
   
    container:{
        flex:1,
        backgroundColor:Colors.white
    },
    contentContainer: {
      flex: 1,
      alignItems: 'center',
      backgroundColor:Colors.gray
    },
  

})

export default FDeliveryOption