import React from 'react'
import '../../styles/BlogsSection.scss'
import Header from '../Header/Header'
import LatestBlog from '../LatestBlog/LatestBlog'
import Blog from '../../data/blog.json';

function BlogsSection(props) {
    return (
        <div className='BlogsSectionn' id='blogsSection'>
            <Header firstWord="our" secondWord="blogs" />
            <div className='blogs'>
                {Blog.map((item) => <LatestBlog url={item.imageUrl} id={item.id} title={item.title} text={item.text.slice(0, 55)} addedBy={item.addedBy} handleBlog={props.handleBlog} />)}
            </div>
        </div>
    )
}

export default BlogsSection