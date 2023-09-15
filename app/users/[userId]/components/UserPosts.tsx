type Props = {
    posts: Post[]
}

import React from 'react'

export default async function UserPosts({posts}: Props) {
    //const posts = await promise

    const content = posts.map(post => {
        return(
           <>
               <article key={post.id}>
               <h2>{post.title}</h2>
               <p>{post.body}</p>
               </article>
               <p>&nbsp;</p>
           </>
        )
         
       })

  return content
}
