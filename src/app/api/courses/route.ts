import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  try {
    const response = await axios.get('https://api-rest.elice.io/org/academy/course/list/', {
      params: {
        filter_conditions: searchParams.get('filter_conditions'),
        offset: searchParams.get('offset'),
        count: searchParams.get('count')
      },
      headers: {
        'Content-Type': 'application/json',
      }
    });

    return NextResponse.json(response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return NextResponse.json(
        { error: error.message },
        { status: error.response?.status || 500 }
      );
    }
    return NextResponse.json(
      { error: '알 수 없는 에러가 발생했습니다.' },
      { status: 500 }
    );
  }
}