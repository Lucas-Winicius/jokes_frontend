import JokesContainer from "@/components/jokesContainer";

const getJokes = async () => {
  const data = await fetch(process.env.apiUrl);
  const response = data.json();
  return response;
};

export default async function Home() {
  const jokes = await getJokes();

  return (
    <div className="flex justify-around py-8 flex-wrap">
      {
        jokes && jokes.map((joke, id) => <JokesContainer key={id} joke={joke} />)
      }
    </div>
  );
}
