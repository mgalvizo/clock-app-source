import { Position } from '../interfaces';

export const geocode = () => {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            return navigator.geolocation.getCurrentPosition(
                position => resolve(position),
                () => {
                    reject(new Error('Unable to retrieve your location.'));
                }
            );
        }

        return reject(
            new Error('Geolocation is not supported by your browser')
        );
    });
};

export const latLng = (position: Position) => {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    const coords = [latitude, longitude];
    return coords;
};
