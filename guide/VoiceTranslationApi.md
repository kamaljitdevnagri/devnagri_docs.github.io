# Voice Translation APIs

This document contains the APIs related to the ASR, speech to text translation and text to speech translation.

## Speech to text API

> **POST** `https://voice-alpha.devnagri.dev/api/audio/speech-to-text`

### Request

```curl
curl --location --request POST 'https://voice-alpha.devnagri.dev/api/audio/speech-to-text' \
--header 'accept: application/json, text/plain, */*' \
--form 'soundBlob=@"//Devnagri/audio/hindi.wav"' \
--form 'lang="hi-IN"'
--form 'hasFlag="1"'
```

### Response

```json
{
    "status": "success",
    "data": {
        "status": "success",
        "transcript": "एक एक पाँच आठ चार एक पाँच पाँच दस",
        "transliterated_transcript": "ek ek paanch aath char ek paanch paanch das",
        "flag": 0
    }
}
```

This API is responsible to take audio file as input and return the text.

#### Request parameters

The request requires input in the form data

| Key | Is Required | Sample value | Description
| ------------- |:-------------:|:-------------:|:-------------:|
| soundBlob | Required | hindi.wav | This will be the actual audio file. Supported formats are `.wav` and `.amr-wb` |
| lang | Required | hi-IN | language code of the audio file. |
| hasFlag | Optional | 1 | If this is set to `1`, the API will check for the flagged words which is present in the response "transcript" and return with `flag` as `0`(does not contains flagged words) and `1`(contains flagged words) |

##### Languages codes with sample files

| Language        | Code | Sample File
| ------------- |:-------------:|:-------------:|
| English | en-IN | <audio class="english" controls><source src="../public/assets/Sample-Audio-Files/english.wav" type="audio/wav"></audio> |
| Hindi | hi-IN | <audio class="hindi" controls><source src="../public/assets/Sample-Audio-Files/hindi.wav" type="audio/wav"></audio> |