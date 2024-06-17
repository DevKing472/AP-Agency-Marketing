import React from 'react';
import './_top-bannerhome.scss'

export const TopBannerHome = () => {
    return (
        <section className="topbannerhome" id="TopBannerHome">
            <div className="topbannerhome__left">
                <div className="topbannerhome__article">
                    <h1>Scale Your Business:</h1>
                    <h2 className="ft-wgt-500 cl-yel">30 Free Leads for a Month With Money-Back Guarantee!</h2>
                    <p className="mt-mr-80">Welcome to AP Digital Agency! Based in Toronto, we are your one-stop solution
                       solution for Web Development and Digital Marketing</p>
                </div>
                <button className="contact-us-btn">CONTACT US TODAY!</button>
            </div>
        </section>
    )
}