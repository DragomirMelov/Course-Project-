Course Project
writing about space

-Event Board

Functional Guide (Required):

Use the provided Functional Guide template. You must include the completed guide directly within your README.md file.

 -src
    assets 
        artwork -> static media
        footage ->dynamic media





  return (
    <>
    <div className="header">
      <div>
        <h1>Single Post</h1>
        <div className="article">
          <img src={article.imageUrl} alt="" />
          <h1>{article.title}</h1>
          <span>{article.Date}</span>
          <p>
            {article.body}
          </p>          
          <p>
            {article.Article}
          </p>

        </div>
          <Sidebar/>
      </div>
    </div>
    </>
)