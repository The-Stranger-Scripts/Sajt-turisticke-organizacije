const writeBlog = (data, active) => {
  let blogData = data.main.blog;
  let blogHeading = blogData.heading;
  let blogContent = blogData.content;
  // console.log(blogContent[active]);

  function writeBlogCards(active) {
    let blogCardsCtn = `
  <div class="active-blog-wrap">
    <div class="blog-wrap-ctn">
      <h2>${blogContent[active].title}</h2>
      <p>${blogContent[active].content}</p>
      <button id="activePostBtn" value=${blogContent[active].id} class="active-blog-btn blog-btn">${blogHeading.btn}</button>
    </div>
    <div class="blog-wrap-img">
      <img
        src="${blogContent[active].image}"
        alt=""
      />
    </div>
  </div>
  <h2 class="blog-heading">${blogHeading.heading}</h2>
  <div class="all-blog-wrap">`;

    for (let i = 0; i < blogContent.length; i++) {
      if (i != active) {
        blogCardsCtn += `
      <div class="blog-card">
        <img
            src="${blogContent[i].image}"
            alt=""/>
        <div class="blog-card-ctn">
        <h4>${blogContent[i].title}</h4>
        <p>${blogContent[i].content}</p>
          <div class="date-btn-wrap">
          <span>${blogContent[i].date}</span>
          <button class="blogPostBtn active-blog-btn blog-btn" value=${
            blogContent[i].id - 1
          } >${blogHeading.btn}</button>
        </div>
        </div>
      </div>
      `;
      }
    }

    blogCardsCtn += `</div>`;

    return blogCardsCtn;
  }

  let blogCtn = `
    <div class="blog-container">
        <h1>${blogHeading.title}</h1>
        ${writeBlogCards(active)}
    </div>`;
  return blogCtn;
};

export default writeBlog;
