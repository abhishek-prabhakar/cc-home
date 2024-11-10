const wordpress = require( "wordpress" );

const wpClient = wordpress.createClient({
    url:'https://cc.eddeclothing.com',
    username: "rakshitharavi@celebriacollective.com",
    password: "#Godownonme69"
});

type PostPreview = {
    id: string, 
    title: string,
    name: string
}

type Post = {
    id: string, 
    title: string,
    name: string,
    content: string,
    type: string
}



function getLatestPosts(){
    return new Promise<PostPreview[]>((resolve, reject)=>{
        wpClient.getPosts([],["id","name","title"],function( error:any, posts:any ) {
            resolve(posts)
        });
    });
}

function getPost(id: string){
    return new Promise<Post>((resolve, reject)=>{
        wpClient.getPost(id,["id","title","content","type"],function( error:any, post:any ) {
            resolve(post)
        });
    });
}

const BlogService = {
    getLatestPosts,
    getPost
}

export default BlogService;