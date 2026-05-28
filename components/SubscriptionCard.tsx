import {
  formatCurrency,
  formatStatusLabel,
  formatSubscriptionDateTime,
} from "@/lib/utils";
import { Subscription } from "@/types/subscription";
import { useState } from "react";
import {
  LayoutAnimation,
  Platform,
  Pressable,
  Text,
  UIManager,
  View,
} from "react-native";

if (Platform.OS === "android") {
  UIManager.setLayoutAnimationEnabledExperimental?.(true);
}

type SubscriptionCardProps = {
  data: Subscription;
  onPress?: () => void;
};

const SubscriptionCard = ({ data, onPress }: SubscriptionCardProps) => {
  const Icon = data.icon;
  const [expanded, setExpanded] = useState(false);

  const handlePress = () => {
    LayoutAnimation.configureNext({
      duration: 300,
      create: { type: "spring", property: "scaleXY", springDamping: 0.9 },
      update: { type: "spring", springDamping: 0.9 },
      delete: { type: "spring", property: "scaleXY", springDamping: 0.9 },
    });
    setExpanded((prev) => !prev);
    onPress?.();
  };

  return (
    <Pressable
      onPress={handlePress}
      className="rounded-tr-2xl rounded-bl-2xl p-4 bg-subscription"
    >
      <View className="flex-row items-center gap-4">
        <View className="rounded-xl bg-muted p-2">
          <Icon size={30} />
        </View>

        <View className="flex-1">
          <Text numberOfLines={1} className="text-lg font-sans-semibold">
            {data.name}
          </Text>
          <Text
            numberOfLines={1}
            className="font-sans-medium text-muted-foreground text-sm"
          >
            {data.category?.trim() ||
              data.plan?.trim() ||
              (data.renewalDate
                ? formatSubscriptionDateTime(data.renewalDate)
                : "")}
          </Text>
        </View>

        <View className="items-center gap-2">
          <Text className="font-sans-bold">
            {formatCurrency(data.price, data.currency)}
          </Text>
          <Text className="font-sans-medium text-xs text-muted-foreground">
            {data.billing}
          </Text>
        </View>
      </View>

      {expanded && (
        <View className="pt-2 gap-2">
          <View className="flex-row gap-1">
            <Text className="text-sm font-sans-medium text-muted-foreground">
              Status:
            </Text>
            <Text className="font-sans-semibold text-sm">
              {formatStatusLabel(data.status)}
            </Text>
          </View>

          <View className="flex-row gap-1">
            <Text className="text-sm font-sans-medium text-muted-foreground">
              Payment:
            </Text>
            <Text className="font-sans-semibold text-sm">
              {data.paymentMethod}
            </Text>
          </View>

          <View className="flex-row gap-1">
            <Text className="text-sm font-sans-medium text-muted-foreground">
              Plan:
            </Text>
            <Text className="font-sans-semibold text-sm">{data.plan}</Text>
          </View>

          <View className="flex-row  gap-1">
            <Text className="text-sm font-sans-medium text-muted-foreground">
              Renewal date:
            </Text>
            <Text className="font-sans-semibold text-sm">
              {formatSubscriptionDateTime(data.renewalDate)}
            </Text>
          </View>
        </View>
      )}
    </Pressable>
  );
};

export default SubscriptionCard;
