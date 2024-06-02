import axiosInstance from './axiosConfig.js';

document.getElementById('registerForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        await axiosInstance.post('/users', { name, email, password });
        window.location.href = 'login.html';
    } catch (error) {
        console.error(error);
        alert('Registration failed');
    }
});
