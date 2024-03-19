async function fetchProperties() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/properties`);
    if (!res.ok) {
      throw new Error('failed to fetch properties');
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
}
export { fetchProperties };
