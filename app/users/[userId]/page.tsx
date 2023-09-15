import React, {Suspense} from 'react'
import getUser from '@/lib/getUser'
import getUserPosts from '@/lib/getUserPosts'
import UserPosts from './components/UserPosts'
import Link from 'next/link'
import type { Metadata } from 'next'

type Params = {
    params: {
        userId: string
    }
}

export async function generateMetadata({ params: {userId}}: Params) : Promise<Metadata> {
    const userData: Promise<User> = getUser(userId);
    const user: User = await userData

    return {
        title: user.name,
        description: `This is the page of ${user.name}`
    }
}

export default async function UserPage({ params: {userId}}: Params ) {
    const userData: Promise<User> = getUser(userId);
    const userPostsData: Promise<Post[]> = getUserPosts(userId);
    const [user, userPosts] = await Promise.all([userData, userPostsData]);

    console.log("user posts", userPosts[0]);

    //const user = await userData
  return (
    <>
        <h2>{user.name}</h2>
        <br />
        {/* <Suspense fallback={<h2>Loading...</h2>}>

            
        </Suspense> */}

         <UserPosts posts={userPosts} />
        {/* {userPosts.map(post => {
         return(
            <>
                <article key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                </article>
                <p>&nbsp;</p>
            </>
         )
          
        })} */}

        <Link href="/users">Back to Users Page</Link>
        
    </>
  )
}
