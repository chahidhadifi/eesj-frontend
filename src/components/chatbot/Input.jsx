import React, { useState, useEffect } from 'react';
import { useToast } from '@chakra-ui/react';
import {select } from '@chakra-ui/react';
import { chatfooter3 } from '../imagepath';
import Image from 'next/image';
import './globals.css';

export default function Input(props) {
    const toast = useToast();
    const [isListening, setIsListening] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('English');

    useEffect(() => {
        let recognition = null;
        
        if (typeof window !== 'undefined' && 'webkitSpeechRecognition' in window) {
            recognition = new window.webkitSpeechRecognition();
            recognition.continuous = false;
            
            switch(selectedLanguage) {
                case 'English':
                    recognition.lang = 'en-US';
                    break;
                case 'French':
                    recognition.lang = 'fr-FR';
                    break;
                case 'Arabic':
                    recognition.lang = 'ar-SA';
                    break;
                default:
                    recognition.lang = 'en-US';
            }

            recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                props.onChange({ target: { value: transcript } });
                setIsListening(false);
            };

            recognition.onerror = (event) => {
                console.error('Speech recognition error', event.error);
                setIsListening(false);
                toast({
                    title: 'Speech recognition error',
                    description: event.error,
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                    position: 'top',
                });
            };
        }

        if (isListening && recognition) {
            try {
                recognition.start();
            } catch (error) {
                console.error('Error starting speech recognition:', error);
                toast({
                    title: 'Error starting speech recognition',
                    description: error.message,
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                    position: 'top',
                });
                setIsListening(false);
            }
        }

        return () => {
            if (recognition) recognition.stop();
        };
    }, [isListening, selectedLanguage, toast]);

    const toggleListening = () => {
        if (typeof window === 'undefined' || !('webkitSpeechRecognition' in window)) {
            toast({
                title: 'Speech recognition is not supported in this browser',
                status: 'error',
                duration: 3000,
                position: 'top',
            });
            setIsListening(false);
            return;
        }
        setIsListening(!isListening);
    };

    const handleLanguageChange = (e) => {
        setSelectedLanguage(e.target.value);
    };

    return (
        <div className="chat-footer-box">
            <div className="discussion-sent">
                <div className="row gx-2">
                    <div className="col-lg-12">
                        <div className="footer-discussion">
                            <div className="inputgroups d-flex align-items-center">
                                <button
                                    className={`btn btn-outline-secondary rounded-circle me-2 ${isListening ? 'btn-danger' : ''}`}
                                    onClick={toggleListening}
                                >
                                    🎤
                                </button>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Type your Message here..."
                                    onKeyDown={props.onKeyDown}
                                    onChange={props.onChange}
                                    value={props.value}
                                    autoFocus
                                    style={{fontFamily: 'monospace', fontSize: '14px'}}
                                />
                                <div className="send-chat position-icon comman-flex button">
                                    <div onClick={props.onClick}><Image src={chatfooter3} alt="#" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-lg-4">
                        <select
                            value={selectedLanguage}
                            onChange={handleLanguageChange}
                            style={{
                                padding: '5px 10px',
                                border: '1px solid #ccc',
                                borderRadius: '7px',
                                backgroundColor: 'white',

                                fontSize: '14px',
                                width: 'auto'
                            }}
                        >
                            <option value="French" >French</option>
                            <option value="English">English</option>
                            <option value="Arabic">Arabic</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}