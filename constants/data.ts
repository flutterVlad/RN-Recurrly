import { Subscription } from "@/types/subscription";
import { UpcomingSubscription } from "@/types/upcoming_subscription";
import {
  Activity,
  AtomIcon,
  Car,
  Home,
  Music,
  Settings,
  Spotlight,
  Wallet,
} from "lucide-react-native";

export const tabs = [
  { name: "index", title: "Home", icon: Home },
  { name: "subscriptions", title: "Subscriptions", icon: Wallet },
  { name: "insights", title: "Insights", icon: Activity },
  { name: "settings", title: "Settings", icon: Settings },
];

export const HOME_USER = { name: "Vlad Yurashevich" } as const;

export const HOME_BALANCE = {
  amount: 2498.15,
  nextRenewalDate: "2026-03-18T09:00:00.000Z",
} as const;

export const UPCOMING_SUBSCRIPTIONS: UpcomingSubscription[] = [
  {
    id: "spotify",
    icon: Spotlight,
    name: "Spotify",
    price: 5.99,
    currency: "USD",
    daysLeft: 2,
  },
  {
    id: "yandex",
    icon: Music,
    name: "Yandex",
    price: 2.99,
    currency: "USD",
    daysLeft: 5,
  },
  {
    id: "tesla",
    icon: Car,
    name: "Tesla",
    price: 9.99,
    currency: "USD",
    daysLeft: 10,
  },
] as const;

export const HOME_SUBSCRIPTIONS: Subscription[] = [
  {
    id: "adobe-creative-cloud",
    icon: AtomIcon,
    name: "Adobe Creative Cloud",
    plan: "Teams Plan",
    category: "Design",
    paymentMethod: "Visa ending in 8530",
    status: "active",
    startDate: "2025-03-20T10:00:00.000Z",
    price: 77.49,
    currency: "USD",
    billing: "Monthly",
    renewalDate: "2026-03-20T10:00:00.000Z",
  },
  {
    id: "adobe-creative",
    icon: AtomIcon,
    name: "Adobe Creative Cloud",
    plan: "Teams Plan",
    category: "Design",
    paymentMethod: "Visa ending in 8530",
    status: "active",
    startDate: "2025-03-20T10:00:00.000Z",
    price: 77.49,
    currency: "USD",
    billing: "Monthly",
    renewalDate: "2026-03-20T10:00:00.000Z",
  },
  {
    id: "adobe-cre",
    icon: AtomIcon,
    name: "Adobe Creative Cloud",
    plan: "Teams Plan",
    category: "Design",
    paymentMethod: "Visa ending in 8530",
    status: "active",
    startDate: "2025-03-20T10:00:00.000Z",
    price: 77.49,
    currency: "USD",
    billing: "Monthly",
    renewalDate: "2026-03-20T10:00:00.000Z",
  },
  {
    id: "adobe",
    icon: AtomIcon,
    name: "Adobe Creative Cloud",
    plan: "Teams Plan",
    category: "Design",
    paymentMethod: "Visa ending in 8530",
    status: "active",
    startDate: "2025-03-20T10:00:00.000Z",
    price: 77.49,
    currency: "USD",
    billing: "Monthly",
    renewalDate: "2026-03-20T10:00:00.000Z",
  },
] as const;
