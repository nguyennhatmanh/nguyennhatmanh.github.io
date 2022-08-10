const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarList = document.getElementsByClassName('navbar-list')[0]

toggleButton.addEventListener('click',() => {
    navbarList.classList.toggle('active')
})
navbarList.addEventListener('click',() => {
    navbarList.classList.toggle('close')
})

function showMessage1() {
    swal({
        title: "Lời nhắn của TOP",
        text: "2016 - 2021 Một khởi đầu hoàn toàn mới mẻ. Hãy bắt đầu một lần nữa. Cùng nhau nhé! TOP Gửi các bạn thân yêu, Choi Seunghyun",
        button: {
            text: "Thoát! ",
        },
    });
}
function showMessage2() {
    swal({
        title: "Lời nhắn của Taeyang",
        text: "Gửi V.I.P Sự ủng hộ chân thành của các bạn giúp chúng tôi vượt qua mọi khó khăn. Chúng ta đã cùng trưởng thành, cùng trở nên vững vàng hơn. Yêu các bạn thật nhiều! Kí tên: Taeyang",
        button: {
            text: "Thoát! ",
        },
    });
}
function showMessage3() {
    swal({
        title: "Lời nhắn của Daesung",
        text: "Gửi các VIP thân yêu, những người vẫn nắm chặt tay tôi suốt những năm qua... Những bàn tay xinh đẹp... (vẽ hình một bàn tay nằm ngang rất to) Tôi rất biết ơn khi các bạn không hề buông tay, luôn ở bên cạnh chúng tôi như từ trước đến giờ vẫn vậy. Nhanh quá, đã 15 năm rồi này?! Bao nhiêu kỉ niệm yêu dấu, 15 năm trôi qua thật mau, thế còn 50 năm thì sao nhỉ ?! Đúng rồi, cứ như bây giờ nhé, tiếp tục yêu thương nhau dài lâu, ở bên nhau mãi mãi không rời! Yêu các bạn !! Tôi yêu các bạn !! Kí tên: Daesung",
        button: {
            text: "Thoát! ",
        },
    });
}
function showMessage4() {
    swal({
        title: "Lời nhắn của Seungri",
        text: "Các bạn có khoẻ không ? Chúng ta đã bên nhau được 15 năm rồi đấy..... Chẳng hiểu vì sao nữa, thời gian trôi nhanh quá. Có rất nhiều ca khúc chúng tôi đã hát cùng nhau, chắc phải nghe cả đêm mới hết được đó. Những giây phút chúng ta bên nhau, những kỉ niệm đẹp đẽ chúng ta cùng tạo thành sẽ chẳng bao giờ đổi thay đâu. Không biết sau này còn có những kỉ niệm như thế nào nhỉ ? Ah, tôi mong chờ chúng lắm luôn, trái tim này đang đập rộn ràng vì phấn khích đó. Tới ngày kỉ niệm 30 năm BIGBANG, có khi chúng tôi đã trở thành những ông bố rồi í. Hạnh phúc biết bao khi được già đi cùng nhau. Cảm ơn các bạn vì 15 năm qua và tôi yêu các bạn thật nhiều. Kí tên: Seungri",
        button: {
            text: "Thoát! ",
        },
    });
}
function showMessage5() {
    swal({
        title: "Lời nhắn của G-Dragon",
        text: "Gửi V.I.P, Đã lâu không gặp, Tôi rất vui vì mọi người đều đang làm tốt. Cũng được 5 năm rồi nhỉ, thời gian qua tôi tự hỏi chạy tour vòng quanh thế giới như vậy có mệt không? Ồ có chứ. Nhưng đó cũng là khoảng thời gian hạnh phúc nhất. Tự dưng tôi nhớ Seungri quá... Riri bảo là môi trường quân đội rất phù hợp với em ấy, em ấy còn muốn trở thành một vị tướng để bảo vệ đất nước, bảo vệ chúng ta trong mùa đông lạnh giá năm 2021. Thôi sẽ gặp Seungri sau vậy. Chúng tôi giờ đã đầu bốn rồi này. Cảm ơn các bạn vì đã luôn ủng hộ và thương yêu chúng tôi dưới cái tên BIGBANG hoàn chỉnh. Tôi yêu các bạn! Tôi sẽ viết tiếp vào năm 2026 nhé! Kí tên: G-Dragon",
        button: {
            text: "Thoát! ",
        },
    });
}
function showMessage6() {
    swal({
        title: "Lời cảm ơn !",
        text: "5 bức thư mà các anh chàng viết để gửi đến các VIP vào năm 2021, tức tròn 15 năm kể từ ngày mà nhóm debut. Với những lời lẽ đầy tình cảm và tự hào mà các 5 thành viên Big Bang đã khiến không chỉ fan của nhóm, mà ngay cả non-fan cũng không ngăn nổi xúc động vì tình cảm yêu thương mà Big Bang dành cho các V.I.P và dành cho nhau. Cảm ơn các bạn V.I.P rất nhiều! Cá nhân tôi là người làm ra web này tôi rất vui và hạnh phúc khi là một V.I.P, cảm ơn BIGBANG và các bạn V.I.P vì đã là một phần thanh xuân của tôi. ",
        button: {
            text: "Thoát! ",
        },
    });
}

var index = 1;
changeImage = function () {
    var imgs = ["img/bigbangfooter.jpg","img/bigbangfooter1.jpg","img/bigbangfooter2.jpg"]
    document.getElementById('imgft').src = imgs[index]
    index++;
    if (index==3) {
        index = 0;
    }
}
setInterval(changeImage,3000);






