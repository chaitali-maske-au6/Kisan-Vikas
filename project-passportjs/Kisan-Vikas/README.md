# Kisan-Vikas (**_arcane-hamlet-35040.com_**)

Project done by _Chaitali Barde_ and _HemantKumar Gupta_

Deployed URL: https://arcane-hamlet-35040.herokuapp.com


# Contributors

- Chaitali Barde
- HemantKumar Gupta

# About Our Project:

    Our Project is Kisan vikas is the platform where farmer can sell and know the actual product price in the market, this can be done by eliminating the third person between buyer and seller. Apart from that farmer will get a service like soil testing facility, fertilizer delivery and all other kind of information by using chat support system. All the update that farmer should know, which is providing by the government.


## Users of Application

| Role              | Rights                                                                                                                                             |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| API Generator     | Maintenance of API                                                                                                                                 |
| App Administrator | Monitor farmer and buyer activities, techinal assistance regarding database CURD operations                                                                                             |
| Farmer            | Post crop details, Photo Upload, change password, Forgot Password, view all posted products |
| Buyer             | Reset Password, Forgot Password, view all available crop products, view all reviews              |

### End Points of APIs

1.  FARMER ROUTES

    - Registering Farmer Account

      > POST https://arcane-hamlet-35040.herokuapp.com/register

    - Confirm  Register Token Message

      > GET https://arcane-hamlet-35040.herokuapp.com/confirm/:token


    - Logging into Farmer Account

      > POST https://arcane-hamlet-35040.herokuapp.com/login

    - Registering Farmer Account Via Google

    - Logging into Farmer Account Via Google

    - Registering Farmer Account Via Facebook

    - Logging into Farmer Account Via Facebook

    - Post Product Details 
      > POST https://arcane-hamlet-35040.herokuapp.com/addproduct

    - Post Product Images

      > POST https://arcane-hamlet-35040.herokuapp.com/upload

    - Change Account Password

      > POST https://arcane-hamlet-35040.herokuapp.com/changePassword

    - Forgot Password

      > POST https://arcane-hamlet-35040.herokuapp.com/forgotPassword

    - Reset Password Token Message

      > GET https://arcane-hamlet-35040.herokuapp.com/reset/:resetToken


    - Reset Password

      > POST https://arcane-hamlet-35040.herokuapp.com/resetPassword/{using Authorization token}

    - Logging Out From Farmer Account

      > POST https://arcane-hamlet-35040.herokuapp.com/logout/{using Authorization token}

    - Deactivate Farmer Account

      > POST https://arcane-hamlet-35040.herokuapp.com/deactivateAccount

       

2.  BUYER ROUTES

    - Register Buyer Account

      > POST https://arcane-hamlet-35040.herokuapp.com/register
     
    - Confirm  Register Token Message

      > GET https://arcane-hamlet-35040.herokuapp.com/confirm/:token

    - Login into Buyer Account
      > POST https://arcane-hamlet-35040.herokuapp.com/register

    - Showing All products 
       > GET  https://arcane-hamlet-35040.herokuapp.com/products


       * showing product using productid
          > GET https://arcane-hamlet-35040.herokuapp.com/products/:id

       * showing products using category
          > GET https://arcane-hamlet-35040.herokuapp.com/search/:category

    - Showing All Reviews 
       > GET  https://arcane-hamlet-35040.herokuapp.com/reviews/:id/{using Authorization token}

       *  Add products reviews
          > POST  https://arcane-hamlet-35040.herokuapp.com/addReview/:id/{using Authorization token}

       *  Edit products reviews
          > POST  https://arcane-hamlet-35040.herokuapp.com/editReview/:id/{using Authorization token}

    - Showing Carts Product 
       > GET  https://arcane-hamlet-35040.herokuapp.com/carts/{using Authorization token}

       *  Add products into carts
          > POST  https://arcane-hamlet-35040.herokuapp.com/addToCart/:id/{using Authorization token}

       *  Remove products from carts
          > POST  https://arcane-hamlet-35040.herokuapp.com/removeFromCart/:id/{using Authorization token}

    - Showing Buyer Address 
       > GET  https://arcane-hamlet-35040.herokuapp.com/address/{using Authorization token}

       *  Add address
          > POST  https://arcane-hamlet-35040.herokuapp.com/addAddress/{using Authorization token}

       *  Edit Address
          > POST  https://arcane-hamlet-35040.herokuapp.com/editAddress/:id/{using Authorization token}

       *  Delete Address
          > POST  https://arcane-hamlet-35040.herokuapp.com/removeAddress/:id/{using Authorization token}

     - Showing Order
       > POST  https://arcane-hamlet-35040.herokuapp.com/orders/{using Authorization token}

       *  Add address
          > POST  https://arcane-hamlet-35040.herokuapp.com/verify

     - Change Account Password

      > POST https://arcane-hamlet-35040.herokuapp.com/changePassword

    - Forgot Password

      > POST https://arcane-hamlet-35040.herokuapp.com/forgotPassword

    - Reset Password Token Message

      > GET https://arcane-hamlet-35040.herokuapp.com/reset/:resetToken

    - Reset Password

      > POST https://arcane-hamlet-35040.herokuapp.com/resetPassword/{using Authorization token}

    - Logging Out From Framer Account

      > POST https://arcane-hamlet-35040.herokuapp.com/logout/{using Authorization token}

    - Deactivate Framer Account

      > POST https://arcane-hamlet-35040.herokuapp.com/deactivateAccount

    - Registering Farmer Account Via Google

    - Logging into Farmer Account Via Google

    - Registering Farmer Account Via Facebook

    - Logging into Farmer Account Via Facebook


# Features :

### \* REGISTRAION & LOGIN Related (For both farmer and buyer)

---

1.  Email Verification for Registration.
2.  Only Unique Account Creation allowed (Email based Uniqueness).
3.  Multiple device Login facility.
4.  Editing Password (After login).
5.  Resetting Passwords (System Generated Password via mail).

### \*FARMER Related

---

1.  Farmer uploads crop information and images.
2.  Farmer can edit his/her post.
3.  Farmer can view the orders placed according to crop types.
4.  Farmer can view buyer's address and deliver the order.


### \*BUYER Related

---

1.  Buyer can view crop information and images.
2.  Buyer can place the orders based on crop types.
3.  Buyer can post/view the review of available crops.
4.  Buyer can provide his/her address and edit it in future.
5.  While buying products, buyer can add multiple products to cart.
6.  Buyer can view/delete existing products from carts.
7.  Buyer can search products based on its category.


# Technologies used:

---

- Nodemailer (_To send system generated emails_)
- Express-fileupload (_Upload Images_)
- Express Js (_Framework for node Js_)
- Json Web token (_For Authentication_)
- Bcrypt Js (_For Hashing_)
- Helmet (_To Secure all Headings and Status_)
- Compressor (_To compress the size of the data_)
- Sequelize (_To Connect to SQL Database_)
- Razorpay (_For pay amount_)

# Future Goals :

      1. Pagination.
      2. Discount coupons.
      3. Chat box.
      4. Profile image upload/updation
      5. Mobile Application Implementation
      6. Mobile OTP for login
      
      

# Image Upload 


https://drive.google.com/open?id=1MCAk9Y4PFtG6JrV0TYDoTVE9584q3drb

# ER Diagram(pdf)

https://www.lucidchart.com/publicSegments/view/20fb93ad-0743-47ca-b790-f921bc3e1cda

