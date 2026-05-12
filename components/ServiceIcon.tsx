import {
  Building2,
  Bolt,
  Droplets,
  Radio,
  Leaf,
  Compass,
  Construction,
  type LucideProps,
} from "lucide-react";

const map = {
  road: Construction,
  building: Building2,
  bolt: Bolt,
  droplet: Droplets,
  radio: Radio,
  leaf: Leaf,
  compass: Compass,
} as const;

export type ServiceIconName = keyof typeof map;

export function ServiceIcon({
  name,
  ...props
}: { name: string } & LucideProps) {
  const Icon = map[name as ServiceIconName] ?? Building2;
  return <Icon {...props} />;
}
