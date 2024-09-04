document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Mencegah form submit secara default

    const username = document.getElementById('newUsername').value;
    const password = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const messageElement = document.getElementById('registerMessage');

    // Validasi: Username tidak boleh kosong
    if (username.trim() === '') {
        messageElement.textContent = 'Username tidak boleh kosong.';
        return;
    }

    // Validasi: Panjang password minimal 6 karakter
    if (password.length < 6) {
        messageElement.textContent = 'Password harus lebih dari 6 karakter.';
        return;
    }

    // Validasi: Password dan konfirmasi harus sama
    if (password !== confirmPassword) {
        messageElement.textContent = 'Password dan konfirmasi tidak sesuai.';
        return;
    }

    // Jika semua validasi lolos
    messageElement.style.color = 'green';
    messageElement.textContent = 'Registrasi berhasil! Silakan login dengan akun baru Anda.';
    
    // Reset form setelah berhasil
    event.target.reset();
    
    // Redirect ke halaman login setelah beberapa detik
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 2000);
});
