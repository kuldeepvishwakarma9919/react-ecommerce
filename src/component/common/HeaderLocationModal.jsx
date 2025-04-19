import React from "react";

const HeaderLocationModal = () => {
    return (
        <>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" id="l-m-head">
                    <div class="modal-content">
                        <div class="modal-header align-items-center">
                            <div>
                                <h3 class="" id="exampleModalLabel">Choose your Delivery Location</h3>
                                <p>Enter your address and we will specify the offer you area.</p>
                            </div>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <input type="search" name="" id="" className="form-control" placeholder="Search Your Area" />

                            <ul className="h-l-ul">
                                <li className="d-flex justify-content-between align-items-center">
                                    <span>Select Location</span>
                                    <button className="btn btn-outline-secondary rounded-0 btn-sm">Clear</button>
                                </li>

                                <li className="d-flex justify-content-between align-items-center">
                                    <span>Alabama</span>
                                    <span>Min:$20</span>
                                </li>


                                <li className="d-flex justify-content-between align-items-center">
                                    <span>Alaska</span>
                                    <span>Min:$30</span>
                                </li>

                                <li className="d-flex justify-content-between align-items-center">
                                    <span>Arizona</span>
                                    <span>Min:$50</span>
                                </li>

                                <li className="d-flex justify-content-between align-items-center">
                                    <span>California</span>
                                    <span>Min:$29</span>
                                </li>

                                <li className="d-flex justify-content-between align-items-center">
                                    <span>Colorado</span>
                                    <span>Min:$80</span>
                                </li>

                                <li className="d-flex justify-content-between align-items-center">
                                    <span>Florida</span>
                                    <span>Min:$90</span>
                                </li>

                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderLocationModal;