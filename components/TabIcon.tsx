import clsx from "clsx";
import { LucideProps } from "lucide-react-native";
import { View } from "react-native";

type TabIconProps = {
  focused: boolean;
  size: number;
  icon: React.ForwardRefExoticComponent<
    LucideProps & React.RefAttributes<SVGSVGElement>
  >;
};

export const TabIcon = ({ focused, size, icon }: TabIconProps) => {
  const Icon = icon;

  return (
    <View className="tabs-icon">
      <View className={clsx("tabs-pill", focused && "tabs-active")}>
        <Icon className="tabs-glyph" color="#fff" size={size} />
      </View>
    </View>
  );
};
