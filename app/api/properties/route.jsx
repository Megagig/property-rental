import connectDB from '@/config/database';
export const GET = async (request) => {
  await connectDB();
  try {
    return new Response(JSON.stringify({ message: 'hello world' }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response('something went wrong', { status: 500 });
  }
};
