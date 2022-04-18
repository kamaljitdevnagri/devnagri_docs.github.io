# Voice Translation APIs

This document contains the APIs related to the ASR, speech to text translation and text to speech translation.

## Speech to text API

> **POST** `https://voice-alpha.devnagri.dev/api/audio/speech-to-text`

### Request

```curl
curl --location --request POST 'https://voice-alpha.devnagri.dev/api/audio/speech-to-text' \
--header 'accept: application/json, text/plain, */*' \
--form 'soundBlob=@"/D:/Devnagri/audio/hindi.wav"' \
--form 'lang="hi-IN"'
```

### Response

```json
{
    "status": "success",
    "data": {
        "status": "success",
        "transcript": "एक एक पाँच आठ चार एक पाँच पाँच दस",
        "transliterated_transcript": "ek ek paanch aath char ek paanch paanch das"
    }
}
```

This API is responsible to take audio file as input and return the text.

#### Request parameters

The request requires input in the form data

| Key        | Value | Description
| ------------- |:-------------:|:-------------:|
| soundBlob | hindi.wav | This will be the actual audio file. Supported formats are `.wav` and `amr-wb` |
| lang | hi-IN | language code of the audio file. |

##### Languages codes with sample files

| Language        | Code | Sample File
| ------------- |:-------------:|:-------------:|
| English | en-IN | <audio class="english" controls><source src="../public/assets/Sample-Audio-Files/english.wav" type="audio/wav"></audio> |
| Hindi | hi-IN | <audio class="hindi" controls><source src="../public/assets/Sample-Audio-Files/hindi.wav" type="audio/wav"></audio> |