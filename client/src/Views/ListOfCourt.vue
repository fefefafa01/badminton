<template>
    <div>
        <div class="container">
            <div class="item1">
                <div class="left-part">
                    <div class="image-container">
                        <img src="../assets/images/badminton court/1696400900372-co-nen-kinh-doanh-san-cau-long.jpg">
                    </div>
                </div>
                <div class="right-part">
                    <div class="court-name">Sân cầu lông Thiên Vân</div>
                    <p>
                        <i class=" fas fa-home text-white" style="font-size: 23px; margin-right: 5px;"></i>
                        57 Nguyễn Nghiêm, Phú Trung, Tân Phú, Thành phố Hồ Chí Minh
                    </p>
                    <p>
                        <i class=" fas fa-phone text-white" style="font-size: 23px; margin-right: 5px;"></i>
                        0913404924
                    </p>
                </div>
            </div>
            <div class="item2">
                fsddfsdfdsssssssssssssssssssssss
            </div>
            <div class="item1">
                fsddfsdfdsssssssssssssssssssssss
            </div>
            <div class="item2">
                fsddfsdfdsssssssssssssssssssssss
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    height: auto;
    padding-top: 200px;
    padding-bottom: 100px;
    display: flex;
    flex-direction: column;
    align-items: center; /* Căn giữa theo chiều ngang */
}

.item1,
.item2 {
    display: flex;
    height: 180px;
    width: 1200px;
}

.item1 {
    background: rgba(69, 162, 158, 0.6);
}

.left-part {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 18%; /* Chiếm 20% */
    
}

.right-part {
    padding: 20px 5px 5px 4%;
    align-items: center;
    flex: 82%; /* Chiếm 80% */
    font-family: 'Comfortaa';
    color: #ffffff;
    font-size: 22px;
}

.court-name{
    font-size:xx-large;
}
.item2 {
    background-color: #45A29E;
}


.image-container{
    justify-content: center;
    height: 90%;
    width: auto;
    
}

.image-container img {
    padding-left: 20px;
    padding-right: 20px;
    width: 100%;
    height: 100% ;
    display: block;
    border-radius: 50%; /* Áp dụng border-radius cho ảnh */
}
</style>