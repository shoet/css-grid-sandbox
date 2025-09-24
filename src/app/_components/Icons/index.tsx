import clsx from "clsx";
import {
  Copy,
  ThumbsUp,
  ThumbsDown,
  LucideProps,
  ShoppingCart,
  LucideIcon,
  Home,
  Map,
  MapPin,
  Camera,
  Heart,
} from "lucide-react";

function withLucideProps(Icon: LucideIcon) {
  return (props: LucideProps) => {
    const { className, ...rest } = props;
    return <Icon className={clsx(className)} {...rest} />;
  };
}

export const IconCopy = (props: LucideProps) => <Copy {...props} />;
export const IconGood = (props: LucideProps) => <ThumbsUp {...props} />;
export const IconBad = (props: LucideProps) => <ThumbsDown {...props} />;
export const IconShoppingCart = (props: LucideProps) => (
  <ShoppingCart {...props} />
);
export const IconHome = (props: Omit<LucideProps, "ref">) => (
  <Home {...props} />
);
export const IconMap = withLucideProps(Map);
export const IconMapPin = withLucideProps(MapPin);
export const IconCamera = withLucideProps(Camera);
export const IconHeart = withLucideProps(Heart);
