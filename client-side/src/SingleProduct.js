function SingleProduct() {
    return (
        <div className="single-product-container">
            
            <section className="single-product">
                <div className="container">
                <div className="row">
                    <div className="col-md-5">
                    <div className="single-product-slider">
                        <div className="carousel slide" data-ride="carousel" id="single-product-slider">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src="assets/images/ip01.png" alt="" className="img-fluid" />
                            </div>
                            <div className="carousel-item">
                            <img src="assets/images/ip01.png" alt="" className="img-fluid" />
                            </div>
                            <div className="carousel-item ">
                            <img src="assets/images/ip01.png" alt="" className="img-fluid" />
                            </div>
                        </div>
            
                        <ol className="carousel-indicators">
                            <li data-target="#single-product-slider" data-slide-to="0" className="active">
                                <img src="assets/images/ip01.png" alt="" className="img-fluid" />
                            </li>
                            <li data-target="#single-product-slider" data-slide-to="1">
                                <img src="assets/images/ip01.png" alt="" className="img-fluid" />
                            </li>
                            <li data-target="#single-product-slider" data-slide-to="2">
                                <img src="assets/images/ip01.png" alt="" className="img-fluid" />
                            </li>
                        </ol>
                        </div>
                    </div>
                    </div>
                    
                    <div className="col-md-7">
                    <div className="single-product-details mt-5 mt-lg-0">
                        <h2>Eclipse Crossbody</h2>
                        <div className="sku_wrapper mb-4">
                        SKU: <span className="text-muted">AB1563456789 </span>
                        </div>
            
                        <hr />
                        
                        <h3 className="product-price">$300 <del>$119.90</del></h3>
                        
                        <p className="product-description my-4 ">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ipsum dicta quod, quia doloremque aut deserunt commodi quis. Totam a consequatur beatae nostrum, earum consequuntur? Eveniet consequatur ipsum dicta recusandae.
                        </p>
            
                        <form className="cart" action="#" method="post">
                        <div className="quantity d-flex align-items-center">
                            <input type="number" id="#" className="input-text qty text form-control w-25 mr-3" step="1" min="1" max="9" name="quantity" value="1" title="Qty" size="4" />
                            <a href="checkout" className="btn btn-main btn-small">Add to cart</a>
                        </div>
                        </form>
            
                        
                        <div className="color-swatches mt-4 d-flex align-items-center">
                        <span className="font-weight-bold text-capitalize product-meta-title">color:</span>
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                            <a routerLink="/product-single" className="bg-info"></a>
                            </li>
                            <li className="list-inline-item">
                            <a routerLink="/product-single" className="bg-dark"></a>
                            </li>
                            <li className="list-inline-item">
                            <a routerLink="/product-single" className="bg-danger"></a>
                            </li>
                        </ul>
                        </div>
            
                        <div className="product-size d-flex align-items-center mt-4">
                        <span className="font-weight-bold text-capitalize product-meta-title">Storage:</span>
                        <select className="form-control">
                            <option>128G</option>
                            <option>256G</option>
                            <option>512G</option>
                        </select>
                        </div>
            
                        <div className="products-meta mt-4">
            
                        <div className="product-share mt-5">
                            <ul className="list-inline">
                            <li className="list-inline-item">
                                <a href="#"><i className="tf-ion-social-facebook"></i></a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#"><i className="tf-ion-social-twitter"></i></a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#"><i className="tf-ion-social-linkedin"></i></a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#"><i className="tf-ion-social-pinterest"></i></a>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </div>
    )}
export default SingleProduct;