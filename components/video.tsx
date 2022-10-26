import Plyr from 'plyr';
import 'plyr/dist/plyr.css';
import React from 'react';

export interface VideoProps {
    src: string;
    type: string;
}

export default function Video({ src, type }: VideoProps) {
    const videoRef = React.useRef<HTMLVideoElement>(null);

    React.useEffect(() => {
        if (videoRef.current) {
            const player = new Plyr(videoRef.current, {
                controls: ['play', 'progress', 'current-time', 'mute', 'volume'],
            });
        }
    }, []);

    return (
        <video ref={videoRef} controls>
            <source src={src} type={type} />
        </video>
    );
}