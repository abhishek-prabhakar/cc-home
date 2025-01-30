const wordpress = require( "wordpress" );

const POST_LIMIT = 1000;

const wpClient = wordpress.createClient({
    url:'https://cc.eddeclothing.com',
    username: "cc_app_user",
    password: "G2eC8%s5vA&SKn8BtAJFPx^a"
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
            status:	"publish",
            number: POST_LIMIT
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