function SingleProduct() {
    return (
        <div className="single-product-container">
            
            <section class="single-product">
                <div class="container">
                <div class="row">
                    <div class="col-md-5">
                    <div class="single-product-slider">
                        <div class="carousel slide" data-ride="carousel" id="single-product-slider">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <img src="assets/images/ip01.png" alt="" class="img-fluid" />
                            </div>
                            <div class="carousel-item">
                            <img src="assets/images/ip01.png" alt="" class="img-fluid" />
                            </div>
                            <div class="carousel-item ">
                            <img src="assets/images/ip01.png" alt="" class="img-fluid" />
                            </div>
                        </div>
            
                        <ol class="carousel-indicators">
                            <li data-target="#single-product-slider" data-slide-to="0" class="active">
                                <img src="assets/images/ip01.png" alt="" class="img-fluid" />
                            </li>
                            <li data-target="#single-product-slider" data-slide-to="1">
                                <img src="assets/images/ip01.png" alt="" class="img-fluid" />
                            </li>
                            <li data-target="#single-product-slider" data-slide-to="2">
                                <img src="assets/images/ip01.png" alt="" class="img-fluid" />
                            </li>
                        </ol>
                        </div>
                    </div>
                    </div>
                    
                    <div class="col-md-7">
                    <div class="single-product-details mt-5 mt-lg-0">
                        <h2>Eclipse Crossbody</h2>
                        <div class="sku_wrapper mb-4">
                        SKU: <span class="text-muted">AB1563456789 </span>
                        </div>
            
                        <hr />
                        
                        <h3 class="product-price">$300 <del>$119.90</del></h3>
                        
                        <p class="product-description my-4 ">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ipsum dicta quod, quia doloremque aut deserunt commodi quis. Totam a consequatur beatae nostrum, earum consequuntur? Eveniet consequatur ipsum dicta recusandae.
                        </p>
            
                        <form class="cart" action="#" method="post">
                        <div class="quantity d-flex align-items-center">
                            <input type="number" id="#" class="input-text qty text form-control w-25 mr-3" step="1" min="1" max="9" name="quantity" value="1" title="Qty" size="4" />
                            <a href="checkout" class="btn btn-main btn-small">Add to cart</a>
                        </div>
                        </form>
            
                        
                        <div class="color-swatches mt-4 d-flex align-items-center">
                        <span class="font-weight-bold text-capitalize product-meta-title">color:</span>
                        <ul class="list-inline mb-0">
                            <li class="list-inline-item">
                            <a routerLink="/product-single" class="bg-info"></a>
                            </li>
                            <li class="list-inline-item">
                            <a routerLink="/product-single" class="bg-dark"></a>
                            </li>
                            <li class="list-inline-item">
                            <a routerLink="/product-single" class="bg-danger"></a>
                            </li>
                        </ul>
                        </div>
            
                        <div class="product-size d-flex align-items-center mt-4">
                        <span class="font-weight-bold text-capitalize product-meta-title">Storage:</span>
                        <select class="form-control">
                            <option>128G</option>
                            <option>256G</option>
                            <option>512G</option>
                        </select>
                        </div>
            
                        <div class="products-meta mt-4">
            
                        <div class="product-share mt-5">
                            <ul class="list-inline">
                            <li class="list-inline-item">
                                <a href="#"><i class="tf-ion-social-facebook"></i></a>
                            </li>
                            <li class="list-inline-item">
                                <a href="#"><i class="tf-ion-social-twitter"></i></a>
                            </li>
                            <li class="list-inline-item">
                                <a href="#"><i class="tf-ion-social-linkedin"></i></a>
                            </li>
                            <li class="list-inline-item">
                                <a href="#"><i class="tf-ion-social-pinterest"></i></a>
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