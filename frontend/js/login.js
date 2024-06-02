import axiosInstance from './axiosConfig.js';

document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await axiosInstance.post('/users/login', { email, password });
        localStorage.setItem('token', response.data.token);
        window.location.href = 'admin.html';
    } catch (error) {
        console.error(error);
        alert('Login failed');
    }
});
