"use client";

import React, { useState } from 'react';
import * as SpeechSDK from 'microsoft-cognitiveservices-speech-sdk';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { AudioLines, Edit } from 'lucide-react';

const initialText = `Sizning hisobingizda qarzdorlik mavjud.
  To'lov muddati o'tgan, imkon qadar tezroq to'lov qiling.
  Batafsil ma'lumot uchun bank mijozlar xizmatiga murojaat qiling.`;

const TelephonyCall = () => {
  const [text, setText] = useState(initialText);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

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

  const handleSaveText = () => {
    setIsDialogOpen(false);
  };

  return (
    <div>
      <Button onClick={() => handleTextToSpeech("uz-UZ-MadinaNeural")}>
        <AudioLines className='size-[1.2rem] mr-2' />Phone Call Demo (MadinaNeural)
      </Button>
      <Button onClick={() => handleTextToSpeech("uz-UZ-SardorNeural")} className='ml-4'>
        <AudioLines className='size-[1.2rem] mr-2' />Phone Call Demo (SardorNeural)
      </Button>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button className='ml-4'>
            <Edit className='size-[1.2rem] mr-2' />Edit Default Text
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Text</DialogTitle>
          </DialogHeader>
          <Textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={4}
            className='w-full mt-4'
          />
          <Button onClick={handleSaveText} className='mt-4'>
            Save Text
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TelephonyCall;
