export default function Home() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL + "/authors/";
  return (
    <>
      <h1>{baseUrl}</h1>
    </>
  );
}
