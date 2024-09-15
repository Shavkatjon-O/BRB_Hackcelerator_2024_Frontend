"use client";

import React, { useState } from 'react';
import * as SpeechSDK from 'microsoft-cognitiveservices-speech-sdk';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { AudioLines, Edit } from 'lucide-react';

type LanguageType = "uz-UZ" | "ru-RU";

const initialTexts: Record<LanguageType, string> = {
  "uz-UZ": `Assalomu aleykum Anvar To'xtayev, sizni 11 million 253 ming so'm 11 tiyin to'lov, qilinmagan, kreditingiz mavjuuud!!! Iltimoos to'lov qilishingizniii so'raymiz.`,
  "ru-RU": `Ассаламу алейкум Анвар Тохтаев, ваш платёж в размере 11 миллионов 253 тысяч сумов 11 тийин не был оплачен, у вас есть кредит!!! Пожалуйста, сделайте оплату как можно скорее.`
};

const uzbekVoices = [
  { value: "uz-UZ-MadinaNeural", label: "MadinaNeural (Uzbek)" },
  { value: "uz-UZ-SardorNeural", label: "SardorNeural (Uzbek)" }
];

const russianVoices = [
  { value: "ru-RU-DmitryNeural", label: "DmitryNeural (Russian)" },
  { value: "ru-RU-SvetlanaNeural", label: "SvetlanaNeural (Russian)" }
];

const TelephonyCall: React.FC = () => {
  const [language, setLanguage] = useState<LanguageType>("uz-UZ");
  const [editLanguage, setEditLanguage] = useState<LanguageType>("uz-UZ");
  const [voiceName, setVoiceName] = useState<string>("uz-UZ-MadinaNeural");
  const [text, setText] = useState<string>(initialTexts["uz-UZ"]);
  const [texts, setTexts] = useState<Record<LanguageType, string>>(initialTexts);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const handleTextToSpeech = (): void => {
    const subscriptionKey = process.env.NEXT_PUBLIC_MICROSOFT_AZURE_API || '';
    const serviceRegion = 'eastus';

    const speechConfig = SpeechSDK.SpeechConfig.fromSubscription(subscriptionKey, serviceRegion);
    speechConfig.speechSynthesisLanguage = language;
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

  const handleLanguageChange = (selectedLanguage: LanguageType): void => {
    setLanguage(selectedLanguage);
    setText(texts[selectedLanguage]);
    setVoiceName(
      selectedLanguage === "uz-UZ"
        ? "uz-UZ-MadinaNeural"
        : "ru-RU-DmitryNeural"
    );
  };

  const handleEditLanguageChange = (selectedLanguage: LanguageType): void => {
    setEditLanguage(selectedLanguage);
  };

  const handleSaveText = (): void => {
    setTexts((prev) => ({
      ...prev,
      [editLanguage]: text,
    }));
    setIsDialogOpen(false);
  };

  return (
    <div className="space-y-4">
      <Select onValueChange={handleLanguageChange} value={language}>
        <SelectTrigger>
          <SelectValue placeholder="Select Language" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="uz-UZ">Uzbek</SelectItem>
          <SelectItem value="ru-RU">Russian</SelectItem>
        </SelectContent>
      </Select>

      {language === "uz-UZ" ? (
        <Select onValueChange={setVoiceName} value={voiceName}>
          <SelectTrigger>
            <SelectValue placeholder="Select Voice" />
          </SelectTrigger>
          <SelectContent>
            {uzbekVoices.map((voice) => (
              <SelectItem key={voice.value} value={voice.value}>
                {voice.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      ) : (
        <Select onValueChange={setVoiceName} value={voiceName}>
          <SelectTrigger>
            <SelectValue placeholder="Select Voice" />
          </SelectTrigger>
          <SelectContent>
            {russianVoices.map((voice) => (
              <SelectItem key={voice.value} value={voice.value}>
                {voice.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}

      <Button onClick={handleTextToSpeech}>
        <AudioLines className='size-[1.2rem] mr-2' /> Try Demo Audio
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

          <Select onValueChange={handleEditLanguageChange} value={editLanguage}>
            <SelectTrigger>
              <SelectValue placeholder="Select Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="uz-UZ">Uzbek</SelectItem>
              <SelectItem value="ru-RU">Russian</SelectItem>
            </SelectContent>
          </Select>

          <Textarea
            value={texts[editLanguage]}
            onChange={(e) => setText(e.target.value)}
            rows={4}
            className='w-full min-h-60 mt-4'
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
