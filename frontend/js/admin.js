import axiosInstance from './axiosConfig.js';

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await axiosInstance.get('/users');
        const users = response.data;

        const tableBody = document.getElementById('usersTableBody');
        users.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>
                    <button class="btn btn-warning btn-sm" onclick="editUser('${user._id}')">Edit</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteUser('${user._id}')">Delete</button>
                </td>
            `;
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error(error);
    }
});

window.editUser = async (userId) => {
    // Implement the edit user functionality
};

window.deleteUser = async (userId) => {
    try {
        await axiosInstance.delete(`/users/${userId}`);
        window.location.reload();
    } catch (error) {
        console.error(error);
    }
};
