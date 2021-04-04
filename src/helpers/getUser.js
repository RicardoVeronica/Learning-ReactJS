export async function getUser() {
  const userId = Math.floor(Math.random() * 10) + 1;

  const url = `https://jsonplaceholder.typicode.com/users/${userId}/`;

  try {
    const request = await fetch(url);
    const response = await request.json();
    return response;
  } catch (error) {
    console.error(error);
  }
}
