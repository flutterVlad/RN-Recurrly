import { UPCOMING_SUBSCRIPTIONS } from "@/constants/data";
import { formatCurrency } from "@/lib/utils";
import { Text, TouchableOpacity, View } from "react-native";

type UpcomingSubscriptionCardProps = {
  data: (typeof UPCOMING_SUBSCRIPTIONS)[number];
  onPress?: () => void;
};

const UpcomingSubscriptionCard = ({
  data,
  onPress,
}: UpcomingSubscriptionCardProps) => {
  const Icon = data.icon;

  return (
    <TouchableOpacity onPress={onPress}>
      <View className="border rounded-xl p-4 gap-2">
        <View className="flex-row gap-2 items-center">
          <View className="bg-muted rounded-xl p-2">
            <Icon />
          </View>
          <View className="gap-0.5">
            <Text className="font-sans-bold">{formatCurrency(data.price)}</Text>
            <Text
              className="text-xs text-muted-foreground font-sans-semibold"
              numberOfLines={1}
            >
              {data.daysLeft > 1 ? `${data.daysLeft} days left` : "Last day"}
            </Text>
          </View>
        </View>
        <Text className="font-sans-semibold">{data.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default UpcomingSubscriptionCard;
