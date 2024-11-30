import { PauseIcon, PlayIcon } from '@heroicons/react/24/solid';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

const VideoStream = () => {
    const { projectId } = useSelector((state) => state.auth);
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [bufferedFrames, setBufferedFrames] = useState([]);
    const [currentFrame, setCurrentFrame] = useState(0);
    const [buffered, setBuffered] = useState(0);

    useEffect(() => {
        let frameInterval;
        if (isPlaying) {
            frameInterval = setInterval(() => {
                if (currentFrame < bufferedFrames.length) {
                    const img = new Image();
                    img.src = `data:image/jpeg;base64,${bufferedFrames[currentFrame]}`;
                    img.onload = () => {
                        const ctx = videoRef.current.getContext('2d');
                        ctx.drawImage(img, 0, 0, videoRef.current.width, videoRef.current.height);
                    };
                    setCurrentFrame(currentFrame + 1);
                } else {
                    setIsPlaying(false);
                }
            }, 1000 / 30); // Assuming 30 FPS
        }
        return () => clearInterval(frameInterval);
    }, [isPlaying, currentFrame, bufferedFrames]);

    const handlePlay = () => {
        if (!isPlaying) {
            // socket.emit('play', { project_id: projectId });
            setIsPlaying(true);
        }
    };

    const handlePause = () => {
        // socket.emit('pause', { project_id: projectId });
        setIsPlaying(false);
    };

    const handleSeek = (frameNumber) => {
        // socket.emit('seek', { frame_number: frameNumber, project_id: projectId });
        setCurrentFrame(frameNumber);
    }

    return (
        <div className="bg-white overflow-hidden">
            <div className="p-4">
                <canvas
                    ref={videoRef}
                    width="640"
                    height="480"
                    className="w-full h-auto border border-gray-200 rounded-md bg-gray-100"
                />
                <div className="mt-4 flex items-center space-x-4">
                    <button
                        onClick={handlePlay}
                        className="p-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        <PlayIcon className="h-5 w-5" />
                    </button>
                    <button
                        onClick={handlePause}
                        className="p-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        <PauseIcon className="h-5 w-5" />
                    </button>
                    <input
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        type="range"
                        min="0"
                        max={bufferedFrames.length - 1}
                        value={currentFrame}
                        onChange={(e) => handleSeek(parseInt(e.target.value))}
                    />
                </div>
                <p className="text-xs text-gray-500 mt-2">Buffered frames: {buffered}</p>
            </div>
        </div>
    );
}

export default VideoStream;
