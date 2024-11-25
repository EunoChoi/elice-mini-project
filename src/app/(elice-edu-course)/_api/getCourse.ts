import axios from "axios";

interface ChipData {
  name: string;
  query_key: string;
  query_value: string;
  enroll_type: number;
  is_free: boolean;
}
const getCoursesURL = "/api/courses/";

export const getCourses = async (
  offset: number,
  count: number,
  search: string | null,
  chips: ChipData[]
) => {
  if (!search) search = "";
  const params = chips
    .map(({ name, query_key, query_value, ...rest }) => rest);

  try {
    const response: { data: any } = await axios.get(
      getCoursesURL,
      {
        params: {
          filter_conditions: JSON.stringify({
            $and: [{ title: `%${search}%` },
            { $or: [{ status: 2 }, { status: 3 }, { status: 4 }] },
            { $or: [...params] }],
          }),
          offset: offset,
          count: count,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
