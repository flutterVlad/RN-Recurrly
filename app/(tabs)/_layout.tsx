import { TabIcon } from "@/components/TabIcon";
import { tabs } from "@/constants/data";
import { colors, components } from "@/constants/theme";
import { Tabs } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const tabBar = components.tabBar;

const TabLayout = () => {
  const insets = useSafeAreaInsets();

  return (
    <Tabs screenOptions={{ headerShown: false }}>
      {tabs.map((tab) => {
        return (
          <Tabs.Screen
            key={tab.name}
            name={tab.name}
            options={{
              title: tab.title,
              tabBarLabelVisibilityMode: "unlabeled",
              tabBarStyle: {
                position: "absolute",
                bottom: Math.max(insets.bottom, tabBar.horizontalInset),
                height: tabBar.height,
                marginHorizontal: tabBar.horizontalInset,
                borderRadius: tabBar.radius,
                backgroundColor: colors.primary,
                borderTopWidth: 0,
                elevation: 0,
              },
              tabBarItemStyle: {
                paddingVertical: tabBar.height / 2 - tabBar.iconFrame / 1.6,
              },
              tabBarIconStyle: {
                width: tabBar.iconFrame,
                height: tabBar.iconFrame,
                alignItems: "center",
              },
              tabBarIcon: ({ focused, size }) => (
                <TabIcon focused={focused} size={size} icon={tab.icon} />
              ),
            }}
          />
        );
      })}
    </Tabs>
  );
};

export default TabLayout;
