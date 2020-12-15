
function Products() {
    return (
        <div>
            {/* Start Products  */}
            <div className="products-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-all text-center">
                                <h1>Fruits &amp; Vegetables</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row special-list">
                        <div className="col-lg-3 col-md-6 special-grid best-seller">
                            <div className="products-single fix">
                                <div className="box-img-hover">
                                    <div className="type-lb">
                                        <p className="sale">Sale</p>
                                    </div>
                                    <img src="images/img-pro-01.jpg" className="img-fluid" alt="description" />
                                    <div className="mask-icon">
                                        <ul>
                                            <li><a href="# " data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye" /></a></li>
                                            <li><a href="# " data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt" /></a></li>
                                            <li><a href="# " data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart" /></a></li>
                                        </ul>
                                        <a className="cart" href="# ">Add to Cart</a>
                                    </div>
                                </div>
                                <div className="why-text">
                                    <h4>Lorem ipsum dolor sit amet</h4>
                                    <h5> $7.79</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 special-grid top-featured">
                            <div className="products-single fix">
                                <div className="box-img-hover">
                                    <div className="type-lb">
                                        <p className="new">30%</p>
                                    </div>
                                    <img src="images/img-pro-02.jpg" className="img-fluid" alt="description" />
                                    <div className="mask-icon">
                                        <ul>
                                            <li><a href="# " data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye" /></a></li>
                                            <li><a href="# " data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt" /></a></li>
                                            <li><a href="# " data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart" /></a></li>
                                        </ul>
                                        <a className="cart" href="# ">Add to Cart</a>
                                    </div>
                                </div>
                                <div className="why-text">
                                    <h4>Lorem ipsum dolor sit amet</h4>
                                    <h5> $9.79</h5>
                                    <h5> <s>$9.79</s></h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 special-grid top-featured">
                            <div className="products-single fix">
                                <div className="box-img-hover">
                                    <div className="type-lb">
                                        <p className="sale">Sale</p>
                                    </div>
                                    <img src="images/img-pro-03.jpg" className="img-fluid" alt="description" />
                                    <div className="mask-icon">
                                        <ul>
                                            <li><a href="# " data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye" /></a></li>
                                            <li><a href="# " data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt" /></a></li>
                                            <li><a href="# " data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart" /></a></li>
                                        </ul>
                                        <a className="cart" href="# ">Add to Cart</a>
                                    </div>
                                </div>
                                <div className="why-text">
                                    <h4>Lorem ipsum dolor sit amet</h4>
                                    <h5> $10.79</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 special-grid best-seller">
                            <div className="products-single fix">
                                <div className="box-img-hover">
                                    <div className="type-lb">
                                        <p className="sale">Sale</p>
                                    </div>
                                    <img src="images/img-pro-04.jpg" className="img-fluid" alt="description" />
                                    <div className="mask-icon">
                                        <ul>
                                            <li><a href="# " data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye" /></a></li>
                                            <li><a href="# " data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt" /></a></li>
                                            <li><a href="# " data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart" /></a></li>
                                        </ul>
                                        <a className="cart" href="# ">Add to Cart</a>
                                    </div>
                                </div>
                                <div className="why-text">
                                    <h4>Lorem ipsum dolor sit amet</h4>
                                    <h5> $15.79</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Products  */}
        </div>
    )
}

export default Products;