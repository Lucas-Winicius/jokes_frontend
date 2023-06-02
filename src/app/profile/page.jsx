import { redirect } from 'next/navigation';

const getUser = async () => {
    const data = await fetch(`${process.env.apiUrl}/user`, { next: { revalidate: 60 } })
    const response = data.json();
    return response;
}

export default async function Profile() {
    const user = await getUser()

    if(user.status === 401) 
        redirect('/login')

    else if(user.status >= 200)
        redirect('/')
    
    return (<h1></h1>)
}