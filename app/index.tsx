import '../global.css';
import { Text, View } from "react-native";
export default function Index() {
  return (
    <View>
      <Image source={require('@/assets/images/splash.png')} style={{width: '100%', height: '100%'}}/>
    </View>
  );
}
