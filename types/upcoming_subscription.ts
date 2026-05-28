import { LucideProps } from "lucide-react-native";

export interface UpcomingSubscription {
  id: string;
  icon: React.ForwardRefExoticComponent<
    LucideProps & React.RefAttributes<SVGSVGElement>
  >;
  name: string;
  price: number;
  currency: string;
  daysLeft: number;
}
