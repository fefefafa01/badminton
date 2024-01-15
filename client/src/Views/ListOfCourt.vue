<template>
    <div>
        <div class="container">
            <div v-for="(item, index) in items" :key="index" :class="{ 'item1': index % 2 === 0, 'item2': index % 2 !== 0 }">
                <div class="left-part">
                    <div class="image-container">
                        <img :src= "item.imageSrc" alt="CourtBadminton">
                    </div>
                </div>
                <div class="right-part">
                    <div class="court-name">{{ item.courtName }}</div>
                        <p>
                            <i class="fas fa-home text-white" style="font-size: 23px; margin-right: 5px;"></i>
                            {{ item.address }}
                        </p>
                        <p>
                            <i class="fas fa-phone text-white" style="font-size: 23px; margin-right: 5px;"></i>
                            {{ item.phoneNumber }}
                        </p>
                </div>
            </div>
            <div class="item2">
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
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { imageSrc: "https://sonsanepoxy.vn/wp-content/uploads/2023/07/lap-dat-he-thong-den-chieu-san-cau-long.jpg", courtName: "Sân cầu lông Thiên Vân", address: "57 Nguyễn Nghiêm, Phú Trung, Tân Phú, Thành phố Hồ Chí Minh", phoneNumber: "0913 404 924" },
        { imageSrc: "https://limosa.vn/wp-content/uploads/2023/08/san-cau-long-cay-keo.jpg", courtName: "Sân cầu lông ABC", address: "710/53/2, Lũy Bán Bích, Tân Thành, Tân Phú, Thành phố Hồ Chí Minh", phoneNumber: "0983 916 646" },
        { imageSrc: "https://sieuthicaulong.vn/images/badminton-yard/1688728199_gallery_san-cau-long-tan-phuc-1.jpg", courtName: "Sân cầu lông Tấn Phúc", address: "36/48 Huỳnh Thiện Lộc, Hoà Thanh, Tân Phú, Thành phố Hồ Chí Minh", phoneNumber: "0903 938 919" },
        { imageSrc: "https://badmintonw.com/uploads/images/gioi-thieu-san-cau-long-tao-dan-diem-den-li-tuong-cho-long-thu-quan-1-10.png", courtName: "Sân cầu lông Viettel", address: "57 Nguyễn Nghiêm, Phú Trung, Tân Phú, Thành phố Hồ Chí Minh", phoneNumber: "0913404924" },
        { imageSrc: "https://sieuthicaulong.vn/images/badminton-yard/1688381528_gallery_22.PNG", courtName: "Sân cầu lông Lam Sơn", address: "320/1 Đ. Trần Bình Trọng, Phường 4, Quận 5, Thành phố Hồ Chí Minh", phoneNumber: "0909 222 958" },
        // Add more items as needed
      ]
    };
  }
};
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