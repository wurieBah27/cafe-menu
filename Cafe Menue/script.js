const ourMenue = document.querySelector(".our-menue");
const basketcontainer = document.querySelector(".cart-items");
const cartIcon = document.querySelector(".cart-icon");
const cartQuantity = document.querySelector(".cart-quantity");
const MenueItems = document.querySelector(".Menue-items");
const Menuecategory = document.querySelectorAll(".Menue_category");
const services = document.querySelectorAll(".services");
const slideBack = document.querySelector(".slide-back");
const slideForward = document.querySelector(".slide-forward");
const basketSubAmoubt = document.querySelector(".sub-Amoubt");
const basketSubTotal2 = document.querySelector(".basket-subTotal2");
const clearAllItemsBtn = document.querySelector(".clear-allItems-btn");
const coldcoffeeSection = document.querySelector(".swipper-cold-section");
const mojitoContainerSection = document.querySelector(
  ".swipper-Mojito-section"
);

const dots = document.querySelector(".dots");

const cakesContainerDOM = document.querySelector(".cakes-containerDOM");
const milkshfracontainerDOM = document.querySelector(
  ".milksh-fra-containerDOM"
);

/*********** products variables */

const productsContainer = document.querySelector(".products-containerss");

//////////////////////////////////////////////
///// PRODUCTS SECTION ///////////////////////
//////////////////////////////////////////////

// cartIcon.addEventListener("click", () => {
//   basketcontainer.classList.toggle("cart-items-active");
// });
const slideIn = function (param) {
  param.forEach((item, index) => {
    if (item.style.animation) {
      item.style.animation = "";
    } else {
      item.style.animation = `navLinks_FadeIn 0.5s ease forwards ${
        index / 8 + 0.4
      }s`;
    }
  });
};

const navSlide = () => {
  const hamburgermenu = document.querySelector("#input-check2");
  const inputcheck = document.querySelector("input");
  const navBar = document.querySelector(".nav-Bar");
  const Menuecategor = document.querySelectorAll(".main-nav-list");

  hamburgermenu.addEventListener("click", (e) => {
    navBar.classList.toggle("nav-Bar-active");

    slideIn(Menuecategor);
  });
};

navSlide();

/***************************************
 ***** JSON PRODUCTS SECTION ***********
 ***************************************/

let cart = [];
let buttonsDOM = [];

class Products {
  async getDta() {
    try {
      const res = await fetch("products.json");

      const data = await res.json();
      let product = data.Coffees;
      product = product.map((item) => {
        const { title, price } = item.fields;
        const { id } = item.sys;
        const { category } = item.fields;
        const { description } = item.fields;
        const image = item.fields.img.fields.file.url;
        return { title, price, id, category, description, image };
      });
      return product;
    } catch (err) {
      console.log(err);
    }
  }
}

// ////// DISPLAYING PRODUCTS

class UI {
  _parentElement = document.querySelector("body");
  renderSpinner() {
    const markU = `<div class="spinner">
      <svg><use href="images/icons.svg/icon-loader"></use></svg>
       </div>`;
    this._parentElement.innerHTML = "";
    this._parentElement.insertAdjacentHTML("afterbegin", markU);
    console.log(this._parentElement);
  }
  displayProducts(products) {
    let result = "";
    let coldCoffees = [];
    let mojitoContainer = "";
    let cakeSection = "";
    let milkshakes = "";
    products.forEach((item) => {
      if (item.category === "hotCoffee") {
        result += `
        <div class="products  swiper-slide">
            <div class="img-container">
              <img
                class="product-image"
                loading="lazy"
                src=${item.image}
                alt=${item.title}
              />
            </div>

            <div class="list-container">
              <h2 class="product-name">${item.title}</h2>
              <h3 class="product-price">AED <span>${item.price}</span></h3>
              <p class="products-description">
               ${item.description}
              </p>
              <div class="cart-btn-container" data-id ="${item.id}">
                <button class="cart-btn">ADD TO CART</button>
                <ion-icon
                  class="icon add-to-cart-icon"
                  name="cart-outline"
                ></ion-icon>
              </div>
            </div>
         </div>
       
      `;
      } else if (item.category === "coldCoffee") {
        // coldCoffees.push(item);
        // console.log(coldCoffees);
        coldCoffees += `

          <div class="products swiper-slide ">
              <div class="img-container">
                <img
                  class="product-image"
                  loading="lazy"
                  src=${item.image}
                  alt=${item.title}
                />
              </div>

              <div class="list-container">
                <h2 class="product-name">${item.title}</h2>
                <h3 class="product-price">AED <span>${item.price}</span></h3>
                <p class="products-description">
                 ${item.description}
                </p>
                <div class="cart-btn-container" data-id ="${item.id}">
                  <button class="cart-btn">ADD TO CART</button>
                  <ion-icon
                    class="icon add-to-cart-icon"
                    name="cart-outline"
                  ></ion-icon>
                </div>
              </div>
           </div>

        `;
      } else if (item.category === "Mojito") {
        mojitoContainer += `
        <div class="products swiper-slide ">
            <div class="img-container">
              <img
                class="product-image"
                loading="lazy"
                src=${item.image}
                alt=${item.title}
              />
            </div>

            <div class="list-container">
              <h2 class="product-name">${item.title}</h2>
              <h3 class="product-price">AED <span>${item.price}</span></h3>
              <p class="products-description">
               ${item.description}
              </p>
              <div class="cart-btn-container" data-id ="${item.id}">
                <button class="cart-btn">ADD TO CART</button>
                <ion-icon
                  class="icon add-to-cart-icon"
                  name="cart-outline"
                ></ion-icon>
              </div>
            </div>
         </div>
       
        `;
      } else if (item.category === "cakes") {
        cakeSection += `
        <div class="products swiper-slide ">
            <div class="img-container">
              <img
                class="product-image"
                loading="lazy"
                src=${item.image}
                alt=${item.title}
              />
            </div>

            <div class="list-container">
              <h2 class="product-name">${item.title}</h2>
              <h3 class="product-price">AED <span>${item.price}</span></h3>
              <p class="products-description">
               ${item.description}
              </p>
              <div class="cart-btn-container" data-id ="${item.id}">
                <button class="cart-btn">ADD TO CART</button>
                <ion-icon
                  class="icon add-to-cart-icon"
                  name="cart-outline"
                ></ion-icon>
              </div>
            </div>
         </div>
       
        `;
      } else if (item.category === "milkShakes") {
        milkshakes += `
        <div class="products swiper-slide ">
        <div class="img-container">
          <img
            class="product-image"
            loading="lazy"
            src=${item.image}
            alt=${item.title}
          />
        </div>

        <div class="list-container">
          <h2 class="product-name">${item.title}</h2>
          <h3 class="product-price">AED <span>${item.price}</span></h3>
          <p class="products-description">
           ${item.description}
          </p>
          <div class="cart-btn-container" data-id ="${item.id}">
            <button class="cart-btn">ADD TO CART</button>
            <ion-icon
              class="icon add-to-cart-icon"
              name="cart-outline"
            ></ion-icon>
          </div>
        </div>
     </div>

        `;
      }
      // productsContainer.innerHTML = "";
    });
    productsContainer.innerHTML = result;
    coldcoffeeSection.innerHTML = coldCoffees;
    mojitoContainerSection.innerHTML = mojitoContainer;
    cakesContainerDOM.innerHTML = cakeSection;
    milkshfracontainerDOM.innerHTML = milkshakes;
  }
  // const  = document.querySelector(".swiper-slide");
  getbagBtns() {
    const buttons = [...document.querySelectorAll(".cart-btn-container")];
    buttonsDOM = buttons;
    buttons.forEach((btn) => {
      let id = btn.dataset.id;
      let inCart = cart.find((item) => item.id === id);
      if (inCart) {
        btn.innerText = "IN CART";
        btn.style.cursor = "pointer";
        btn.disabled = true;
      }
      btn.addEventListener("click", (e) => {
        // e.target.innerText = "IN CART";

        e.target.disabled = true;

        // get product from products
        let cartItem = { ...Storage.getProducts(id), amount: 1 };

        // add products to the cart
        cart = [...cart, cartItem];

        // save cart to locale storage
        Storage.saveCart(cart);

        // set cat values

        this.setCartValues(cart);

        this.addCartItems(cartItem);
      });
    });
  }
  setCartValues() {
    let tempTotal = 0;
    let itemsTotal = 0;
    cart.map((item) => {
      tempTotal += item.amount * item.price;
      itemsTotal += item.amount;
    });
    basketSubAmoubt.innerHTML = `AED ${parseFloat(tempTotal.toFixed(2))}`;
    cartQuantity.innerHTML = itemsTotal;
  }

  addCartItems(item) {
    const myCart = document.createElement("div");
    myCart.classList.add("cart");
    myCart.innerHTML = `
   
           
              <div class="cart-img-container">
                <div class="imgs-cont">
                  <img
                    class="basket-image"
                    src= ${item.image}
                    alt="${item.title}"
                  />
                </div>

                <div class="cart-item-name">
                  <span
                    ><ion-icon
                      class="basket-icon"
                      name="cafe-outline"
                    ></ion-icon
                  ></span>
                  <h2>${item.title}</h2>
                </div>
              </div>
              <div class="total-price grid-cart-display">
                <div class="price">PRICE</div>
                <h4 class="single-item-total">AED <span> ${
                  item.price
                }</span></h4>
              </div>
              <div class="cart-description-container">
                <div class="qty-btn-container grid-cart-display">
                  <h2 class="qty-btn-label price">QUANTITY</h2>
                  <div class="basket-btn-container">
                    <button>
                      <ion-icon
                      data-id = ${item.id}
                        class="decrement-btn basket-icon"
                        name="remove-circle-outline"
                      ></ion-icon>
                    </button>
                    <span class="cart-item-quantity">${item.amount}</span>
                    <button>
                      <ion-icon
                      data-id = ${item.id}
                        class="increment-btn basket-icon"
                        name="add-circle-outline"
                      ></ion-icon>
                    </button>
                  </div>
                </div>

                <div class="delete-btn">
                  <ion-icon  data-id = ${item.id}
                  } class="delete-icon" name="trash-outline"></ion-icon>
                  <h2>remove item</h2>
                </div>
              </div>
              <div class="subtotal grid-cart-display">
                <h2 class="price">TOTAL</h2>
                <p data-id = ${item.id} class="total-title">${
      item.amount * item.price
    }</p>
              </div>
            </div>

           
            
         
    `;

    basketSubTotal2.appendChild(myCart);
  }

  setupAPP() {
    cart = Storage.getCart();
    this.setCartValues(cart);
    this.populateCart(cart);
    cartIcon.addEventListener("click", this.hideCart);
  }

  populateCart(cart) {
    cart.forEach((item) => this.addCartItems(item));
  }

  hideCart() {
    basketcontainer.classList.toggle("cart-items-active");
  }

  cartLogic() {
    // clear cart button
    clearAllItemsBtn.addEventListener("click", () => {
      this.clearCart();
    });

    basketSubTotal2.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target.classList.contains("delete-icon")) {
        let removeItem = e.target;
        let id = removeItem.dataset.id;
        basketSubTotal2.removeChild(
          removeItem.parentElement.parentElement.parentElement
        );
        this.removeItems(id);
        basketcontainer.classList.add("cart-items-active");
        // ========= INCREMENT FUNCTION ==========//
      } else if (e.target.classList.contains("increment-btn")) {
        let addAmount = e.target;
        let id = addAmount.dataset.id;
        let tempAmount = cart.find((item) => item.id === id);
        tempAmount.amount = tempAmount.amount + 1;
        let total = tempAmount.amount * tempAmount.price;

        e.target.parentElement.parentElement.parentElement.parentElement.nextElementSibling.children[1].innerText =
          total;
        Storage.saveCart(cart);
        this.setCartValues(cart);

        addAmount.parentElement.previousElementSibling.innerText =
          tempAmount.amount;
      }

      // ========= decrement FUNCTION ==========//

      if (e.target.classList.contains("decrement-btn")) {
        let lowerAmount = e.target;
        let id = lowerAmount.dataset.id;
        let tempAmount = cart.find((item) => item.id === id);

        if (tempAmount.amount > 1) {
          tempAmount.amount = tempAmount.amount - 1;
          let total = tempAmount.amount * tempAmount.price;
          // this.setCartValues(cart);
          // Storage.saveCart(cart);
          lowerAmount.parentElement.nextElementSibling.innerText =
            tempAmount.amount;

          e.target.parentElement.parentElement.parentElement.parentElement.nextElementSibling.children[1].innerText =
            total;
          Storage.saveCart(cart);
          this.setCartValues(cart);
        } else {
          basketSubTotal2.removeChild(
            lowerAmount.parentElement.parentElement.parentElement.parentElement
              .parentElement
          );
          this.removeItems(id);
          basketcontainer.classList.add("cart-items-active");
        }
      }
    });
  }

  // cart functionality
  clearCart() {
    let Cartitems = cart.map((item) => item.id);
    Cartitems.forEach((id) => this.removeItems(id));
    while (basketSubTotal2.children.length > 0) {
      basketSubTotal2.removeChild(basketSubTotal2.children[0]);
    }
  }

  removeItems(id) {
    cart = cart.filter((item) => item.id !== id);
    this.setCartValues(cart);
    Storage.saveCart(cart);
    let button = this.getSingleButton(id);
    button.disabled = false;
    button.innerHTML = ` <button class="cart-btn">ADD TO CART</button>
    <ion-icon
      class="icon add-to-cart-icon"
      name="cart-outline"
    ></ion-icon>`;
    basketcontainer.classList.remove("cart-items-active");
  }
  getSingleButton(id) {
    return buttonsDOM.find((btn) => btn.dataset.id === id);
  }
}

// getting data from locale storage
class Storage {
  static saveProducts(product) {
    localStorage.setItem("products", JSON.stringify(product));
  }

  static getProducts(id) {
    let product = JSON.parse(localStorage.getItem("products"));
    return product.find((item) => item.id === id);
  }

  static saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  static getCart() {
    return localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const ui = new UI();
  const product = new Products();
  // Setup APP

  ui.setupAPP();
  product
    .getDta()
    .then((products) => {
      // ui.renderSpinner();
      ui.displayProducts(products);

      Storage.saveProducts(products);
    })
    .then(() => {
      ui.getbagBtns();
      ui.cartLogic();
    });
});

const cartfooter = document.querySelector(".cart-footer");

let last = 0;

basketSubTotal2.addEventListener("scroll", (e) => {
  e.preventDefault();
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowDown") {
      cartfooter.style.display = "none";
    }
    if (e.key === "ArrowUp") {
      cartfooter.style.display = "block";
    }
  });
});
if (last < window.scrollY) {
  cartfooter.style.display = "none";

  console.log(last);
  // console.log("we are down");
} else {
  cartfooter.style.display = "block";

  // console.log(last);
  // console.log("up");
}
last = window.scrollY;

// const showHide = () => {
//   const cartfooter = document.querySelector(".cart-footer");
//   window.addEventListener("scrool", () => {
//     let lastscrool = window.scrollY;

//     console.log(lastscrool);
//   });
//   console.log(basketcontainer);
// };
// showHide();
////////////////////////////////////////////////////////////
/////////////// slider sections  ///////////////////////////
///////////////////////////////////////////////////////////

const slides = document.querySelectorAll(".slides");
const btnleft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");
let mySlides = 0;
let totalSlides = slides.length;
console.log(totalSlides);
let i = 0;
timer = 0;

function stop() {
  clearInterval(timer);
}

const slideFunct = function (movSlide) {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - movSlide)}%)`;
  });
};

slideFunct(0);

const nextSlide = () => {
  stop();
  start();
  if (mySlides === totalSlides - 1) {
    mySlides = 0;
  } else {
    mySlides++;
  }
  slideFunct(mySlides);
  activateDot(mySlides);
};

const previousSlide = () => {
  stop();
  start();
  if (mySlides === 0) {
    mySlides = totalSlides - 1;
  } else {
    mySlides--;
  }

  slideFunct(mySlides);
  activateDot(mySlides);
};

// let parSlide = document.querySelector(".slider__container");

const parSlide = () => {
  if (btnRight === null || btnleft === null) return;
  btnRight.addEventListener("click", nextSlide);
  btnleft.addEventListener("click", previousSlide);
};

parSlide();
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") nextSlide();
  if (e.key === "ArrowLeft") previousSlide();
});

////////////////////////////////////////////////////////////
////// CREATING THE DOTS SLIDER   //////  //////////////////
///////////////////////////////////////////////////////////

const createDots = () => {
  slides.forEach((slide, index) => {
    dots.insertAdjacentHTML(
      "beforeend",
      `
    <button class = "dots__dot" data-slide="${index}" ></button>

    `
    );
  });
};
createDots();

dots === null
  ? ""
  : dots.addEventListener("click", (e) => {
      if (e.target.classList.contains("dots__dot")) {
        const { slide } = e.target.dataset;
        stop();
        start();

        slideFunct(slide);
        activateDot(slide);
      }
    });

const activateDot = function (slide) {
  document
    .querySelectorAll(".dots__dot")
    .forEach((s, index) => s.classList.remove("dots__dot--active"));

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add("dots__dot--active");
};

activateDot(0);

function start() {
  timer = setInterval(function () {
    if (i <= totalSlides) {
      i++;

      slideFunct(i);

      if (i === totalSlides) {
        i = 0;
        slideFunct(i);
      }
    }
    activateDot(i);
  }, 10000);
}

start();

/*=============== swipper JS ================*/

/////////////////////////////////////////////////////////////////
// ///////// hot section pagination functionality /////////////
////////////////////////////////////////////////////////////////

function hotPagination() {
  var swiper = new Swiper(".hotCoffee-Section", {
    slidesPerView: 1,

    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
      570: {
        slidesPerView: 2,
      },
      884: {
        slidesPerView: 3,

        // spaceBetween: 0,
      },
      1200: {
        slidesPerView: 4,

        // spaceBetween: 0,
      },
    },
  });
}
hotPagination();

var swiper = new Swiper(".container-helper", {
  slidesPerView: 1,
  spaceBetween: 10,
  // loop: true,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  keyboard: {
    enabled: true,
  },

  autoplay: {
    delay: 6000,
    autoplayDisableOnInteraction: true,
  },

  lazyLoading: true,
  breakpoints: {
    480: {
      slidesPerView: 2,
    },
    700: {
      slidesPerView: 3,

      // spaceBetween: 0,
    },
  },
});

function coldCoffeePagination() {
  var swiper = new Swiper(".mySwiperhello", {
    slidesPerView: 1,

    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
      570: {
        slidesPerView: 2,
      },
      884: {
        slidesPerView: 3,

        // spaceBetween: 0,
      },
      1200: {
        slidesPerView: 4,

        // spaceBetween: 0,
      },
    },
  });
}
coldCoffeePagination();

// mojito pagination section

function MojitoPagination() {
  var swiper = new Swiper(".mojito-section-container", {
    slidesPerView: 1,

    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
      570: {
        slidesPerView: 2,
      },
      884: {
        slidesPerView: 3,

        // spaceBetween: 0,
      },
      1200: {
        slidesPerView: 4,

        // spaceBetween: 0,
      },
    },
  });
}
MojitoPagination();

/////////////////////////////////////////////////////////////////
// ///////// cakes section pagination functionality /////////////
////////////////////////////////////////////////////////////////

function cakesPagination() {
  var swiper = new Swiper(".cakes-section-container", {
    slidesPerView: 1,

    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
      570: {
        slidesPerView: 2,
      },
      884: {
        slidesPerView: 3,

        // spaceBetween: 0,
      },
      1200: {
        slidesPerView: 4,

        // spaceBetween: 0,
      },
    },
  });
}
cakesPagination();

////////////////////////////////////////////////////////////////
// ///////// cakes section pagination functionality /////////////
////////////////////////////////////////////////////////////////

function milkShakesPagination() {
  var swiper = new Swiper(".milksh-fra-container", {
    slidesPerView: 1,

    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
      570: {
        slidesPerView: 2,
      },
      884: {
        slidesPerView: 3,

        // spaceBetween: 0,
      },
      1200: {
        slidesPerView: 4,

        // spaceBetween: 0,
      },
    },
  });
}
milkShakesPagination();
