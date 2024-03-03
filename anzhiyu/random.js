var posts=["2024/03/03/一些自动登录方法/","2024/03/02/属于迟然的Hello World/","2024/03/03/对于惠湖通宿舍上网的一些拙见/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };