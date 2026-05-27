import "@/global.css";
import { Text, View } from "react-native";
import { styled } from "nativewind";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

const Insights = () => {
  return (
    <SafeAreaView className="flex-1 bg-background p-5 justify-center items-center">
      <Text>Insights</Text>
    </SafeAreaView>
  );
};

export default Insights;
