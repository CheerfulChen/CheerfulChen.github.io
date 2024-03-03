var posts=["2024/03/02/属于迟然的Hello World/","2024/03/01/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };