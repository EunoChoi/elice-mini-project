import { Dispatch, SetStateAction } from "react";

export type SearchKeyword = string | null;
export type SetSearchKeyword = Dispatch<SetStateAction<string | null>>;