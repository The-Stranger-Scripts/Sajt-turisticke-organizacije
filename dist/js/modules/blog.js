// Ovde se mogu dodavati funkcionalnosti vezane za blog stranicu!
const writeBlog = data => {
  let blogData = data.main.blog;
  let blogHeading = blogData.heading;
  let blogContent = blogData.content;
  console.log(blogData);

  function activeBlog(id) {
    return `
        <div class="active-blog-wrap">
          <div class="blog-wrap-ctn">
            <h2>${blogContent[id].title}</h2>
            <p>${blogContent[id].content[id]}</p>

            <button id="activeBtn" value="${blogContent[id].id}" class="active-blog-btn blog-btn">${blogHeading.btn}</button>
            </div>
          <div class="blog-wrap-img">
            <img
              src="https://novisad.travel/wp-content/uploads/2021/08/Vinarija-Vojnovic-ACA_3620_compressed.jpg"
              alt=""
            />
          </div>
        </div>`;
  }

  function allBlogs() {
    let allBlogsCtn = `
        <h2 class="blog-heading">${blogHeading.heading}</h2>
        <div class="all-blog-wrap">`;
    blogContent.forEach(e => {
      allBlogsCtn += `
            <div class="blog-card">
                <img
                    src="https://novisad.travel/wp-content/uploads/2023/01/novi-sad-ture-miletiv-33-768x369.jpg"
                    alt=""/>
                <div class="blog-card-ctn">
                    <h4>${e.title}</h4>
                    <p>${e.content[0]}</p>
                    <a href="" value="${e.id}">${blogHeading.btn}</a>
                </div>
            </div>
        ;`;
    });

    allBlogsCtn += `</div>`;
    return allBlogsCtn;
  }

  let blogCtn = `
        <div class="blog-container">
            <h1>${blogHeading.title}</h1>`;
  blogCtn += activeBlog(0);
  blogCtn += allBlogs();
  blogCtn += `
    </div>`;

  return blogCtn;
};

export default writeBlog;
