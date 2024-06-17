import { StatusBar, StyleSheet, View,Image, Text, TextInput, TouchableOpacity ,FlatList,ScrollView,Dimensions, TouchableWithoutFeedback} from "react-native"
import Colors from "../utils/Color"
import BannerSlider from "../common/component/BannerSlider";
import { useNavigation } from "@react-navigation/native";
import { useCallback, useEffect, useRef, useState } from "react";

import BottomSheet, { BottomSheetView,BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


const FProductListScreen = () =>{
    const navigation = useNavigation()
    const bottomSheetRef = useRef(null);
    const yourDataArray = [
        { id: 1, title: 'Kurkure Red Chillie',image:require('../../assets/snacks.png') },
        { id: 2, title: 'Makeup',image:require('../../assets/makeup.png') },
        { id: 3, title: 'Ice-Creams',image:require('../../assets/ice.png') },
        { id: 4, title: 'Fruits',image:require('../../assets/fruit.png')},
        // Add more data items as needed
      ];

      const RatingList = [
        { id: 1, title: 'Kurkure Red Chillie',image:require('../../assets/snacks.png') },
        { id: 2, title: 'Modern Kitchens Butter Murukku - Fresh, Crunchy, South Indian Snack, 150 g ',image:require('../../assets/makeup.png') },
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
     
      const [selectedPackSize, setSelectedPackSize] = useState(null);

      const packSizes = [
        { id: 1, size: 'Small' },
        { id: 2, size: 'Medium' },
        { id: 3, size: 'Large' },
      ];

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
      <Text style={{  color: selectedPackSize === item.id ? Colors.dark_green : 'black',fontFamily:'urbanistmedium' }}>{item.size}</Text>

      <View style={{flexDirection:'row',width:'100%',alignItems:'center',marginTop:7}}>
             <Text numColumns={2} style={{color:Colors.black,fontFamily:'urbanistbold',fontSize:13,marginStart:3}}>₹ 200</Text>
             <Text numColumns={2} style={{color:Colors.dark_gray,fontFamily:'urbanistbold',fontSize:13,marginStart:3,marginStart:10,textDecorationLine:'line-through'}}>₹ 300</Text>
             


             </View>
      </View>

      <View style={{flexDirection:'row',alignItems:'center',alignSelf:'flex-end',marginEnd:10,marginStart:'3%'}}>
            <Text numColumns={2} style={{color:Colors.red,fontFamily:'urbanistbold',fontSize:13,backgroundColor:Colors.white,borderColor:Colors.red,borderWidth:1,width:30,alignSelf:'flex-end',textAlign:'center',color:Colors.red,padding:8}}>-</Text>
            <Text numColumns={2} style={{color:Colors.dark_gray,fontFamily:'urbanistbold',fontSize:13,backgroundColor:Colors.red,width:30,alignSelf:'flex-end',textAlign:'center',color:Colors.white,padding:8,borderWidth:1,borderColor:Colors.red}}>1</Text>
            <Text numColumns={2} style={{color:Colors.red,fontFamily:'urbanistbold',fontSize:13,backgroundColor:Colors.white,borderColor:Colors.red,borderWidth:1,width:30,alignSelf:'flex-end',textAlign:'center',color:Colors.red,padding:8}}>+</Text>


            </View>
    
         
     </View>


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
          <View style={{width:'95%',height:190,marginEnd:10,marginBottom:15,backgroundColor:Colors.white,borderRadius:10,elevation:1,alignSelf:'center'}}>


            <View style={{width:'100%',flexDirection:'row'}}>
            <Image style={{ width: 100, height: 100 ,marginStart:8,marginTop:8,borderRadius:10,borderColor:Colors.gray,borderWidth:1}} source={item.image}></Image>

            <View style={{marginTop:'3%',marginStart:'4%'}}>
            <Text numColumns={2} style={{color:Colors.dark_gray,fontFamily:'urbanistmedium',fontSize:10}}>Nestle</Text>

             <Text numberOfLines={2} style={{color:Colors.textcolor,fontFamily:'urbanistmedium',fontSize:19,width:230}}>{item.title}</Text>
            

             <View style={{flexDirection:'row',width:'100%',alignItems:'center'}}>
             <Text numColumns={2} style={{color:Colors.black,fontFamily:'urbanistbold',fontSize:13,marginStart:3}}>₹ 200</Text>
             <Text numColumns={2} style={{color:Colors.dark_gray,fontFamily:'urbanistbold',fontSize:13,marginStart:3,marginStart:10,textDecorationLine:'line-through'}}>₹ 300</Text>
             


             </View>
             <View style={{flexDirection:'row',alignItems:'center',padding:3,backgroundColor:Colors.light_green,justifyContent:'center',width:40}}>
              <Image style={{width:10,height:10,marginStart:'2%',marginTop:'2%',marginEnd:'4',marginEnd:'4%',tintColor:Colors.dark_green}}  source={require('../../assets/star.png')}/>

            <Text numColumns={2} style={{color:Colors.dark_green,fontFamily:'urbanistbold',fontSize:13,marginStart:3}}>4.5</Text>

              </View>
             <Text style={{padding:3,fontSize:10,color:Colors.dark_green,fontFamily:'urbanistmedium'}}>10% OFF</Text>            

             </View>

            </View>


             <View style={{flexDirection:'row',alignItems:'center'}}>

             <View style={{width:'50%',marginTop:'3%',marginStart:'2%',flexDirection:'row',alignItems:'center',justifyContent:'space-between',backgroundColor:Colors.white,borderColor:Colors.red,borderWidth:1,width:100,}}>
           
            <TouchableWithoutFeedback onPress={()=>{
              openBottomSheet()
            }}>
            <Text numColumns={2} style={{color:Colors.red,fontFamily:'urbanistbold',fontSize:13,textAlign:'center',color:Colors.red,padding:8}}>100 gm</Text>

            </TouchableWithoutFeedback>
            <Image style={{width:10,height:10,tintColor:Colors.red,marginEnd:8}}  source={require('../../assets/dropdown.png')}/>

               
            </View>

            <View style={{flexDirection:'row',alignItems:'center',alignSelf:'flex-end',marginEnd:10,marginStart:'3%'}}>
            <Text numColumns={2} style={{color:Colors.red,fontFamily:'urbanistbold',fontSize:13,backgroundColor:Colors.white,borderColor:Colors.red,borderWidth:1,width:30,alignSelf:'flex-end',textAlign:'center',color:Colors.red,padding:8}}>-</Text>
            <Text numColumns={2} style={{color:Colors.dark_gray,fontFamily:'urbanistbold',fontSize:13,backgroundColor:Colors.red,width:30,alignSelf:'flex-end',textAlign:'center',color:Colors.white,padding:8,borderWidth:1,borderColor:Colors.red}}>1</Text>
            <Text numColumns={2} style={{color:Colors.red,fontFamily:'urbanistbold',fontSize:13,backgroundColor:Colors.white,borderColor:Colors.red,borderWidth:1,width:30,alignSelf:'flex-end',textAlign:'center',color:Colors.red,padding:8}}>+</Text>


            </View>

             </View>




         

            
            
            
           
            

            

          </View>

        

    </TouchableWithoutFeedback>

  )
}



    return <GestureHandlerRootView style={style.container}>

        <StatusBar backgroundColor={Colors.light_green}/>

        <View style={{height:'7%' ,backgroundColor:Colors.light_green}}>

          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>


            <View style={{flexDirection:'row',alignItems:'center',width:'80%',height:'100%',padding:'3'}}>

      

            <Image style={{width:30,height:20,marginStart:'4%',marginTop:'4%'}}  source={require('../../assets/arrow.png')}/>

            <View style={{marginStart:'2%',marginTop:'4%',height:'58%',width:'0.5%',backgroundColor:Colors.green_light_2}}></View>
            <Text numberOfLines={1} style={{marginStart:'2%',marginTop:'3%',fontFamily:'urbanistmedium',marginStart:'5%',fontSize:16,color:Colors.textcolor}}>Snacks (30% OFF on each items)</Text>
            </View>
            <TouchableWithoutFeedback onPress={()=>{
            //  navigation.navigate("FCartScreen")
            }}>
 <Image style={{width:'7%',height:28,marginStart:'4%',marginTop:'2%',marginEnd:'4',marginEnd:'4%'}}  source={require('../../assets/search.png')}/>

            </TouchableWithoutFeedback>
           

          </View>


      


        </View>

     
       
      

       

     
        

       


      


       







<View style={{marginStart:'2%',marginTop:'5%'}}>
            <FlatList
            data={RatingList}
            renderItem={renderProducts}
            keyExtractor={(item) => item.id.toString()}
          
            showsHorizontalScrollIndicator={false}
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
        <BottomSheetView style={{ backgroundColor: Colors.altra_light_purple, padding: 16 }}>
          



         <View style={{width:'95%',height:90,marginEnd:10,marginBottom:15,backgroundColor:Colors.white,borderRadius:10,alignSelf:'center'}}> 


            <View style={{width:'100%',flexDirection:'row'}}>
            <Image style={{ width: 60, height: 60 ,marginStart:8,marginTop:8,borderRadius:10,borderColor:Colors.gray,borderWidth:1}} source={require('../../assets/snack.png')}></Image>

            <View style={{marginTop:'3%',marginStart:'4%'}}> 
           <Text numColumns={2} style={{color:Colors.dark_gray,fontFamily:'urbanistmedium',fontSize:10}}>Nestle</Text>

             <Text numberOfLines={2} style={{color:Colors.textcolor,fontFamily:'urbanistmedium',fontSize:19,width:230}}>Kurkure Masala Munch</Text>
            

         
           </View> 
          </View>
          </View>  
       
          <Text numColumns={2} style={{color:Colors.textcolor,fontFamily:'urbanistmedium',fontSize:13,marginStart:5}}>Choose a pack size</Text>

        




          <View style={{marginTop:4}}>
            <FlatList
            data={packSizes}
            renderItem={renderPackSizeItem}
            keyExtractor={(item) => item.id.toString()}
           
            showsHorizontalScrollIndicator={false}
          />
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

export default FProductListScreen