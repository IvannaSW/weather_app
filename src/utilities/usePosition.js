import { useState, useEffect } from 'react';
export const usePosition = () => {
    const [position, setPosition] = useState(null);
    const [error, setError] = useState(null);

    const handleSuccess = (position) => {
        const { latitude, longitude } = position.coords;
        setPosition({
            lat: latitude,
            lon: longitude
        });
    };
    const handleError = (error) => {
        setError(error.message);
    };
    useEffect(() => {
        const geo = navigator.geolocation;
        if (!geo) {
            setError('Geolocation is not supported');
            return;
        }
        geo.getCurrentPosition(handleSuccess, handleError);
    }, []);
    return { position, error };
};
