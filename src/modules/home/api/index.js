export default async function api(...args) {
  const res = await fetch(...args);
  return await res.json();
}
