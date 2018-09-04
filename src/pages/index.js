import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h1>Posts, yo. Posts.</h1>
      <ul>
        {data.allArticle.edges.map(document => (
          <li key={document.node.id}>
            <h2>
              <Link to={`/${document.node.id}`}>{document.node.title}</Link>
            </h2>
            <p>{document.node.childMarkdownRemark.excerpt}</p>
            <p dangerouslySetInnerHTML={{__html: document.node.childMarkdownRemark.html}}></p>
            <p>{document.node.createdAt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IndexPage

export const pageQuery = graphql`  
  query IndexQuery {
    allArticle {
      edges {
        node {
          id
          title
          createdAt(formatString: "MMMM DD, YYYY")
          childMarkdownRemark {
            html
            excerpt(pruneLength: 320)
          }
        }
      }
    }
  }
`