import React from 'react'

function LatestBlog(props) {
    return (
        <div key={props.key} className="singleBlog">
            <img src={props.url} alt={props.title} />
            <h2>{props.title}</h2>
            <h4>{props.addedBy}</h4>
            <p>{props.text}</p>
            <button>Read more</button>
        </div>
    )
}

export default LatestBlog