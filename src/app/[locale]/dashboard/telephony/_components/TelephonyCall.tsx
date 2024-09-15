"use client";

import React from 'react';
import * as SpeechSDK from 'microsoft-cognitiveservices-speech-sdk';
import { Button } from '@/components/ui/button';

import { 
  AudioLines,
} from 'lucide-react';

const text = `Hurmatli mijoz!
  Sizning hisobingiz bo'yicha qarz summasi mavjud. 
  Qarzdorlik miqdori: bir milion ikki yuz ming so'm.
  To'lov muddati o'tib ketgan va imkon qadar tezroq to'lov amalga oshirilishi kerak.
  Agar to'lovni kechiktirsangiz, qo'shimcha jarimalar va foizlar qo'llanilishi mumkin.
  Batafsil ma'lumot olish uchun iltimos, bankning mijozlar xizmatiga murojaat qiling. 
  Sizning to'lovingiz biz uchun juda muhim. Iltimos, imkon qadar tezroq to'lov qiling. Rahmat!`;

const TelephonyCall = () => {
  const handleTextToSpeech = (voiceName: string) => {
    const subscriptionKey = process.env.NEXT_PUBLIC_MICROSOFT_AZURE_API || '';
    const serviceRegion = 'eastus';

    const speechConfig = SpeechSDK.SpeechConfig.fromSubscription(subscriptionKey, serviceRegion);
    speechConfig.speechSynthesisLanguage = "uz-UZ";
    speechConfig.speechSynthesisVoiceName = voiceName;

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
    <div>
      <Button onClick={() => handleTextToSpeech("uz-UZ-MadinaNeural")}>
        <AudioLines className='size-[1.2rem] mr-2' />Phone Call Demo (MadinaNeural)
      </Button>
      <Button onClick={() => handleTextToSpeech("uz-UZ-SardorNeural")} className='ml-4'>
        <AudioLines className='size-[1.2rem] mr-2' />Phone Call Demo (SardorNeural)
      </Button>
    </div>
  );
};

export default TelephonyCall;
