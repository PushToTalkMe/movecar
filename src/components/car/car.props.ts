import { HTMLAttributes, DetailedHTMLProps } from "react";

export interface CarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  name: string;
  imageUrl: string;
  id: string;
}
