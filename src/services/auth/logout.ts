const logout = () => {
        localStorage.removeItem('token');
        window.location.href = '/login'
}

export default logout