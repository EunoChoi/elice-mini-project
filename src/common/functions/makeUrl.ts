interface ChipData {
  name: string;
  query_key: string;
  query_value: string;
  enroll_type: number;
  is_free: boolean;
}

export const makeUrl = (
  pathname: string,
  search: string | null,
  chips: ChipData[]
) => {

  let updatedUrl = pathname;
  let hasQuery = false;

  if (search) {
    updatedUrl += `?keyword=${search}`;
    hasQuery = true;
  }

  for (const chip of chips) {
    updatedUrl += `${hasQuery ? "&" : "?"}${chip.query_key}=${chip.query_value}`;
    hasQuery = true;
  }

  return updatedUrl;
};
