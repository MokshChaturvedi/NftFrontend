import React from 'react'
import BlogPostCard from '../../../common/blogPostCard/BlogPostCard'

const BlogContent = () => {
    return (
        <>
            <div className="col-md-12 mb-3 mb-md-5">
                <div className="filtertop">
                    <div className="filterLeft">
                        <div className="btn-group">
                            <button className="filterbtn dropdown-toggle text-start" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                Newest
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li><a className="dropdown-item" href="#">Price</a></li>
                                <li><a className="dropdown-item" href="#">Highest Price</a></li>
                                <li><a className="dropdown-item" href="#">Lowest Price</a></li>
                            </ul>
                        </div>
                        <div className="btn-group">
                            <button className="filterbtn dropdown-toggle text-start" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                All categories
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li><a className="dropdown-item" href="#">Price</a></li>
                                <li><a className="dropdown-item" href="#">Highest Price</a></li>
                                <li><a className="dropdown-item" href="#">Lowest Price</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="filterRight">
                        <button className="btn btndarkblue">Spotlight</button>
                        <button className="btn btndarkblue">Safety</button>
                        <button className="btn btnlightblue ms-md-auto">Clear All <img src="img/closeicon.svg" alt="img" /></button>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-md-6">
               <BlogPostCard markName={"Spotlight"} cssClass={"catbtn"}/>
            </div>
            <div className="col-xl-4 col-md-6">
               <BlogPostCard markName={"Safety"} cssClass={"catbtn green-cate"}/>
            </div>
            <div className="col-xl-4 col-md-6">
               <BlogPostCard markName={"Guide"} cssClass={"catbtn pink-cate"}/>
            </div>
            <div className="col-xl-4 col-md-6">
               <BlogPostCard markName={"Trending"} cssClass={"catbtn blue-cate"}/>
            </div>
            <div className="col-xl-4 col-md-6">
               <BlogPostCard markName={"Spotlight"} cssClass={"catbtn"}/>
            </div>

            <div className="col-xl-4 col-md-6">
               <BlogPostCard markName={"Trending"} cssClass={"catbtn blue-cate"}/>
            </div>
        </>

    )
}

export default BlogContent