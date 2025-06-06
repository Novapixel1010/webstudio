import { HeaderIcon } from "@webstudio-is/icons/svg";
import {
  type WsComponentMeta,
  type WsComponentPropsMeta,
} from "@webstudio-is/sdk";
import { props } from "./__generated__/head.props";

export const meta: WsComponentMeta = {
  icon: HeaderIcon,
  description: "Inserts children into the head of the document",
  contentModel: {
    category: "instance",
    children: ["HeadLink", "HeadMeta", "HeadTitle"],
  },
};

export const propsMeta: WsComponentPropsMeta = {
  props,
  initialProps: [],
};
