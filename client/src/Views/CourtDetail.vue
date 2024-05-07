<template>
    <div>
        <div class="container">
            <div class="item">
                <div class="left-part">
                    <div class="image-container">
                        <img :src= "item.linkimg" alt="CourtBadminton">
                    </div>
                </div>
                <div class="right-part">
                    <div class="court-name">{{ item.name }}</div>
                        <p>
                            <i class="fas fa-home text-white" style="font-size: 23px; margin-right: 5px;"></i>
                            {{ item.address }}
                        </p>
                        <p>
                            <i class="fas fa-phone text-white" style="font-size: 23px; margin-right: 5px;"></i>
                            {{ item.phone_num }}
                        </p>
                </div>
            </div>
            <div class="table_frame">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                item : null
            }
        },

        created() {
            this.CourtDetailStatus();
        },

        methods: {
            async CourtDetailStatus() {
                this.item = JSON.parse(localStorage.getItem('yardDetails'));
                try {
                    const response = await axios.post('http://localhost:5000/CourtDetail', {
                        district: 'nothing',
                    });
                    
                    console.log(response.data.data)
                }
                catch (error) {
                    // Handle error
                    console.error(error);
                }
            }  
        },
    };

</script>

<style lang="scss" scoped>

.container {
    position: relative;
    width: 100%;
    height: auto;
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    min-height: 500px;
    align-items: center; /* Căn giữa theo chiều ngang */
}

.item {
    display: flex;
    height: 165px;
    width: 1100px;
    background-color:rgba(69, 162, 158, 0.6);
    margin-bottom: 50px;
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

.table_frame {

}
</style>