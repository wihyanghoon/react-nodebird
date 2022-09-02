import React from 'react'
import Link from 'next/link'

const PostCardContent = ({ postData }) => {
    return (
        <div>
            {postData.split(/(#[^\s#]+)/g).map((item, index) => {
                if (item.match(/(#[^\s#]+)/)) {
                    return <Link href={`/hashtag/${item.slice(1)}`} key={index}>{item}</Link>
                }
                return item
            })}
        </div>
    )
}

export default PostCardContent