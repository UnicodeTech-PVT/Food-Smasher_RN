import { StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux"
import { AppColors, normalized } from "../../../../Utils/AppConstants";
import Bar from "./Bar";
import { setTab } from "../../../../Redux/Reducers/AppReducer";

const BottomBar = ({bottomBarList, navigation , tab}:any)=>{
    const dispatch = useDispatch();
    return (
        <View style={styles.container}>
        <View style={styles.childCont}>
          {bottomBarList.map((item: any, index: any) => (
            <View key={index} style={{ marginBottom: 15 }}>
              <Bar
                key={item.title}
                tab={tab}
                obj={item}
                index={index}
                onPress={() => {
                  if (navigation.canGoBack()) {
                    navigation.popToTop();
                  }
                  dispatch(setTab(index));
                }}
              />
            </View>
          ))}
        </View>
      </View>
    )
}
const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      height: normalized(10),
      shadowColor: AppColors.Colorz.darkBlue,
      shadowOpacity: 0.32,
      shadowRadius: 5.46,
    },
    childCont: {
      width: "100%",
      height: normalized(75),
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: '#E6E6E4',
      paddingHorizontal: normalized(25),
      alignItems: "center",
      zIndex: 20,
    },
  });

  export default BottomBar;