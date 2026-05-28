import { LucideProps } from "lucide-react-native";

export interface Subscription {
  id: string;
  icon: React.ForwardRefExoticComponent<
    LucideProps & React.RefAttributes<SVGSVGElement>
  >;
  name: string;
  plan: string;
  category: string;
  paymentMethod: string;
  status: string;
  startDate: string;
  price: number;
  currency: string;
  billing: string;
  renewalDate: string;
}
