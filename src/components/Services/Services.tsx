import React from 'react';
import './_services.scss'

export const Services: React.FC = () => {
    return(
      <section className="services section mt-80" id="services">
        <div className="services__left">
            <h6>Our Work Speaks for itself</h6>
            <p className="txt">We have been in industry for over 10 years now and have crated some impact work within the categories...</p>
            <button className="btn-yel">
                FREE GROWTH SESSION
            </button>
        </div>
        <div className="services__right">
            1
        </div>
      </section>
    )
}