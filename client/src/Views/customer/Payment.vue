<template>
    <div class="back_ground">
      <NavBar />
      <div class="payment-form">
        <h1 style="font-size:x-large;">Payment Form</h1>
        <div class="payment-methods">
          <div class="payment-method selected">Card<i class="bi bi-credit-card" style="margin-left: 10px;"></i></div>
          <div class="payment-method">EPS<i class="bi bi-wallet" style="margin-left: 10px;"></i></div>
          <div class="payment-method">Cash<i class="bi bi-cash-stack" style="margin-left: 10px;"></i></div>
        </div>
        <div class="input-group">
          <label for="card-number">Card Number</label>
          <input type="text" id="card-number" placeholder="1234 1234 1234 1234">
        </div>
        <div class="input-group">
          <label for="expiry">Expiry</label>
          <input type="text" id="expiry" placeholder="MM / YY">
        </div>
        <div class="input-group">
          <label for="cvc">CVC</label>
          <input type="text" id="cvc" placeholder="CVC">
        </div>
        <div class="input-group">
          <label for="country">Country</label>
          <select id="country">
            <option value="United States">United States</option>
            <!-- Add more countries as needed -->
          </select>
        </div>
        <div class="input-group">
          <label for="postal-code">Số tiền phải trả</label>
          <input type="text" id="postal-code" :placeholder="`${paymentInfo.total_cost}`">
        </div>
        <button class="submit-button" @click="confirmPayment">Thanh Toán</button>
      </div>
      <FooterBar />
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue'
  import NavBar from '@/components/global/NavBar.vue'
  import FooterBar from '@/components/global/FooterBar.vue'
  import axios from 'axios';
  export default defineComponent({
    components: {
      NavBar,
      FooterBar
    },
    data() {
      return {
        email: '',
        password: '',
        loggedIn: true,
        status: '',
        paymentInfo:null
      }
    },
    created() {
      this.PaymentStatus()
    },
    methods: {
      PaymentStatus() {
        this.paymentInfo = JSON.parse(localStorage.getItem('paymentInfo'));
      },
      async confirmPayment() {
        try {
            const response = await axios.post('http://localhost:5000/saveFrame', {
              date: this.paymentInfo.date,
              slots: this.paymentInfo.slots,
              yard_id: this.paymentInfo.yard_id,
              total_cost: this.paymentInfo.total_cost,
              user_id: this.paymentInfo.user_id
            })
            if (response.data.status == "Successful") {
              localStorage.removeItem('paymentInfo');
              window.location.href = '#/CourtDetail';
            }
          } catch (error) {
            // Handle error
            console.error(error)
          }
      }
    }
  })
  </script>
  
  <style lang="scss" scoped>

  
  .payment-form {
    background-color: #34495e;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 400px;
    margin: 75px auto;
    color: white;
  }
  
  .payment-form h1 {
    margin-bottom: 20px;
    text-align: center;
  }
  
  .input-group {
    margin-bottom: 15px;
  }
  
  .input-group label {
    display: block;
    margin-bottom: 5px;
  }
  
  .input-group input,
  .input-group select {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
  }
  
  .payment-methods {
    color: black;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  
  .payment-method {
    width: 100px;
    height: 48px;
    background-color: #ecf0f1;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  
  .payment-method.selected {
    border: 2px solid #3498db;
  }
  
  .submit-button {
    background-color: #45a29e;
    color: #ecf0f1;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    transition: transform 0.5s;
  }
  .submit-button:hover {
    color: mistyrose;
  }
  </style>
  