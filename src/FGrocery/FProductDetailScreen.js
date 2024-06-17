import { StatusBar, StyleSheet, View,Image, Text, TextInput, TouchableOpacity ,FlatList,ScrollView,Dimensions, TouchableWithoutFeedback} from "react-native"
import Colors from "../utils/Color"
import BannerSlider from "../common/component/BannerSlider";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";



const FCartScreen = () =>{
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



    return <View style={style.container}>

        <StatusBar backgroundColor={Colors.light_green}/>

        <View style={{height:'7%' ,backgroundColor:Colors.light_green}}>

          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>


            <View style={{flexDirection:'row',alignItems:'center',width:'80%',height:'100%',padding:'3'}}>

      

            <Image style={{width:30,height:20,marginStart:'4%',marginTop:'4%'}}  source={require('../../assets/arrow.png')}/>

            <View style={{marginStart:'2%',marginTop:'4%',height:'58%',width:'0.5%',backgroundColor:Colors.green_light_2}}></View>
            <Text numberOfLines={1} style={{marginStart:'2%',marginTop:'3%',fontFamily:'urbanistmedium',marginStart:'5%',fontSize:16,color:Colors.textcolor}}>Fresh Chakki Aaata</Text>
            </View>

         <TouchableWithoutFeedback onPress={()=>{
          navigation.navigate("FCartScreen")
         }}>
         <Image style={{width:'7%',height:28,marginStart:'4%',marginTop:'2%',marginEnd:'4',marginEnd:'4%'}}  source={require('../../assets/cart.png')}/>

         </TouchableWithoutFeedback>


          </View>


      


        </View>

   
      
      

        

        

       







       




         <FlatList
           style={{flex:1}}
  data={[
    { type: 'header', id: 'header' },
    { type: 'rating', id: 'rating' },

  ]}
  renderItem={({ item }) => {
    switch (item.type) {
      case 'header':
        return (
          <View>
                <View style={{marginStart:'5%'}}>
        <Text numberOfLines={1} style={{marginTop:'3%',fontFamily:'urbanistmedium',fontSize:18,color:Colors.textcolor}}>Fresh Chakki Aaata</Text>

        <View style={{flexDirection:'row',width:'100%',alignItems:'center'}}>
             <Text numColumns={2} style={{color:Colors.black,fontFamily:'urbanistbold',fontSize:13,marginStart:3}}>₹ 200</Text>
             <Text numColumns={2} style={{color:Colors.dark_gray,fontFamily:'urbanistmedium',fontSize:13,marginStart:3,marginStart:10,textDecorationLine:'line-through'}}>MRP ₹ 300</Text>
             <Text numColumns={2} style={{color:Colors.white,backgroundColor:Colors.red,fontFamily:'urbanistbold',fontSize:13,marginStart:10,fontSize:10,padding:2}}>10 % OFF</Text>



             </View>
             <Text numColumns={2} style={{color:Colors.textcolor,fontFamily:'urbanistregular',fontSize:13,marginStart:3}}>(Inclusive of all taxes)</Text>
        </View>

        <View style={{flexDirection:'row',width:'100%',alignItems:'center',marginStart:'5%',marginTop:'3%'}}>

              <View style={{flexDirection:'row',alignItems:'center',padding:3,backgroundColor:Colors.light_green,justifyContent:'center'}}>
              <Image style={{width:10,height:10,marginStart:'4%',marginTop:'2%',marginEnd:'4',marginEnd:'4%',tintColor:Colors.dark_green}}  source={require('../../assets/star.png')}/>

            <Text numColumns={2} style={{color:Colors.dark_green,fontFamily:'urbanistbold',fontSize:13,marginStart:3}}>4.5</Text>

              </View>

            
        </View>

        {/* show product images */}
        <View style={{margin:'5%'}}>


        <FlatList
              data={yourDataArray}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={renderCategory}
              keyExtractor={(item) => item.id.toString()}
              snapToInterval={Dimensions.get('window').width} // Adjust this value based on your item width and margin
              snapToAlignment={'center'}
            />  

        <FlatList
              data={yourDataArray}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={renderCategoryHint}
              keyExtractor={(item) => item.id.toString()}
            />

        </View>

        <View>
          <Text numberOfLines={1} style={{marginStart:'2%',fontFamily:'urbanistmedium',marginStart:'5%',fontSize:16,color:Colors.textcolor}}>Pack Sizes</Text>


        </View>

        <View style={{marginStart:'5%',marginTop:4}}>
            <FlatList
            data={packSizes}
            renderItem={renderPackSizeItem}
            keyExtractor={(item) => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={{flexDirection:'row',alignItems:'center',height:'5%',backgroundColor:Colors.altra_gray,marginTop:'2%',alignContent:'center'}}>

        <Image style={{width:30,height:30,marginStart:'4%',marginEnd:'4',marginEnd:'4%',tintColor:Colors.dark_green}}  source={require('../../assets/truck.png')}/>
        <Text numberOfLines={1} style={{marginStart:'2%',fontFamily:'urbanistregular',fontSize:14,color:Colors.textcolor}}>Get it in 1 Day</Text>


        </View>


        <View style={{marginTop:'3%'}}>

        <Text numberOfLines={1} style={{fontFamily:'urbanistmedium',fontSize:16,color:Colors.textcolor,marginStart:8}}>About Product</Text>
        <View style={{height:1,width:'100%',backgroundColor:Colors.grayview,marginTop:8}}>

        </View>

        <Text numberOfLines={10} style={{marginTop:'3%',marginStart:8,marginEnd:8,fontFamily:'urbanistmedium',fontSize:14}}>Aata, also known as flour, is a staple food item commonly used in households worldwide, particularly in South Asia. It is primarily made by grinding grains such as wheat, maize, rice, or millet into a fine powder. Aata is a versatile ingredient used to prepare various dishes like roti (flatbread), chapati, paratha, naan, puri, and a variety of baked goods.</Text>



        </View>
  

         <TouchableWithoutFeedback onPress={()=>{
                     navigation.navigate("FCartScreen")

         }}>
         <View style={{flexDirection:'row',alignItems:'center',height:'4%',backgroundColor:Colors.red,marginTop:'2%',borderRadius:10,justifyContent:'center',marginStart:8,marginEnd:8,marginTop:'5%'}}>

<Image style={{width:20,height:20,marginStart:'4%',tintColor:Colors.white}}  source={require('../../assets/cart.png')}/>
<Text numberOfLines={1} style={{marginStart:'1%',fontFamily:'urbanistregular',fontSize:14,color:Colors.white}}>Add To Basket</Text>


</View>
         </TouchableWithoutFeedback>


        <View style={{flexDirection:'row',alignItems:'center',height:'5%',backgroundColor:Colors.altra_light_purple,marginTop:'2%',alignContent:'center'}}>

<Image style={{width:30,height:30,marginStart:'4%',marginEnd:'4',marginEnd:'4%',tintColor:Colors.dark_green}}  source={require('../../assets/insurance.png')}/>
<Text numberOfLines={1} style={{marginStart:'2%',fontFamily:'urbanistregular',fontSize:14,color:Colors.textcolor}}>Approved By Deligo</Text>


</View>
          </View>
        );
   
        case 'rating':
              return (
                 <View>
 <View>

<Text numberOfLines={1} style={{fontFamily:'urbanistmedium',fontSize:16,color:Colors.textcolor,marginStart:8}}>Rating & Reviews</Text>
<View style={{height:1,width:'100%',backgroundColor:Colors.dark_gray,marginTop:8}}>

</View>




</View>


<View style={{marginStart:'2%',marginTop:'5%'}}>
<FlatList
data={RatingList}
renderItem={renderRating}
style={{flex:1}}
keyExtractor={(item) => item.id.toString()}

showsHorizontalScrollIndicator={false}
/>
</View>
                  </View>
              );
      
      default:
        return null;
    }
  }}
  keyExtractor={(item) => item.id}

  showsVerticalScrollIndicator={false}
/>


     



  
    </View>



}



const style = StyleSheet.create({
   
    container:{
        flex:1,
        backgroundColor:Colors.white
    }


})

export default FCartScreen