import getConfig from 'next/config'
const postIteam = ({ iteam }) => {
    
    return (
        <div>
          <a href={`/next/posts/${iteam.id}`}>{iteam.title}</a>
          <p>{iteam.body}</p>
        </div>
    )
}

export default postIteam