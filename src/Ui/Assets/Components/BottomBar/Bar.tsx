import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { useDispatch } from "react-redux"
import { setTab } from "../../../../Redux/Reducers/AppReducer";
import { AppColors, normalized } from "../../../../Utils/AppConstants";

const Bar = ({ obj, index, tab}:any) => {
    const dispatch = useDispatch();
 
    return (
        <TouchableWithoutFeedback
        key={obj.title}
        onPress={() => {
          dispatch(setTab(index));
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: normalized(50),
            width: normalized(50),
          }}
        >
          <View style={styles.imgCont}>
            <Image
              style={[
                styles.selectedTab,
                tab == index ? { tintColor: AppColors.Colorz.orange } : null,
              ]}
              source={obj.icon}
              resizeMode="contain"
            />
            <Text
              style={{
                marginTop: normalized(10),
                fontFamily:'PoppinsMedium',
                fontSize: normalized(10),
                color:
                  tab == index ? AppColors.Colorz.orange : AppColors.Colorz.darkBlue,
              }}
            >
              {obj.title}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    selectedTab: {
      width: normalized(20),
      height: normalized(20),
      resizeMode: "contain",
    },
    imgCont: {
        height:normalized(50),
      justifyContent: "center",
      alignItems: "center",
    },
  });

  export default Bar;