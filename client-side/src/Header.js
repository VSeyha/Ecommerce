import "jquery/dist/jquery.slim.min.js";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import { Link } from "react-router-dom";
function Header() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-white w-100 navigation" id="navbar">
        <div class="container">
            <Link class="navbar-brand font-weight-bold" to={{ pathname: "/"}}><img src="assets/images/logoPhone.png" className="logoNew" alt="logo"/></Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar"
            aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="main-navbar">
            <ul class="navbar-nav mx-auto">
                <li class="nav-item active">
                <Link class="nav-link" to={{ pathname: "/"}}>HOME</Link>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">IPHONE</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">OPPO</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">SAMSUNG</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">ABOUT US</a>
                </li>
            </ul>
            </div>
        
            <ul class="top-menu list-inline mb-0 d-none d-lg-block" id="top-menu">
            <li class="list-inline-item">
                <a href="#" class="search_toggle mr-3" id="search-icon"><i class="tf-ion-android-search"></i></a>
            </li>
            <li class="dropdown cart-nav dropdown-slide list-inline-item">
                <a href="#" class="dropdown-toggle cart-icon" data-toggle="dropdown" data-hover="dropdown">
                <i class="tf-ion-android-cart"></i>
                </a>
                <div class="dropdown-menu cart-dropdown">
               
                <div class="media">
                    <a href="/product-single">
                    <img class="media-object img- mr-3" src="assets/images/ip02.png" alt="image" />
                    </a>
                    <div class="media-body">
                    <h6>Iphone 14 pro max</h6>
                    <div class="cart-price">
                        <span>1 x</span>
                        <span>1250.00</span>
                    </div>
                    </div>
                    <a href="#" class="remove"><i class="tf-ion-close"></i></a>
                </div>
              
                <div class="media">
                    <a href="/product-single">
                    <img class="media-object img-fluid mr-3" src="assets/images/ip01.png" alt="image" />
                    </a>
                    <div class="media-body">
                    <h6>Iphone 13 pro max</h6>
                    <div class="cart-price">
                        <span>1 x</span>
                        <span>999.00</span>
                    </div>
                    </div>
                    <a href="#" class="remove"><i class="tf-ion-close"></i></a>
                </div>
                <div class="cart-summary">
                    <span class="h6">Total</span>
                    <span class="total-price h6">$1799.00</span>
                    <div class="text-center cart-buttons mt-3">
                    <a href="checkout" class="btn btn-small btn-main btn-block">Checkout</a>
                    </div>
                </div>
                </div>
            </li>
            <li class="list-inline-item">

            <li class="nav-item dropdown dropdown-slide">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown5" role="button" data-delay="350"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                   <i class="tf-ion-ios-person mr-3"></i>
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown5">
                    <li><Link to={{ pathname: "/login"}}>Login Page</Link></li>
                    <li><Link to={{ pathname: "/signup"}}>SignUp Page</Link></li>
                    <li><Link to={{ pathname: "/forgot-password"}}>Forgot Password</Link></li>
                </ul>
                </li>
            
        </li>
            </ul>
        </div>
        </nav>
    );
}
export default Header