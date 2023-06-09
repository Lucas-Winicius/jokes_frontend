import moment from 'moment'

function creationDate(date) {
  const message = moment(date).fromNow();
  return message;
}

export default function jokes({ joke }) {
  return (
    <>
      <div id={joke.id} className="w-max bg-zinc-800 shadow-md px-6 py-4 rounded-sm mx-7 mb-7">
        <p className='py-2 text-center select-all'>{joke.joke}</p>
        <div className='flex flex-wrap justify-center'>
            <span className='mx-2'>By <b>{joke.author.name}</b></span>
            <span>{creationDate(joke.createdAt)}</span>
        </div>
      </div>
    </>
  );
}
