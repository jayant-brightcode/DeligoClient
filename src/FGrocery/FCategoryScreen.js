import { StatusBar, StyleSheet, View,Image, Text, TextInput, TouchableOpacity ,FlatList,ScrollView,Dimensions, TouchableWithoutFeedback} from "react-native"
import Colors from "../utils/Color"
import BannerSlider from "../common/component/BannerSlider";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";



const FCategroyScreen = () =>{
    const navigation = useNavigation()

    const category = [
      { id: 1, title: 'Fruits & Vegetables',image:require('../../assets/snacks.png') },
      { id: 2, title: 'Bakery, Cakes & Diary',image:require('../../assets/makeup.png') },
      { id: 3, title: 'Masalas , Oils & Dry Fruits',image:require('../../assets/ice.png') },
      { id: 4, title: 'Aata Rice & Dals',image:require('../../assets/fruit.png')},
      { id: 5, title: 'Fruits & Vegetables',image:require('../../assets/snacks.png') },
      { id: 6, title: 'Bakery, Cakes & Diary',image:require('../../assets/makeup.png') },
      { id: 7, title: 'Masalas , Oils & Dry Fruits',image:require('../../assets/ice.png') },
      { id: 8, title: 'Aata Rice & Dals',image:require('../../assets/fruit.png')},
      { id: 9, title: 'Fruits & Vegetables',image:require('../../assets/snacks.png') },
      { id: 10, title: 'Bakery, Cakes & Diary',image:require('../../assets/makeup.png') },
      { id: 11, title: 'Masalas , Oils & Dry Fruits',image:require('../../assets/ice.png') },
      { id: 12, title: 'Aata Rice & Dals',image:require('../../assets/fruit.png')},
      { id: 13, title: 'Fruits & Vegetables',image:require('../../assets/snacks.png') },
      { id: 14, title: 'Bakery, Cakes & Diary',image:require('../../assets/makeup.png') },
      { id: 15, title: 'Masalas , Oils & Dry Fruits',image:require('../../assets/ice.png') },
      { id: 16, title: 'Aata Rice & Dals',image:require('../../assets/fruit.png')},
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
          <TouchableOpacity onPress={()=>{
             navigation.navigate("FProductListScreen")
    
          }}>
                <View style={{width:80,height:115,marginEnd:10,marginBottom:15}}>
                  <View style={{width:80,height:40,position:'absolute',top:0,backgroundColor:Colors.light_purple,borderTopLeftRadius:10,borderTopRightRadius:10}}>
    
                  </View>
                <View style={{ width: 80, height: 70 ,paddingTop:'5%',alignItems:'center',justifyContent:'center'}}>
    
                <Image style={{ width: 50, height: 50 }} source={item.image}></Image>
    
                </View>
                <View>
                  <Text style={{fontFamily:'urbanistbold',fontSize:12,textAlign:'center',alignSelf:'center'}}>{item.title}</Text>
                </View>
                  
                </View>
    
              
    
          </TouchableOpacity>
    
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




    return <View style={style.container}>

        <StatusBar backgroundColor={Colors.light_green}/>

        <View style={{height:'7%' ,backgroundColor:Colors.light_green}}>

          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>


            <View style={{flexDirection:'row',alignItems:'center',width:'80%',height:'100%',padding:'3'}}>

      

            <Image style={{width:30,height:20,marginStart:'4%',marginTop:'4%'}}  source={require('../../assets/arrow.png')}/>

            <View style={{marginStart:'2%',marginTop:'4%',height:'58%',width:'0.5%',backgroundColor:Colors.green_light_2}}></View>
            <Text numberOfLines={1} style={{marginStart:'2%',marginTop:'3%',fontFamily:'urbanistmedium',marginStart:'5%',fontSize:16,color:Colors.textcolor}}>Shop By Category</Text>
            </View>
            <TouchableWithoutFeedback onPress={()=>{
              navigation.navigate("FCartScreen")
            }}>
 <Image style={{width:'7%',height:28,marginStart:'4%',marginTop:'2%',marginEnd:'4',marginEnd:'4%'}}  source={require('../../assets/cart.png')}/>

            </TouchableWithoutFeedback>
           

          </View>


      


        </View>

     
       
      

       

     
        

       


      


       





        <View style={{ marginTop: '5%', alignItems: 'center' }}>
            <FlatList
              data={category}
              numColumns={4}
              showsHorizontalScrollIndicator={false}
              renderItem={renderCategory}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>



      

   
     



  
    </View>
}



const style = StyleSheet.create({
   
    container:{
        flex:1,
        backgroundColor:Colors.white
    }


})

export default FCategroyScreen