import React from 'react';
import Image from 'next/image';

const LoadingDialog = ({ loading }) => {
    if (!loading) return null; // Return null if not loading

    const overlayStyles = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999, // Ensures it's on top of all other elements
    };

    const dialogStyles = {
        backgroundColor: '#fff',
        padding: '30px 120px',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
    };

    const textStyles = {
        marginTop: '15px',
        fontSize: '16px',
        color: '#333',
    };

    return (
        <div style={overlayStyles}>
            <div style={dialogStyles}>
                <div className='flex flex-col items-center'>
                    <Image src={'/loader.gif'} width={100} height={100} />
                <p style={textStyles}>Please wait... Ai Working on your course</p>
                </div>
            </div>
        </div>
    );
};

// Loader animation using inline @keyframes
const style = document.createElement('style');
style.innerHTML = `
@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}`;
document.head.appendChild(style);

export default LoadingDialog;
