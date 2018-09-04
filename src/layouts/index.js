import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

require("prismjs/themes/prism-solarizedlight.css");

import Header from '../components/header'
import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
    <div
      style={{
        maxWidth: 960,
        margin: '2rem auto',
        padding: '2rem 2rem',
        paddingTop: 0,
        background: '#fff'
      }}
    >
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
