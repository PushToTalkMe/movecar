import { HTMLAttributes, DetailedHTMLProps } from "react";

export interface CarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  name: string;
  imgUrl: string;
  id: string;
  category: string;
}
