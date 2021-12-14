// Post Data as const
const posts = [
    {
        id: 0,
        title: "Day 1",
        body:  "1Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem deleniti quae,",
        date:  "01.01.2021",
        comments: [
            {
                id: 0,
                body: "nwlenwl"
            },
            {
                id: 1,
                body: "jnwefjw", 
            },
            {
                id: 2,
                body: "jnwefjw",
            }
        ],
        likes: 1
    },
    {
        id: 1,
        title: "Day 2",
        body:  "2Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem deleniti quae,Dolorem deleniti quae,",
        date:  "02.01.2021",
        comments: [],
        likes: "0"
    },
    {
        id: 2,
        title: "Day 3",
        body:  "3Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem deleniti quae,Dolorem deleniti quae,Dolorem deleniti quae,Dolorem deleniti quae,",
        date:  "02.01.2021",
        comments: [],
        likes: "2"
    },
    {
        id: 3,
        title: "Day 4",
        body:  "4Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        date:  "02.01.2021",
        comments: [
            {
                id: 0,
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a."
            },
            {
                id: 1,
                body: "jnwefjw", 
            }
        ],
        likes: "1"
    },
    {
        id: 4,
        title: "Day 5",
        body:  "5Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem deleniti quae,",
        date:  "02.01.2021",
        comments: [
            {
                id: 0,
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat."
            },
            {
                id: 1,
                body: "jnwefjw hbwbfew", 
            },
            {
                id: 2,
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non.",
            },
            {
                id: 3,
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus.",
            }
        ],
        likes: "0"
    },
    {
        id: 5,
        title: "Day 6",
        body:  "6 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem deleniti quae,",
        date:  "02.01.2021",
        comments: [
            {
                id: 0,
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dui."
            }
        ],
        likes: "6"
    },
    {
        id: 6,
        title: "Day 7",
        body:  "7 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper maximus nulla. Cras rhoncus massa vel enim feugiat porta. Vivamus sed felis velit. In hac habitasse platea dictumst. Morbi sagittis mollis justo a mattis. Etiam id rutrum turpis, eget blandit nulla. Sed id erat nec nulla pretium mollis.",
        date:  "02.01.2021",
        comments: [],
        likes: "0"
    },
    {
        id: 7,
        title: "Day8",
        body:  "8Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem deleniti quae,",
        date:  "02.01.2021",
        comments: [],
        likes: "0"
    }
]


showAllPosts(posts);

document.addEventListener("click", function(e) {
    // console.log(e.target);
    // console.log(e.target.className);
    if((e.target && e.target.className == "postFrame")   || 
        (e.target && e.target.className == "post")       ||
        (e.target && e.target.className == "postFooter") ||
        (e.target && e.target.className == "postTitle")  || 
        (e.target && e.target.className == "postBody")) {
        console.log(e.target.className)
        console.log(e.target);

        let selectedPostID = e.target.getAttribute('data-id');
        console.log(selectedPostID);
        showPostAndComments(selectedPostID );
    }
});

//-------- posts flow------------------------------
function showAllPosts(posts) {
    posts.forEach(post => showPost(post));
};

function showPost(post) {
    console.log(post);

    const postGrid = document.querySelector(".allPosts");
    console.log(postGrid);

    const newPost = document.createElement('div');
    newPost.classList.add('col-md-4');
    newPost.classList.add('col-sm-6');
    newPost.classList.add('col-xs-12');
    newPost.classList.add('post');
    newPost.setAttribute('data-id', post.id);
    postGrid.append(newPost);

    const newPostFrame = document.createElement('div');
    newPostFrame.classList.add('postFrame');
    newPostFrame.setAttribute('data-id', post.id);
    console.log(newPostFrame.getAttribute("data-id"));
    newPost.append(newPostFrame);

    const newPostTitle = document.createElement('h3');
    newPostTitle.innerText = post.title;
    newPostTitle.setAttribute('data-id', post.id);
    newPostTitle.classList.add('postTitle');
    newPostFrame.append(newPostTitle);

    const newPostBody = document.createElement('p');
    newPostBody.setAttribute('data-id', post.id);
    newPostBody.innerText = post.body;
    newPostBody.classList.add('postBody');
    newPostFrame.append(newPostBody);

    const newPostFooter = document.createElement('div');
    newPostFooter.setAttribute('data-id', post.id);
    newPostFooter.classList.add('postFooter');
    newPostFrame.append(newPostFooter);

    const newComNumber = document.createElement('p');
    newComNumber.innerHTML = `<i class="fas fa-comment"></i> ${post.comments.length} `
    newComNumber.classList.add('card-text');
    newComNumber.setAttribute('data-id', post.id);
    // newComNumber.innerHTML = post.comments.length;
    newPostFooter.append(newComNumber);

    // const newCommentSign = document.createElement('i');
    // newCommentSign.classList.add('fas');
    // newCommentSign.classList.add('fa-comment');
    // newComNumber.append(newCommentSign);         
};

function showPostAndComments(postId) {
    document.getElementById('posts').classList.add('hide-section');
    document.getElementById('showPostAndComments').classList.remove('hide-section');

    const post = posts[postId];
    console.log(post);

    const singlePost = document.querySelector('.singlePost')

    const newPostTitle = document.createElement('h3');
    newPostTitle.innerText = post.title;
    newPostTitle.classList.add('postTitle');
    singlePost.append(newPostTitle);

    const newPostBody = document.createElement('p');
    newPostBody.innerText = post.body;
    newPostBody.classList.add('postBody');
    singlePost.append(newPostBody);

    const newPostFooter = document.createElement('div');
    newPostFooter.setAttribute('data-id', post.id);
    newPostFooter.classList.add('postFooter');
    singlePost.append(newPostFooter);

    const newComNumber = document.createElement('p');
    newComNumber.innerHTML = `<i class="fas fa-comment"></i> ${post.comments.length} `
    newComNumber.classList.add('card-text');
    newPostFooter.setAttribute('data-id', post.id);
    newPostFooter.append(newComNumber);
    
    console.log(post.comments);

    post.comments.forEach(comment => showComment(comment));



function showComment(comment) {

    const newComFrame = document.createElement('div');
    newComFrame.classList.add('comFrame');
    document.querySelector('.comList').append(newComFrame);

    const newComment = document.createElement('p');
    newComment.innerHTML = comment.body;
    newComment.classList.add('comment');
    newComFrame.append(newComment);
}


/// for emojy
// document.addEventListener('click', function(e){
//   if(e.target && e.target.id== 'myDynamicallyAddedElementID'){
//        //do something
//   }
// });
}

