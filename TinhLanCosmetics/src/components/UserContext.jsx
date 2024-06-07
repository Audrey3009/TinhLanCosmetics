import React, { createContext, useState, useContext } from 'react';

// Tạo context
const UserContext = createContext();

// Provider để bao bọc ứng dụng hoặc phần của ứng dụng
export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    return (
        <UserContext.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </UserContext.Provider>
    );
};

// Hook để sử dụng context
export const useUser = () => {
    return useContext(UserContext);
};
