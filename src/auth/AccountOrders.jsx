import React from "react";
import Navbar from "../includes/Navbar";

const AccountOrders = () => {
    return (
        <>
            <Navbar />

            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="side-nav">
                            <ul class="nav flex-column">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Your Order</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Setting</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Address</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Payment Method</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Notification</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link" href="#">Logout</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AccountOrders;