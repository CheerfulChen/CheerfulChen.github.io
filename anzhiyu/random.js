var posts=["2024/03/08/CPT102-Lecture 0/","2024/03/05/CPT103-Lecture 1/","2024/03/04/INT104-Tutorial 1/","2024/03/08/EEE104-Lecture 1/","2024/03/15/INT104-Tutorial 2/","2024/03/03/一些自动登录方法/","2024/03/03/对于慧湖通宿舍上网的一些拙见/","2024/03/02/属于迟然的Hello World/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };