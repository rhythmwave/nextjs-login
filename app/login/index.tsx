"use client";
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://207.148.68.106:2301/query', {
        query: `mutation {
          login(email: "${email}", password: "${password}") {
            token
            refreshToken
            name
            email
            permissions {
              id
            }
          }
        }`,
        variables: {},
      });

      console.log(response.data);

      // Assuming you have a token and it's stored securely
      // For simplicity, you can use localStorage, but in production, consider a more secure storage method
      localStorage.setItem('token', response.data.data.login.token);

      // Redirect to the landing page
      router.push('/inside');
    } catch (error) {
      console.error('Login failed', error);

      // Display error message
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-semibold mb-4 text-black">Login</h1>

        {error && (
          <p className="text-red-500 text-sm mb-4">
            {error}
          </p>
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-4 border border-gray-300 rounded text-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border border-gray-300 rounded text-black"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
