const wordpress = require( "wordpress" );

const wpClient = wordpress.createClient({
    url:'https://cc.eddeclothing.com',
    username: "rakshitharavi@celebriacollective.com",
    password: "#Godownonme69"
});

type PostPreview = {
    id: string, 
    title: string,
    name: string,
    content: string,
    date: string,
    thumbnail: {
        link: string,
        thumbnail: string
    }
}

type Post = {
    id: string, 
    title: string,
    name: string,
    content: string,
    type: string,
    date: string
}



function getLatestPosts(){
    return new Promise<PostPreview[]>((resolve, reject)=>{
        wpClient.getPosts({
            status:	"publish"
        },["id","name","title","thumbnail","date"],function( error:any, posts:any ) {
            resolve(posts)
        });
    });
}

function getPost(id: string){
    return new Promise<Post>((resolve, reject)=>{
        wpClient.getPost(id,["id","title","content","type","date"],function( error:any, post:any ) {
            resolve(post)
        });
    });
}

const BlogService = {
    getLatestPosts,
    getPost
}

export default BlogService;