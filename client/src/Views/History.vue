<template>
    <div class=" container">
        <div class="bar">
            <div class="image-profile" type="button" @click="toggleMenu">
                <img src="../assets/images/TAI KHOAN.png" alt="user-img">
                <div class="profile-txt">
                    <span>Tài khoản của</span>
                    <h3>Khoa</h3>
                </div>
                <div :class="['profile-bar', {'open-menu': isMenuOpen}]">
                    <a href="#" @click="redirectToProfile">
                        <img src="../assets/images/Profile.png" alt="user-img" >
                        <span>Thông tin chung</span>
                    </a>
                    <hr>
                    <a href="#" @click="redirectToHistory">
                        <img src="../assets/images/history.png" alt="user-img" >
                        <span>Lịch sử đặt sân</span>
                    </a>
                    <hr>
                    <a href="#">
                        <img src="../assets/images/Change_password.png" alt="user-img" >
                        <span>Đổi mật khẩu</span>
                    </a>
                    <hr>
                    <a href="#" @click="logout">
                        <img src="../assets/images/Logout.png" alt="user-img" >
                        <span>Thoát</span>
                    </a>
                </div>
            </div>
            
        </div>
        <div class="dashboard">
            <div class="title">
                <h2>LỊCH SỬ ĐẶT SÂN</h2>
                <a href="">Xem tất cả</a>
            </div>
        </div>
    </div>    
</template>


<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';
import History from "./ListOfCourt.vue";


export default defineComponent( {
    components: {
        Splide,
        SplideSlide,
    },

    data() {
        return {
            isMenuOpen: false,
        }
    },

    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        logout() {
                localStorage.removeItem('loggedIn');
                window.location.href = 'home';
        },
        redirectToProfile(){
            window.location.href = 'Profile';
        },
        redirectToHistory() {
            window.location.href = 'History';
        }
    },


    setup() {
        const options = {
        rewind: true,
        gap   : '1rem',
        };
        const notifData = ref([]);
        const bangTinData = ref([]);
        const slicedBangTinData = ref([]);

        onMounted(async () => {
        try {
            const notif = await axios.get('http://localhost:5000/notif');
            notifData.value = notif.data.notifData;

            const bangTin = await axios.get('http://localhost:5000/bangtin');
            bangTinData.value = bangTin.data.bangTinData;
            console.log(bangTinData);

            const slicedData = [];
            for (let i = 0; i < bangTinData.value.length; i += 3) {
                slicedData.push(bangTinData.value.slice(i, i + 3));
            }
            slicedBangTinData.value = slicedData;
            console.log(slicedBangTinData);
        } catch (error) {
        console.error(error);
        }
        });

        return { options, notifData, slicedBangTinData };
    },
    });
</script>


<style lang="scss" scoped>
.container{
    width: 100%;
    height: 500px;
    padding-top: 50px;
    padding-bottom: 20px;
    display: flex;
}

.bar{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
    height: 80px;
    margin-right: 30px;
}

.image-profile{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    background-color: #45a29e;
    width: 300px;
    height: 80px;
    border-radius: 10px;
    padding: 10px;
    cursor: pointer;
    img {
        width: 50px;
    }
}

.profile-txt{
    color: white;
    text-align: center;
    font-size: 1.5em;
    width: 100%;
}

.profile-bar{
    display: flex;
    flex-direction: column;
    position: absolute;
    padding-top: 10px;
    top: 100%;
    max-height: 0px;
    width: 100%;
    overflow: hidden;
    transition: max-height 0.5s;
    z-index: 1000;
    
    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: white;
        :hover{
            background-color: #ccc;
        }
        span{
            font-size: 1.5em;
        }
        span:hover {
            background-color: transparent;
            font-weight: 500;
        }
    }
    img{
        width: 30px;
        background-color: #e5e5e5;
        border-radius: 50%;
        padding: 8px;
        margin-right: 8px;
    }
    hr {
        border: 0;
        height: 2px;
        width: 100%;
        background-color: #45a29e;
        margin: 10px 0 10px;
    }
}
.profile-bar.open-menu{
    max-height: 400px;
}

.dashboard {
    width: 100%;
    hr{
        margin: 5px 0 5px;
    }
}

.title{
    position: relative;
    align-items: center;
    margin-top: 20px;
    h2{
        color: white;
        font-weight: 500;
        border-left: 3px solid white;
        padding-left: 10px;
        font-size: 30px;
        line-height: 1.5;
        margin: 0 0 10px;
        min-height: 27px;
    }
    a{
        font-size: 15px;
        color :white;
        position: absolute;
        top: 3px;
        right: 0;
    }
}
.group-info{
    position: relative;
    display: flex;
    width: 100%;
}
.self-info{
    border: 1px solid #d9d9d9;
    border-radius: 3px;
    padding: 15px 20px;
    margin-right: 10px;
    .group{
        color: white;
        margin-bottom: 10px;
        .label{
            float: left;
            width: 100px;
            font-size: 100%;
            text-align: left;
            font-weight: 400;
        }
        .detail{
            display: table-cell;
            font-weight: 500;
        }
    }
}
</style>
