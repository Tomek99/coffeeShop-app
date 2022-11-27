import React from 'react'


function LatestBlog(props) {
    return (
        <div key={props.key} className="singleBlog">
            <div className='zoomImage'>
                <img src={props.url} alt={props.title} />
            </div>
            <div className='textSection'>
                <h2>{props.title}</h2>
                <h4>{props.addedBy}</h4>
                <p>{props.text}</p>
                <button>Read more</button>
            </div>
        </div>
    )
}

export default LatestBlog