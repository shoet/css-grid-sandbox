import clsx from "clsx";
import Link from "next/link";
import { Home, Map, MapPin, Camera, Heart, LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

type IconType = ForwardRefExoticComponent<
  Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
>;

const NavigationItem = (props: {
  Icon: IconType;
  label: string;
  href: string;
  variant?: "horizontal" | "vertical";
}) => {
  const { Icon, href, label, variant = "vertical" } = props;
  return (
    <Link
      href={href}
      className={clsx(
        "rounded-lg hover:brightness-90",
        variant === "horizontal"
          ? "grid grid-cols-[auto_1fr] gap-4 items-center grid-flow-col"
          : "grid justify-items-center",
      )}
    >
      <Icon size={variant === "horizontal" ? 16 : 32} />
      <span className={clsx("text-[12px]")}>{label}</span>
    </Link>
  );
};

export const IconsNavigation = (props: {
  variant: "horizontal" | "vertical";
}) => {
  return (
    <nav>
      <ul className={clsx("grid gap-[16px]")}>
        <li>
          <NavigationItem
            Icon={Home}
            label="ホーム"
            href="#"
            variant={props.variant}
          />
        </li>
        <li>
          <NavigationItem
            Icon={Map}
            label="地図"
            href="#"
            variant={props.variant}
          />
        </li>
        <li>
          <NavigationItem
            Icon={MapPin}
            label="ポイント"
            href="#"
            variant={props.variant}
          />
        </li>
        <li>
          <NavigationItem
            Icon={Camera}
            label="フォト"
            href="#"
            variant={props.variant}
          />
        </li>
        <li>
          <NavigationItem
            Icon={Heart}
            label="評価"
            href="#"
            variant={props.variant}
          />
        </li>
      </ul>
    </nav>
  );
};

export const IconsNavigationHorizontal = () => {
  return (
    <nav>
      <ul
        className={clsx("grid gap-[2px] [grid-auto-columns:1fr] grid-flow-col")}
      >
        <li>
          <NavigationItem
            Icon={Home}
            label="ホーム"
            href="#"
            variant="vertical"
          />
        </li>
        <li>
          <NavigationItem Icon={Map} label="地図" href="#" variant="vertical" />
        </li>
        <li>
          <NavigationItem
            Icon={MapPin}
            label="ポイント"
            href="#"
            variant="vertical"
          />
        </li>
        <li>
          <NavigationItem
            Icon={Camera}
            label="フォト"
            href="#"
            variant="vertical"
          />
        </li>
        <li>
          <NavigationItem
            Icon={Heart}
            label="評価"
            href="#"
            variant="vertical"
          />
        </li>
      </ul>
    </nav>
  );
};
