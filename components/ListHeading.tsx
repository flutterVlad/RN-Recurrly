import { Text, TouchableOpacity, View } from "react-native";

type ListHeadingProps = {
  title: string;
  onPress?: () => void;
};

const ListHeading = ({ title, onPress }: ListHeadingProps) => {
  return (
    <View className="flex-row justify-between items-center">
      <Text className="font-sans-bold text-xl">{title}</Text>

      <TouchableOpacity
        onPress={onPress}
        className="rounded-3xl border pt-2 pb-2 pr-4 pl-4"
      >
        <Text className="font-sans-semibold">View all</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListHeading;
