// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Lấy các phần tử cần thiết
    const submitBtn = document.getElementById("submit-btn");
    const clearBtn = document.getElementById("clear-btn");
    const messageTextArea = document.getElementById("message-input");
    const resultMessage = document.getElementById("result-message");
    const resultImage = document.getElementById("result-image");
    const resetBtn = document.getElementById("reset-btn");
    const contactForm = document.getElementById("contact-form");

    // Đặt thông điệp mặc định cho kết quả
    const defaultResponseMessage = "Lời tỏ tình của bạn sẽ được gửi đi và bạn sẽ nhận được phản hồi từ Dung. Hãy kiên nhẫn chờ đợi!";

    // Sự kiện khi người dùng nhấn nút "Gửi Lời Tỏ Tình"
    submitBtn.addEventListener("click", function () {
        const message = messageTextArea.value.trim();
        
        // Kiểm tra nếu không có lời tỏ tình
        if (message.length === 0) {
            alert("Bạn chưa nhập lời tỏ tình.");
            return;
        }

        // Hiển thị thông điệp đã gửi
        resultMessage.innerHTML = `<strong>Thông điệp của bạn:</strong> <br/>${message}`;
        resultImage.innerHTML = "<img src='heart-image.jpg' alt='Love Image' />";
        
        // Ẩn textarea và nút gửi
        messageTextArea.style.display = "none";
        submitBtn.style.display = "none";

        // Hiển thị phần kết quả
        setTimeout(function () {
            const successMessage = document.createElement("p");
            successMessage.innerText = "Lời tỏ tình của bạn đã được gửi đi thành công!";
            successMessage.style.color = "#28a745";
            resultMessage.appendChild(successMessage);
        }, 2000);
    });

    // Xử lý nút "Xóa"
    clearBtn.addEventListener("click", function () {
        messageTextArea.value = "";
    });

    // Xử lý việc làm mới trang để gửi lại tỏ tình
    resetBtn.addEventListener("click", function () {
        // Hiển thị lại các phần đã ẩn
        messageTextArea.style.display = "block";
        submitBtn.style.display = "inline-block";
        resultMessage.innerHTML = defaultResponseMessage;
        resultImage.innerHTML = "";
    });

    // Tạo hiệu ứng gõ chữ cho tiêu đề
    function typeWriter(element, message, i, callback) {
        if (i < message.length) {
            element.innerHTML += message.charAt(i);
            i++;
            setTimeout(function () {
                typeWriter(element, message, i, callback);
            }, 100);
        } else {
            callback();
        }
    }

    // Thêm hiệu ứng gõ chữ cho tiêu đề trong phần hero
    const headerText = "Dung, Anh Yêu Em!";
    typeWriter(document.querySelector(".hero h2"), headerText, 0,
    // Xử lý form liên hệ
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Ngăn chặn việc gửi form tự động

        // Lấy các giá trị từ form
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const messageContact = document.getElementById("message-contact").value;

        // Kiểm tra xem tất cả các trường có hợp lệ không
        if (!name || !email || !messageContact) {
            alert("Vui lòng điền đầy đủ thông tin.");
            return;
        }

        // Hiển thị thông báo thành công
        alert(`Cảm ơn ${name}! Chúng tôi đã nhận được lời nhắn của bạn và sẽ liên hệ lại qua email: ${email}.`);

        // Reset form sau khi gửi
        document.getElementById("contact-form").reset();
    });

    // Tạo hiệu ứng mưa tim khi trang được tải
    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        document.body.appendChild(heart);

        // Đặt vị trí ngẫu nhiên cho tim
        const randomX = Math.random() * window.innerWidth;
        const randomDelay = Math.random() * 5 + 2; // Độ trễ ngẫu nhiên
        const animationDuration = Math.random() * 3 + 5; // Thời gian di chuyển

        heart.style.left = `${randomX}px`;
        heart.style.animationDuration = `${animationDuration}s`;
        heart.style.animationDelay = `${randomDelay}s`;

        // Xóa tim sau khi hiệu ứng hoàn thành
        setTimeout(() => {
            heart.remove();
        }, (animationDuration + randomDelay) * 1000);
    }

    // Thêm hiệu ứng mưa tim liên tục
    setInterval(createHeart, 500);

    // Thêm hiệu ứng chữ với yêu cầu riêng biệt cho Dung
    function createLoveAnimation() {
        const loveMessage = document.createElement("div");
        loveMessage.classList.add("love-message");
        loveMessage.innerText = "Anh Yêu Em, Dung! 💖";
        loveMessage.style.position = "absolute";
        loveMessage.style.top = `${Math.random() * 80 + 10}%`; // Vị trí dọc ngẫu nhiên
        loveMessage.style.left = `${Math.random() * 100}%`; // Vị trí ngang ngẫu nhiên
        loveMessage.style.fontSize = `${Math.random() * 20 + 30}px`; // Kích thước ngẫu nhiên
        loveMessage.style.animation = "moveLove 5s infinite"; // Di chuyển liên tục

        document.body.appendChild(loveMessage);

        setTimeout(() => {
            loveMessage.remove();
        }, 5000);
    }

    // Tạo hoạt động liên tục với thông điệp yêu thương
    setInterval(createLoveAnimation, 1000);

});

// CSS cho hiệu ứng chữ yêu thương và mưa tim
<style>
    /* Hiệu ứng mưa tim */
    .heart {
        position: absolute;
        width: 30px;
        height: 30px;
        background-color: #ff1493;
        clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        animation: heartFall 5s linear infinite;
    }

    @keyframes heartFall {
        0% {
            transform: translateY(-100px) scale(0);
            opacity: 0.9;
        }
        50% {
            transform: translateY(80vh) scale(1);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) scale(0);
            opacity: 0;
        }
    }

    /* Hiệu ứng chữ yêu thương */
    .love-message {
        color: #ff1493;
        font-weight: bold;
        font-family: 'Courier New', Courier, monospace;
        text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    }

    @keyframes moveLove {
        0% {
            transform: translateY(0) translateX(0);
        }
        50% {
            transform: translateY(-50px) translateX(50px);
        }
        100% {
            transform: translateY(0) translateX(100px);
        }
    }
</style>
