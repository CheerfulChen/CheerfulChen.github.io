var posts=["2024/03/01/hello-world/","2024/03/02/属于迟然的Hello World/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };