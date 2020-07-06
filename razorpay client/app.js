import axios from "axios";
const find = selector => document.querySelector(selector);

const orderForm = find(".order__form");
const orderDetails = find(".order__details");
const orderName = find("section .order__name");
const orderAmount = find("section .order__amount");
const orderRazorpayId = find("section .order__id");
const payButton = find("section .order__pay");

orderForm.addEventListener("submit", e => {
  e.preventDefault();
  const { name, email, amount, currency } = e.target;
  const order = {
    user: {name:name.value,email:email.value},
    amountInPaise:parseInt(amount.value)*100,
    currency:currency.value
  };
  console.log(order);
  axios
    .post("http://localhost:3000/orders", order,
    {headers:{
      Authorization:"JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNTg2NTAyNjUzLCJleHAiOjE1ODY3MTg2NTN9.WYkYRV9lvvlXvKjHrJHaPz81AtIB_Djh2gjILapRL9E"}}
    )
      
    
    .then(({ data: { name, orderId, amount } }) => {
        // console.log(name)
      sessionStorage.setItem(
        "order",
        JSON.stringify({ name, orderId, amount})
      );
      orderDetails.style.display = "block";
      orderName.textContent = name;
      orderAmount.textContent = amount;
      orderRazorpayId.textContent = orderId;
    });
});

payButton.addEventListener("click", e => {
  const { name, orderId, amount } = JSON.parse(
    sessionStorage.getItem("order")
  );
  const amountInPaise = parseInt(amount.replace("INR","")) *100;
  const checkoutObject = {
    key: "rzp_test_FzhvuLJ9viFORd",
    amount:amountInPaise,
    currency: "INR",
    name,
    order_id: orderId,
    handler: ({
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature
    }) => {
      axios
        .post("http://localhost:3000/verify", {
          razorpay_order_id,
          razorpay_payment_id,
          razorpay_signature,
          amount: amountInPaise,
          currency: "INR",
        
          
        },
        {headers:{Authorization:"JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNTg2NTAyNjUzLCJleHAiOjE1ODY3MTg2NTN9.WYkYRV9lvvlXvKjHrJHaPz81AtIB_Djh2gjILapRL9EJWTeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNTg2NTAyMjE0LCJleHAiOjE1ODY3MTgyMTR9.gqq0SInSTU7su38--jp4nr7hR0-GbJdduoM0lQrwCvk"}}
        )
        .then(
          res => (window.location = "http://localhost:1234"),
          alert("Payment Successful Wait for 5 sec to redirect")
        )
        .catch(err => alert("Payment Unsuccessful"));
    }
  };
  const razorpay = new window.Razorpay(checkoutObject);
  razorpay.open();
  e.preventDefault();
});
