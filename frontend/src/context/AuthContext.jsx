import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("schoolConnectUser");

    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem(
        "schoolConnectUser",
        JSON.stringify(user)
      );
    } else {
      localStorage.removeItem("schoolConnectUser");
    }
  }, [user]);

  const login = (email, password) => {

    const demoUsers = [
      {
        id: 1,
        name: "School Administrator",
        email: "admin@schoolconnect.com",
        password: "admin123",
        role: "admin"
      },
      {
        id: 2,
        name: "Class Teacher",
        email: "teacher@schoolconnect.com",
        password: "teacher123",
        role: "teacher"
      },
      {
        id: 3,
        name: "Student Parent",
        email: "parent@schoolconnect.com",
        password: "parent123",
        role: "parent"
      }
    ];

    const matchedUser = demoUsers.find(
      (item) =>
        item.email === email &&
        item.password === password
    );

    if (!matchedUser) {
      return {
        success: false,
        message: "Invalid email or password"
      };
    }

    const {
      password: ignoredPassword,
      ...safeUser
    } = matchedUser;

    setUser(safeUser);

    return {
      success: true,
      user: safeUser
    };
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}