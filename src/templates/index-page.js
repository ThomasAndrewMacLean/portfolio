import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Content from '../components/Content'
import IndexStyles from './index-page.module.css'

export const IndexPageTemplate = ({ 
  intro 
}) => {
  return (
    <div>
      <Header />

      <section className={IndexStyles.intro + " container"}>
      <Content content={intro} />
      </section>
    </div>
  )
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        heading={frontmatter.heading}
        description={frontmatter.description}
        intro={post.html}
      />
    </Layout>
  )
}

IndexPageTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const IndexPageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        intro
      }
    }
  }
`
