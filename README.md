
# RENT.IO [WEB]
- An online renting web application enabling sellers to lend items. Rent.IO brings in the renting aspect and allows sellers to rent out goods. 
- Our app seeks to bring together the entire furniture/home appliances renting marketplace under one roof where a customer can rent out anything related to home appliances/furniture they wish for, it can be anything from a chair to a wardrobe from a day to a month.

## Existing system and disadvantages
- There are many existing systems which only operate on the buying and selling of goods between users.
- In today’s market, renting out individual property and goods has become very common. But the problem arises when we talk about the user experience, price transparency and lack of customer support. 
- There are many renting platforms but they do lack from the problems mentioned above in some way or the other

## Proposed system and advantages
- Our system “Rent.IO” seeks to bring in multiple renting aspects under one roof and provide a great user experience. All renting needs will be fulfilled in our sole app. 
- With strict identification features (like aadhaar verification) and code of conduct, we will ensure fraud will be minimaland fair trade takes place between users. This system would promote online renting businesses.

## Requirement Specifications
    1) REGISTRATION : System should be able to register users successfully. (Provided all the parameters are fulfilled)

    2) LOGIN : System should be able to verify login credentials i.e. username/email and password and redirect the user to their specific landing page. 
    If not, System should be able to display a proper error message. If the credentials are not valid the system should ask them to register.

    3) POST ADs : System should be able to provide form to Users to post an ad for the products/item.

    4) BOOKING AND PAYMENT  : System should provide an option for customers to book the available item for a particular period of time.
    System should provide an option for sellers to modify the availability of the product. System should provide an option to confirm booking and proceed to payment. 
    System should be able to accept payment from customers for the order (total amount includes security amount). 
    The System should redirect the customer to razor pay website where the customer has options to pay using wallets like phone pay, UPI like google pay, net banking and credit or debit cards.

    5) DELIVERY : System should provide delivery options to customers (takeaway or delivery). If the customer chooses the delivery option, then the system should provide the delivery agent's details to the customer.
    System should provide the agent’s details in the form of list on the website. 
    If customers want the item to be delivered then he/she can contact directly to the nearest delivery agent provided in the list.
    
    6) FEEDBACK : System should be able to provide an option to the users to give feedback for the product they have used. 
    User’s feedback should be visible to admin.

    7) SUPPORT : System should be able to provide support to users through business owner. (Also a chat bot is available 24/7)

### Architecture Diagram
![architectureDiagram](https://github.com/Royalaviation18/Rent.IO_web/blob/main/appScreenShots/architectureDiagram.jpg)

## Software Environments
    1) Visual Studio Code
    2) MySQL Workbench
    3) Postman
    4) Github (Version Control)






## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Theme Color | ![#1998f6](https://via.placeholder.com/10/1998f6?) #1998f6 |
| Button Color | ![#273238](https://via.placeholder.com/10/273238?text=+) #273238 |
| Description Color | ![#8c8d8f](https://via.placeholder.com/10/8c8d8f?text=+) ##8c8d8f |
| Background Color | ![#ffffff](https://via.placeholder.com/10/ffffff?text=+) #ffffff |


## Tech Stack

**Client:** HTML,CSS, EJS

**Server:** Node, Express

**Database**: MySQL


## Screenshots

Landing Page 

![landingPage](https://github.com/Royalaviation18/Rent.IO_web/blob/main/appScreenShots/landingPage.jpg)

User Registration and Login Page

![registration&LoginPage](https://github.com/Royalaviation18/Rent.IO_web/blob/main/appScreenShots/registerAndLogin.jpg)

Home Page 

![homePage](https://github.com/Royalaviation18/Rent.IO_web/blob/main/appScreenShots/landingPageVerifiedUser.jpg)

Product Upload Page 

![uploadPage](https://github.com/Royalaviation18/Rent.IO_web/blob/main/appScreenShots/uploadProducts.jpg)

User Order History Page 

![userOrderHistory](https://github.com/Royalaviation18/Rent.IO_web/blob/main/appScreenShots/userMyOrders.jpg)

Admin Login Page 

![adminLoginPage](https://github.com/Royalaviation18/Rent.IO_web/blob/main/appScreenShots/adminLogin.jpg)

Admin Home Page 

![adminHomePage](https://github.com/Royalaviation18/Rent.IO_web/blob/main/appScreenShots/adminHome.jpg)

Admin Product Approval Page

![adminProductApprovalPage](https://github.com/Royalaviation18/Rent.IO_web/blob/main/appScreenShots/adminProductApproval.jpg)

Admin Manage Product

![adminManageProduct](https://github.com/Royalaviation18/Rent.IO_web/blob/main/appScreenShots/adminManageProducts.jpg)

Admin Manage Category 

![landingPage](https://github.com/Royalaviation18/Rent.IO_web/blob/main/appScreenShots/adminManageCategory.jpg)

Admin Add Category 

![landingPage](https://github.com/Royalaviation18/Rent.IO_web/blob/main/appScreenShots/adminAddCategory.jpg)




## Run Locally

Clone the project

```bash
  git clone https://github.com/Royalaviation18/Rent.IO_web
```

Go to the project directory

```bash
  cd Rent.IO_web-main
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Support

For support, email royalaviation2203@gmail.com.


## Feedback

If you have any feedback, please reach out to us at royalaviation2203@gmail.com

