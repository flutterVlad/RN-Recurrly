import { TabIcon } from "@/components/TabIcon";
import { tabs } from "@/constants/data";
import { colors, components } from "@/constants/theme";
import { Tabs } from "expo-router";
import { useMemo } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const tabBar = components.tabBar;

const TabLayout = () => {
  const insets = useSafeAreaInsets();

  const tabBarStyle = useMemo(
    () =>
      ({
        position: "absolute",
        bottom: Math.max(insets.bottom, tabBar.horizontalInset),
        height: tabBar.height,
        marginHorizontal: tabBar.horizontalInset,
        borderRadius: tabBar.radius,
        backgroundColor: colors.primary,
        borderTopWidth: 0,
        elevation: 0,
      }) as const,
    [insets.bottom],
  );

  const tabBarItemStyle = useMemo(
    () => ({
      paddingVertical: tabBar.height / 2 - tabBar.iconFrame / 1.6,
    }),
    [],
  );

  const tabBarIconStyle = useMemo(
    () =>
      ({
        width: tabBar.iconFrame,
        height: tabBar.iconFrame,
        alignItems: "center",
      }) as const,
    [],
  );

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
              tabBarStyle,
              tabBarItemStyle,
              tabBarIconStyle,
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
