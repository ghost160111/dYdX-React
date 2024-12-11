import { ReactNode } from "react";

declare global {
  interface TransformTransitionData {
    title?: string | ReactNode;
    content?: ReactNode;
  }

  interface TransformTransitionProps {
    list: TransformTransitionData[];
  }

  interface TransformTransitionState {
    currentItem: number;
    navBtnNodeList: string;
    contentItemNodeList: string;
  }
}

export {}
