import React from "react";

const SplashScreen: React.FC = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-background">
            <div className="flex flex-col items-center">
                <div className="mt-4 animate-spin h-8 w-8 border-4 border-t-transparent border-primary rounded-full" />
            </div>
        </div>
    );
};

export default SplashScreen;
