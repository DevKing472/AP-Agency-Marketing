import React from 'react';
import './_Services.scss'
import services from '../../assets/images/services.png'

export const Services = () => {
    return (
        <section id="services section">
            <div className="services_item">
                <img src={services} alt="services" />
                <div>
                    <div className="first-line">
                        <h2>Social Media</h2>
                        <div className="hash-box">
                            <div className="box">Product</div>
                            <div className="box">Communicatin</div>
                            <div className="box">Engaging</div>
                        </div>
                    </div>
                    <div>
                        <p className="mt-0">We don't just add creativity, strategy, and tech;</p>
                        <p className="mt-0">we add value to your brand</p>
                    </div>
                </div>
            </div>
            <div className="services_item">
                <img src={services} alt="services" />
                <div>
                    <div className="first-line">
                        <h2>Performance Marketing</h2>
                        <div className="hash-box">
                            <div className="box">Facebook Ads</div>
                            <div className="box">Google Ads</div>
                            <div className="box">Media Planning</div>
                        </div>
                    </div>
                    <div>
                        <p className="mt-0">Logic-driven minimized costs and data-driven maximized results is what we believe in.</p>
                        <p className="mt-0">Scale up your business with tactical performance media strategies that result in measurable impact.
                        </p>
                    </div>
                </div>
            </div>
            <div className="services_item">
                <img src={services} alt="services" />
                <div>
                    <div className="first-line">
                        <h2>Video Peroduction</h2>
                        <div className="hash-box">
                            <div className="box">Brand Films</div>
                            <div className="box">Reel Content</div>
                            <div className="box">Educational Videos</div>
                        </div>
                    </div>
                    <div>
                        <p className="mt-0">Every brand has a story to tell; we make sure it’s caught on camera, we fuse emotions with brand and product stories to create timeless assets.</p>
                    </div>
                </div>
            </div>
            <div className="services_item">
                <img src={services} alt="services" />
                <div>
                    <div className="first-line">
                        <h2>SEO</h2>
                        <div className="hash-box">
                            <div className="box">#1 Page</div>
                            <div className="box">Technical</div>
                            <div className="box">Visibility</div>
                        </div>
                    </div>
                    <div>
                        <p className="mt-0">We get the booster dose of organic visibility to your brands.</p>
                    </div>
                </div>
            </div>
            <div className="services_item">
                <img src={services} alt="services" />
                <div>
                    <div className="first-line">
                        <h2>Tech: Website & App Development</h2>
                        <div className="hash-box">
                            <div className="box">Backend</div>
                            <div className="box">UX/UI</div>
                            <div className="box">Functionality</div>
                        </div>
                    </div>
                    <div>
                        <p className="mt-0">We go beyond the traditional; From microsites to Applications, we do it all with a blend of optimisation and user first approach!</p>
                    </div>
                </div>
            </div>
        </section>
    );
};