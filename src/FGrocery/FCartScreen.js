import { StatusBar, StyleSheet, View,Image, Text, TextInput, TouchableOpacity ,FlatList,ScrollView,Dimensions, TouchableWithoutFeedback} from "react-native"
import Colors from "../utils/Color"
import BannerSlider from "../common/component/BannerSlider";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";



const FProductDetailScreen = () =>{
    const navigation = useNavigation()

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
          <View style={{width:'95%',height:140,marginEnd:10,marginBottom:15,backgroundColor:Colors.white,borderRadius:10,elevation:1,alignSelf:'center'}}>


            <View style={{width:'100%',flexDirection:'row'}}>
            <Image style={{ width: 90, height: 90 ,marginStart:8,marginTop:8,borderRadius:10,borderColor:Colors.gray,borderWidth:1}} source={item.image}></Image>

            <View style={{marginTop:'3%',marginStart:'4%'}}>
             <Text numColumns={2} style={{color:Colors.textcolor,fontFamily:'urbanistmedium',fontSize:15}}>{item.title}</Text>
             <Text numColumns={2} style={{color:Colors.textcolor,fontFamily:'urbanistmedium',fontSize:11,marginStart:3}}>32 gm</Text>

             <View style={{flexDirection:'row',width:'100%',alignItems:'center'}}>
             <Text numColumns={2} style={{color:Colors.black,fontFamily:'urbanistbold',fontSize:13,marginStart:3}}>₹ 200</Text>
             <Text numColumns={2} style={{color:Colors.dark_gray,fontFamily:'urbanistbold',fontSize:13,marginStart:3,marginStart:10,textDecorationLine:'line-through'}}>₹ 300</Text>
             


             </View>
             <Text style={{padding:3,fontSize:10,color:Colors.dark_green,fontFamily:'urbanistmedium'}}>10% OFF</Text>            

             </View>

            </View>

           <View style={{flexDirection:'row',justifyContent:'space-between'}}>
           <Text style={{padding:3,fontSize:12,color:Colors.dark_green,fontFamily:'urbanistbold'}}>You have saved ₹ 33 on this order</Text>   
           <View style={{flexDirection:'row',alignItems:'center',alignSelf:'flex-end',marginEnd:10}}>
            <Text numColumns={2} style={{color:Colors.red,fontFamily:'urbanistbold',fontSize:13,backgroundColor:Colors.white,borderColor:Colors.red,borderWidth:1,width:30,alignSelf:'flex-end',textAlign:'center',color:Colors.red,padding:8}}>-</Text>
            <Text numColumns={2} style={{color:Colors.dark_gray,fontFamily:'urbanistbold',fontSize:13,backgroundColor:Colors.red,width:30,alignSelf:'flex-end',textAlign:'center',color:Colors.white,padding:8,borderWidth:1,borderColor:Colors.red}}>1</Text>
            <Text numColumns={2} style={{color:Colors.red,fontFamily:'urbanistbold',fontSize:13,backgroundColor:Colors.white,borderColor:Colors.red,borderWidth:1,width:30,alignSelf:'flex-end',textAlign:'center',color:Colors.red,padding:8}}>+</Text>


            </View>
            </View>         

           



         

            
            
            
           
            

            

          </View>

        

    </TouchableWithoutFeedback>

  )
}



    return <View style={style.container}>

        <StatusBar backgroundColor={Colors.light_green}/>

        <View style={{height:'7%' ,backgroundColor:Colors.light_green}}>

          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>


            <View style={{flexDirection:'row',alignItems:'center',width:'80%',height:'100%',padding:'3'}}>

      

            <Image style={{width:30,height:20,marginStart:'4%',marginTop:'4%'}}  source={require('../../assets/arrow.png')}/>

            <View style={{marginStart:'2%',marginTop:'4%',height:'58%',width:'0.5%',backgroundColor:Colors.green_light_2}}></View>
            <Text numberOfLines={1} style={{marginStart:'2%',marginTop:'3%',fontFamily:'urbanistmedium',marginStart:'5%',fontSize:16,color:Colors.textcolor}}>Cart Review</Text>
            </View>
            <TouchableWithoutFeedback onPress={()=>{
              navigation.navigate("FCartScreen")
            }}>
            <Image style={{width:'7%',height:28,marginStart:'4%',marginTop:'2%',marginEnd:'4',marginEnd:'4%'}}  source={require('../../assets/cart.png')}/>

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


      

        <View style={{position:'absolute',width:'100%',bottom:0,height:70,backgroundColor:Colors.altra_gray,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>

            <View style={{marginStart:10}}>
            <Text numColumns={2} style={{color:Colors.black,fontFamily:'urbanistextrabold',fontSize:16,marginStart:3}}>Total : ₹ 200</Text>
            <Text numColumns={2} style={{color:Colors.dark_green,fontFamily:'urbanistmedium',fontSize:13,marginStart:3}}>saved ₹ 32</Text>

            </View>

             <TouchableWithoutFeedback onPress={()=>{
                    navigation.navigate("AddaddressScreen")
             }}>
              <Text numColumns={2} style={{color:Colors.white,fontFamily:'urbanistmedium',fontSize:14,width:'40%',textAlign:'center',marginStart:3,backgroundColor:Colors.dark_green,padding:10,marginEnd:'3%',borderRadius:10}}>Proceed</Text>

             </TouchableWithoutFeedback>

         </View>
 
     



  
    </View>
}



const style = StyleSheet.create({
   
    container:{
        flex:1,
        backgroundColor:Colors.white
    }


})

export default FProductDetailScreen