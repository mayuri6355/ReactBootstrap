import { button } from 'bootstrap';

function Blog(props){
    return(

<div className="post-container">
            <div class="blog-post rounded border solid">
                <div class="blog-img d-block overflow-hidden position-relative">
                <img className="image" src={require('../images/'+props.photo)} alt="post" />
                </div>
                <div class="content p-3">
                    <h4 class="mt-2"><a href="javascript:void(0)" class="text-dark title">{props.text}</a></h4>
                    <div class="pt-3 mt-3 border-top d-flex">
                        <div class="author mt-2">
                           <button className='btn btn-primary'>Know More..</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

 

              
    )
}
export default Blog;