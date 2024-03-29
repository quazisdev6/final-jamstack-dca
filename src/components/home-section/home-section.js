import React from "react"
import "./home-section.css"


export default () => (
    <section className="bg_home_cover_landing full_height_100vh_home" id="home">
        <div className="bg_overlay_cover_on_landing" />
        <div className="home_table_cell">
            <div className="home_table_cell_center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center">
                                <h1 className="home_title_landing text-white mx-auto text-capitalize mb-0 pt-3">Practical Architecture, Predictable Results</h1>
                                {/* <div class="home_text_details">
                                        <p class="home_subtitle mt-4 mb-0 mx-auto">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout readable English.</p>
                                    </div> */}
                                {/* <div class="home_btn_manage mt-4 pt-3">
                                        <a href="#" class="btn btn_custom btn_rounded mr-3">Get Started</a>
                                    </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)