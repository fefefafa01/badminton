<template>
    <div class="sub-menu-wrap">
        <div class="sub-menu">
            <div class="user-info">
                <img src="../../assets/images/TAI KHOAN.png" alt="this is logo" >
                <h3>Khoa</h3>
            </div>
            <hr>
            
            <a href="#" class="sub-menu-link">
                <img src="../../assets/images/TAI KHOAN.png" alt="">
                <p>Edit Profile</p>
                <span>></span>
            </a>
            <a href="#" class="sub-menu-link">
                <img src="../../assets/images/TAI KHOAN.png" alt="">
                <p>Edit Profile</p>
                <span>></span>
            </a>
            <a href="#" class="sub-menu-link">
                <img src="../../assets/images/TAI KHOAN.png" alt="">
                <p>Edit Profile</p>
                <span>></span>
            </a>
            <a href="#" class="sub-menu-link">
                <img src="../../assets/images/TAI KHOAN.png" alt="">
                <p>Logout</p>
                <span>></span>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'dropdown',
        props: ['title', 'items']
    }
</script>

<style>

</style>
