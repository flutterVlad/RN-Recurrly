import ListHeading from "@/components/ListHeading";
import SubscriptionCard from "@/components/SubscriptionCard";
import UpcomingSubscriptionCard from "@/components/UpcomingSubscriptionCard";
import {
  HOME_BALANCE,
  HOME_SUBSCRIPTIONS,
  HOME_USER,
  UPCOMING_SUBSCRIPTIONS,
} from "@/constants/data";
import { components } from "@/constants/theme";
import "@/global.css";
import { formatCurrency } from "@/lib/utils";
import dayjs from "dayjs";
import { Plus, User2 } from "lucide-react-native";
import { styled } from "nativewind";
import { useMemo } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import {
  SafeAreaView as RNSafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  const insets = useSafeAreaInsets();

  const contentContainerStyle = useMemo(
    () => ({
      paddingHorizontal: 16,
      gap: 8,
      paddingBottom: insets.bottom + components.tabBar.height + 16,
    }),
    [insets.bottom],
  );

  return (
    <SafeAreaView edges={["top"]} className="flex-1 bg-background gap-6">
      <View className="home-header ml-4 mr-4 gap-4">
        <View className="rounded-full bg-muted p-2">
          <User2 size={30} />
        </View>
        <Text className="flex-1 text-2xl font-sans-bold">{HOME_USER.name}</Text>
        <TouchableOpacity onPress={() => {}}>
          <Plus className="rounded border-2 border-b-black" />
        </TouchableOpacity>
      </View>

      <View className="bg-accent rounded-tr-4xl rounded-bl-4xl p-4 flex-column gap-8 ml-4 mr-4">
        <Text className="text-xl text-white">Balance</Text>

        <View className="flex-row justify-between items-center">
          <Text className="text-white text-4xl font-sans-bold">
            {formatCurrency(HOME_BALANCE.amount)}
          </Text>
          <Text className="text-card text-lg">
            {dayjs(HOME_BALANCE.nextRenewalDate).format("MM/DD")}
          </Text>
        </View>
      </View>

      <View className="pr-4 pl-4">
        <ListHeading title="Upcoming" />
      </View>
      <FlatList
        data={UPCOMING_SUBSCRIPTIONS}
        keyExtractor={(item) => item.id}
        horizontal
        style={{ flexGrow: 0 }}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 16,
          gap: 8,
        }}
        renderItem={({ item }) => <UpcomingSubscriptionCard data={item} />}
        ListEmptyComponent={
          <Text className="font-sans-regular mt-4 mb-4 text-muted-foreground">
            No upcoming subscription yet.
          </Text>
        }
      />

      <View className="pr-4 pl-4">
        <ListHeading title="All Subscriptions" />
      </View>
      <FlatList
        data={HOME_SUBSCRIPTIONS}
        className="flex-1"
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={contentContainerStyle}
        renderItem={({ item }) => <SubscriptionCard data={item} />}
        ListEmptyComponent={
          <Text className="font-sans-regular mt-4 mb-4 text-muted-foreground">
            No subscription yet.
          </Text>
        }
      />
    </SafeAreaView>
  );
}
