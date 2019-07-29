import React from 'react'
import Layout from 'components/Layout'
import Link from 'components/Link'
import SectionGetStarted from 'components/SectionGetStarted'

const CaseStudiesPage = ({ location }) => (
  <Layout
    title="Case Studies"
    description="Stories about how CallAsst is being used"
    location={location}
  >
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center">
            <h1>Case Studies</h1>
            <p>
              See how various organizations can use CallAsst to embed an automated voice platform
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Link
              data-track
              to="/case-studies/stasher"
              className="featured-customer case-study-item"
            >
              <img
                src="/assets/images/customers/stasher.jpg"
                alt="Stasher logo"
                className="customer-logo"
              />
              <h2>Urban Clap</h2>
              <p>
                Urban Clap can use callAsst to make their service available via voice assistant and call
              </p>
              <button className="btn btn-secondary">Learn more →</button>
            </Link>

           
          </div>
          
        </div>
      </div>
    </section>

    <SectionGetStarted />
  </Layout>
)

export default CaseStudiesPage
