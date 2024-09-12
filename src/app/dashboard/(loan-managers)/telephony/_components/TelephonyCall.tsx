"use client";

import React from 'react';
import * as SpeechSDK from 'microsoft-cognitiveservices-speech-sdk';
import { Button } from '@/components/ui/button';

const TelephonyCall = () => {
  const text = "Qarzdorlar yo'q.";

  const handleTextToSpeech = () => {
    const subscriptionKey = process.env.NEXT_PUBLIC_MICROSOFT_AZURE_API || '';
    const serviceRegion = 'eastus';

    console.log(subscriptionKey);

    const speechConfig = SpeechSDK.SpeechConfig.fromSubscription(subscriptionKey, serviceRegion);
    speechConfig.speechSynthesisLanguage = "uz-UZ";
    speechConfig.speechSynthesisVoiceName = "uz-UZ-SardorNeural";

    const synthesizer = new SpeechSDK.SpeechSynthesizer(speechConfig);

    synthesizer.speakTextAsync(text,
      (result) => {
        if (result.reason === SpeechSDK.ResultReason.SynthesizingAudioCompleted) {
          console.log("Synthesis completed.");
        } else {
          console.error("Synthesis failed. Reason: ", result.errorDetails);
        }
        synthesizer.close();
      },
      (err) => {
        console.error("Error: ", err);
        synthesizer.close();
      }
    );
  };

  return (

    <Button onClick={handleTextToSpeech}>
      Try Demo
    </Button>
  );
};

export default TelephonyCall;
