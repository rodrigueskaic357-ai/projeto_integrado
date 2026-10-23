function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.getElementById('eyeIcon');
  
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      eyeIcon.style.opacity = '1';
    } else {
      passwordInput.type = 'password';
      eyeIcon.style.opacity = '0.6';
    }
  }