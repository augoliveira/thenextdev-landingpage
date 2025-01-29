import Button from "./Button";
import { ReactNode } from "react";
import MySwiper from "./Swiper";
import { cn } from "@/lib/cn";
import { v4 as uuidv4 } from "uuid";
import { SwiperProps } from "swiper/react";

export type TWithSwiper<T> = {
  data: T[];
  config: SwiperProps;
  header?: { title: string; className?: string };
  toRender: (props: T) => ReactNode;
};

//!config.pagination is falsy, user did not define pagination. config.pagination is set to undefined and added to config
// config.pagination is boolean, user defined pagination as boolean, it will behave as defined by Swiper API documentation
// config.pagination is object, user defined pagination with customer values, user defined parameters are copied and unique ID is added to CSS Selector
function generatePaginationProps<T>(
  config: TWithSwiper<T>["config"],
  id: string
) {
  if (!config.pagination) return undefined;
  if (typeof config.pagination === "boolean") return config.pagination;
  if (typeof config.pagination === "object")
    return {
      ...config?.pagination,
      el: `#${config.pagination.el}${id}`,
    };
}

//!config.navigation is falsy, user did not define navigation. config.navigation is set to undefined and added to config
// config.navigation is boolean, user defined navigation as boolean, it will behave as defined by Swiper API documentation
// config.navigation is object, user defined navigation with customer values, user defined parameters are copied and unique ID is added to CSS Selector
function generateNavigationProps<T>(
  config: TWithSwiper<T>["config"],
  id: string
) {
  if (!config.navigation) return undefined;
  if (typeof config.navigation === "boolean") return config.navigation;
  if (typeof config.navigation === "object")
    return {
      ...config.navigation,
      prevEl: `#${config.navigation.prevEl}${id}`,
      nextEl: `#${config.navigation.nextEl}${id}`,
    };
}

export default function WithSwiper<T>({
  config,
  header,
  data,
  toRender,
}: TWithSwiper<T>) {
  const id = uuidv4();
  const title = header?.title && (
    <div
      className={cn(
        "text-2xl font-bold uppercase text-white",
        header.className
      )}
    >
      {header.title}
    </div>
  );

  const configWithIds: SwiperProps = {
    ...config,
    id: id,
    navigation: generateNavigationProps(config, id),
    pagination: generatePaginationProps(config, id),
  };
  const slides = data.map((actor, i, arr) => toRender(actor));

  const customPagination =
    typeof config.pagination === "object" ? (
      <div
        id={`${config.pagination.el}${id}`}
        className="mt-2 flex w-full gap-1 py-1"
      ></div>
    ) : null;

  const customNavigation =
    typeof config.navigation === "object" ? (
      <div className="ml-auto space-x-1">
        <Button id={`${config.navigation.prevEl}${id}`}>&#60;</Button>
        <Button id={`${config.navigation.nextEl}${id}`}>&#62;</Button>
      </div>
    ) : null;

  return (
    <div className="mx-auto flex max-w-lg flex-col place-content-center">
      <div className="mb-3 flex">
        {title}
        {customNavigation}
      </div>

      <MySwiper {...configWithIds}>{slides}</MySwiper>
      {customPagination}
    </div>
  );
}
