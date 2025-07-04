const AnimatedDots = () => {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden">
            {/* Top Left Cluster - More Scattered */}
            <div className="absolute top-20 left-10 w-3 h-3 bg-theme-primary rounded-full animate-pulse-gentle"></div>
            <div className="absolute top-32 left-20 w-2 h-2 bg-theme-secondary rounded-full animate-pulse-gentle" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-16 left-32 w-1.5 h-1.5 bg-theme-primary rounded-full animate-pulse-gentle" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-48 left-24 w-2 h-2 bg-theme-secondary rounded-full animate-pulse-gentle" style={{ animationDelay: '1.5s' }}></div>
            <div className="absolute top-8 left-48 w-1 h-1 bg-theme-primary rounded-full animate-pulse-gentle" style={{ animationDelay: '0.7s' }}></div>
            <div className="absolute top-64 left-14 w-2 h-2 bg-theme-secondary rounded-full animate-pulse-gentle" style={{ animationDelay: '1.1s' }}></div>
            <div className="absolute top-28 left-72 w-1.5 h-1.5 bg-theme-primary rounded-full animate-pulse-gentle" style={{ animationDelay: '0.3s' }}></div>
            
            {/* Top Right Cluster - More Scattered */}
            <div className="absolute top-24 right-16 w-2.5 h-2.5 bg-theme-secondary rounded-full animate-pulse-gentle" style={{ animationDelay: '0.3s' }}></div>
            <div className="absolute top-40 right-32 w-2 h-2 bg-theme-primary rounded-full animate-pulse-gentle" style={{ animationDelay: '0.8s' }}></div>
            <div className="absolute top-12 right-24 w-1 h-1 bg-theme-secondary rounded-full animate-pulse-gentle" style={{ animationDelay: '1.2s' }}></div>
            <div className="absolute top-36 right-12 w-1.5 h-1.5 bg-theme-primary rounded-full animate-pulse-gentle" style={{ animationDelay: '1.7s' }}></div>
            <div className="absolute top-8 right-40 w-2 h-2 bg-theme-secondary rounded-full animate-pulse-gentle" style={{ animationDelay: '0.4s' }}></div>
            <div className="absolute top-52 right-56 w-1 h-1 bg-theme-primary rounded-full animate-pulse-gentle" style={{ animationDelay: '1.9s' }}></div>
            <div className="absolute top-16 right-80 w-2.5 h-2.5 bg-theme-secondary rounded-full animate-pulse-gentle" style={{ animationDelay: '0.2s' }}></div>
            
            {/* Bottom Left Cluster - More Scattered */}
            <div className="absolute bottom-32 left-16 w-2 h-2 bg-theme-primary rounded-full animate-pulse-gentle" style={{ animationDelay: '0.7s' }}></div>
            <div className="absolute bottom-20 left-8 w-1.5 h-1.5 bg-theme-secondary rounded-full animate-pulse-gentle" style={{ animationDelay: '1.3s' }}></div>
            <div className="absolute bottom-48 left-28 w-3 h-3 bg-theme-primary rounded-full animate-pulse-gentle" style={{ animationDelay: '0.2s' }}></div>
            <div className="absolute bottom-36 left-36 w-1 h-1 bg-theme-secondary rounded-full animate-pulse-gentle" style={{ animationDelay: '0.9s' }}></div>
            <div className="absolute bottom-56 left-14 w-2 h-2 bg-theme-primary rounded-full animate-pulse-gentle" style={{ animationDelay: '1.6s' }}></div>
            <div className="absolute bottom-16 left-64 w-1.5 h-1.5 bg-theme-secondary rounded-full animate-pulse-gentle" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-64 left-48 w-1 h-1 bg-theme-primary rounded-full animate-pulse-gentle" style={{ animationDelay: '1.1s' }}></div>
            
            {/* Bottom Right Cluster - More Scattered */}
            <div className="absolute bottom-28 right-12 w-2.5 h-2.5 bg-theme-secondary rounded-full animate-pulse-gentle" style={{ animationDelay: '0.9s' }}></div>
            <div className="absolute bottom-16 right-28 w-1.5 h-1.5 bg-theme-primary rounded-full animate-pulse-gentle" style={{ animationDelay: '0.4s' }}></div>
            <div className="absolute bottom-40 right-20 w-2 h-2 bg-theme-secondary rounded-full animate-pulse-gentle" style={{ animationDelay: '1.1s' }}></div>
            <div className="absolute bottom-52 right-32 w-1 h-1 bg-theme-primary rounded-full animate-pulse-gentle" style={{ animationDelay: '1.8s' }}></div>
            <div className="absolute bottom-24 right-40 w-2.5 h-2.5 bg-theme-secondary rounded-full animate-pulse-gentle" style={{ animationDelay: '0.6s' }}></div>
            <div className="absolute bottom-8 right-56 w-1 h-1 bg-theme-primary rounded-full animate-pulse-gentle" style={{ animationDelay: '1.4s' }}></div>
            <div className="absolute bottom-44 right-72 w-2 h-2 bg-theme-secondary rounded-full animate-pulse-gentle" style={{ animationDelay: '0.8s' }}></div>
            
            {/* Middle Area - Expanded */}
            <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-theme-primary rounded-full animate-pulse-gentle" style={{ animationDelay: '0.6s' }}></div>
            <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-theme-secondary rounded-full animate-pulse-gentle" style={{ animationDelay: '1.4s' }}></div>
            <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-theme-primary rounded-full animate-pulse-gentle" style={{ animationDelay: '0.1s' }}></div>
            <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-theme-secondary rounded-full animate-pulse-gentle" style={{ animationDelay: '0.3s' }}></div>
            <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-theme-primary rounded-full animate-pulse-gentle" style={{ animationDelay: '1.2s' }}></div>
            <div className="absolute top-1/4 right-1/2 w-2 h-2 bg-theme-secondary rounded-full animate-pulse-gentle" style={{ animationDelay: '0.9s' }}></div>
            <div className="absolute bottom-2/5 left-1/5 w-1.5 h-1.5 bg-theme-primary rounded-full animate-pulse-gentle" style={{ animationDelay: '1.7s' }}></div>
            <div className="absolute top-3/5 right-1/5 w-1 h-1 bg-theme-secondary rounded-full animate-pulse-gentle" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-3/5 left-2/5 w-2 h-2 bg-theme-primary rounded-full animate-pulse-gentle" style={{ animationDelay: '1.3s' }}></div>
            <div className="absolute top-2/5 right-2/5 w-1.5 h-1.5 bg-theme-secondary rounded-full animate-pulse-gentle" style={{ animationDelay: '0.8s' }}></div>
            
            {/* Additional Scattered Dots */}
            <div className="absolute top-1/6 left-3/5 w-1 h-1 bg-theme-primary rounded-full animate-pulse-gentle" style={{ animationDelay: '1.5s' }}></div>
            <div className="absolute top-4/5 left-1/6 w-2 h-2 bg-theme-secondary rounded-full animate-pulse-gentle" style={{ animationDelay: '0.7s' }}></div>
            <div className="absolute top-3/4 right-3/5 w-1.5 h-1.5 bg-theme-primary rounded-full animate-pulse-gentle" style={{ animationDelay: '1.0s' }}></div>
            <div className="absolute top-2/6 left-4/5 w-1 h-1 bg-theme-secondary rounded-full animate-pulse-gentle" style={{ animationDelay: '0.3s' }}></div>
            <div className="absolute bottom-1/6 right-2/6 w-2 h-2 bg-theme-primary rounded-full animate-pulse-gentle" style={{ animationDelay: '1.9s' }}></div>
            <div className="absolute bottom-3/6 right-4/6 w-1 h-1 bg-theme-secondary rounded-full animate-pulse-gentle" style={{ animationDelay: '0.4s' }}></div>
            <div className="absolute top-5/6 right-1/6 w-1.5 h-1.5 bg-theme-primary rounded-full animate-pulse-gentle" style={{ animationDelay: '1.2s' }}></div>
        </div>
    );
}

export default AnimatedDots;