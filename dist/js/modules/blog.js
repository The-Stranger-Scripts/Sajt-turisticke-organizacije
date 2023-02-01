// Ovde se mogu dodavati funkcionalnosti vezane za blog stranicu!
const writeBlog = data => {
  let blogData = data.main.blog;
  let blogHeading = blogData.heading;
  let blogContent = blogData.content;
  console.log(blogData);

  function writeBlogCards() {
    let blogCardsCtn = `
  <div class="active-blog-wrap">
    <div class="blog-wrap-ctn">
      <h2>${blogContent[0].title}</h2>
      <p>${blogContent[0].content}</p>
      <button id="activeBtn" class="active-blog-btn blog-btn">${blogHeading.btn}</button>
    </div>
    <div class="blog-wrap-img">
      <img
        src="${blogContent[0].image}"
        alt=""
      />
    </div>
  </div>
  <h2 class="blog-heading">${blogHeading.heading}</h2>
  <div class="all-blog-wrap">`;

    for (let i = 1; i < blogContent.length; i++) {
      blogCardsCtn += `
    <div class="blog-card">
      <img
          src="${blogContent[i].image}"
          alt=""/>
      <div class="blog-card-ctn">
        <div>
          <h4>${blogContent[i].title}</h4>
          <span>${blogContent[i].date}</span>
        </div>
        <p>${blogContent[i].content}</p>
      </div>
    </div>
    `;
    }

    blogCardsCtn += `</div>`;

    return blogCardsCtn;
  }

  let blogCtn = `
    <div class="blog-container">
        <h1>${blogHeading.title}</h1>
        ${writeBlogCards()}
    </div>`;

  return blogCtn;
};

export default writeBlog;
