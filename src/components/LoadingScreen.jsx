import React from 'react';
import { useSelector } from 'react-redux';

const LoadingScreen = () => {
    const { msg } = useSelector((state) => state.loading);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 z-50">
            <div className="loader">
                <div className="spinner mb-5"></div>
                {msg ? (<p>{msg}</p>) : (<p className="text-white font-semibold">Loading...</p>)}
            </div>
            <style jsx="true">{`
                .loader {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .spinner {
                    border: 4px solid rgba(255, 255, 255, 0.2);
                    border-top: 4px solid white;
                    border-radius: 50%;
                    width: 40px;
                    height: 40px;
                    animation: spin 1s linear infinite;
                }
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
}

export default LoadingScreen;
